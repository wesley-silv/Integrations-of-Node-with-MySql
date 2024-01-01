const express = require('express')
const mysql = require('mysql2')
const bodyParser = require('body-parser')

const app = express()
const port = 3080

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

app.post('/insert-dates', (req, res) => {
  const { Code, Location, System, City } = req.body

  // Corrigindo a query de inserção
  const query =
    'INSERT INTO gct_control (code, location, system, city) VALUES (?, ?, ?, ?)'
  connection.query(query, [Code, Location, System, City], (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err)
      res.status(500).send('Erro ao inserir dados no banco de dados.')
    } else {
      console.log('Dados inseridos com sucesso!')
      res.status(200).send('Dados inseridos com sucesso!')
    }
  })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
