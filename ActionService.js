// class actionService extends IBase {
//   constructor() {
//     super();
//   }

//   // async create(item) {
//   //   actionModel
//   //     .create({
//   //       code: item.code,
//   //       description: item.description,
//   //     })
//   //     .then(() => {
//   //       return true;
//   //     });
//   // }

//   getAll() {
//     //  Action.findAll()
//     //    .sort({ code: 1 }) //para trazer em ordem descendente, passe -1
//     //    .then((actions) => {
//     //      res.send(actions);
//     //    })
//     //    .catch((err) => {
//     //      res.status(500).send({
//     //        message:
//     //          err.message ||
//     //          "Ocorreu algo errado ao obter os produtos do Banco de Dados.",
//     //      });
//     //    });

//     Action.findAll({ raw: false }).then((result) => {
//       console.log("Service chegou", result);
//       return result;
//     });
//   }
// }

// // actionService.get();
// // actionService.create();

// module.exports = actionService;
