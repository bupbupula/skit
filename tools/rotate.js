import crypto from 'crypto';
const d = crypto.randomBytes(4).toString('hex');
console.log(`https://${d}.workers.dev`);
