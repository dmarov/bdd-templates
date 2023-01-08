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

const f3 = (x: number) => {
  switch (x % 8) {
    case 0:
      return (1 / 8) * x + (0 / 1);
    case 1:
      return (3 / 4) * x + (1 / 4);
    case 2:
      return (3 / 4) * x + (3 / 2);
    case 3:
      return (9 / 2) * x + (5 / 2);
    case 4:
      return (3 / 4) * x + (3 / 1);
    case 5:
      return (3 / 4) * x + (1 / 4);
    case 6:
      return (3 / 4) * x + (3 / 2);
    case 7:
      return (9 / 2) * x + (5 / 2);
  }
}

const f3 = ...

For given `n` print `fn`.
