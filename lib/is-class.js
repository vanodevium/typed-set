const toString = Function.prototype.toString;

module.exports = (fn) => {
  if (typeof fn !== "function") {
    return false;
  }
  const body = toString.call(fn);
  return Boolean(
    body.startsWith("class") ||
      body.includes("[native code]") ||
      (!!fn.prototype &&
        fn.prototype.constructor === fn &&
        Object.keys(fn.prototype).length)
  );
};
