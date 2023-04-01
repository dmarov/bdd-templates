import { TestCaseError } from './errors/test-case-error';
import { TestCaseState } from './models/test-case-state';

interface RunInfo {
  name: string;
  state: TestCaseState;
  error: TestCaseError | null;
}

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
      this.error = new TestCaseError();
    }
  }

  getInvocationDetails(): RunInfo {
    return {
      name: this.name,
      state: this.state,
      error: this.error,
    };
  }
}
