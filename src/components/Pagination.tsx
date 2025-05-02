import { FC } from 'react';
import clsx from 'clsx';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mb-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(
          "px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105",
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-teal-500 text-white hover:bg-teal-600 shadow-md hover:shadow-lg"
        )}
      >
        Previous
      </button>
      
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            "w-10 h-10 rounded-lg transition-all duration-300 transform hover:scale-105",
            currentPage === page
              ? "bg-teal-500 text-white shadow-md"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={clsx(
          "px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105",
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-teal-500 text-white hover:bg-teal-600 shadow-md hover:shadow-lg"
        )}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination; 