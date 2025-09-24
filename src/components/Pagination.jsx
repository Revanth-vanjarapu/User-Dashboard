import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ total, limit, currentPage, onPageChange, onLimitChange }) => {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
      {/* Limit Selector */}
      <div className="flex items-center gap-2">
        <label htmlFor="limit" className="text-sm font-medium">Show:</label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => onLimitChange(Number(e.target.value))}
          className="border px-2 py-1 rounded-md"
        >
          {[10, 25, 50, 100].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      {/* Page Navigation */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${
            currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <FaChevronLeft /> Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-3 py-1 rounded-md text-sm ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-sm flex items-center gap-1 ${
            currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Next <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
