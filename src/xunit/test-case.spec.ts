import { TestCaseError } from './errors/test-case-error';
import { TestCaseState } from './models/test-case-state';
import { TestCase } from './test-case';

/** TODO
 * MVP
 * 1. should have "not ran" state before run
 * 2. should invoke test method
 * 3. should failed state if error occured
 * 4. should have error of correct type if error occured
 */

/** TODO
 * Extra features
 * 1. improve assert functions
 * 2. should have descriptive test invocation result if test with boolean assertion succeeded
 * 3. should fail test with no assertions
 * 4. run test suite
 * 5. generalize assert equal to all types
 * 6. implement file system test watcher/runner
 */

export const tests = [
  new TestCase('should have "not ran" state before run', () => {
    const testCase = new TestCase('should be dummy', () => {});

    if (testCase.getInvocationDetails().state !== TestCaseState.NotRan) {
      throw new Error('should have "not ran" state before run failed');
    }
  }),

  new TestCase('should invoke test method', () => {
    let success = false;

    const testCase = new TestCase('should set flag to true', () => {
      success = true;
    });

    testCase.run();

    if (!success) {
      throw new Error('should invoke test method failed');
    }
  }),

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
];
