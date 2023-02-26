export class ArrayTransform {
  static transform<T>(array: T[], transformation: number[]): T[] {
    return array.map((v, i) => array[transformation[i]]);
  }
}
