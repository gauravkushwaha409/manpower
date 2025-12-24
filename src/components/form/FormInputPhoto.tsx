import { ErrorMessage, useField, useFormikContext } from "formik";
import {
  ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Upload,
  X,
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Maximize2,
  Minimize2,
} from "lucide-react";

interface IInputImage extends ComponentProps<"input"> {
  name: string;
  label: string;
  labelClassName?: string;
  dropAreaClassName?: string;
  maxSize?: number; // in MB
  previewSize?: "small" | "medium" | "large" | "full";
  showFileName?: boolean;
  allowedTypes?: string[];
  baseUrl?: string; // Base URL for backend files
  minWidth?: number; // Minimum image width in pixels
  minHeight?: number; // Minimum image height in pixels
  maxWidth?: number; // Maximum image width in pixels
  maxHeight?: number; // Maximum image height in pixels
  aspectRatio?: number; // Required aspect ratio (width/height)
  showImageInfo?: boolean; // Show image dimensions and other info
}

const FormInputImage: React.FC<IInputImage> = ({
  name,
  label,
  className,
  required,
  maxSize = 10, // Default 10MB for images
  previewSize = "large",
  showFileName = true,
  allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/svg+xml",
    "image/bmp",
  ],
  baseUrl = "",
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  aspectRatio,
  showImageInfo = true,
  ...props
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [backendFile, setBackendFile] = useState<{
    url: string;
    name?: string;
    size?: number;
    type?: string;
    width?: number;
    height?: number;
  } | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Image viewer states
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageInfo, setImageInfo] = useState<{
    width: number;
    height: number;
    aspectRatio: string;
  } | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [startPanPosition, setStartPanPosition] = useState({ x: 0, y: 0 });

  // Preview size classes
  const previewSizeClasses = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-full max-w-md aspect-square",
    full: "w-full aspect-video",
  };

  // Helper function to check if a string is a valid URL or file path
  const isValidUrl = (str: string): boolean => {
    try {
      new URL(str);
      return true;
    } catch {
      return str.startsWith("/") || str.includes(".");
    }
  };

  // Helper function to determine if a file is an image
  const isImageFile = (
    file: File | string | { type?: string; url: string }
  ): boolean => {
    if (file instanceof File) {
      return file.type.startsWith("image/");
    }

    if (typeof file === "string") {
      const imageExtensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".webp",
        ".svg",
        ".bmp",
        ".ico",
      ];
      const lowerUrl = file.toLowerCase();
      return imageExtensions.some((ext) => lowerUrl.includes(ext));
    }

    if (file && typeof file === "object" && "type" in file) {
      return file.type?.startsWith("image/") || isImageFile(file.url);
    }

    return false;
  };

  // Extract filename from URL/path
  const getFileNameFromUrl = (url: string): string => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      return pathname.split("/").pop() || "Unknown file";
    } catch {
      return url.split("/").pop() || "Unknown file";
    }
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Calculate GCD for aspect ratio
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  // Get aspect ratio string
  const getAspectRatioString = (width: number, height: number): string => {
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
  };

  // Validate file size, type, and dimensions
  const validateFile = useCallback(
    (file: File): Promise<string | null> => {
      return new Promise((resolve) => {
        // Check file size
        if (maxSize && file.size > maxSize * 1024 * 1024) {
          resolve(`File size must be less than ${maxSize}MB`);
          return;
        }

        // Check file type
        const fileType = file.type;
        const isValidType = allowedTypes.some((type) => {
          if (type.endsWith("/*")) {
            return fileType.startsWith(type.slice(0, -1));
          }
          return fileType === type;
        });

        if (!isValidType) {
          resolve(
            `File type not allowed. Allowed types: ${allowedTypes.join(", ")}`
          );
          return;
        }

        // Validate image dimensions
        const img = new Image();
        img.onload = () => {
          URL.revokeObjectURL(img.src);
          const width = img.width;
          const height = img.height;

          // Store image info
          setImageInfo({
            width,
            height,
            aspectRatio: getAspectRatioString(width, height),
          });

          // Check minimum dimensions
          if (minWidth && width < minWidth) {
            resolve(`Image width must be at least ${minWidth}px`);
            return;
          }
          if (minHeight && height < minHeight) {
            resolve(`Image height must be at least ${minHeight}px`);
            return;
          }

          // Check maximum dimensions
          if (maxWidth && width > maxWidth) {
            resolve(`Image width must be at most ${maxWidth}px`);
            return;
          }
          if (maxHeight && height > maxHeight) {
            resolve(`Image height must be at most ${maxHeight}px`);
            return;
          }

          // Check aspect ratio
          if (aspectRatio) {
            const imageAspectRatio = width / height;
            const tolerance = 0.01; // 1% tolerance
            if (Math.abs(imageAspectRatio - aspectRatio) > tolerance) {
              resolve(
                `Image aspect ratio must be ${aspectRatio.toFixed(
                  2
                )} (width/height)`
              );
              return;
            }
          }

          resolve(null);
        };

        img.onerror = () => {
          URL.revokeObjectURL(img.src);
          resolve("Unable to load image");
        };

        img.src = URL.createObjectURL(file);
      });
    },
    [
      maxSize,
      allowedTypes,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      aspectRatio,
    ]
  );

  // Handle file processing
  const processFile = useCallback(
    async (file: File) => {
      setIsLoading(true);
      setValidationError(null);

      const error = await validateFile(file);
      if (error) {
        setValidationError(error);
        setFieldValue(name, null);
        setIsLoading(false);
        return;
      }

      try {
        setFieldValue(name, file);
        setUploadedFile(file);
        setBackendFile(null);

        // Create preview URL for image
        if (file.type.startsWith("image/")) {
          const url = URL.createObjectURL(file);
          setPreviewUrl(url);
        } else {
          setPreviewUrl(null);
        }

        // Reset viewer states
        setZoomLevel(1);
        setRotation(0);
        setPanPosition({ x: 0, y: 0 });
      } catch (error) {
        console.error("Error processing file:", error);
        setValidationError("Error processing file");
      } finally {
        setIsLoading(false);
      }
    },
    [name, setFieldValue, validateFile]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDeleteFile = () => {
    setFieldValue(name, "");
    setUploadedFile(null);
    setBackendFile(null);
    setValidationError(null);
    setZoomLevel(1);
    setRotation(0);
    setPanPosition({ x: 0, y: 0 });
    setImageInfo(null);

    if (previewUrl && previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Drag and drop handlers
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        const file = files[0];
        if (file.type.startsWith("image/")) {
          processFile(file);
        } else {
          setValidationError("Please drop an image file");
        }
      }
    },
    [processFile]
  );

  // Image viewer controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleResetView = () => {
    setZoomLevel(1);
    setRotation(0);
    setPanPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    }
  };

  // Pan handlers for zoomed images
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsPanning(true);
      setStartPanPosition({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - startPanPosition.x,
        y: e.clientY - startPanPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  // Handle wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      setZoomLevel((prev) => Math.max(0.5, Math.min(3, prev + delta)));
    }
  };

  // Download image
  const handleDownload = () => {
    if (previewUrl) {
      const link = document.createElement("a");
      link.href = previewUrl;
      link.download = displayName || "image";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Handle field value changes (from backend or form)
  useEffect(() => {
    const value = field?.value;

    if (!value) {
      setUploadedFile(null);
      setBackendFile(null);
      setPreviewUrl(null);
      setImageInfo(null);
      return;
    }

    if (value instanceof File) {
      setUploadedFile(value);
      setBackendFile(null);

      if (value.type.startsWith("image/")) {
        const url = URL.createObjectURL(value);
        setPreviewUrl(url);

        // Load image info
        const img = new Image();
        img.onload = () => {
          setImageInfo({
            width: img.width,
            height: img.height,
            aspectRatio: getAspectRatioString(img.width, img.height),
          });
        };
        img.src = url;
      } else {
        setPreviewUrl(null);
      }
      return;
    }

    if (typeof value === "string" && isValidUrl(value)) {
      const fullUrl = value.startsWith("http") ? value : `${baseUrl}${value}`;
      const fileName = getFileNameFromUrl(value);

      setBackendFile({
        url: fullUrl,
        name: fileName,
        type: isImageFile(value) ? "image" : "file",
      });
      setUploadedFile(null);

      if (isImageFile(value)) {
        setPreviewUrl(fullUrl);

        // Load image info from URL
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          setImageInfo({
            width: img.width,
            height: img.height,
            aspectRatio: getAspectRatioString(img.width, img.height),
          });
        };
        img.src = fullUrl;
      } else {
        setPreviewUrl(null);
      }
      return;
    }

    if (typeof value === "object" && value !== null && "url" in value) {
      const fullUrl = value.url.startsWith("http")
        ? value.url
        : `${baseUrl}${value.url}`;

      setBackendFile({
        url: fullUrl,
        name: value.name || getFileNameFromUrl(value.url),
        size: value.size,
        type: value.type || (isImageFile(value) ? "image" : "file"),
        width: value.width,
        height: value.height,
      });
      setUploadedFile(null);

      if (value.width && value.height) {
        setImageInfo({
          width: value.width,
          height: value.height,
          aspectRatio: getAspectRatioString(value.width, value.height),
        });
      }

      if (isImageFile(value)) {
        setPreviewUrl(fullUrl);
      } else {
        setPreviewUrl(null);
      }
      return;
    }

    setUploadedFile(null);
    setBackendFile(null);
    setPreviewUrl(null);
    setImageInfo(null);
  }, [field?.value, baseUrl]);

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Handle escape key for fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isFullscreen]);

  // Determine current file info
  const currentFile = uploadedFile || backendFile;
  const hasFile = Boolean(currentFile);
  const displayName = uploadedFile ? uploadedFile.name : backendFile?.name;
  const displaySize = uploadedFile ? uploadedFile.size : backendFile?.size;

  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Label */}
        {label && (
          <label className="typography-input-label">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="[box-shadow:0px_0px_2px_0px_#00000014,0px_1px_4px_0px_#454B571F,0px_0px_0px_1px_#98A1B21A] rounded-xl overflow-hidden">
          {!hasFile ? (
            <label
              htmlFor={name}
              className={`relative w-full block rounded-lg transition-all duration-200 cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 ${
                isDragOver
                  ? "border-blue-500 bg-blue-50 border-2 border-dashed"
                  : meta.touched && meta.error
                  ? "border-red-300 bg-red-50/20"
                  : "border-gray-300 bg-gray-50/50"
              } ${className}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center px-6 py-12">
                {isLoading ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
                    <p className="text-sm text-gray-500">Processing image...</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-4 p-4 bg-blue-100 rounded-full">
                      <ImageIcon className="w-8 h-8 text-blue-500" />
                    </div>

                    <p className="text-sm font-medium text-gray-700 text-center mb-1">
                      Drag & drop your image here
                    </p>
                    <p className="text-xs text-gray-500 text-center mb-4">
                      or click to browse from your device
                    </p>
                    <p className="text-xs text-gray-400 text-center mb-4">
                      Supported formats: JPG, PNG, GIF, WebP, SVG, BMP
                      {maxSize && ` • Max size: ${maxSize}MB`}
                    </p>
                    {(minWidth || minHeight || maxWidth || maxHeight) && (
                      <p className="text-xs text-gray-400 text-center mb-4">
                        {minWidth &&
                          minHeight &&
                          `Min: ${minWidth}×${minHeight}px`}
                        {minWidth &&
                          minHeight &&
                          (maxWidth || maxHeight) &&
                          " • "}
                        {maxWidth &&
                          maxHeight &&
                          `Max: ${maxWidth}×${maxHeight}px`}
                      </p>
                    )}
                    {aspectRatio && (
                      <p className="text-xs text-gray-400 text-center mb-4">
                        Required aspect ratio: {aspectRatio.toFixed(2)}
                      </p>
                    )}
                    <span className="text-sm font-medium text-white px-4 py-2 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all">
                      Browse Image
                    </span>
                  </>
                )}
              </div>
            </label>
          ) : (
            <div className="bg-white">
              {/* Image Preview */}
              {previewUrl && (
                <div
                  ref={imageContainerRef}
                  className="relative bg-gray-100 overflow-hidden"
                  onWheel={handleWheel}
                >
                  {/* Image Container */}
                  <div
                    className={`${previewSizeClasses[previewSize]} mx-auto flex items-center justify-center overflow-hidden`}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{
                      cursor:
                        zoomLevel > 1
                          ? isPanning
                            ? "grabbing"
                            : "grab"
                          : "default",
                    }}
                  >
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-w-full max-h-full object-contain transition-transform duration-200"
                      style={{
                        transform: `scale(${zoomLevel}) rotate(${rotation}deg) translate(${
                          panPosition.x / zoomLevel
                        }px, ${panPosition.y / zoomLevel}px)`,
                      }}
                      draggable={false}
                      onError={() => {
                        console.error("Failed to load image:", previewUrl);
                        setPreviewUrl(null);
                      }}
                    />
                  </div>

                  {/* Image Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-3">
                    <div className="flex items-center justify-center gap-2">
                      {/* Zoom Out */}
                      <button
                        type="button"
                        onClick={handleZoomOut}
                        disabled={zoomLevel <= 0.5}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        title="Zoom out"
                      >
                        <ZoomOut className="w-4 h-4 text-gray-700" />
                      </button>

                      {/* Zoom Level Display */}
                      <span className="text-xs text-white font-medium min-w-12.5 text-center">
                        {Math.round(zoomLevel * 100)}%
                      </span>

                      {/* Zoom In */}
                      <button
                        type="button"
                        onClick={handleZoomIn}
                        disabled={zoomLevel >= 3}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        title="Zoom in"
                      >
                        <ZoomIn className="w-4 h-4 text-gray-700" />
                      </button>

                      <div className="w-px h-6 bg-white/30 mx-1" />

                      {/* Rotate */}
                      <button
                        type="button"
                        onClick={handleRotate}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                        title="Rotate 90°"
                      >
                        <RotateCw className="w-4 h-4 text-gray-700" />
                      </button>

                      {/* Reset View */}
                      {(zoomLevel !== 1 || rotation !== 0) && (
                        <button
                          type="button"
                          onClick={handleResetView}
                          className="px-2 py-1 text-xs bg-white/90 rounded-lg hover:bg-white transition-colors text-gray-700 font-medium"
                          title="Reset view"
                        >
                          Reset
                        </button>
                      )}

                      <div className="w-px h-6 bg-white/30 mx-1" />

                      {/* Download */}
                      <button
                        type="button"
                        onClick={handleDownload}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4 text-gray-700" />
                      </button>

                      {/* Fullscreen */}
                      <button
                        type="button"
                        onClick={toggleFullscreen}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                        title="Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* File Info */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                      <ImageIcon className="w-5 h-5 text-blue-600" />
                    </div>

                    {showFileName && displayName && (
                      <div className="min-w-0">
                        <p
                          className="text-sm font-medium text-gray-900 truncate"
                          title={displayName}
                        >
                          {displayName}
                        </p>
                        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-gray-500">
                          {displaySize && (
                            <span>{formatFileSize(displaySize)}</span>
                          )}
                          {showImageInfo && imageInfo && (
                            <>
                              <span>•</span>
                              <span>
                                {imageInfo.width} × {imageInfo.height}px
                              </span>
                              <span>•</span>
                              <span>{imageInfo.aspectRatio}</span>
                            </>
                          )}
                          {backendFile && (
                            <>
                              <span>•</span>
                              <span className="text-blue-600">From server</span>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleDeleteFile}
                    className="shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove image"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Replace image option */}
                <label
                  htmlFor={name}
                  className="inline-flex items-center px-4 py-2 mt-3 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {backendFile ? "Replace image" : "Change image"}
                </label>
              </div>
            </div>
          )}
        </div>

        <input
          accept={allowedTypes.join(",")}
          id={name}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
          {...props}
        />

        {/* Validation Error */}
        {validationError && (
          <div className="text-red-500 text-sm flex items-center gap-1">
            <X className="w-4 h-4" />
            {validationError}
          </div>
        )}

        {/* Formik Error */}
        {meta.touched && meta.error && (
          <ErrorMessage
            name={name}
            component="div"
            className="text-red-500 text-sm"
          />
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && previewUrl && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Fullscreen Image */}
          <div
            className="w-full h-full flex items-center justify-center p-8"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              cursor:
                zoomLevel > 1 ? (isPanning ? "grabbing" : "grab") : "default",
            }}
          >
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              crossOrigin="anonymous"
              style={{
                transform: `scale(${zoomLevel}) rotate(${rotation}deg) translate(${
                  panPosition.x / zoomLevel
                }px, ${panPosition.y / zoomLevel}px)`,
              }}
              draggable={false}
            />
          </div>

          {/* Fullscreen Controls */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-xl p-2">
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
              className="p-2 hover:bg-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="w-5 h-5 text-white" />
            </button>

            <span className="text-sm text-white font-medium min-w-15 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>

            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
              className="p-2 hover:bg-white/10 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </button>

            <div className="w-px h-6 bg-white/30 mx-1" />

            <button
              type="button"
              onClick={handleRotate}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Rotate 90°"
            >
              <RotateCw className="w-5 h-5 text-white" />
            </button>

            <button
              type="button"
              onClick={handleResetView}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Reset view"
            >
              <Minimize2 className="w-5 h-5 text-white" />
            </button>

            <div className="w-px h-6 bg-white/30 mx-1" />

            <button
              type="button"
              onClick={handleDownload}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Download"
            >
              <Download className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Image Info in Fullscreen */}
          {showImageInfo && imageInfo && (
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-sm text-white">
                {imageInfo.width} × {imageInfo.height}px •{" "}
                {imageInfo.aspectRatio}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FormInputImage;
