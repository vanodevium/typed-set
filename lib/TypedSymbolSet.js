const TypedSet = require("./TypedSet");

class TypedSymbolSet extends TypedSet {
  constructor() {
    super("symbol");
  }
}

module.exports = TypedSymbolSet;
