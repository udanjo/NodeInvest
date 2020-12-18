class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Exception");
  }
}

// Interface
class IBase {
  insert(item) {
    throw new NotImplementedException();
  }

  find(item) {
    throw new NotImplementedException();
  }

  update(id, item) {
    throw new NotImplementedException();
  }

  getAll() {
    throw new NotImplementedException();
  }

  delete(id) {
    throw new NotImplementedException();
  }

  isConnected() {
    throw new NotImplementedException();
  }
}

module.exports = IBase;
