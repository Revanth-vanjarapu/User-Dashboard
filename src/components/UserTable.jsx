import { FaEdit, FaTrash } from 'react-icons/fa';

const UserTable = ({ users, onEdit, onDelete }) => (
  <table className="w-full border border-gray-300 bg-white rounded-lg shadow-lg rounded-md table-auto md:table-fixed overflow-hidden">
    <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
      <tr>
        <th className="p-3 text-left">ID</th>
        <th className="p-3 text-left">Name</th>
        <th className="p-3 text-left">Email</th>
        <th className="p-3 text-left">Department</th>
        <th className="p-3 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id} className="hover:bg-blue-50 transition">
          <td className="p-3">{user.id}</td>
          <td className="p-3 font-medium">{user.name}</td>
          <td className="p-3">{user.email}</td>
          <td className="p-3">{user.department || 'Null'}</td>
          <td className="p-3 space-x-2 flex justify-center items-center">
            <button
              onClick={() => onEdit(user)}
              className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm flex items-center gap-1"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
            >
              <FaTrash /> Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
