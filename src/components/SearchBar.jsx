import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ value, onChange }) => (
  <div className="relative w-full mb-4">
    <input
      type="text"
      placeholder="Search by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Search users by name"
    />
    <FaSearch className="absolute right-3 top-3 text-gray-400" />
  </div>
);

export default SearchBar;
