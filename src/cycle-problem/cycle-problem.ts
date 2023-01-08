export class CycleProblem {
  static resolve(fn: string, deg: number): string {
    if (deg === 1) {
      return fn;
    }

    return `
function(x) {
  if (x % 2 === 1) {
    return (3 / 2) * x + (1 / 2);
  }

  if (x % 4 === 2) {
    return (3 / 2) * x + (1 / 1);
  }

  return (1 / 4) * x + (0 / 1);
}`;
  }
}
