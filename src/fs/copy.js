import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const copy = async (sourceFolder, copyFolder) => {
    const sourcePath = path.join(__dirname, sourceFolder);
    const copyPath = path.join(__dirname, copyFolder);

    try {
        await fs.promises.access(sourcePath, fs.constants.F_OK);
        await fs.promises.access(copyPath, fs.constants.F_OK).catch(() => fs.promises.mkdir(copyPath));
        
        const files = await fs.promises.readdir(sourcePath);
        for (const file of files) {
            await fs.promises.copyFile(path.join(sourcePath, file), path.join(copyPath, file));
        }
        console.log('The folder has been successfully copied');
    } catch (error) {
        console.error('FS operation failed');
    }
};

await copy('files', 'files_copy');
