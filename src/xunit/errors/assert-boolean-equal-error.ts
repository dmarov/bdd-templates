import { TestCaseError } from './test-case-error';

export class AssertBooleanEqualError extends TestCaseError {
  constructor() {
    super('AssertBooleanEqual failed');
    this.name = 'AssertBooleanEqualError';
  }
}
