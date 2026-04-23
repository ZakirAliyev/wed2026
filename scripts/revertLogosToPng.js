import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'src/assets';
const logos = ['logo1', 'logo2', 'logo3', 'logo4'];

async function revertToPng() {
  for (const logo of logos) {
    const webpPath = path.join(assetsDir, logo + '.webp');
    const pngPath = path.join(assetsDir, logo + '.png');
    
    if (fs.existsSync(webpPath)) {
      console.log(`Converting ${logo}.webp back to PNG...`);
      try {
        await sharp(webpPath).png().toFile(pngPath);
        console.log(`Created ${pngPath}`);
        // User didn't say to delete webp, but usually good to keep assets clean
      } catch (err) {
        console.error(`Error converting ${logo}:`, err);
      }
    }
  }
}

revertToPng().catch(console.error);
