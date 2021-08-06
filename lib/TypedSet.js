const isClass = require("./is-class");

class TypedSet extends Set {
  static makeTypeofFunction = (type) => (value) => typeof value === type;
  static makeInstanceofFunction = (type) => (value) => value instanceof type;

  /**
   * @param {(Object|String|Function)} validationFn
   */
  constructor(validationFn = null) {
    super();

    validationFn = this._convertToFunction(validationFn);

    Object.defineProperty(this, "validationFn", {
      value: validationFn,
      enumerable: false,
      writable: false,
    });
  }

  /**
   * @param {*} value
   */
  add(value) {
    this._validateValue(value);
    super.add(value);
  }

  /**
   * @param {(Object|String|Function)} type
   * @returns {null|(function(*): boolean)}
   * @private
   */
  _convertToFunction(type) {
    if (typeof type === "string") {
      return this.constructor.makeTypeofFunction(type);
    }

    if (isClass(type)) {
      return this.constructor.makeInstanceofFunction(type);
    }

    if (typeof type !== "function") {
      return null;
    }

    return type;
  }

  /**
   * @param {*} value
   * @throws Error
   * @private
   */
  _validateValue(value) {
    if (null === this.validationFn) {
      return;
    }

    let validationResult = this.validationFn(value);

    if (typeof validationResult !== "boolean") {
      return;
    }

    if (true !== validationResult) {
      throw new Error("Incompatible type of value");
    }
  }
}

module.exports = TypedSet;
