const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data/paint.json', 'utf8'));

function chooseImage(contextStr) {
  if (!contextStr || typeof contextStr !== 'string') return null;
  const ctx = contextStr.toLowerCase();
  if (ctx.includes('interior') || ctx.includes('living') || ctx.includes('bedroom')) return '/img1.jpg';
  if (ctx.includes('exterior') || ctx.includes('outside') || ctx.includes('facade') || ctx.includes('building')) return '/img2.jpg';
  if (ctx.includes('commercial') || ctx.includes('office') || ctx.includes('shop') || ctx.includes('business')) return '/img3.jpg';
  if (ctx.includes('texture') || ctx.includes('finish') || ctx.includes('decorative') || ctx.includes('art')) return '/img4.jpg';
  if (ctx.includes('wallpaper')) return '/img5.jpg';
  if (ctx.includes('kitchen') || ctx.includes('bathroom') || ctx.includes('dining')) return '/img6.jpg';
  if (ctx.includes('house') || ctx.includes('villa') || ctx.includes('home')) return '/img7.jpg';
  if (ctx.includes('brush') || ctx.includes('painter') || ctx.includes('painting') || ctx.includes('paint')) return '/img8.jpg';
  if (ctx.includes('modern') || ctx.includes('design') || ctx.includes('minimal')) return '/img9.jpg';
  if (ctx.includes('color') || ctx.includes('colorful') || ctx.includes('bright')) return '/img10.jpg';
  return null;
}

const allImages = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg', '/img9.jpg', '/img10.jpg', '/img11.jpg'];
let fallbackIndex = 0;

function traverseAndReplace(obj, parentContext = '') {
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].includes('images.unsplash.com')) {
      // Find context (alt text, title, or key)
      let ctx = obj.alt || obj.title || obj.name || obj.text || parentContext;
      if (!ctx && typeof obj === 'object') {
         ctx = JSON.stringify(obj); 
      }
      
      let img = chooseImage(ctx);
      
      if (!img) {
         img = allImages[fallbackIndex];
         fallbackIndex = (fallbackIndex + 1) % allImages.length;
      }
      
      obj[key] = img;
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      traverseAndReplace(obj[key], key);
    }
  }
}

traverseAndReplace(data);
fs.writeFileSync('./data/paint.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Replaced all unsplash images successfully.');
