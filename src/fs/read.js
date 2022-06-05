import { readFile } from 'fs/promises';

export const read = async () => {
    try {
        const fileContent = await readFile('./files/fileToRead.txt', { encoding: 'utf8' });
        console.log(fileContent);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};
