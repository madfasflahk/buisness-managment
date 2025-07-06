import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

const createCustomer = async (customerData) => {
  const response = await axios.post(`${API_URL}/api/customers`, customerData);
  return response.data;
};

const getAllCustomers = async () => {
  const response = await axios.get(`${API_URL}/api/customers`);
  return response.data;
};

const getCustomerById = async (id) => {
  const response = await axios.get(`${API_URL}/api/customers/${id}`);
  return response.data;
};

const updateCustomerById = async (id, customerData) => {
  const response = await axios.put(`${API_URL}/api/customers/${id}`, customerData);
  return response.data;
};

const deleteCustomerById = async (id) => {
  const response = await axios.delete(`${API_URL}/api/customers/${id}`);
  return response.data;
};

const customerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
};

export default customerService;