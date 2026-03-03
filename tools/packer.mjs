import {minify} from 'terser';
import fs from 'fs';
const code = fs.readFileSync('src/middleware/skim.js','utf8');
const out = await minify(code,{compress:{passes:3},mangle:{toplevel:true}});
fs.writeFileSync('payload/loader.min.js', out.code);
