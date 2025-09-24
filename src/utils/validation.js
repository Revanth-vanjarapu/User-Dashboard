export const validateUser = (user) => {
  const errors = {};
  if (!user.name || user.name.trim() === '') errors.name = 'Name is required';
  if (!user.email || !/\S+@\S+\.\S+/.test(user.email)) errors.email = 'Valid email is required';
  if (!user.department || user.department.trim() === '') errors.department = 'Department is required';
  return errors;
};
