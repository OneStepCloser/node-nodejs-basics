import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calculateHash = async () => {
    const fileContent = await readFile('./files/fileToCalculateHashFor.txt', { encoding: 'utf8' });

    const hash = createHash('sha256');

    hash.on('readable', () => {
        const data = hash.read();

        if (data) {
            console.log(data.toString('hex'));
        }
    });

    hash.write(fileContent);
    hash.end();
};
