import { TestCaseState } from './models/test-case-state';

export class TestCase {
  private state: TestCaseState = TestCaseState.NotRan;

  constructor(
    private readonly name: string,
    private readonly call: () => void,
  ) { }

  run(): void {
    try {
      this.call();
      this.state = TestCaseState.Succeeded;
    } catch (e) {
      this.state = TestCaseState.Failed;
    }
  }

  getState(): TestCaseState {
    return this.state;
  }

  getName(): string {
    return this.name;
  }
}

export const assertTrue = (value: boolean) => {
  if (value !== true) {
    throw new Error('AssertTrue error');
  }
};
