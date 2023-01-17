export class SetGen {
  static generate(n: number): number[][] {
    if (n <= 0) {
      throw new Error('invalid input');
    }

    if (n === 1) {
      return [[0]];
    }

    const prev = this.generate(n - 1);

    const result: number[][] = [];

    for (let i = 0; i < prev.length; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const newEntry = [...prev[i]];
        newEntry.splice(n - 1 - j, 0, n - 1);
        result.push(newEntry);
      }
    }

    return result;
  }
}
