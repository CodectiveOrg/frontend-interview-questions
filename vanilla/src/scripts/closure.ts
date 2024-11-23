function withCounter() {
  let count = 0;

  return function (a, b) {
    count++;
    console.log(`called ${count} times.`);

    return a + b;
  };
}

const sum = withCounter();
sum(1, 2);
sum(23, 42);

const sum2 = withCounter();
sum2(1, 2);
sum2(23, 42);

sum(23, 42);
