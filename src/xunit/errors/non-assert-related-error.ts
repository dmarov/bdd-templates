import { TestCaseError } from './test-case-error';

export class NonAssertRelatedError extends TestCaseError {
  constructor() {
    super('NonAssertRelated failed');
    this.name = 'NonAssertRelatedError';
  }
}
