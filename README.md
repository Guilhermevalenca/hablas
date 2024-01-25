# hablas
Forúm

# Para exercutar o projeto:

## Requesitos:

- php (8.1 ou maior)
- nodejs (20.10)
- npm (10.2)
- composer (2.6)
- MySQL (8.0)

## Dentro da pasta api, execute os seguintes comandos:

- composer install
- cp .env.example .env
  - Agora abra o arquivo .env e preencha os dados no .env normalmente só é necessario preencher com os dados do seu banco de dados
- php artisan key:generate
- php artisan migrate --seed
- php artisan serve

## Dentro da pasta socket:

- npm install
- cp .env.example .env
  - normalmente não é necessario alterar nada do arquivo .env
- node main.js

## Dentro da pasta client:

- npm install
- cp .env.example .env
  - normalmente não é necessario alterar nada do arquivo .env
- npm run dev


## apos a executação de todos os comandos, agora só é necessario abrir seu browser (navegador) e acessar a url: localhost:5173 e pronto, você já poderá está usando nossa aplicação!
