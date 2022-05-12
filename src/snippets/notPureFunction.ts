type Prop = string | number;

type Obj = Record<Prop, unknown>;

let numberOfRemovedProps = 0;

export const removeObjectProperty = <O extends Obj, K extends keyof O>(
  obj: O,
  key: K
): Omit<O, K> => {
  delete obj[key];
  numberOfRemovedProps++;
  return obj;
};

const initObject = { 0: "Piotr", 1: "Jacob" };

// That's not pure function. We changing object
// from outer scope after function call.
const ob = removeObjectProperty(initObject, 1);

// Also after second call the result of function is different - function is not predictable.

console.log(initObject, ob); // { 0: 'Piotr' }, { 0: 'Piotr' }

removeObjectProperty(initObject, 0); // {}, {};

// Also this function have side effect - incrementing value from outer scope.
console.log(numberOfRemovedProps); // 2
