const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('fs');const path=require('path');const http=require('http');const assert=require('assert/strict');
const base=__dirname;const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.jpeg':'image/jpeg'};
const server=http.createServer((req,res)=>{const name=decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/lavinia\//,'/');const file=path.join(base,name==='/'?'index.html':name);if(!file.startsWith(base+path.sep)){res.writeHead(403).end();return;}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end();return;}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(data);});});
(async()=>{await new Promise(r=>server.listen(4178,'127.0.0.1',r));const browser=await chromium.launch({headless:true,channel:process.env.BROWSER_CHANNEL || "msedge"});const context=await browser.newContext({permissions:['clipboard-read','clipboard-write']});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.setViewportSize({width:1440,height:1100});await page.goto('http://127.0.0.1:4178/lavinia/',{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.locator('.gift-card').count(),22);
 for(const [category,count] of [['Brinquedos',12],['Roupinhas',3],['Calçados',4],['Cuidados',3]]){await page.locator(`[data-category="${category}"]`).click();assert.equal(await page.locator('.gift-card').count(),count);}
 await page.locator('[data-category="Todos"]').click();await page.locator('#search').fill('calcados');assert.equal(await page.locator('.gift-card').count(),4);
 await page.locator('#search').fill('sem-resultados');assert.equal(await page.locator('.gift-card').count(),0);assert.equal(await page.locator('#empty').isVisible(),true);await page.locator('#reset').click();assert.equal(await page.locator('.gift-card').count(),22);
 await page.locator('#sort').selectOption('price');assert.match(await page.locator('.gift-card').first().innerText(),/Dino/);await page.locator('#sort').selectOption('original');
 await page.locator('#copy-pix').click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),'14991333495');
 await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw new Error('denied');}}}));await page.locator('#copy-pix').click();assert.match(await page.locator('#pix-status').innerText(),/Selecione/);assert.equal(await page.locator('#pix-key').evaluate(e=>e.selectionEnd-e.selectionStart),11);
 assert.equal(await page.locator('.shop-link[target="_blank"][rel="noopener noreferrer"]').count(),22);
 assert.deepEqual(await page.locator('img').evaluateAll(images=>images.filter(img=>!img.complete||!img.naturalWidth).map(img=>img.src)),[]);
 fs.mkdirSync(path.join(base,'preview'),{recursive:true});
 for(const width of [1440,768,390,320]){await page.setViewportSize({width,height:1000});await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(150);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),true,`Overflow at ${width}`);await page.screenshot({path:path.join(base,'preview',`page-${width}.png`),fullPage:true});}
 assert.deepEqual(errors,[]);console.log('PASS: 22 gifts, 4 categories, accent-insensitive search, reset, sort, clipboard + fallback, links, images, nested path, no page errors or horizontal overflow at 1440/768/390/320.');await browser.close();server.close();
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});


