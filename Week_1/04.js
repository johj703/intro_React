// 객체
// (1) Object.keys()
const user = {
    name: "르탄이",
    age: 30,
    isAdmin: true,
};
const keys = Object.keys(user);
console.log(keys);

// (2) Object.values()
const values = Object.values(user);
console.log(values);

// (3) entries - 배열 안에 배열을 만들어서 속성별로 Key - Value 값을 나타내준다.
const entries = Object.entries(user);
console.log(entries);