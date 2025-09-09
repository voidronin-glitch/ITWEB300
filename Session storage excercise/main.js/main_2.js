let str = "test@example.com";
let regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
let testResult = regex.test(str);
console.log(testResult);