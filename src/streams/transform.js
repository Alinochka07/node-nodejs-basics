import process from 'process';
import { Transform } from 'stream';

const transform = async () => {
    console.log('Enter any text to transform, and press Ctrl + C to quit: ');
    const transformStream = new Transform({
        
        transform(chunk, _, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            callback(null, reversedText);
        }
    });
    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();