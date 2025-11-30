// Function to run a test
//const runTest = (testName) => {
// console.log(`🧪 Starting test: ${testName}`);
//  console.log(`✅ Test Completed: ${testName}`);
//};

// Function to report pass/fail status
//const reportStatus = (testName, status) => {
//  console.log(`📊 Test Status for ${testName}: ${status ? "PASS ✅" : "FAIL ❌"}`);
//};

// Arrow function to run all tests
//const runAllTests = () => {
  //runTest("Login");
  //reportStatus("Login", true);

  //runTest("Search");
  //reportStatus("Search", true);

  //runTest("Logout");
  //reportStatus("Logout", false);
//};

// Run everything
//runAllTests();

//2. Template Literals
//let user = "John";
//let env = "Staging";
//let totalTests = 5;
//let browser = 'chromium'

//console.log(`Running ${totalTests} tests for ${user} in the ${env} environment.`);
//console.log(`Executing all ${totalTests} test cases in ${browser} on ${env} environment`);

//3.Destructing
//const config = { 
  //  baseURL: "https://qa-app.com", 
  //  timeout: 3000, 
   // retries: 2,
   // browser: 'Firefox' 
//};

//const { browser: configbrowser, timeout } = config;

//console.log(`Browser ${configbrowser}, Timeout: ${timeout}ms`);

//4.Spread Operator 
//const uiTests = ["Login Test", "Profile Update Test"];
//const apiTests = ["API Response Test", "Token Validation Test"];
//const securityTests = ["Auth Bypass Test", "Data Encryption Test"];
//const masterSuite = [...uiTests, ...apiTests, ...securityTests, "Final Report Generation"];

//console.log("Master Suite:", masterSuite);
//console.log("...");

//5.Default Parameters 
//function executeTest(testName = "Unnamed Test", browser = "Chromium", timeout = 5000) {
 // console.log(`Running ${testName} on ${browser} with ${timeout}ms timeout.`);
//}
//console.log ("5. Default Parameters:");
//executeTest();
//executeTest("Login Flow", "Firefox", 5000);

//6. Enhanced Object Literals 
//const username = "qaUser";
//const password = "test@123";
//const login = "User Logged in successfully";

//const credentials = { username, password, login };
//console.log(credentials);


const username = "qaUser";
const password = "test123";

const user = {
  username,
  password,
  printUser() {
    console.log(`👤 Logged in as: ${this.username}`);
  }
};

const config = {
  browser: "Firefox",
  env: "QA",
  retries: 2
};

const { browser, env, retries } = config;

const runTest = (testName = "Unnamed Test") => {     
  console.log(`🧪 Starting test: ${testName}`);
  console.log(`✅ Completed test: ${testName}`);
};

const reportStatus = (testName, status) => {
  console.log(`📊 ${testName}: ${status ? "PASS ✅" : "FAIL ❌"}`);
};

const authTests = ["Login", "Logout"];
const featureTests = ["Search", "Add to Cart", "Checkout"];

const allTests = [...authTests, ...featureTests];   

const runAllTests = () => {
  const totalTests = allTests.length;

  console.log(
    `🚀 Running ${totalTests} total tests for ${user.username} in ${browser} environment.`
  );

  user.printUser();
  console.log(`🔁 Max Retries Allowed: ${retries}\n`);

  allTests.forEach(test => {
    runTest(test);
    reportStatus(test, true); 
    console.log(""); 
  });

  console.log("🎉 Test run completed!");
};


runAllTests();
