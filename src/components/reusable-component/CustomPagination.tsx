import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type PaginationProps = {
  currentPage: number; // 1-based
  totalItems: number;
  pageCount: number;
  perPage: number;
  onPageChange: (page: number) => void;
  onPerPageChange?: (size: number) => void;
  perPageOptions?: number[]; // dropdown options
};

const CustomPagination = ({
  currentPage,
  totalItems,
  pageCount,
  perPage,
  onPageChange,
  onPerPageChange,
  perPageOptions = [5, 10, 20, 50],
}: PaginationProps) => {
  const generatePageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(pageCount, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="w-full bg-background-200">
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 m-2">
        {/* Record summary */}
        <div className="text-gray-700 text-xs">
          Showing {Math.min((currentPage - 1) * perPage + 1, totalItems)}-
          {Math.min(currentPage * perPage, totalItems)} of {totalItems}
        </div>

        <div className="flex items-center gap-2">
          {/* Records per page dropdown */}
          {onPerPageChange && (
            <select
              value={perPage}
              onChange={(e) => onPerPageChange(Number(e.target.value))}
              className="border rounded-lg px-2 py-1 text-sm"
            >
              {perPageOptions.map((size) => (
                <option key={size} value={size}>
                  {size} / page
                </option>
              ))}
            </select>
          )}

          {/* Previous button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="disabled:opacity-50 p-2 rounded-lg disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowLeft className="w-5 h-5" />
          </button>

          {/* Page numbers */}
          {generatePageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-3 py-2 rounded-lg text-sm transition ${
                currentPage === pageNum
                  ? "bg-primary text-white"
                  : "hover:bg-primary/80 text-gray-700 hover:text-white"
              }`}
            >
              {pageNum}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="disabled:opacity-50 p-2 rounded-lg disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPagination;
