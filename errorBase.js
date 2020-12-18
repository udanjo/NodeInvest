const messageError = [];
var index = 0

exports.addMessage = (msg) => {
  messageError[index] = msg;
  index = (index + 1);
}

exports.resultErrors = () => {
  return messageError;
}

// module.exports = class Errors {
//   constructor() {
//     // this.messageError[this.index] = msg;
//     // this.index = this.index + 1;
//     this.messageError = [];
//     this.index = 0;
//   }

//   set addMessage(msg) {
//     this.messageError[this.index] = msg;
//     this.index = this.index +1;
//   };

//   get resultErrors() {
//     return this.messageError;
//   };  
// }


