import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'src/assets';

async function convertAll() {
  const files = fs.readdirSync(assetsDir);
  
  for (const file of files) {
    if (file.toLowerCase().endsWith('.png') && file !== 'pattern.png') {
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, file.replace(/\.png$/i, '.webp'));
      
      console.log(`Converting ${file} to lossless WebP...`);
      
      try {
        await sharp(inputPath)
          .webp({ lossless: true })
          .toFile(outputPath);
          
        console.log(`Done: ${outputPath}`);
        
        // Delete original PNG
        fs.unlinkSync(inputPath);
        console.log(`Deleted original: ${inputPath}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
    
    // Also handle full.jpg if it exists, as I converted it earlier but user might want lossless now
    if (file === 'full.jpg') {
       const inputPath = path.join(assetsDir, file);
       const outputPath = path.join(assetsDir, 'full.webp');
       console.log(`Converting ${file} to lossless WebP...`);
       try {
         await sharp(inputPath).webp({ lossless: true }).toFile(outputPath);
         fs.unlinkSync(inputPath);
         console.log(`Deleted original: ${inputPath}`);
       } catch(err) { console.error(err); }
    }
  }
}

convertAll().catch(console.error);
