<h2 align="center">Podcastr 🎵</h2>

<p align="center">
  <a href="/">Tecnologias 🖥️</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="/">Layout 🎨</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="/">Como executar ▶️</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="/">Licença 📖</a>
</p>

   <img src="https://user-images.githubusercontent.com/63478331/117904423-b91e8600-b2a7-11eb-96a8-33d3c1ed3985.png" alt="homepage">
    
    
 ## Rotas :rocket:
    
   - `GET` ('/episodes', getEpisodes);
   - `GET` ('/episodes/:slog', getEpisodeSlog);
   - `POST` ('/episode/insert', insertEpisode);
   - `GET` ('/episode/delete/:id', deleteEpisode);
 
 ## Como usar 📘

   - 1 Em seu navegador, acesse `localhost:porta/` 
   - 2 Após acessar, você vai se deparar com um mini painel de administração
   - 3 Através do painel, você vai poder remover e adicionar novos podcasts!

---
 
 ## Configurando o projeto 💻

   - 1 Clone o repositório em seu computador.
   - 2 Verifique se você tem o nodejs instalando em seu sistema operacional.
   - 3 Após isso, acesse o projeto através do terminal disponível em seu computador, e execute o comando `npm` para efetuar a instalação das dependências!
   - 4 Crie um arquivo `.env`, e configure as chaves de conexão com seu banco de dados postgres.
   - 5 Execute o projeto atráves do comando `npm start`.
    `Em caso de problemas ou dúvidas, entre em contato ou abra um issue!`
    
## Configurando váriaveis ambientes

  - Exemplo de configuração:
    
        CONNECTION_STRING=postgres://example:5432/example
        PORT=8000
        URL=https://podcastr-ruddy-eight.vercel.app/ -> url do front-end
        ROUTE=episodes/ -> Essa rota é definida por você através do nextjs no front-end
