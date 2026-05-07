import * as FileSystem from "expo-file-system";

const PHOTO_DIR = `${FileSystem.documentDirectory}photos/`;

export async function ensurePhotoDir() {
  const info = await FileSystem.getInfoAsync(PHOTO_DIR);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(PHOTO_DIR, { intermediates: true });
  }
}

export async function savePhoto(localTempUri: string, filename: string) {
  await ensurePhotoDir();
  const finalPath = `${PHOTO_DIR}${filename}`;
  await FileSystem.copyAsync({ from: localTempUri, to: finalPath });
  return finalPath;
}
