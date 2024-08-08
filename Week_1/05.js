// Template Literals
// 템플릿 리터럴은 변수와 표현식을 문자열 안에 쉽게 삽입할 수 있게 해주는 문법 입니다.
// const customer = {
//     name: "르탄이",
// };
// const item = {
//     name: "커피",
//     price: 4000,
// }

// console.log(
//     "감사합니다." +
//     customer.name +
//     "님!" +
//     item.name +
//     "을(를)" +
//     item.price +
//     "원에 구매하셨습니다."
// );

// console.log(`감사합니다. ${customer.name}님!`)

// const orderDetails = "고객 : " + customer.name + "\n" +
//     "상품 : " + item.name + "\n" +
//     "가격 : " + item.price;

// console.log(orderDetails);

// const orderDetails2 = `고객 : ${customer.name}
// 상품 : ${item.name}
// 가격 : ${item.price}
// `;

// console.log(orderDetails2)

// Destructuring
// De : not
// structuring : 구조
const item = {
    name: "커피",
    price: 4000,
};

// const name = item.name;
// const price = item.price;
const { name, price } = item;

console.log("name => ", name);
console.log("price => ", price);

function greet(person) {
    console.log(`안녕하세요. 제 이름은 ${person.name}입니다. 나이는 ${person.age}에요.`);
}

const person = {
    name: "르순이",
    age: 28,
};
greet(person);
// Spread Operators