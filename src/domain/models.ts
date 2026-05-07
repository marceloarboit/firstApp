export type UUID = string;

export interface Obra {
  id: UUID;
  nome: string;
  endereco?: string;
}

export interface Marcacao {
  id: UUID;
  tipo: "retangulo" | "texto";
  x: number;
  y: number;
  largura?: number;
  altura?: number;
  texto?: string;
}

export interface FotoPendencia {
  id: UUID;
  pendenciaId: UUID;
  localPath: string;
  hash?: string;
  marcacoes: Marcacao[];
  createdAt: string;
}

export interface Pendencia {
  id: UUID;
  obraId: UUID;
  ambiente: string;
  titulo: string;
  descricao?: string;
  status: "aberta" | "em_execucao" | "concluida";
  createdAt: string;
  updatedAt: string;
}
