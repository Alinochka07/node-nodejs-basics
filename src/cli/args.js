const parseArgs = (args) => {
    const parsedArgs = args.reduce((acc, arg, index, arr) => {
        if (index % 2 === 0) {
            const propName = arg.slice(2);
            const propValue = arr[index + 1];
            acc[propName] = propValue;
        }
        return acc;
    }, {});

    for (const [propName, propValue] of Object.entries(parsedArgs)) {
        console.log(`${propName} is ${propValue}`);
    }
    return parsedArgs;
};

const args = process.argv.slice(2);

parseArgs(args);