const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:process.env.BROWSER_CHANNEL || 'msedge'});
 try {
 const page=await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
 const art=fs.readFileSync(path.join(__dirname,'assets/fazendinha.webp')).toString('base64');
 const flower=fs.readFileSync(path.join(__dirname,'assets/flor.svg')).toString('base64');
 await page.setContent(`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600;700&family=Fraunces:opsz,wght,SOFT,WONK@9..144,600,50,1;9..144,700,50,1&display=swap" rel="stylesheet"><style>*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#f9e6dd;background-image:repeating-linear-gradient(0deg,transparent 0 22px,#cf81854a 22px 44px),repeating-linear-gradient(90deg,transparent 0 22px,#cf81854a 22px 44px);padding:22px;color:#583a2b;font-family:'DM Sans',sans-serif}.card{height:586px;background:#fff9ed;border-radius:26px;display:grid;grid-template-columns:1.08fr 1fr;gap:20px;padding:30px;outline:2px dashed #c48280;outline-offset:-10px;overflow:hidden}.copy{padding:28px 0 0 20px;position:relative}.kicker{font-size:14px;letter-spacing:3px;font-weight:700;color:#943d4c;margin:0 0 22px}.title{font:700 83px/1 'Fraunces',Georgia,serif;letter-spacing:-3px;margin:0;color:#b95160}.subtitle{font:600 56px/1.15 'Fraunces',Georgia,serif;margin:5px 0 26px}.description{font-size:21px;line-height:1.5;margin:0;max-width:440px}.pill{display:inline-block;margin-top:27px;background:#f4e4df;color:#943d4c;border:1px solid #ddbab0;padding:10px 18px;border-radius:30px;font-size:15px;font-weight:700}.flower{width:52px;height:52px;position:absolute;left:20px;bottom:10px}.note{position:absolute;bottom:22px;left:84px;font-size:14px;color:#806a5d}.art{width:100%;height:526px;object-fit:cover;border-radius:46% 46% 14px 14px;border:6px solid #eed4c6}</style><div class="card"><div class="copy"><p class="kicker">UMA FAZENDINHA DE AMOR</p><h1 class="title">Lavinia</h1><p class="subtitle">faz 2 aninhos!</p><p class="description">Vem celebrar com a gente!<br>Confira a festinha e a nossa<br>listinha de presentes.</p><span class="pill">18 DE OUTUBRO · ÀS 14H</span><img class="flower" src="data:image/svg+xml;base64,${flower}"><span class="note">Sua presença é o maior presente.</span></div><img class="art" src="data:image/webp;base64,${art}"></div></html>`,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:path.join(__dirname,'assets/compartilhar-lavinia-v1.jpg'),type:'jpeg',quality:87});
 console.log('Capa criada: assets/compartilhar-lavinia-v1.jpg (1200 × 630)');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
