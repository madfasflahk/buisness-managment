import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL;

const createSale = async (saleData) => {
  const response = await axios.post(`${API_URL}/api/sales`, saleData);
  return response.data;
};

const getAllSales = async () => {
  const response = await axios.get(`${API_URL}/api/sales`);
  return response.data;
};

const getSaleById = async (id) => {
  const response = await axios.get(`${API_URL}/api/sales/${id}`);
  return response.data;
};

const updateSaleById = async (id, saleData) => {
  const response = await axios.put(`${API_URL}/api/sales/${id}`, saleData);
  return response.data;
};

const deleteSaleById = async (id) => {
  const response = await axios.delete(`${API_URL}/api/sales/${id}`);
  return response.data;
};

const saleService = {
  createSale,
  getAllSales,
  getSaleById,
  updateSaleById,
  deleteSaleById,
};

export default saleService;