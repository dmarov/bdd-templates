export class TestCaseError extends Error {
  constructor() {
    super('TestCaseError occured');
    this.name = 'TestCaseError';
  }
}
