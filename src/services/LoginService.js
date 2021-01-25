const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

class LoginService {
  constructor() {
    this.user = null;
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({
        where: {
          email: email,
          password: crypto.createHash("md5").update(password).digest("hex"),
        },
      });

      if (!user) {
        const ErroJson = {
          error: "Login inválido!",
          Message: "Email ou Senha inválidos.",
        };

        return res.status(400).send(ErroJson);
      } else {
        jwt.sign(
          { id: user.id, email: user.email },
          process.env.SECRET_JWT,
          {
            expiresIn: "30m",
          },
          (err, token) => {
            if (err) {
              return res.status(400).send({ err: "Falha ao gerar token!" });
            } else {
              return res.status(200).send({ auth: true, token: token });
            }
          }
        );
      }
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

module.exports = LoginService;
