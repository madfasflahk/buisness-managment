import Sale from "../models/Sale.js";

import Product from "../models/Product.js";

export const createSaleService = async (data) => {
  const sale = new Sale(data);
  for (const item of sale.products) {
    await Product.findByIdAndUpdate(item.product, { $inc: { currentStock: -item.quantity } });
  }
  return await sale.save();
};

export const getSalesService = async () => {
  return await Sale.find().populate("customer").populate("products.product").populate("createdBy");
};

export const getSaleByIdService = async (id) => {
  return await Sale.findById(id).populate("customer").populate("products.product").populate("createdBy");
};

export const updateSaleService = async (id, data) => {
  return await Sale.findByIdAndUpdate(id, data, { new: true });
};

export const deleteSaleService = async (id) => {
  return await Sale.findByIdAndDelete(id);
};