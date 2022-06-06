import { readdir } from 'fs/promises';

export const list = async () => {
    try {
        const paths = await readdir('./files');
        console.log(paths)
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};
