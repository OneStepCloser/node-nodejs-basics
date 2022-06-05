import fs from 'fs';

export const write = async () => {
    const stream = fs.createWriteStream('./files/fileToWrite.txt');

    process.stdout.pipe(stream);
};
