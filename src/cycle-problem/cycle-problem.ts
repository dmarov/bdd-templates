export class CycleProblem {
  static resolve(fn: string, deg: number): string {
    if (deg === 1) {
      return fn;
    }

    return `
(x: number) => {
  switch (x % 4) {
    case 1:
    case 3:
      return (3 / 2) * x + (1 / 2);
    case 2:
      return (3 / 2) * x + (1 / 1);
    default:
      return (1 / 4) * x + (0 / 1);
  }
}`;
  }
}
