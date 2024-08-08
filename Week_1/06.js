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
const getUserName = (user) => {
    if (!user.name) {
        return "신원미상";
    }
    return user.name;
}

const person = {
    age: 30,
}
console.log(getUserName(person))