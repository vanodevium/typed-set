const TypedSet = require("./TypedSet");

class TypedFunctionSet extends TypedSet {
  constructor() {
    super("function");
  }
}

module.exports = TypedFunctionSet;
