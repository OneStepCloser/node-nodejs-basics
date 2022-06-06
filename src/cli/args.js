export const parseArgs = () => {
    const argsRaw = process.argv.slice(2);
    const result = Array(argsRaw.length / 2)
        .fill(null)
        .map((_, i) => `${argsRaw[2 * i]} is ${argsRaw[2 * i + 1]}`)
        .join(', ');

    console.log(result);
};
