import UserForm from '../components/UserForm';
import { addUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddUser = ({ users, setUsers }) => {
  const navigate = useNavigate();

  const handleSubmit = async (user) => {
    try {
      const res = await addUser(user);
      const newUser = { ...user, id: res.data.id || Date.now() };
      setUsers([...users, newUser]);
      toast.success('User added successfully!');
      navigate('/');
    } catch {
      toast.error('Failed to add user.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Add New User</h2>
      <UserForm onSubmit={handleSubmit} onCancel={() => navigate('/')} />
    </div>
  );
};

export default AddUser;
