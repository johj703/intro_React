// 객체
// (1) Object.keys()
const user = {
    name: "르탄이",
    age: 30,
    isAdmin: true,
};
const keys = Object.keys(user);
// console.log(keys);

// (2) Object.values()
const values = Object.values(user);
// console.log(values);

// (3) entries - 배열 안에 배열을 만들어서 속성별로 Key - Value 값을 나타내준다.
const entries = Object.entries(user);
// console.log(entries);

// (4) assign
const userDetails = {
    occupation: "개발자",
};
Object.assign(user, userDetails);
// console.log(user);

// 배열
// push, pop
const fruits = ["Apple", "Banana"];
// console.log(fruits);

// orange를 추가
fruits.push("Orange");
// console.log(fruits);

// orange를 제거
const lastFruit = fruits.pop();
// console.log("----");
// console.log(lastFruit);
// console.log(fruits);

// map: 원본 배열에서 각 요소를 가공한 새로운 배열을 리턴하는 함수

// 1) 배열 내의 모든 요소 각각에 대해
// 2) 주어진 함수를 호출한 결과를 모아
// 3) 새로운 배열을 반환
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(function (num) {
//     return num * num;
// });

// [1, 4, 9, 16, 25]
// console.log(squared);

// filter
// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function (num) {
//     return num % 2 === 0;
// });

// [2, 4]
// console.log(evenNumbers);

// const 동영상리스트 = {
//     {
//     아이디: 1,
//         제목: "동영상01",
//             썸네일이미지: "image01.jpg"
// },
// {
//     아이디: 2,
//         제목: "동영상02",
//             썸네일이미지: "image02.jpg"
// },
// {
//     아이디: 3,
//         제목: "동영상03",
//             썸네일이미지: "image03.jpg"
// },
// };

// const 필터링된동영상리스트 = 동영상리스트.filter(function (영상) {
//     return 영상.제목 === "동영상02";
// })

// reduce
const numbers = [1, 2, 3, 4, 5];

numbers.reduce(function (누적된값, 일반값) {
    console.log("---------")
    console.log(누적된값);
    console.log(일반값);

    return 누적된값 + 일반값;
});
