import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '../src/assets/logolarWedinki');
const directories = ['AZ', 'ENG'];

async function convertLogos() {
  console.log('Starting logo conversion to WebP...\n');
  
  for (const dir of directories) {
    const dirPath = path.join(baseDir, dir);
    console.log(`\nProcessing directory: ${dir}`);
    console.log('='.repeat(50));
    
    try {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        
        // Only process PNG and JPG/JPEG files
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const inputPath = path.join(dirPath, file);
          const outputFilename = path.basename(file, ext) + '.webp';
          const outputPath = path.join(dirPath, outputFilename);
          
          try {
            console.log(`Converting: ${file} → ${outputFilename}`);
            
            await sharp(inputPath)
              .webp({ quality: 85 })
              .toFile(outputPath);
            
            const oldSize = fs.statSync(inputPath).size / 1024;
            const newSize = fs.statSync(outputPath).size / 1024;
            console.log(`  ✓ Size: ${oldSize.toFixed(2)} KB → ${newSize.toFixed(2)} KB (${((1 - newSize/oldSize) * 100).toFixed(1)}% reduction)\n`);
            
          } catch (error) {
            console.error(`  ✗ Error converting ${file}: ${error.message}\n`);
          }
        }
      }
    } catch (error) {
      console.error(`Error processing directory ${dir}: ${error.message}`);
    }
  }
  
  console.log('='.repeat(50));
  console.log('Conversion complete!');
}

convertLogos().catch(console.error);
