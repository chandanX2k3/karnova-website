
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads');

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export const saveFile = async (file: File | Blob, subDir: string = ''): Promise<string> => {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const targetDir = path.join(UPLOAD_DIR, subDir);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const extension = (file as File).name?.split('.').pop() || 'bin';
    const filename = `${uuidv4()}.${extension}`;
    const filepath = path.join(targetDir, filename);

    fs.writeFileSync(filepath, buffer);

    const publicPath = `/uploads/${subDir ? subDir + '/' : ''}${filename}`;
    return publicPath;
};

export const deleteFile = async (filePath: string): Promise<boolean> => {
    try {
        const fullPath = path.join(process.cwd(), 'public', filePath);
        if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error deleting file:', error);
        return false;
    }
};
