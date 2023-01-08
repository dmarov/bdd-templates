import { CycleProblem } from './cycle-problem';

describe('cycle problem', () => {
  it('should return correct result for 1', () => {
    const fn = `
(x: number) => {
  switch (x % 2) {
    case 1:
      return (3 / 1) * x + (1 / 1);
    default:
      return (1 / 2) * x + (0 / 1);
  }
}`;

    const result = CycleProblem.resolve(fn, 1);

    const expected = `
(x: number) => {
  switch (x % 2) {
    case 1:
      return (3 / 1) * x + (1 / 1);
    default:
      return (1 / 2) * x + (0 / 1);
  }
}`;

    expect(result).toEqual(expected);
  });

  it('should return correct result for 2', () => {
    const fn = `
(x: number) => {
  switch (x % 2) {
    case 1:
      return (3 / 1) * x + (1 / 1);
    default:
      return (1 / 2) * x + (0 / 1);
  }
}`;

    const result = CycleProblem.resolve(fn, 2);

    const expected = `
(x: number) => {
  switch (x % 4) {
    case 1:
    case 3:
      return (3 / 2) * x + (1 / 2);
    case 2:
      return (3 / 2) * x + 1;
    default:
      return x / 4;
  }
}`;

    expect(result).toEqual(expected);
  });
});
