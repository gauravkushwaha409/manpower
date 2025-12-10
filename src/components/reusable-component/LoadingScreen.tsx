const LoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white/80 backdrop-blur-md">
      {/* Spinner */}
      <div className="border-4 border-t-transparent border-blue-500 rounded-full w-16 h-16 animate-spin" />

      {/* Optional message */}
      <p className="mt-4 font-medium text-gray-700 text-lg">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingScreen;
