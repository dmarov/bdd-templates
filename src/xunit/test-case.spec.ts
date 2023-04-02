import { TestCaseState } from './models/test-case-state';
import { assertTrue, TestCase } from './test-case';

/**
 * MVP
 * 1. should have failed state if error occured
 * 2. should have succeeded state if no error occured
 * 3. should have "not ran" state before test has been ran
 */

const mvpTests: ReadonlyArray<TestCase> = [
  new TestCase('should have failed state if error occured', () => {
    const testCase = new TestCase('should fail', () => {
      throw new Error('this is error');
    });

    testCase.run();

    if (testCase.getState() !== TestCaseState.Failed) {
      throw new Error('should have failed state if error occured failed');
    }
  }),

  new TestCase('should have succeeded state if no error occured', () => {
    const testCase = new TestCase('should not fail', () => {

    });

    testCase.run();

    if (testCase.getState() !== TestCaseState.Succeeded) {
      throw new Error('should have succeeded state if no error occured');
    }
  }),

  new TestCase('should have "not ran" state before test has been ran', () => {
    const testCase = new TestCase('should be dummy', () => {

    });

    const state = testCase.getState();

    testCase.run();

    if (state !== TestCaseState.NotRan) {
      throw new Error('should have "not ran" state before test has been ran failed');
    }
  }),
];

/** TODO
 * Extra features
 * 1. should have succeeded state after assert true equal true
 * 2. should have failed state after assert true equal false
 * 3. should have descriptive test invocation result if test with boolean assertion succeeded
 * 4. should fail test with no assertions
 * 5. run test suite
 * 6. generalize assert equal to all types
 * 7. implement file system test watcher/runner
 */

const extraTests: ReadonlyArray<TestCase> = [
  new TestCase('should have succeeded state after assert true equal true', () => {
    const testCase = new TestCase('should assert true equal true', () => {
      assertTrue(true);
    });

    testCase.run();

    if (testCase.getState() !== TestCaseState.Succeeded) {
      throw new Error('should have succeeded state after assert true equal true failed');
    }
  }),

  new TestCase('should have failed state after assert true equal false', () => {
    const testCase = new TestCase('should assert false equal true', () => {
      assertTrue(false);
    });

    testCase.run();

    if (testCase.getState() !== TestCaseState.Failed) {
      throw new Error('should have failed state after assert false equal true failed');
    }
  }),
];

export const tests: ReadonlyArray<TestCase> = [...mvpTests, ...extraTests];
