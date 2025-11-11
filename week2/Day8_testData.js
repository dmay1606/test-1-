// Create Arrays Homework

let testUsers = ['User1','User2', 'adminUser'];
let browsers = ['Chromium', 'firefox','webkit'];
let environments = ['staging','uat','production'];
console.log(testUsers)

//Adding addition item using .push

testUsers.push('new_tester');
browsers.push('safari');
environments.push('dev');
console.log(testUsers);
console.log(browsers);
console.log(environments);

// Array length 

console.log(testUsers.length);
console.log(browsers.length);
console.log(environments.length);

let User1 = {
    username: 'qaUser1',
    passwrod: 'test123',
    role: 'tester',
    isActive: true
};

let User2 = {
    username: 'qaUser2',
    passwrod: 'test456',
    role: 'tester',
    isActive: true
};

let adminUser = {
    username: 'qaAdmin',
    paswword: 'A1234',
    role: 'tester',
    isActive: true
};
console.log(User1.username, User1.role);
console.log(User2.username, User2.role);
console.log(adminUser.username, adminUser.role);

console.log(User1.isActive);
console.log(User2.isActive);
console.log(adminUser.isActive);

let testConfig = {
  baseUrl: "https://shopapp.test",
  browsers: ["chromium", "firefox", "webkit"],
  credentials: {
    admin: { username: "adminUser", password: "admin@123" },
    standardUsers: [User1, User2]
  }
};

console.log(testConfig.browsers[1]);
console.log(testConfig.credentials.admin.username);
console.log(testConfig.credentials.standardUsers[0]);