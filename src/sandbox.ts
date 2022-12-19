//TYPE ALIASES

type StringOrNum = string | number;
type objWName = {
  name: string;
  uid: StringOrNum;
};

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWName) => {
  console.log(`Hello, ${user.name}`);
};
