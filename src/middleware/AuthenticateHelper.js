const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    var token = bearer[1];

    jwt.verify(token, process.env.SECRET_JWT, (err, data) => {
      if (err) {
        return res.status(401).send({ err: "Token inválido ou expirado!" });
      } else {
        req.token = token;
        req.loggerUser = { id: data.id, email: data.email };
        next();
      }
    });
  } else {
    res.status(401).json({ erro: "Token inválido!" });
  }
};
