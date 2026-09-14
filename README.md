# Lavinia faz 2! 🌼

Landing page estática para a festa de aniversário da Lavinia, inspirada no convite de fazendinha rosa. HTML, CSS e JavaScript, sem build ou dependências em produção.

## Abrir

Abra `index.html` no navegador. No GitHub Pages (HTTPS), o botão Pix copia a chave diretamente. Se o navegador negar acesso à área de transferência, a chave fica selecionada para cópia manual.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `aniversario-lavinia`.
2. Envie **o conteúdo desta pasta** para a raiz do repositório: `index.html`, `styles.css`, `app.js`, `.nojekyll` e toda a pasta `assets`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, a pasta **/(root)** e salve.
6. Após a publicação, abra o endereço exibido pelo GitHub, normalmente `https://SEU-USUARIO.github.io/aniversario-lavinia/`.

Todos os recursos locais usam caminhos relativos e funcionam em subpastas. As fontes vêm do Google Fonts, com fontes alternativas se a rede estiver indisponível. Não é necessário configurar chaves de API.

Documentação: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Conteúdo e edição

- `index.html`: textos, dados da festa, tamanhos e chave Pix.
- `app.js`: 22 presentes, valores de referência, links, categorias, busca, ordenação e ação de copiar. Para mudar a chave Pix, edite o valor do campo `#pix-key` no HTML; o JavaScript lê esse campo.
- `styles.css`: cores, tipografia, xadrez, layouts e responsividade.
- `assets/convite.jpeg`: convite original fornecido.
- `assets/fazendinha.webp`: ilustração original de abertura gerada com ImageGen e otimizada para a web (~350 KB).
- `assets/*.svg`: ilustrações locais dos presentes e flor. São representações ilustrativas, não fotografias dos produtos.
- `make-icons.cjs`: fonte das ilustrações SVG; não precisa ser publicado.

Foram preservadas as duas datas: Lavinia completa 2 anos em **16/10** e a festa do convite acontece em **18/10 às 14h**, na **Rua José bechir, 1-38**. Confirmação com a família até **09/10**. Nenhum WhatsApp foi associado automaticamente à chave Pix. Não foram inventados cidade, ano ou contato de confirmação.

Roupas: **2 ou 3**. Calçados: **21/23**, conforme informado. Pix: **14991333495**, **Karen maximo**, **Inter**.

Os preços são os enviados pela família, sem promessa de desconto ou atualização automática. As lojas bloquearam a consulta automatizada de fotos; os 22 links fornecidos foram mantidos. A página não reserva presentes e não registra pagamentos.

## Verificação

Verificado em navegador Chromium (Microsoft Edge):

- 22 cartões e contagens de categoria (12 brinquedos, 3 roupinhas, 4 calçados, 3 cuidados).
- Busca sem diferenciar acentos, estado vazio, limpar filtros e ordenar por preço.
- Cópia da chave exata e seleção manual quando a permissão é negada.
- Imagens locais carregadas, links abrindo em outra aba com `noopener noreferrer`.
- Endereço de publicação com subpasta e ausência de rolagem horizontal em 320, 390, 768 e 1440 px.
- Capturas de desktop e celular revisadas visualmente.

Para repetir, instale Playwright em um ambiente de desenvolvimento e execute `node verify.cjs`. O teste usa o Edge instalado por padrão; defina `BROWSER_CHANNEL=chrome` para Chrome ou `BROWSER_CHANNEL=chromium` para o Chromium do Playwright. `PLAYWRIGHT_MODULE` permite informar um módulo Playwright já instalado. As capturas vão para `preview/`, ignorada pelo Git.

## Ilustração de abertura

Ferramenta: ImageGen integrado. O acesso direto à imagem de referência falhou no sandbox; a geração final usou a descrição visual do convite já observado na conversa. O original gerado permanece na pasta de imagens do Codex; a versão usada pelo site está em `assets/fazendinha.webp`.

Prompt final:

> New square illustration for a two-year-old girl's birthday website. Sweet storybook little brown-haired cowgirl toddler with pigtails, brown cowboy hat pink band gold star, pink gingham shirt, denim skirt and boots, with Bluey and Bingo dressed as cowboys smiling beside her. Charming rural birthday party, daisies, wooden fence, warm red barn, pale blue sky and soft green meadow. Pastel warm cream, dusty coral pink, honey brown, sage green. Hand-painted watercolor and colored pencil paper texture, sophisticated children's picture book. Full body figures, centered with breathing room, very cute happy mood. No text, no letters, no numbers, no frame, no invitation layout. Image fills square, bottom foreground daisies.
