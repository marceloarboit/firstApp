# ObraCheck – Checklist de Pendências em Obras

Aplicativo mobile (Expo/React Native) para registrar pendências em obras com fotos, marcações em imagem, armazenamento seguro e operação offline.

## Funcionalidades do MVP

- Cadastro de pendências por obra, ambiente e categoria.
- Captura de **1 ou mais fotos** por pendência.
- Anotações/markups sobre a foto (retângulos e texto simples).
- Operação **offline-first** com persistência local.
- Sincronização posterior quando houver internet.
- Criptografia de dados sensíveis no dispositivo.

## Stack técnica

- **Expo + React Native + TypeScript**
- **SQLite local** para dados offline
- **FileSystem** para armazenamento de imagens
- **SecureStore** para segredos/tokens
- Camada de sync por fila (outbox pattern)

## Estrutura

- `src/app.tsx`: shell do app
- `src/domain/models.ts`: modelos de domínio
- `src/storage/localDb.ts`: banco local e repositórios
- `src/storage/photoStore.ts`: armazenamento local de fotos
- `src/sync/outbox.ts`: fila de sincronização

---

## Como testar (passo a passo)

### 1) Pré-requisitos

- Node.js 20+
- npm 10+
- Expo Go (Android/iOS) **ou** Android Studio/Xcode para emulador

### 2) Instalar dependências

```bash
npm install
```

### 3) Rodar verificação de tipos

```bash
npm run typecheck
```

### 4) Subir o app

```bash
npm run start
```

Depois:
- pressione `a` para abrir no Android
- pressione `i` para abrir no iOS (macOS)
- ou escaneie o QR code com Expo Go

### 5) Checklist rápido de validação manual

1. Abrir app sem internet → app deve iniciar normalmente (offline).
2. Criar uma pendência com título/ambiente.
3. Adicionar 2 fotos para a mesma pendência.
4. Fechar e abrir o app → dados devem permanecer.
5. Reconectar internet (quando sync existir) → outbox deve ser enviada.

### 6) Testar build local (opcional)

```bash
npm run doctor
```

---

## Próximos passos

1. Integrar autenticação (Azure AD B2C, Cognito ou Firebase Auth).
2. Backend para upload seguro (URLs assinadas + expiração).
3. Versionamento e trilha de auditoria por pendência.
4. Exportação de relatório em PDF com fotos marcadas.
