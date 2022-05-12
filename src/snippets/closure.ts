const counter = () => {
  let a = 0;

  const count = () => {
    console.log(a);
    a++;
  };

  return count;
};

const count = counter();

count(); // 0
count(); // 1
count(); // 2
