import { assertTrue } from './assertions/assert-true';
import { AssertTrueError } from './errors/assert-true-error';
import { NonAssertRelatedError } from './errors/non-assert-related-error';
import { TestCaseError } from './errors/test-case-error';
import { TestCaseState } from './models/test-case-state';
import { TestCase } from './test-case';

/** TODO
 * MVP
 * 1. should have "not ran" state before run
 * 2. should invoke test method
 * 3. should have non assert-related error if non assert-related error occured
 * 4. should succeed on assert true equal true
 * 5. should fail on assert true equal false
 * 6. should have no error present on assert true equal true
 * 7. should have error of correct type set on assert true equal false
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

  new TestCase('should have non assert-related error if non assert-related error occured', () => {
    const testCase = new TestCase('should throw non assert-related error', () => {
      throw new Error('this is non assert-related error');
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (!(error instanceof NonAssertRelatedError)) {
      throw new Error('should have non assert-related error if non assert-related error occured failed');
    }
  }),

  new TestCase('should succeed on assert true equal true', () => {
    const testCase = new TestCase('should assert true equal true', () => {
      assertTrue(true);
    });

    testCase.run();

    if (testCase.getInvocationDetails().state !== TestCaseState.Succeeded) {
      throw new Error('should succeed on assert true equal true failed');
    }
  }),

  new TestCase('should fail on assert true equal false', () => {
    const testCase = new TestCase('should assert true equal false', () => {
      assertTrue(false);
    });

    testCase.run();

    if (testCase.getInvocationDetails().state !== TestCaseState.Failed) {
      throw new Error('should fail on assert true equal false failed');
    }
  }),

  new TestCase('should have no error present on assert true equal true', () => {
    const testCase = new TestCase('should assert true equal true', () => {
      assertTrue(true);
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (error !== null) {
      throw new Error('should have no error present on assert true equal true failed');
    }
  }),

  new TestCase('should have error of correct type set on assert true equal false', () => {
    const testCase = new TestCase('should assert true equal false', () => {
      assertTrue(false);
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (!(error instanceof AssertTrueError)) {
      throw new Error('should have error of correct type set on assert true equal false failed');
    }
  }),

  new TestCase('should have error of correct type set on assert true equal false', () => {
    const testCase = new TestCase('should assert true equal false', () => {
      throw new Error('this is non assert-related error');
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (!(error instanceof NonAssertRelatedError)) {
      throw new Error('should have error of correct type set on assert true equal false failed');
    }
  }),
];
