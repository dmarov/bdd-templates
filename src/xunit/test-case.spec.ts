import { TestCaseError } from './errors/test-case-error';
import { TestCaseState } from './models/test-case-state';
import { TestCase } from './test-case';

/** TODO
 * MVP
 * 1. should have failed state if error occured
 * 2. should have error of correct type if error occured
 * 3. should have succeeded state if no error occured
 * 4. should have no error if no error occured
 * 5. should have "not ran" state before test has been ran
 */

/** TODO
 * Extra features
 * 1. add assert functions
 * 2. should have descriptive test invocation result if test with boolean assertion succeeded
 * 3. should fail test with no assertions
 * 4. run test suite
 * 5. generalize assert equal to all types
 * 6. implement file system test watcher/runner
 */

export const tests = [
  new TestCase('should have failed state if error occured', () => {
    const testCase = new TestCase('should throw error', () => {
      throw new Error('this is error');
    });

    testCase.run();

    const { state } = testCase.getInvocationDetails();

    if (state !== TestCaseState.Failed) {
      throw new Error('should have failed state if error occured failed');
    }
  }),

  new TestCase('should have error of correct type if error occured', () => {
    const testCase = new TestCase('should throw error', () => {
      throw new Error('this is error');
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (!(error instanceof TestCaseError)) {
      throw new Error('should have error of correct type if error occured failed');
    }
  }),

  new TestCase('should have succeeded state if no error occured', () => {
    const testCase = new TestCase('should throw error', () => {

    });

    testCase.run();

    const { state } = testCase.getInvocationDetails();

    if (state !== TestCaseState.Succeeded) {
      throw new Error('should have succeeded state if no error occured');
    }
  }),

  new TestCase('should have no error if no error occured', () => {
    const testCase = new TestCase('should throw error', () => {
      throw new Error('this is error');
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (!(error instanceof TestCaseError)) {
      throw new Error('should have no error if no error occured failed');
    }
  }),

  new TestCase('should have "not ran" state before test has been ran', () => {
    const testCase = new TestCase('should throw error', () => {

    });

    const { state } = testCase.getInvocationDetails();

    testCase.run();

    if (state !== TestCaseState.NotRan) {
      throw new Error('should have "not ran" state before test has been ran failed');
    }
  }),
];
