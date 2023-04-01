import { assertBooleanEqual } from './assertions/assert-boolean-equal';
import { TestCaseError } from './errors/test-case-error';
import { TestCaseState } from './models/test-case-state';
import { TestCase } from './test-case';

/* TODO
 * 1. should have status before run
 * 2. should invoke test method
 * 3. should assert equal boolean values
 * 4. should assert unequal boolean values
 * 5. should have no error present in case of success
 * 6. should have error of correct type set on error
 */

(() => {
  const testCase = new TestCase('should have "no ran" state before run', () => {});

  if (testCase.getState() !== TestCaseState.NotRan) {
    throw new Error('should have status before run failed');
  }
})();

(() => {
  let success = false;

  const testCase = new TestCase('should invoke test method', () => {
    success = true;
  });

  testCase.run();

  if (!success) {
    throw new Error('should invoke test method failed');
  }
})();

(() => {
  const testCase = new TestCase('should assert equal boolean values', () => {
    assertBooleanEqual(true, true);
  });

  testCase.run();

  if (testCase.getState() !== TestCaseState.Succeeded) {
    throw new Error('should assert equal boolean values failed');
  }
})();

(() => {
  const testCase = new TestCase('should assert unequal boolean values', () => {
    assertBooleanEqual(true, false);
  });

  testCase.run();

  if (testCase.getState() !== TestCaseState.Failed) {
    throw new Error('should assert unequal boolean values failed');
  }
})();

(() => {
  const testCase = new TestCase('should have no error present in case of success', () => {
    assertBooleanEqual(true, true);
  });

  testCase.run();

  const error = testCase.getError();

  if (error !== null) {
    throw new Error('should have no error present in case of success failed');
  }
})();

(() => {
  const testCase = new TestCase('should have error of correct type set on error', () => {
    assertBooleanEqual(true, false);
  });

  testCase.run();

  const error = testCase.getError();

  if (!(error instanceof TestCaseError)) {
    throw new Error('should have error of correct type set on error failed');
  }
})();
