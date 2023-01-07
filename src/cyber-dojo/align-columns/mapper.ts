export class Mapper {
  static parse(str: string): string[][] {
    const lines = str.split('\n');
    const result: string[][] = [];

    lines.forEach((line) => {
      const values = line.split('$');
      const last = values.length - 1;

      if (values[last].length === 0) {
        values.splice(last, 1);
      }

      result.push(values);
    });

    return result;
  }

  static stringify(model: string[][], gap: number): string {
    const lines: string[] = [];
    const separator = ' '.repeat(gap);

    model.forEach((values) => {
      const line = values.join(separator);
      lines.push(line);
    });

    return lines.join('\n');
  }
}
