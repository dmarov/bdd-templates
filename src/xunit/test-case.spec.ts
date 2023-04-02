import { TestCaseState } from './models/test-case-state';
import { assertTrue, TestCase } from './test-case';

/**
 * MVP
 * 1. should have failed state if error occured
 * 2. should have succeeded state if no error occured
 * 3. should have "not ran" state before test has been ran
 */

const mvpTests: ReadonlyArray<TestCase> = [
  new TestCase('should have "not ran" state before test has been ran', () => {
    const testCase = new TestCase('should be dummy', () => {

    });

    const state = testCase.getState();

    if (state !== TestCaseState.NotRan) {
      throw new Error('should have "not ran" state before test has been ran failed');
    }
  }),

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
];

/** TODO
 * Extra features
 * 1. should run test suite
 * 2. implement file system test watcher/runner
 * 3. should have succeeded state after assert true equal true
 * 4. should have failed state after assert false equal true
 * 5. should have detailed error description for failed test
 * 6. should have warning for tests with no assertions
 * 7. generalize assert equal to all types
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

  new TestCase('should have succeeded state if all test cases succeed', () => {
    const testCase1 = new TestCase('should succeed', () => {

    });

    const testCase2 = new TestCase('should succeed', () => {

    });

    const testSuite = new TestSuite('TestSuite test', [testCase1, testCase2]);

    testSuite.run();

    if (testCase1.getState() !== TestCaseState.Succeeded && testCase2.getState() !== TestCaseState.Succeeded) {
      throw new Error('should run test suite failed');
    }
  }),
];

export const tests: ReadonlyArray<TestCase> = [...mvpTests, ...extraTests];
