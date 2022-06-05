import fs from 'fs';

export const read = async () => {
    const stream = fs.createReadStream('./files/fileToRead.txt', { encoding: 'utf8' });

    stream.pipe(process.stdout);
};
