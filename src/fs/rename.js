import { readdir, rename as fsRename } from 'fs/promises';

export const rename = async () => {
    const dirPath = './files';
    const paths = await readdir(dirPath);

    const oldPath = 'wrongFilename.txt';
    const newPath = 'properFilename.md';

    if (!paths.includes(oldPath) || paths.includes(newPath)) {
        throw new Error('FS operation failed');
    }

    await fsRename(`${dirPath}/${oldPath}`, `${dirPath}/${newPath}`);
};
