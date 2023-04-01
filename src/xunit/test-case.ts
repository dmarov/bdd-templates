import { TestCaseError } from './errors/test-case-error';
import { TestCaseState } from './models/test-case-state';

export class TestCase {
  private state: TestCaseState = TestCaseState.NotRan;

  private error: TestCaseError | null = null;

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

      if (e instanceof TestCaseError) {
        this.error = e;
      }
    }
  }

  getState(): TestCaseState {
    return this.state;
  }

  getError(): TestCaseError | null {
    return this.error;
  }
}
