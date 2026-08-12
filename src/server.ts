import cors from "cors";
import express from "express";
import { nfeRouter } from "./routes/nfe.js";
import { sefazRouter } from "./routes/sefaz.js";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "TRR Mararu NF-e Relay",
    version: "0.3.0",
    timestamp: new Date().toISOString(),
  });
});

app.use("/nfe", nfeRouter);
app.use("/sefaz", sefazRouter);

app.use((_req, res) => {
  res.status(404).json({
    error: "NOT_FOUND",
    message: "Endpoint não encontrado.",
  });
});

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error("Unhandled relay error", error);
  res.status(500).json({
    error: "INTERNAL_ERROR",
    message: "Erro interno do relay.",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`TRR Mararu NF-e Relay listening on port ${port}`);
});
