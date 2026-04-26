import sharp from 'sharp';
import path from 'path';

const conversions = [
    ['1920 1080.png', 'footer-pc-eng.webp'],
    ['9-16. 2.png', 'footer-mob-eng.webp'],
    ['AZ.png', 'footer-pc-az.webp'],
    ['9-16 AZ.png', 'footer-mob-az.webp'],
    ['Group 1.png', 'footer-logos.webp'],
    ['energy.jpeg', 'energy.webp'],
    ['forest.jpeg', 'forest.webp'],
    ['plant.jpeg', 'plant.webp'],
    ['favicon.png', 'favicon.webp'],
    ['logoFav.png', 'logo-fav.webp']
];

const assetsDir = 'src/assets';

async function convert() {
    for (const [input, output] of conversions) {
        try {
            await sharp(path.join(assetsDir, input))
                .webp({ lossless: true })
                .toFile(path.join(assetsDir, output));
            console.log(`Converted ${input} to ${output}`);
        } catch (err) {
            console.error(`Error converting ${input}:`, err);
        }
    }
}

convert();
