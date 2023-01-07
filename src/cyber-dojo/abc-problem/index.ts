import { AbcProblem } from './abc-problem';

// True
console.log(AbcProblem.resolve('A'));

// True
console.log(AbcProblem.resolve('BARK'));

// False
console.log(AbcProblem.resolve('BOOK'));

// True
console.log(AbcProblem.resolve('TREAT'));

// False
console.log(AbcProblem.resolve('COMMON'));

// True
console.log(AbcProblem.resolve('SQUAD'));

// True
console.log(AbcProblem.resolve('CONFUSE'));
