import { TestCaseState } from './models/test-case-state';
import { tests } from './test-case.spec';

let success = true;

tests.forEach((t) => {
  t.run();

  const details = t.getInvocationDetails();

  if (details.state !== TestCaseState.Succeeded) {
    success = false;
    console.log(`
Failed test:
${details.name}
Error name:
${details.error?.name}
Error message:
${details.error?.message}
`);
  }
});

if (!success) {
  process.exit(1);
}

console.log('All tests passed!!!');
