import { TestCaseState } from './models/test-case-state';
import { TestCase } from './test-case';

/** TODO
 * MVP
 * 1. should have failed state if error occured
 * 2. should have succeeded state if no error occured
 * 3. should have "not ran" state before test has been ran
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

const essentialTests: ReadonlyArray<TestCase> = [
  new TestCase('should have failed state if error occured', () => {
    const testCase = new TestCase('should throw error', () => {
      throw new Error('this is error');
    });

    testCase.run();

    const state = testCase.getState();

    if (state !== TestCaseState.Failed) {
      throw new Error('should have failed state if error occured failed');
    }
  }),

  new TestCase('should have succeeded state if no error occured', () => {
    const testCase = new TestCase('should be dummy', () => {

    });

    testCase.run();

    const state = testCase.getState();

    if (state !== TestCaseState.Succeeded) {
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

const extraTests: ReadonlyArray<TestCase> = [

];

export const tests: ReadonlyArray<TestCase> = [...essentialTests, ...extraTests];
