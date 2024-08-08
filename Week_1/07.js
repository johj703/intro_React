const myPromise = new Promise(function (resolve, reject) {
    if (true) {
        resolve("Success");
    } else {
        reject("Failed")
    }
});

// myPromise
//     .then(function (value) {
//         console.log(value)
//     })
//     .catch(function (value) {
//         console.log(value)
//     })

// async - await
async function fetchData() {
    return 'Data loaded';
}

// 아래 코드와 같아요.
// async function fetchData() {
// 	return Promise.resolve('Data loaded');
// }

// fetchData().then(console.log); // 'Data loaded'

// await 사용의 이점
async function fetchData() {
    try {
        const data = await fetch('https://api.example.com/data');
        const json = await data.json();
        console.log(json);
    } catch (error) {
        console.error("Data loading failed", error);
    }
}

fetchData();
