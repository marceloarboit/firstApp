# ObraCheck – Checklist de Pendências em Obras

Aplicativo mobile (Expo/React Native) para registrar pendências em obras com fotos, marcações em imagem, armazenamento seguro e operação offline.

## Funcionalidades implementadas (MVP)

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
- **expo-secure-store** para segredos/tokens
- Camada de sync por fila (outbox pattern)

## Estrutura

- `src/app.tsx`: shell do app
- `src/domain/models.ts`: modelos de domínio
- `src/storage/localDb.ts`: banco local e repositórios
- `src/storage/photoStore.ts`: armazenamento seguro de fotos
- `src/sync/outbox.ts`: fila de sincronização

## Próximos passos

1. Integrar autenticação (Azure AD B2C, Cognito ou Firebase Auth).
2. Backend para upload seguro (URLs assinadas + expiração).
3. Versionamento e trilha de auditoria por pendência.
4. Exportação de relatório em PDF com fotos marcadas.
