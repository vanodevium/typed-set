const TypedSet = require("./TypedSet");

class TypedNumberSet extends TypedSet {
  constructor() {
    super("number");
  }
}

module.exports = TypedNumberSet;
