# README

_31 de dezembro de 2023_

---

Está aplicação tem a finalidade de criar um servidor com **Node**, onde por meio de um formulário dados são inseridos em um banco de dados, esse banco está em um host local, do **phpMyadmin**, e pode ser manipulado para inserção de dados nos campos de uma tabela pertencente ao banco de dados _gct_.

Dados da conexão:

```
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gct'
})
```
