This is the secodn section of the course.
## Intro to JavaScript
it has four topics: 
1. Varaiables and Data Types
2. Functions and Methods
3. Making Decisions with JavaScript
4. Arrays and Loops

### Varaiables and Data Types
this section explains about the data types of Javascript. There are 7 data types in JavaScript.
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. Object

there are constant varaiables. that doesnt change the value 
there is a var and let keywords to declare the varaiables. you do not specify the data type of the varaiable. it is automatically determined by the value assigned to it.

`var` can be called before it is declared. `let` **cannot** be called before it is declared.

*arithmetic operators* and *string formatting* works quote the same as in python.

I liked the [exercises](https://css-tricks.com/snippets/javascript/) they provided about Javascript, and i found it useful.

### Functions and Methods
this section explains about the functions and methods in Javascript. For me, personally it looks quite similar to other programming languages. One difference is you do not specify the return type of the function. You just declare it saying `function name(parameters) { //code }`  
Methods are functions that are part of an object. like `cosole.log()` , *`log`* is a method of the *`console`* object.

Arguments
passing argument is similar to other programming languages. you can pass any number of arguments to a function. you can also pass a function as an argument to another function. But using arguments in String is quite different, you will use $ sign to access the arguments.

for example:
```javascript
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('World');
```
default values
we can also set the default values for the arguments. if the argument is not passed, the default value will be used. 
for example:
```javascript
function greet(name = 'World') { //default value is 'World', if no argument is passed 'Hello World' will be printed
    console.log(`Hello, ${name}!`);
}
greet();
```

anonymous functions
functions without a name are called anonymous functions. they are used as arguments to other functions. they are used to create a function that is used only once.
we can create it in two ways:
1. using the `function` keyword
2. using the `=>` operator

for example:
```javascript
setTimeout(function() { console.log('3 seconds has elapsed'); }, 
    3000);
```
or
```javascript
setTimeout(() => {console.log('3 seconds has elapsed');}, 
    3000);
```

using arrow functions are becoming popular, and this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provides all teh use cases of arrow functions.

