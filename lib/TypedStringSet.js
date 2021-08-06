const TypedSet = require("./TypedSet");

class TypedStringSet extends TypedSet {
  constructor() {
    super("string");
  }
}

module.exports = TypedStringSet;
