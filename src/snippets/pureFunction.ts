type Prop = string | number;

type Obj = Record<Prop, unknown>;

export const removeObjectProperty = <O extends Obj, K extends keyof O>(
  obj: O,
  key: K
): Omit<O, K> => {
  return Object.entries(obj)
    .filter(([currKey]) => currKey !== key)
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value
      }),
      {} as Omit<O, K>
    );
};

const initObject = { 0: "Piotr", 1: "Jacob" };

const ob = removeObjectProperty(initObject, 1);
const ob1 = removeObjectProperty(initObject, 1);
const ob2 = removeObjectProperty(initObject, 1);

console.log(initObject); // init object it's not changed
console.log(ob, ob1, ob2); // every object is totaly new object
