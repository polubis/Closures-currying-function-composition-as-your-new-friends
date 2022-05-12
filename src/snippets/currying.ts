import { curry } from "ramda";

export const sum = (a: number, b: number): number => a + b;

// currying
export const curriedSum = (a: number) => (b: number) => a + b;

// auto currying
export const autoCurriedSum = curry(sum);

// Transformation from fn(a, b) to fn(a)(b) that's all
console.log(sum(3, 4), curriedSum(3)(4), autoCurriedSum(3)(4));
