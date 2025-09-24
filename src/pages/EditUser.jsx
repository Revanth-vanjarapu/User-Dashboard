import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';
import toast from 'react-hot-toast';

const EditUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = users.find((u) => u.id === parseInt(id));
    if (user) setUserData(user);
  }, [id, users]);

  const handleSubmit = async (updatedUser) => {
    try {
      setUsers(users.map((u) => (u.id === parseInt(id) ? { ...u, ...updatedUser } : u)));
      toast.success('User updated successfully!');
      navigate('/');
    } catch {
      toast.error('Failed to update user.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Edit User</h2>
      {userData && <UserForm initialData={userData} onSubmit={handleSubmit} onCancel={() => navigate('/')} />}
    </div>
  );
};

export default EditUser;
