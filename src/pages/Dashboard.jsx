import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import UserTable from '../components/UserTable';
import SearchBar from '../components/SearchBar';
import FilterPopup from '../components/FilterPopup';
import Pagination from '../components/Pagination';
import toast from 'react-hot-toast';

const Dashboard = ({ users, setUsers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ firstName: '', lastName: '', email: '', department: '' });
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data);
      } catch {
        toast.error('Failed to load users.');
      }
    };
    fetchUsers();
  }, [setUsers]);

const filteredUsers = users.filter((user) => {
  const nameParts = user.name.toLowerCase().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts[nameParts.length - 1] || '';

  return (
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    firstName.includes(filters.firstName.toLowerCase()) &&
    lastName.includes(filters.lastName.toLowerCase()) &&
    user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
    (user.department || '').toLowerCase().includes(filters.department.toLowerCase())
  );
});


  const paginatedUsers = filteredUsers.slice((currentPage - 1) * limit, currentPage * limit);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
      toast.success('User deleted successfully!');
    } catch {
      toast.error('Failed to delete user.');
    }
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <div className="flex gap-2 mb-4 ml-2">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-md transition"
          >
            Filter
          </button>
          <button
            onClick={() => navigate('/add')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4  rounded-md transition"
          >
            Add User
          </button>
        </div>
      </div>

      {showFilter && (
        <FilterPopup filters={filters} onChange={handleFilterChange} onApply={() => setShowFilter(false)} />
      )}

      <UserTable users={paginatedUsers} onEdit={(user) => navigate(`/edit/${user.id}`)} onDelete={handleDelete} />

      <Pagination
        total={filteredUsers.length}
        limit={limit}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onLimitChange={setLimit}
      />
    </div>
  );
};

export default Dashboard;
