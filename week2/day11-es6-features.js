// 1. Arrow Functions 

// Traditional Function 
function traditionalLogin(username,password){
    return `Logging in ${username} with password ${password}`;
}

const arrowlogin = (username,password) => {
    return `Loggiing in ${username} with password ${password}`;
}

const shortLogin = (username, password) => `Loggin in ${username} with password ${password}`;

// 2. Temple Literals
const testUser = 'john.doe';
const testEnv = 'staging';
const testCount = 5

// Oldway 
const oldMessage = 'Running' + testCount + 'test for user' + testUser + ' in ' + testEnv;

// ES6 way (template literal)
const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnv}`;

console.log(oldMessage)
console.log(newMessage)

// 3. Destructuring 
const config = { 
    baseURL: "https://app.test", 
    timeout: 3000, 
    retries: 3,
    browser: 'chromium'
};

//const baseURL = config.baseURL;
//const timeout = config.timeout;
//console.log(baseURL, timeout);

const { baseURL, timeout } = config;
console.log(baseURL, timeout);

//4. Spread Operators (...) (Merge & Copy Arrays or Objects) 
const basicTests = ["Login", "Logout"];
const advancedTests = ["Performance", "Security"];
const allTests = [...basicTests, ...advancedTests, "API"];
console.log(allTests);

const defaultConfig = { timeout: 3000, retries: 3 };
const customConfig = { ...defaultConfig, browser: "Firefox" };
console.log(customConfig);

//5. Default Parameters 

//function runTest(testName, browser = "Chromium", timeout = 3000) {
  //console.log(`Running ${testName} on ${browser} with ${timeout}ms timeout.`);
//}

//runTest("Login Test");  
//runTest("Performance Test", "Firefox", 6000);

//6. Enhanced Objects Literals 

//let username = "admin";
//let password = "1234";
//let user = { username: username, password: password };

let username = "admin";
let password = "1234";
let user = { username, password };

//7. Enhanced Methods in Objects 

//const userAdmin = {
  //name: "QA_Admin",
  //login: function() {
  //  return `${this.name} logged in.`;
 // }
//};

const userAdmin = {
  name: "QA_Admin",
  login() {
    return `${this.name} logged in.`;
  }
};
console.log(userAdmin);
