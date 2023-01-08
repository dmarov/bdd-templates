Given function:

const f1 = (x: number) => {
  switch (x % 2) {
    case 0:
      return (1 / 2) * x + (0 / 1);
    case 1:
      return (3 / 1) * x + (1 / 1);
  }
};

const f2 = (x: number) => {
  switch (x % 4) {
    case 0:
      return (1 / 4) * x + (0 / 1);
    case 1:
      return (3 / 2) * x + (1 / 2);
    case 2:
      return (3 / 2) * x + (1 / 1);
    case 3:
      return (3 / 2) * x + (1 / 2);
  }
}

const f3 = ...

For given `n` print `fn`.
