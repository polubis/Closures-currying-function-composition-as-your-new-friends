export const sum = (a: number, b: number) => a + b;
export const multiply = (a: number, b: number) => a * b;
export const log = (a: number, b: number) => {
  console.log(a, b);
};

// The result is composed from results of the called functions
log(sum(3, 4), multiply(3, 3)); // 7,9
