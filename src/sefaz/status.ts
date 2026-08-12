import { SEFAZ_CONFIG } from "./config.js";

export type SefazStatusResult = {
  configured: true;
  uf: typeof SEFAZ_CONFIG.uf;
  ambiente: typeof SEFAZ_CONFIG.ambiente;
  versao: typeof SEFAZ_CONFIG.versao;
  service: "NfeStatusServico";
  endpoint: string;
  readyForCertificate: false;
  message: string;
};

/**
 * Placeholder for the authenticated SOAP/mTLS call.
 * No request is sent to SEFAZ until the A1 certificate handling is configured.
 */
export async function getSefazStatus(): Promise<SefazStatusResult> {
  return {
    configured: true,
    uf: SEFAZ_CONFIG.uf,
    ambiente: SEFAZ_CONFIG.ambiente,
    versao: SEFAZ_CONFIG.versao,
    service: "NfeStatusServico",
    endpoint: SEFAZ_CONFIG.statusServicoUrl,
    readyForCertificate: false,
    message:
      "Web Service de homologação configurado. A chamada real à SEFAZ aguarda a configuração segura do certificado A1.",
  };
}
