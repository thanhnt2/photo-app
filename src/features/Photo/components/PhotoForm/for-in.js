const student = {
  id: 1,
  name: "Van A",
  isHero: true,
};

// for(let key in student) {
//     console.log('key: ', key);
//     console.log('value: ', student[key]);
// }

// const keyList = Object.keys(student);

// console.log(keyList)

// for(let i = 0; i<keyList.length;i++){
//     const key = keyList[i];

//     console.log('key: ', key);
//     console.log('value: ', student[key]);
// }

Object.keys(student).forEach((key) => {
  console.log("key: ", key);
  console.log("key: ", student[key]);
});

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ id: 1 }));
