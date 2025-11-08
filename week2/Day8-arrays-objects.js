//let grocery_list = ["eggs", "milk", "bread", "cake"]

//console.log(grocery_list[0])
//console.log(grocery_list.length)

//let testUsers = ['john_doe', 'jane_smith', 'admin_user'];
//let testPasswords = ['password123', 'securePass456', 'admin2023'];

//push()
//unshift()
//slice()
//includes()
//testUsers.push('new_tester');
//console.log(testUsers);

// OBJECTS
//let card = 
//{
//    fname: "Donnie",
//    phone: "2123456789",
//    email: "d@email.com"
//}
//console.log(card.fname);
//console.log(card['email']);

//let testUser1 = {
//    username: 'john_doe',
//    password: 'password123',
//    email: 'john@test.com',
//    role: 'user', 
//    isActive: true
//};

//console.log(testUser1.username);
//console.log(testUser1.isActive)

let testConfig = { 
    baseUrl: 'https://testapp.com',              //string
    browsers: ['chromium', 'firefox', 'webkit'], //array
    credentials: {
        admin: {username: 'admin', password: 'admin123'} // nested object

    }
};

console.log(testConfig.browsers[1]);
console.log(testConfig.credentials.admin.username);