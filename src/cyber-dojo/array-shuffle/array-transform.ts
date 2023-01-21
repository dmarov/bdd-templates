export class ArrayTransform {
  static transform<T>(array: T[], transformation: number[]): T[] {
    const result: T[] = Array.from({ length: array.length })
      .map((v, i) => array[transformation[i]]);

    return result;
  }
}
