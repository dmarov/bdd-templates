Given function:

const f1 = function(x) => {
 if (x % 2 === 1) {
   return 3 * x + 1;
 }

 return x / 2;
}

const f2 = function(x) => {
  if (x % 2 === 1) {
    return (3 / 2) * x + (1 / 2);
  }

  if (x % 4 === 2) {
    return (3 / 2) * x + 1;
  }

  return x / 4;
}

const f3 = ...

For given `n` print `fn`.
