import { AssertTrueError } from '../errors/assert-true-error';

export const assertTrue = (value: boolean) => {
  if (!value) {
    throw new AssertTrueError();
  }
};
