import { TestCase } from './test-case';
import { XUnitCli } from './xunit-cli';

export const tests: ReadonlyArray<TestCase> = [
  new TestCase('should watch for specified tests', () => {
    const code = `
it('should run test', () => {
  assertTrue(true);
});
`;
    const cli = new XUnitCli([code]);

    cli.watch();
  }),
];
