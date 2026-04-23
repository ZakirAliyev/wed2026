import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'src/assets';
const images = [
  { name: 'daglar.png', resize: 2560 },
  { name: 'full.jpg', resize: 2560 },
  { name: 'pattern.png', resize: null }
];

async function convert() {
  for (const img of images) {
    const inputPath = path.join(assetsDir, img.name);
    const outputPath = path.join(assetsDir, img.name.split('.')[0] + '.webp');
    
    console.log(`Converting ${img.name}...`);
    
    let pipeline = sharp(inputPath);
    if (img.resize) {
      pipeline = pipeline.resize(img.resize, null, { withoutEnlargement: true });
    }
    
    await pipeline
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    console.log(`Done: ${outputPath}`);
    
    // Check sizes
    const oldSize = fs.statSync(inputPath).size / (1024 * 1024);
    const newSize = fs.statSync(outputPath).size / (1024 * 1024);
    console.log(`Size reduced from ${oldSize.toFixed(2)} MB to ${newSize.toFixed(2)} MB`);
  }
}

convert().catch(console.error);
