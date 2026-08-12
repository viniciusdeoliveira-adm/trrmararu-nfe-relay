import { Router } from "express";
import { requireRelayAuth } from "../auth.js";

export const nfeRouter = Router();

nfeRouter.use(requireRelayAuth);

function notImplemented(operation: string, res: Parameters<typeof nfeRouter.post>[1] extends never ? never : any) {
  res.status(501).json({
    error: "NOT_IMPLEMENTED",
    operation,
    message: "A rota está protegida e preparada, mas a comunicação real com a SEFAZ ainda não foi habilitada.",
  });
}

nfeRouter.post("/emitir", (_req, res) => {
  notImplemented("emitir", res);
});

nfeRouter.post("/consultar", (_req, res) => {
  notImplemented("consultar", res);
});

nfeRouter.post("/cancelar", (_req, res) => {
  notImplemented("cancelar", res);
});

nfeRouter.post("/inutilizar", (_req, res) => {
  notImplemented("inutilizar", res);
});
