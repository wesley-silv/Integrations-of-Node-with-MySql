const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')

// Istancia a chamada da aplicação com express e define uma porta de acesso.
const app = express()
const port = 3080

// Processa dados a partir do corpo da requisição
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Inserindo dados a partir do formulário html
app.use(express.static('public'))

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gct'
})


// Check connection
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err)
  } else {
    console.log('Conectado ao banco de dados MySQL.')
  }
})

// Método de inserção de registros no banco de dados
app.post('/insert-dates', (req, res) => {
  const { Code, Location, System, City, Start_operation } = req.body

  // Query de inserção no banco de dados
  const query =
    'INSERT INTO gct_control (code, location, system, city, start_operation) VALUES (?, ?, ?, ?, ?)'
  connection.query(
    query,
    [Code, Location, System, City, Start_operation],
    (err, results) => {
      if (err) {
        console.error('Erro ao inserir dados:', err)
        res.status(500).send('Erro ao inserir dados no banco de dados.')
      } else {
        console.log('Dados inseridos com sucesso!')
        //res.status(200).send('Dados inseridos com sucesso!')
        res.redirect(`http://localhost:${port}`)
        console.log('Retorno à página inicial do formulário!')
      }
    }
  )
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
