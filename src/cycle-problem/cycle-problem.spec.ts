import { CycleProblem } from './cycle-problem';

describe('cycle problem', () => {
  it('should return correct result for 1', () => {
    const fn = `
function(x) {
  if (x % 2 === 1) {
    return (3 / 1) * x + (1 / 1);
  }

  return (1 / 2) * x + (0 / 1);
}`;

    const result = CycleProblem.resolve(fn, 1);

    const expected = `
function(x) {
  if (x % 2 === 1) {
    return (3 / 1) * x + (1 / 1);
  }

  return (1 / 2) * x + (0 / 1);
}`;

    expect(result).toEqual(expected);
  });

  it('should return correct result for 2', () => {
    const fn = `
function(x) {
  if (x % 2 === 1) {
    return (3 / 1) * x + (1 / 1);
  }

  return (1 / 2) * x + (0 / 1);
}`;

    const result = CycleProblem.resolve(fn, 2);

    const expected = `
function(x) {
  if (x % 2 === 1) {
    return (3 / 2) * x + (1 / 2);
  }

  if (x % 4 === 2) {
    return (3 / 2) * x + (1 / 1);
  }

  return (1 / 4) * x + (0 / 1);
}`;

    expect(result).toEqual(expected);
  });
});
