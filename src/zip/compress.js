import fs from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
    const readStream = fs.createReadStream('./files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./files/archive.gz');

    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};
