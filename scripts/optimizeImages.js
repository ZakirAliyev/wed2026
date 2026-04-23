import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'src/assets';

async function optimizeImages() {
  const files = fs.readdirSync(assetsDir).filter(f => 
    f.toLowerCase().endsWith('.webp') && 
    !f.startsWith('temp_') && 
    f !== 'pattern.webp'
  );
  
  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    const tempPath = path.join(assetsDir, 'opt_' + file);
    
    console.log(`Optimizing ${file}...`);
    
    try {
      await sharp(inputPath)
        .resize(2560, null, { withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 }) 
        .toFile(tempPath);
        
      const oldSize = fs.statSync(inputPath).size / (1024 * 1024);
      const newSize = fs.statSync(tempPath).size / (1024 * 1024);
      
      // Try to rename, if fail (locked), we will handle it later
      try {
        fs.unlinkSync(inputPath);
        fs.renameSync(tempPath, inputPath);
        console.log(`Done: ${file}. ${oldSize.toFixed(2)}MB -> ${newSize.toFixed(2)}MB`);
      } catch (e) {
        console.warn(`Could not overwrite ${file} (locked). Optimized version saved as opt_${file}`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

optimizeImages().catch(console.error);
