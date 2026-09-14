'use strict';
// Valores informados pela família; não são preços consultados em tempo real.
const gifts = [
 {name:'Tapete de água mágico',category:'Brinquedos',detail:'Para desenhar, apagar e inventar de novo. Com canetas.',price:23.97,store:'Shopee',icon:'art',url:'https://br.shp.ee/ZiwACk1d'},
 {name:'Laptop educativo Bluey',category:'Brinquedos',detail:'Laptop infantil bilíngue da Candide.',price:79.99,store:'Shopee',icon:'laptop',url:'https://br.shp.ee/nq6wPd7j'},
 {name:'Quebra-cabeça Dino 3D',category:'Brinquedos',detail:'Dinossauro em madeira para pequenas descobertas.',price:22.49,store:'Shopee',icon:'dino',url:'https://br.shp.ee/Txe4z48m'},
 {name:'Blocos magnéticos',category:'Brinquedos',detail:'Opções de 56 ou 84 peças. Confira a versão na loja.',price:null,store:'SHEIN',icon:'blocks',url:'https://onelink.shein.com/52/620438kax7ym?shc=2_RccXQ9k9MVo'},
 {name:'Construção magnética 3D',category:'Brinquedos',detail:'Varas e bolinhas magnéticas da BRASTOY.',price:null,store:'SHEIN',icon:'blocks',url:'https://onelink.shein.com/52/62049jguwxqm?shc=2_RccS84OCzud'},
 {name:'Lousa mágica magnética',category:'Brinquedos',detail:'Prancheta com caneta e cartelas de desenho.',price:39.49,store:'Shopee',icon:'art',url:'https://br.shp.ee/GJ3x92bt'},
 {name:'Blocos Dismat • 100 peças',category:'Brinquedos',detail:'Blocos de construção infantil, modelo MK444.',price:null,store:'Havan',icon:'blocks',url:'https://www.havan.com.br/blocos-de-construcao-infantil-100-pecas-dismat-mk444/p?utm_source=share'},
 {name:'Escorregador infantil',category:'Brinquedos',detail:'Modelo médio com 3 degraus e cores vibrantes.',price:259.01,store:'Shopee',icon:'slide',url:'https://br.shp.ee/5d37Nsxj'},
 {name:'Conjuntinho listrado',category:'Roupinhas',detail:'Regata e calça de perna larga Souflis. Tamanho 2 ou 3.',price:null,store:'SHEIN',icon:'clothes',url:'https://onelink.shein.com/52/620532yimic0?shc=2_RccwoJ8m3QS'},
 {name:'Macacão floral com laços',category:'Roupinhas',detail:'Estampa delicada e babados para o verão. Tamanho 2 ou 3.',price:null,store:'SHEIN',icon:'dress',url:'https://onelink.shein.com/52/62054gaagky8?shc=2_RccwZypEpTw'},
 {name:'Calça jeans flare',category:'Roupinhas',detail:'Cintura elástica. A loja envia uma estampa aleatória. Tamanho 2 ou 3.',price:null,store:'SHEIN',icon:'clothes',url:'https://onelink.shein.com/52/620555xovw62?shc=2_Rccw00mezXc'},
 {name:'Tênis Fila Play Baby',category:'Calçados',detail:'Cinza e prata. Calçado tamanho 21/23.',price:null,store:'Netshoes',icon:'shoe',url:'https://share.google/XMwlbmV37HtFCwY8O'},
 {name:'Botinha LED borboleta',category:'Calçados',detail:'Branca, com detalhe de borboleta. Tamanho 21/23.',price:null,store:'Netshoes',icon:'shoe',url:'https://share.google/CmJHDt6Juj0GaLHkv'},
 {name:'Tênis de luzinhas LED',category:'Calçados',detail:'Branco e rosa para iluminar os passinhos. Tamanho 21/23.',price:null,store:'Netshoes',icon:'shoe',url:'https://share.google/GoFndt1rsAcpZQByw'},
 {name:'Kit Jubinha • Widi',category:'Cuidados',detail:'Shampoo, condicionador e creme infantil.',price:80.91,store:'Mercado Livre',icon:'care',url:'https://www.mercadolivre.com.br/kit-jubinha-infantil-shampoo-condicionador-e-creme-widi/p/MLB63976657?pdp_filters=item_id%3AMLB6819859646&matt_tool=38524122&ua=HqFzd_VUqQVosiVE2yiSxk7ODCYKOQMvq9QZPslSSt9ibtM#origin=whatsapp&sid=whatsapp&wid=MLB6819859646'},
 {name:'Kit de cuidado dos cachinhos',category:'Cuidados',detail:'Pente, borrifador névoa e escovinha baby hair.',price:36.30,store:'Mercado Livre',icon:'care',url:'https://produto.mercadolivre.com.br/MLB-4084269849-kit-pente-borrifador-nevoa-spray-escovinha-baby-hair-argola-_JM?matt_tool=38524122&ua=D3FoOyoVGrNRstHmyttT-vWTAdk9CQr_4VPLQDODPQs_yIU#origin=whatsapp&sid=whatsapp'},
 {name:'Maleta de pintura Bluey',category:'Brinquedos',detail:'Com lápis, guache e adesivos para criar.',price:59.90,store:'Shopee',icon:'art',url:'https://br.shp.ee/Y7nmpvv6'},
 {name:'Mesinha com cadeirinha',category:'Brinquedos',detail:'Conjunto infantil de plástico estampado.',price:189.05,store:'Mercado Livre',icon:'table',url:'https://www.mercadolivre.com.br/jogo-mesa-mesinha-infantil-com-1-cadeira-plastica-estampada/up/MLBU4822385081?pdp_filters=item_id%3AMLB5094488453&matt_tool=38524122&ua=Xd2VLy0LoZyA5hX1-yQQH5v1ajQhi0nJgyRalgi0RrHthYE#origin=whatsapp&sid=whatsapp&wid=MLB5094488453'},
 {name:'Carrinhos Patrulha Canina',category:'Brinquedos',detail:'Kit com opções de 3, 6 ou 9 carrinhos de fricção.',price:26.94,store:'Shopee',icon:'car',url:'https://br.shp.ee/3jUoJ29w'},
 {name:'Troninho Styll Baby',category:'Cuidados',detail:'Privadinha e assento redutor para o desfralde.',price:66.50,store:'Shopee',icon:'potty',url:'https://br.shp.ee/w2cELhUh'},
 {name:'Boneca Skye para pintar',category:'Brinquedos',detail:'Patrulha Canina com kit de pintura.',price:68.88,store:'Shopee',icon:'doll',url:'https://br.shp.ee/KQ4fuZ2M'},
 {name:'Tênis branco infantil',category:'Calçados',detail:'Levinho e macio. Tamanho 21/23.',price:39.89,priceMax:42.57,store:'Shopee',icon:'shoe',url:'https://br.shp.ee/2KG563LW'}
];
const money = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const grid = document.querySelector('#gift-grid');
const search = document.querySelector('#search');
const sort = document.querySelector('#sort');
let category = 'Todos';
function render() {
 const query = normalize(search.value.trim());
 const visible = gifts.filter(g => (category === 'Todos' || g.category === category) && normalize(`${g.name} ${g.category} ${g.detail} ${g.store}`).includes(query));
 if (sort.value === 'price') visible.sort((a,b) => (a.price ?? Infinity) - (b.price ?? Infinity));
 if (sort.value === 'name') visible.sort((a,b) => a.name.localeCompare(b.name,'pt-BR'));
 grid.replaceChildren(...visible.map(g => {
  const card = document.createElement('article'); card.className = 'gift-card';
  const visual = document.createElement('div'); visual.className = 'gift-visual';
  const store = document.createElement('span'); store.className = 'store'; store.textContent = g.store;
  const img = document.createElement('img'); img.src = `assets/${g.icon}.svg`; img.alt = ''; img.width = 150; img.height = 115; img.loading = 'lazy';
  const caption = document.createElement('span'); caption.className = 'illustration-label'; caption.textContent = 'ilustração'; visual.append(store,img,caption);
  const info = document.createElement('div'); info.className = 'gift-info';
  const tag = document.createElement('span'); tag.className = 'category'; tag.textContent = g.category;
  const title = document.createElement('h3'); title.textContent = g.name;
  const detail = document.createElement('p'); detail.className = 'gift-detail'; detail.textContent = g.detail;
  const price = document.createElement('p'); price.className = 'price'; price.textContent = g.price == null ? 'Confira na loja' : money.format(g.price) + (g.priceMax ? ` – ${money.format(g.priceMax)}` : '');
  const note = document.createElement('small'); note.textContent = g.price == null ? 'Veja as opções disponíveis' : 'Preço de referência'; price.append(note);
  const link = document.createElement('a'); link.className = 'shop-link'; link.href = g.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.setAttribute('aria-label',`Ver ${g.name} na ${g.store} (abre em nova aba)`); link.append(document.createTextNode(`Ver na ${g.store}`));
  const arrow = document.createElement('span'); arrow.textContent = '↗'; arrow.setAttribute('aria-hidden','true'); link.append(arrow);
  info.append(tag,title,detail,price,link); card.append(visual,info); return card;
 }));
 document.querySelector('#result-count').textContent = `${visible.length} ${visible.length === 1 ? 'ideia para presentear' : 'ideias para presentear'}`;
 document.querySelector('#empty').hidden = visible.length > 0;
}
document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click',()=>{
 category = button.dataset.category;
 document.querySelectorAll('[data-category]').forEach(b=>{const active = b === button; b.classList.toggle('active',active); b.setAttribute('aria-pressed',String(active));}); render();
}));
search.addEventListener('input',render); sort.addEventListener('change',render);
document.querySelector('#reset').addEventListener('click',()=>{search.value = '';sort.value = 'original';document.querySelector('[data-category="Todos"]').click();search.focus();});
document.querySelector('#copy-pix').addEventListener('click',async()=>{
 const key = document.querySelector('#pix-key'); const status = document.querySelector('#pix-status');
 try { if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText(key.value); status.textContent = 'Chave copiada! Cole no app do seu banco.'; }
 catch { key.focus();key.select();key.setSelectionRange(0,key.value.length);status.textContent = 'Selecione e copie a chave acima para usar no seu banco.'; }
});
render();
