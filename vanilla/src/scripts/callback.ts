function calculate(numbers, callback) {
  // calculation...
  const multiplied = numbers.map((x) => 2 * x);
  const result = callback(multiplied);
  return result.join("\n");
}

calculate([1, 2, 3], (items) => items.map((x) => x - 1));
