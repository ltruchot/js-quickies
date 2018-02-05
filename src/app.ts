// WARNING: Decorators are tc39 stage 2 in february 2018
// confirmed since 2016, but could includes minor change
// you need a transpiler to use it (babel, typescript)
// @see https://github.com/tc39/proposal-decorators

// COME FROM: java annotation -> python decorators -> js decorators

// PARADYGM
// it's declarative vs imperative programming
// it's composition vs inheritance

// WHAT IS A DECORATOR
// like a decoration: something you can add to something else to enhance it
// a decorator is a function, that will wrap a class, a method, a property, etc.
// it will enhance the description of this thing, with some additional behaviors
// it's only usable with Object literals or class, and their methods/properties

// here is a classic literal object
const book1: any = {
  title: 'Crime et châtiment',
  author: 'Dostoievski'
};
// the shortcut to add a property is
// --> book1.type = 'roman';
// but if you want deeply define this property, you can use
Object.defineProperty(book1, 'type', {
  value: 'roman', // final value of book1.type
  enumerable: true, // visible in console or in for loop
  writable: true // rewritable anytime
  // ...etc.
});
// the third argument of Object.defineProperty method is a 'descriptor'
// so it contain the value of book1.type, and some useful metadata
console.log('------- BOOK -------');
console.log(book1);

// please explore the following class "Book" to understand what will happen next
import { Book } from './classes/book.class';

// now, if we create a second book
const book2 = new Book('Crime et châtiment', 'Dostoievski', [
  { mark: 3, comment: 'Was fun.' },
  { mark: 1, comment: 'Horrible.' }
]);
// and test the decorated getAverageMark method from it
console.log('------- DECORATED METHOD -------');
console.log('Average mark is', book2.getAverageMark());
