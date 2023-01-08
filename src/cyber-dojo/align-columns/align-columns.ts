import { Mapper } from './mapper';

export class AlignColumns {
  private static getMaxLengths(model: string[][]): number[] {
    const maxLens: number[] = [];

    model.forEach((row) => {
      row.forEach((value, j) => {
        if (maxLens[j] === undefined) {
          maxLens[j] = 0;
        }

        if (value.length > maxLens[j]) {
          maxLens[j] = value.length;
        }
      });
    });

    return maxLens;
  }

  static align(str: string, gap: number): string {
    const model = Mapper.parse(str);
    const maxLens = this.getMaxLengths(model);

    model.forEach((row, i) => {
      row.forEach((value, j) => {
        if (j === row.length - 1) {
          return;
        }

        const additionalLen = maxLens[j] - value.length;
        const additionalValue = ' '.repeat(additionalLen);
        model[i][j] = `${model[i][j]}${additionalValue}`;
      });
    });

    return Mapper.stringify(model, gap);
  }
}
