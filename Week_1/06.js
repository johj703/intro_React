// 화살표 함수
const add = (a, b) => {
    return a + b;
};

// console.log(add(1, 3));

// 조건 연산자 = 삼항 연산자

const score = 85;
const grade = score >= 80 ? "A" : "B";

// if (score > 80) {
//     grade = "A";
// } else {
//     grade = "B"
// }

// console.log(grade);

// 단축 평가
// 논리 연산자를 활용(||, &&, ?. , ??)

// (1) 논리합 연산자(||)
// truthy, falsy
// falsy : false, 0, "", null, undefined, NaN
const getUserName = (user) => user.name || "신원미상";

const person = {
    age: 30,
    name: "르순이",
}
// console.log(getUserName(person))

// (2) 논리곱(&&) 연산자

const loggedIn = true;
const userName = "르탄이";

// loggedIn && console.log(`환영합니다 ${userName}`);

// (3) optional chaining
const user = {
    profile2: {
        name: "르탄이",
        details: {
            age: 30,
            location: "서울시 강남구",
        }
    },
    printHello: () => console.log("Hello"),
};

const result = user.printHello1?.();
console.log(result);