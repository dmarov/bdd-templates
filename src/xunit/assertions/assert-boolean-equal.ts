import { AssertBooleanEqualError } from '../errors/assert-boolean-equal-error';

export const assertBooleanEqual = (a: boolean, b: boolean) => {
  if (a === b) {
    return true;
  }

  throw new AssertBooleanEqualError();
};
