# README

_31 de dezembro de 2023_

---

Está aplicação tem a finalidade de criar um servidor com **Node**, onde por meio de um formulário HTML dados são inseridos em um banco de dados, esse banco está em um host local, do **phpMyadmin**, e pode ser manipulado para inserção de dados nos campos de uma tabela pertencente ao banco de dados _gct_.

Para a integração com o banco de dados é necessário instalar as dependências `express` e `mysql2` os quais vão permitir que a aplicação seja conectada ao banco. Uma outra dependência impotante é o `nodemon --save-dev` dependencia de desenvolvimento, ela permite que o servidor seja atualizado a cada modificação no projeto.

O seu uso de da com a alteração do `"script": {"dev": "nodemon app.js"}` do package.json, com as alterações realizadas, basta executar no terminal o comando `npm run dev` e o servidor será inicializado.

O uso do **express** é fundamental para criar apliações robustos e escaláveis, pois ele permite uma codificação mais ágil e possui diversos recurso para o tratamento de dados como o uso dos métodos HTTP(GET, PUT, POST e DELETE).

O **msql2** é um **driver** MYSQL para o Node.js ele permite a conexão do Node com bancos de dados MYSQL, como no caso do **PhpMyAdmin**, com ele é possível conectar ao banco de dados, fazer consulta, fornece uma API para estabelecer conexões e executar consultas SQL e interagir com o banco.

O **body-parser** é muito usado em aplicações Node pela sua facilidade no processamento dos corpos das requisições HTTP, que podem conter dados enviados pelo cliente, tais como parâmetros de formulários, dados JSON e outros tipos.

A sintaxe a seguir permite que dados sejam tratados pela requisição:

```
app.use(bodyParser.urlencoded({ extended: true })) // trata dados de formulários HTML que usam o método POST, ele analisa os dados em formato de objeto e arrays, mas caso não esteja com {extends: true} ele analisa os formatos apenas como objetos.
app.use(bodyParser.json())
```

A sintaxe a seguir permite que arquivos estáticos sejam servidos a partir do diretório "public" dentro da pasta do seu projeto:

```
app.use(express.static('public'))
```

A sintaxe a seguir cria uma conexão com o banco de dados:

```
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gct'
})
```

A sintaxe a seguir permete que uma verificação seja realizada caso o banco seja conectado ou não:

```
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err)
  } else {
    console.log('Conectado ao banco de dados MySQL.')
  }
})
```
