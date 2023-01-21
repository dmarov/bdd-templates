import { ArrayShuffle } from './array-shuffle';
import { mathGenerator } from './generators';

const array = [1, 2, 3, 4, 5];
const instance = new ArrayShuffle(mathGenerator);

const result = instance.shuffle(array);

console.log(result);
