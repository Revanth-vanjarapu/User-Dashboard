import { FaFilter } from 'react-icons/fa';

const FilterPopup = ({ filters, onChange, onApply }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
    <div className="flex items-center gap-2 mb-4">
      <FaFilter className="text-indigo-600 text-lg" />
      <h2 className="text-lg font-semibold text-gray-700">Filter Users</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        name="firstName"
        placeholder="Filter by first name"
        value={filters.firstName}
        onChange={(e) => onChange('firstName', e.target.value)}
        className="border px-4 py-2 rounded-md focus:ring focus:ring-indigo-300"
      />
      <input
        name="lastName"
        placeholder="Filter by last name"
        value={filters.lastName}
        onChange={(e) => onChange('lastName', e.target.value)}
        className="border px-4 py-2 rounded-md focus:ring focus:ring-indigo-300"
      />

      <input
        name="email"
        placeholder="Filter by email"
        value={filters.email}
        onChange={(e) => onChange('email', e.target.value)}
        className="border px-4 py-2 rounded-md focus:ring focus:ring-indigo-300"
      />
      <input
        name="department"
        placeholder="Filter by department"
        value={filters.department}
        onChange={(e) => onChange('department', e.target.value)}
        className="border px-4 py-2 rounded-md focus:ring focus:ring-indigo-300"
      />
    </div>
    <div className="mt-4">
      <button
        onClick={onApply}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition flex items-center gap-2"
      >
        <FaFilter /> Apply Filters
      </button>
    </div>
  </div>
);

export default FilterPopup;
