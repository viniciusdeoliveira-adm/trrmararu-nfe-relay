import { timingSafeEqual } from "node:crypto";
import type { RequestHandler } from "express";

function safeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left, "utf8");
  const rightBuffer = Buffer.from(right, "utf8");

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

/**
 * Protects internal relay endpoints with a shared Bearer token.
 * The real token must be configured in Railway as RELAY_API_KEY.
 */
export const requireRelayAuth: RequestHandler = (req, res, next) => {
  const configuredKey = process.env.RELAY_API_KEY?.trim();

  if (!configuredKey) {
    console.error("RELAY_API_KEY is not configured.");
    res.status(503).json({
      error: "RELAY_NOT_CONFIGURED",
      message: "Autenticação do relay não está configurada.",
    });
    return;
  }

  const authorization = req.header("authorization");
  const match = authorization?.match(/^Bearer\s+(.+)$/i);

  if (!match || !safeEqual(match[1], configuredKey)) {
    res.status(401).json({
      error: "UNAUTHORIZED",
      message: "Credencial de acesso inválida ou ausente.",
    });
    return;
  }

  next();
};
