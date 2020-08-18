# readme

## OLDO, not classic OOP

- OLOD = object linked to other object
- prototypal language, functional programming-like
- supports datatypes, but not strongly-typed (loosely-typed)
- datatypes = string, number (e.g, int, float, double, etc.), boolean, object, null, undefined
- boolean = truthy or falsy
    - falsy values = false, null, 0, undefined, NaN, empty string
- null vs undefined
    - null = empty/no value
    - undefined = empty/no container for, reference or pointer to a value
- conditionals = >, <, =>, =<, ==, ===, !=, !==
- '==' vs '==='
    - '==' allows for type coercion ((int) 1 == (string) "1", true)
    - '===' strict equality ((int) 1 === (int) 1, true, but (int) 1 === (string), false)
- '!=' vs '!=='
    - '!=' = type coercion inequality
    - '!==' = strict inequality
- all JS objects have the property of `proto`
    - comparing proto to classic oop
        - prototypes (animal, mammal, dog) => dog.proto = mammal, mammal.proto = animal
        ```
        Animal = Object.create();
        Animal.walk = function();
        Mammal = Object.create();
        Mammal.prototype = Animal;
        Dog = Object.create();
        Dog.prototype = Mammal;

        (Dog.prototype).prototype.walk();
        Dog.sleep() // undefined
        ```
        - objects (animal, mammal, dog) dog inherits from mammal inherits from animal
        ```
        class Animal { walk() }
        class Mammal : Animal {}
        class Dog : Mammal {}

        Dog.walk();
        Dog.sleep(); // error
        ```

## datatypes

- classic oop language, the container has a type, and the value must match said type
```
string/var s = "some string"; // explicit/implicit typing for s, and s cannot change type
s = 10; // error
// object s = any value/reference type
```

- prototypal language, the container has not type, and the value dictates the type
```
var s = "some string"; // s aliases/points to a value that happens to be a string
s = 10; // s points to another value that happens to be numeric
// in both lines, s is a typeless container, and the value holds its type
```

directives:
var = do not use unless the codebase is active
    - is bound to scope where defined
let = preferred/recommended for all new code
    - is bound to created self-scope
const = preferred/recommended for all new code
    - is bound to created self-scope