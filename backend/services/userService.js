import User from "../models/User.js";

export const createUserService = async (data) => {
  const user = new User(data);
  return await user.save();
};

export const getUsersService = async () => {
  return await User.find();
};

export const getUserByIdService = async (id) => {
  return await User.findById(id);
};

export const updateUserService = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};