import { ArrayShuffle } from './array-shuffle/array-shuffle';
import { MathRandomGenerator } from './normalized-generators/math-random';

const steps = 100000;
const length = 100;
const totals = Array.from({ length }).map(() => 0);

for (let i = 0; i < steps; i += 1) {
  const array = Array.from({ length }).map((v, j) => j);
  const instance = new ArrayShuffle(() => new MathRandomGenerator());
  const result = instance.shuffle(array);

  for (let k = 0; k < length; k += 1) {
    totals[k] += result[k];
  }
}

totals.forEach((v, i) => {
  totals[i] = v / steps;
});

console.log(totals);
