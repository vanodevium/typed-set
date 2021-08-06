const TypedSet = require("./TypedSet");

class TypedBigIntSet extends TypedSet {
  constructor() {
    super("bigint");
  }
}

module.exports = TypedBigIntSet;
