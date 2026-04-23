import sharp from 'sharp';
sharp('src/assets/pattern.jpg')
  .webp({ quality: 80 })
  .toFile('src/assets/pattern_new.webp')
  .then(() => console.log('Done'))
  .catch(console.error);
