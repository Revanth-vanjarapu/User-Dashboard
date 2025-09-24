import { useState } from 'react';
import { validateUser } from '../utils/validation';
import toast from 'react-hot-toast';

const UserForm = ({ onSubmit, initialData = {}, onCancel }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateUser(formData);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      await onSubmit(formData);
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-lg shadow-md mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Enter full name"
            value={formData.name || ''}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring focus:ring-blue-300"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="Enter email"
            value={formData.email || ''}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring focus:ring-blue-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col md:col-span-2">
          <label htmlFor="department" className="text-sm font-medium mb-1">
            Department
          </label>
          <input
            id="department"
            name="department"
            placeholder="Enter department"
            value={formData.department || ''}
            onChange={handleChange}
            className="border px-4 py-2 rounded focus:ring focus:ring-blue-300"
          />
          {errors.department && (
            <p className="text-red-500 text-sm mt-1">{errors.department}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-3">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserForm;
