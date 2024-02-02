
const parseEnv = () => {
    try {
        for (const key in process.env) {
            if (key.startsWith('RSS_')) {
                console.log(`${key}=${process.env[key]}`);
            }
        }
    } catch (error) {
        console.error('error during parsing: ', error);
    };
};

parseEnv();