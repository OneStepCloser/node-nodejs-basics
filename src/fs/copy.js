import { cp, readdir } from 'fs/promises';

export const copy = async () => {
    const rootDir = '.';
    const srcDirName = 'files';
    const destDirName = 'files_copy'
    const paths = await readdir(rootDir);

    if (paths.includes(destDirName)) {
        throw new Error('FS operation failed');
    }

    try {
        await cp(`${rootDir}/${srcDirName}`, `${rootDir}/${destDirName}`, { recursive: true })
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
};
