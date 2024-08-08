// 객체 : key - value
// JSON(JavaScript Object Notation)

const user = {
    name: "르탄이",
    age: 30,
    isAdmen: true,
    printHello: () => console.log("hello"),
};

user.email = "jay@gmail.com"; // 추가
user.age = 31; // 수정
delete user.isAdmen;

console.log(user);