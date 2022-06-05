import { cp } from 'fs/promises';

export const copy = async () => {
    try {
        await cp('./files', './files_copy', { recursive: true, force: false, errorOnExist: true })
    } catch (err) {
        if (err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST') {
            throw new Error('FS operation failed')
        }
    }
};

