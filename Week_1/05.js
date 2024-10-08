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

// const person = {
//     name: "르탄이",
//     age: 25,
//     job: "개발자"
// };

// const { name, age } = person;
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
// console.log(`영화의 제목은 ${title} / (${year}년도) 입니다.`)

// 문제3
/* 다음 자바스크립트 배열에서 첫 번째와 세 번째 요소를 디스트럭처링을 사용하여 
추출하여 first, third 변수에 담아 출력하는 코드를 작성하세요.*/
const numbers = [10, 20, 30, 40, 50];

// 배열에서의 구조분해할당(index)은 위치가 중요
// const [first, , third] = numbers;
// console.log(first);
// console.log(third);

// 문제4
/* 호텔의 예약 확인 시스템의 함수라고 가정합니다.
 아래 결과와 같이 출력되도록 함수를 완성해 보세요. */
function confirmReservation(user) {
    // 여기에 user 객체를 구조 분해 할당 하세요.
    const { name, roomType, date: firstDate } = user;

    return `${name} 고객님의 ${roomType}룸 입실날짜는 ${firstDate} 입니다.`
}

const userInfo = {
    name: "James",
    roomType: "Deluxe",
    date: "2023-05-30"
}
// const result = confirmReservation(userInfo);
// console.log(result);

// Spread Operators => 객체나 배열을 복사할 때 많이 사용한다.
const originalUser = {
    name: "르탄이",
    age: 28,
};

// 어디에 복사!
// const updatedUser = originalUser;
// const updatedUser = { ...originalUser }
// updatedUser.name = "르순이",

//     console.log("원본 => ", originalUser);
// console.log("복사본 => ", updatedUser);

const first = [1, 2, 3];
const second = [4, 5, 6];

// [1, 2, 3, 4, 5, 6]
const combinedArray = [...first, ...second];
// console.log(combinedArray)

// 문제2
/* 
    다음 두 객체 `obj1`과 `obj2`가 주어졌을 때, 두 객체의 속성을 
    스프레드 연산자를 사용하여 병합한 새 객체 `mergedObj`를 생성하고 
    결과를 출력하세요.
    단, 같은 이름의 키가 존재할 경우 `obj2`의 값이 우선하여 반영되어야 합니다. 
    또한, `mergedObj`에서 `name` 속성의 값을 **'원장님'**으로 변경 후, 
    원본 객체 `obj1`과 `obj2`가 변경되지 않는 것을 확인하세요.
*/

const obj1 = { name: "르탄이", age: 25 };
const obj2 = { name: "르순이", email: "rsoony@sparta.com" };

const mergedObject = { ...obj1, ...obj2 };
// console.log("mergedObject", mergedObject);

mergedObject.name = "원장님";
// console.log(obj1);
// console.log(obj2);

// rest operator는 spread operator와 비슷하다.

// (1) 함수의 매개변수
// function sum(numbers) {
//     return numbers.reduce((acc, cur) => acc + cur);
// }

// const result = sum([1, 2, 3, 4, 5]);
// console.log(result);

// (2) 객체 분해 할당 시, 여러 값을 그룹핑
const person = {
    name: "John",
    age: 30,
    country: "USA",
    occupation: "Developer",
};

const { occupation, ...rest } = person;
console.log("rest => ", rest);