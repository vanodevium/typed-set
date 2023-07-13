const { describe, it, expect } = require("@jest/globals");
const TypedSet = require("..");
const TypedBigIntSet = TypedSet.TypedBigIntSet;
const TypedBooleanSet = TypedSet.TypedBooleanSet;
const TypedFunctionSet = TypedSet.TypedFunctionSet;
const TypedNumberSet = TypedSet.TypedNumberSet;
const TypedStringSet = TypedSet.TypedStringSet;
const TypedSymbolSet = TypedSet.TypedSymbolSet;

const ExpectedError = new Error("Incompatible type of value");

class TestClass {}
class CustomClass extends TestClass {}

describe("TypedSet class", () => {
  it("TypedSet with null typing", () => {
    const typedSet = new TypedSet();
    typedSet.add(1);
    typedSet.add("two");
    typedSet.add({});

    expect(typedSet.size).toEqual(3);
  });

  it("TypedSet with empty typing function", () => {
    const typedSet = new TypedSet(() => {});
    typedSet.add(1);
    typedSet.add("two");
    typedSet.add({});

    expect(typedSet.size).toEqual(3);
  });

  it("TypedSet with type as string", () => {
    const typedSet = new TypedSet("number");
    typedSet.add(1);
    typedSet.add(2);
    typedSet.add(3);

    expect(typedSet.size).toEqual(3);
  });

  it("TypedSet with TypedSet", () => {
    const typedSet = new TypedSet(TypedSet);
    typedSet.add(new TypedSet());
    typedSet.add(new TypedSet());
    typedSet.add(new TypedSet());

    expect(typedSet.size).toEqual(3);

    expect(() => {
      typedSet.add({});
    }).toThrow(ExpectedError);
  });

  it("TypedSet with CustomClass", () => {
    const typedSet = new TypedSet(CustomClass);
    typedSet.add(new CustomClass());
    typedSet.add(new CustomClass());
    typedSet.add(new CustomClass());

    expect(typedSet.size).toEqual(3);

    expect(() => {
      typedSet.add({});
    }).toThrow(ExpectedError);
  });

  it("TypedSet with TestClass", () => {
    const typedSet = new TypedSet(TestClass);
    typedSet.add(new TestClass());
    typedSet.add(new TestClass());
    typedSet.add(new TestClass());

    expect(typedSet.size).toEqual(3);

    expect(() => {
      typedSet.add({});
    }).toThrow(ExpectedError);
  });

  it("TypedSet with Set", () => {
    const typedSet = new TypedSet(Set);
    typedSet.add(new Set());
    typedSet.add(new Set());
    typedSet.add(new Set());

    expect(typedSet.size).toEqual(3);

    expect(() => {
      typedSet.add({});
    }).toThrow(ExpectedError);
  });

  it("TypedSet with typing function", () => {
    const typedSet = new TypedSet(
      (value) => typeof value === "number" || typeof value === "bigint",
    );
    typedSet.add(1);
    typedSet.add(2);

    expect(typedSet.size).toEqual(2);

    expect(() => {
      typedSet.add("string");
    }).toThrow(ExpectedError);
  });

  it("TypedSet with instanceOf function", () => {
    const typedSet = new TypedSet((value) => value instanceof TestClass);
    typedSet.add(new TestClass());
    typedSet.add(new TestClass());
    typedSet.add(new TestClass());

    expect(typedSet.size).toEqual(3);

    expect(() => {
      typedSet.add({});
    }).toThrow(ExpectedError);
  });
});

describe("TypedBigIntSet class", () => {
  it("TypedBigIntSet with typing function", () => {
    const typedSet = new TypedBigIntSet();
    typedSet.add(1n);
    typedSet.add(2n);
    typedSet.add(1n);

    expect(typedSet.size).toEqual(2);

    expect(() => {
      typedSet.add("string");
    }).toThrow(ExpectedError);
  });
});

describe("TypedBooleanSet class", () => {
  it("TypedBooleanSet with typing function", () => {
    const typedSet = new TypedBooleanSet();
    typedSet.add(true);
    typedSet.add(false);
    typedSet.add(true);

    expect(typedSet.size).toEqual(2);

    expect(() => {
      typedSet.add("string");
    }).toThrow(ExpectedError);
  });
});

describe("TypedFunctionSet class", () => {
  it("TypedFunctionSet with typing function", () => {
    const typedSet = new TypedFunctionSet();
    typedSet.add(() => {});
    typedSet.add(Array.prototype.indexOf);
    typedSet.add(Number);

    expect(typedSet.size).toEqual(3);

    expect(() => {
      typedSet.add("string");
    }).toThrow(ExpectedError);
  });
});

describe("TypedNumberSet class", () => {
  it("TypedNumberSet with typing function", () => {
    const typedSet = new TypedNumberSet();
    typedSet.add(1);
    typedSet.add(2);
    typedSet.add(1);

    expect(typedSet.size).toEqual(2);

    expect(() => {
      typedSet.add("string");
    }).toThrow(ExpectedError);
  });
});

describe("TypedStringSet class", () => {
  it("TypedStringSet with typing function", () => {
    const typedSet = new TypedStringSet();
    typedSet.add("one");
    typedSet.add("two");
    typedSet.add("one");

    expect(typedSet.size).toEqual(2);

    expect(() => {
      typedSet.add(1);
    }).toThrow(ExpectedError);
  });
});

describe("TypedSymbolSet class", () => {
  it("TypedSymbolSet with typing function", () => {
    const typedSet = new TypedSymbolSet();
    typedSet.add(Symbol.iterator);
    typedSet.add(Symbol("test"));
    typedSet.add(Symbol(1));

    expect(typedSet.size).toEqual(3);

    expect(() => {
      typedSet.add("string");
    }).toThrow(ExpectedError);
  });
});
