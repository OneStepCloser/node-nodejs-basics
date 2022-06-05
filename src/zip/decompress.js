import fs from 'fs';
import { createUnzip } from 'zlib';

export const decompress = async () => {
    const readStream = fs.createReadStream('./files/archive.gz');
    const writeStream = fs.createWriteStream('./files/result.txt');

    const unzip = createUnzip();

    readStream.pipe(unzip).pipe(writeStream);
};
