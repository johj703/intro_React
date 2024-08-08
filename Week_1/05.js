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
// const { name, price } = item;

// console.log("name => ", name);
// console.log("price => ", price);

// function greet({ age, name }) {
//     console.log(`안녕하세요. 제 이름은 ${name}입니다. 나이는 ${age}에요.`);
// }

// const person = {
//     name: "르순이",
//     age: 28,
// };
// greet(person);

// Spread Operators
const colors = ["red", "green", "blue"];
// const [firstColor, secondColor] = colors;
const [, , thirdColor] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);

// 문제1
/* 다음 자바스크립트 객체에서 name과 age를 디스트럭처링을 사용하여 추출하고 
출력하는 코드를 작성하세요. */

const person = {
    name: "르탄이",
    age: 25,
    job: "개발자"
};

const { name, age } = person;
// console.log(`안녕하세요 ${name}님, ${age}살 입니다.`)

// 문제2
/* 다음 자바스크립트 객체에서 title과 year를 디스트럭처링을 사용하여 추출하고
 출력하는 코드를 작성하세요. */
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    release: {
        year: 2010,
        month: "July"
    }
};

const { title, release: { year }, } = movie;
console.log(`영화의 제목은 ${title} / (${year}년도) 입니다.`)