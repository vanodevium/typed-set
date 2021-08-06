const TypedSet = require("./TypedSet");

class TypedBooleanSet extends TypedSet {
  constructor() {
    super("boolean");
  }
}

module.exports = TypedBooleanSet;
