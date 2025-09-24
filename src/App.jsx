import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUsers } from './services/api';
import Dashboard from './pages/Dashboard';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((res) => setUsers(res.data)).catch(() => {});
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard users={users} setUsers={setUsers} />} />
      <Route path="/add" element={<AddUser users={users} setUsers={setUsers} />} />
      <Route path="/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
    </Routes>
  );
};

export default App;
