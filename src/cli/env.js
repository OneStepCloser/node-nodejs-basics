export const parseEnv = () => {
    const result = Object.entries(process.env)
        .filter(([envName]) => envName.startsWith('RSS_'))
        .map(([envName, envValue]) => `${envName}=${envValue}`)
        .join('; ');

    console.log(result)
};
