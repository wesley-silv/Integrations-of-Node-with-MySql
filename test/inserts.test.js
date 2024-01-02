const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app') // Caminho do app para o teste

chai.use(chaiHttp)
const expect = chai.expect

describe('Teste de inserções', () => {
  it('Deve criar uma nova inserção no banco de dados', done => {
    const newInsert = {
      code: 1000000,
      location: 'Rua@test - 000',
      system: 'System@test',
      city: 'City@test - Brasil',
      start_operation: 'Start_operation@test'
    }
    chai
      .request(app)
      .post('/insert-dates')
      .send(newInsert)
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('object')
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('code').eql(newInsert.code)
        expect(res.body).to.have.property('location').eql(newInsert.location)
        expect(res.body).to.have.property('system').eql(newInsert.system)
        expect(res.body).to.have.property('city').eql(newInsert.city)
        expect(res.body)
          .to.have.property('start_operation')
          .eql(newInsert.start_operation)

        done()
      })
  })
  it('Deve obter a lista de usuários', done => {
    chai
      .request(app)
      .get('/api/usuarios')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })
})
