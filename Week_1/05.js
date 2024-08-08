// Template Literals
// 템플릿 리터럴은 변수와 표현식을 문자열 안에 쉽게 삽입할 수 있게 해주는 문법 입니다.
const customer = {
    name: "르탄이",
};
const item = {
    name: "커피",
    price: 4000,
}

console.log(
    "감사합니다." +
    customer.name +
    "님!" +
    item.name +
    "을(를)" +
    item.price +
    "원에 구매하셨습니다."
);

console.log(`감사합니다. ${customer.name}님!`)

// Destructuring

// Spread Operators