import {
  createPurchaseService,
  getPurchasesService,
  getPurchaseByIdService,
  updatePurchaseService,
  deletePurchaseService,
} from "../services/purchaseService.js";

export const createPurchase = async (req, res) => {
  try {
    const purchase = await createPurchaseService(req.body);
    res.status(201).json(purchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPurchases = async (req, res) => {
  try {
    const purchases = await getPurchasesService();
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPurchaseById = async (req, res) => {
  try {
    const purchase = await getPurchaseByIdService(req.params.id);
    if (!purchase) return res.status(404).json({ error: "Purchase not found" });
    res.json(purchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePurchase = async (req, res) => {
  try {
    const purchase = await updatePurchaseService(req.params.id, req.body);
    if (!purchase) return res.status(404).json({ error: "Purchase not found" });
    res.json(purchase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePurchase = async (req, res) => {
  try {
    const purchase = await deletePurchaseService(req.params.id);
    if (!purchase) return res.status(404).json({ error: "Purchase not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};