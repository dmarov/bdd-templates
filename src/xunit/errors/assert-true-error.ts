import { TestCaseError } from './test-case-error';

export class AssertTrueError extends TestCaseError {
  constructor() {
    super('AssertTrue failed');
    this.name = 'AssertTrueError';
  }
}
