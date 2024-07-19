import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
});

export async function getUsers() {
  const res = await axios.get('/users');
  return res.data;
}
export async function createUser(user) {
  const res = await axios.post('/users', user);
  return res.data;
}
export async function updateUser({ id, ...user }) {
  const res = await axios.patch(`/users/${id}`, user);
  return res.data;
}
export async function resetUser({ id, ...user }) {
  const res = await axios.put(`/users/${id}`, user);
  return res.data;
}
export async function deleteUser(id) {
  const res = await axios.delete(`/users/${id}`);
  return res.data;
}
