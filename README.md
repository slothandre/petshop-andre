# PetShop: projeto Next.js

## Branch 09-desafio-carregamento-do-array-posts

- Importe o array de posts para a página inicial
- Modifique o <StyledListaPosts> para que os <article> sejam gerados com auxílio do `map` processando os dados do arquivo `array-posts.js`. Portanto, o `map` irá gerar 4 <article> já que o `array-posts.js` possui 4 objetos/posts.

**Atenção**: para este desafio NÃO É necessário usar `useState` e/ou `useEffect`.

## Branch 05

### IMPORTANTE!

Após instalar o `styled-component`, ative o suporte à compilação dele pelo Next.js modificando o arquivo `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // adicione estas linhas
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
```

## Recursos utilizados

- Next.js
- API Fake/Local
- API via Firebase Realtime Database
- Componentes
- Rotas
- Map, Filter
- Manipulação de formulário
- Publicação na Vercel e na Netlify
