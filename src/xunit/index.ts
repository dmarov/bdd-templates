import { TestCaseState } from './models/test-case-state';
import { tests } from './test-case.spec';

let success = true;

tests.forEach((t) => {
  t.run();

  const state = t.getState();
  const name = t.getName();

  if (state !== TestCaseState.Succeeded) {
    success = false;
    console.log(`Failed test: ${name}`);
  }
});

if (!success) {
  process.exit(1);
}

console.log('All tests passed!!!');
