import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("obracheck.db");

export function initDb() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS pendencias (
      id TEXT PRIMARY KEY,
      obra_id TEXT NOT NULL,
      ambiente TEXT NOT NULL,
      titulo TEXT NOT NULL,
      descricao TEXT,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS fotos (
      id TEXT PRIMARY KEY,
      pendencia_id TEXT NOT NULL,
      local_path TEXT NOT NULL,
      marcacoes_json TEXT NOT NULL,
      created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS outbox (
      id TEXT PRIMARY KEY,
      tipo TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
}

export function insertOutbox(eventId: string, tipo: string, payload: unknown) {
  db.runSync(
    "INSERT INTO outbox (id, tipo, payload_json, created_at) VALUES (?, ?, ?, ?)",
    [eventId, tipo, JSON.stringify(payload), new Date().toISOString()]
  );
}
