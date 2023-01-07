import { Mapper } from './mapper';

export class AlignColumns {
  static align(str: string, gap: number): string {
    const model = Mapper.parse(str);
    const maxLen: number[] = [];

    model.forEach((row) => {
      row.forEach((value, j) => {
        if (j !== row.length - 1) {
          if (maxLen[j] === undefined) {
            maxLen[j] = 0;
          }

          if (value.length > maxLen[j]) {
            maxLen[j] = value.length;
          }
        }
      });
    });

    model.forEach((row, i) => {
      row.forEach((value, j) => {
        if (j !== row.length - 1) {
          const additionalLen = maxLen[j] - value.length;
          const additionalValue = ' '.repeat(additionalLen);
          model[i][j] = `${model[i][j]}${additionalValue}`;
        }
      });
    });

    return Mapper.stringify(model, gap);
  }
}
