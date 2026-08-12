import cors from "cors";
import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "TRR Mararu NF-e Relay",
    version: "0.1.0",
    timestamp: new Date().toISOString(),
  });
});

app.use((_req, res) => {
  res.status(404).json({
    error: "NOT_FOUND",
    message: "Endpoint não encontrado.",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`TRR Mararu NF-e Relay listening on port ${port}`);
});
