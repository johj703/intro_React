const myPromise = new Promise(function (resolve, reject) {
    if (true) {
        resolve("Success");
    } else {
        reject("Failed")
    }
});

myPromise.then(function (value) {
    console.log(value)
})