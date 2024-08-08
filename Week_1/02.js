// 객체 : key - value
// JSON(JavaScript Object Notation)

const user = {
    name: "르탄이",
    age: 30,
    isAdmen: true,
    printHello: () => console.log("hello"),
};

// 객체 접근 : 괄호 표기법
const attribute = "name";
console.log(user[attribute]);

// 객체 접근 : 점 표기법(.)
// console.log(user.name);
// console.log(user.age);
// user.printHello();