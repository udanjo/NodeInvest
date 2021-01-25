let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../../server");
chai.should();
//const should = require("should");
chai.use(chaiHttp);

// Bloco de teste do ativo
describe("Active", () => {
  describe("/GET Ativos", () => {
    it("Testando GET todos os Ativos", (done) => {
      chai
        .request(server)
        .get("/active")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  describe("/POST Ativos", () => {
    it("Verificar o cadastro dos Ativos", (done) => {
      let active = {
        code: "TEST3",
        description: "TESTE SA",
      };
      chai
        .request(server)
        .post("/active")
        .send(active)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.status(200);
          res.body.should.be.a("string");
          done();
        });
    });
  });
});
