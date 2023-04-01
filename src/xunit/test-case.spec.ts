import { assertBooleanEqual } from './assertions/assert-boolean-equal';
import { NonAssertRelatedError } from './errors/non-assert-related-error';
import { TestCaseError } from './errors/test-case-error';
import { TestCaseState } from './models/test-case-state';
import { TestCase } from './test-case';

/** TODO
 * MVP
 * 1. should have status before run
 * 2. should invoke test method
 * 3. should assert equal boolean values
 * 4. should assert unequal boolean values
 * 5. should have no error present in case of success
 * 6. should have error of correct type set on error
 * 7. should have non assert-related error if non assert-related error occured
 */

/** TODO
 * Extra features
 * 1. should have descriptive test invocation result if test with boolean assertion succeeded
 * 1. should fail test with no assertions
 * 2. run test suite
 * 3. generalize assert equal to all types
 * 4. implement file system test watcher/runner
 */

const tests = [
  new TestCase('should have "no ran" state before run', () => {
    const testCase = new TestCase('should be dummy', () => {});

    if (testCase.getInvocationDetails().state !== TestCaseState.NotRan) {
      throw new Error('should have status before run failed');
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

  new TestCase('should assert equal boolean values', () => {
    const testCase = new TestCase('should assert true equal true', () => {
      assertBooleanEqual(true, true);
    });

    testCase.run();

    if (testCase.getInvocationDetails().state !== TestCaseState.Succeeded) {
      throw new Error('should assert equal boolean values failed');
    }
  }),

  new TestCase('should assert unequal boolean values', () => {
    const testCase = new TestCase('should assert true equal false', () => {
      assertBooleanEqual(true, false);
    });

    testCase.run();

    if (testCase.getInvocationDetails().state !== TestCaseState.Failed) {
      throw new Error('should assert unequal boolean values failed');
    }
  }),

  new TestCase('should have no error present in case of success', () => {
    const testCase = new TestCase('should assert true equal true', () => {
      assertBooleanEqual(true, true);
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (error !== null) {
      throw new Error('should have no error present in case of success failed');
    }
  }),

  new TestCase('should have error of correct type set on error', () => {
    const testCase = new TestCase('should assert true equal false', () => {
      assertBooleanEqual(true, false);
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (!(error instanceof TestCaseError)) {
      throw new Error('should have error of correct type set on error failed');
    }
  }),

  new TestCase('should have non assert-related error if non assert-related error occured', () => {
    const externalError = new Error('this is non assert-related error');

    const testCase = new TestCase('should throw non assert-related error', () => {
      throw externalError;
    });

    testCase.run();

    const { error } = testCase.getInvocationDetails();

    if (!(error instanceof NonAssertRelatedError)) {
      throw new Error('should have non assert-related error if non assert-related error occured failed');
    }
  }),
];

let success = true;

tests.forEach((t) => {
  t.run();

  const details = t.getInvocationDetails();

  if (details.state !== TestCaseState.Succeeded) {
    success = false;
    console.log(`Failed test: ${details.name}\nError name: ${details.error?.name}\nError message: ${details.error?.message}`);
  }
});

if (!success) {
  process.exit(1);
}
