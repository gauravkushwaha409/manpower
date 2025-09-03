import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
type PaginationProps = {
  currentPage: number;
  totalItems: number;
  pageCount: number;
  perPage: number;
  onPageChange: (page: number) => void;
  recordPerPage?: any;
};

const CustomPagination = ({
  currentPage,
  totalItems,
  pageCount,
  onPageChange,
  perPage,
  recordPerPage,
}: PaginationProps) => {
  const generatePageNumbers = () => {
    const pages = [];
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
    <div className="w-full">
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 mt-4">
        <div className="text-gray-700 text-xs">
          Showing {Math.min((currentPage - 1) * perPage + 1, totalItems)}-
          {Math.min((currentPage - 1) * perPage + perPage, totalItems)} of{' '}
          {totalItems}
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center">{recordPerPage}</div>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="disabled:opacity-50 p-2 rounded-lg disabled:cursor-not-allowed"
          >
            <MdKeyboardArrowLeft className="w-5 h-5" />
          </button>

          {generatePageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-3 py-2 rounded-lg text-sm ${
                currentPage === pageNum
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary/80 text-gray-700 hover:text-white'
              }`}
            >
              {pageNum}
            </button>
          ))}

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
