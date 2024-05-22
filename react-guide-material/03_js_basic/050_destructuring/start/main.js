// const arry = ["配列1", "配列2", "配列3"];
const [ a,b,c ] = ["配列1", "配列2", "配列3"];

// console.log(arry[0]);
// console.log(arry[2]);
// console.log(a);


// const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
const {x,z} = {x: "o1", y:"o2", z:"o3"};

// console.log(obj.x);
// console.log(obj.y);
// console.log(x)

const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

const fnArr = (arry) => {
  console.log("---配列---");
  console.log(`country: ${arry[0]}`);
  console.log(`state: ${arry[1]}`);
  console.log(`city: ${arry[2]}`);
};

const fnArr1 = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};


const fnObj = ({country, state, city}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr1(arr);
fnObj(objAddress);
