import { Transform } from 'stream';

class ReverseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        try {
            const result = chunk.toString('utf8')
                .split('')
                .reverse()
                .join('');

            callback(null, result);
        } catch (err) {
            callback(err);
        }
    }
}

export const transform = async () => {
    const trasformStream = new ReverseTransform();

    process.stdin.pipe(trasformStream).pipe(process.stdout);
};
