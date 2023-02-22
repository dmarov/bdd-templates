import { ArrayShuffle } from './array-shuffle/array-shuffle';
import { MathGenerator } from './normalized-generators/math';

const steps = 1000;
const totals = Array.from({ length: 100 }).map(() => 0);

for (let i = 0; i < steps; i += 1) {
  const array = Array.from({ length: 100 }).map((v, j) => j);
  const instance = new ArrayShuffle(() => new MathGenerator());
  const result = instance.shuffle(array);

  for (let k = 0; k < 100; k += 1) {
    totals[k] += result[k];
  }
}

console.log(totals);
