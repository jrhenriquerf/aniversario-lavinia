// Prévia local opcional: node serve.cjs
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.jpeg':'image/jpeg'};
http.createServer((req,res)=>{
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400).end();return;}
 const file=path.resolve(__dirname,'.'+(pathname==='/'?'/index.html':pathname));
 if(!file.startsWith(__dirname+path.sep)){res.writeHead(403).end();return;}
 fs.readFile(file,(error,data)=>{if(error){res.writeHead(404).end('Arquivo não encontrado');return;}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(data);});
}).listen(4180,'127.0.0.1',()=>console.log('Prévia: http://127.0.0.1:4180'));
