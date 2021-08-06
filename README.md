# typed-set [![NPM version](https://img.shields.io/npm/v/typed-set.svg?style=flat)](https://www.npmjs.com/package/typed-set)

## Motivation
Unlike Typescript, type checking will be done at runtime.

## Difference from the native Set
An array of initial values cannot be passed during initialization.

## Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save typed-set
```

## Usage

> TypedSet only works with the following function signatures

> ``` f(value: any) => boolean ```

> Notice: if the function returns a non-boolean value, the result of the check will be skipped

```js
const TypedSet = require("typed-set");

class TestClass {}

// you can omit validation
let classicSet = new TypedSet();

// you can pass expected type as string for typeof comparison
let stringTypedSet = new TypedSet("string");

// you can pass expected class for instanceof comparison
let classTypedSet = new TypedSet(TestClass);

// you can pass function with type comparison
let anotherStringTypedSet = new TypedSet((value) => typeof value === "string");

// you can pass function with instanceof comparison
let objectTypedSet = new TypedSet((value) => value instanceof TestClass);

// you can pass function with any conditions
let typedSet = new TypedSet((value) => [1, 2, 3].includes(value));

// then use like a classic Set
typedSet.add(1);
typedSet.add(2);
typedSet.add(3);

// and catch Error when incompatible type added
try {
    typedSet.add("some incompatible type");
} catch (e) {
    console.log(e.message); // "Incompatible type of value" 
}
```

> List of predefined TypedSet classes for primitive types
> - TypedSet.TypedBigIntSet
> - TypedSet.TypedBooleanSet
> - TypedSet.TypedFunctionSet
> - TypedSet.TypedNumberSet
> - TypedSet.TypedStringSet
> - TypedSet.TypedSymbolSet

## License

The typed-set package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
