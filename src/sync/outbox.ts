/**
 * Estratégia offline-first:
 * 1) Toda escrita salva localmente.
 * 2) Evento correspondente entra na outbox.
 * 3) Worker tenta enviar quando houver rede.
 */
export interface OutboxEvent {
  id: string;
  tipo: string;
  payload: unknown;
  createdAt: string;
}

export async function flushOutbox(): Promise<void> {
  // TODO: implementar chamada API segura com retry exponencial.
}
