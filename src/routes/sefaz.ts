import { Router } from "express";
import { requireRelayAuth } from "../auth.js";
import { getSefazStatus } from "../sefaz/status.js";

export const sefazRouter = Router();

sefazRouter.use(requireRelayAuth);

sefazRouter.get("/status", async (_req, res, next) => {
  try {
    const result = await getSefazStatus();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});
