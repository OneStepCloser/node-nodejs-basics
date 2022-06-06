import { rm } from 'fs/promises';

export const remove = async () => {
    try {
        rm('./files/fileToRemove.txt');
    } catch(err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }
};