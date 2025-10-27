// index.js

//Simple test runner function 
function test(name, fn) {
    try { 
      fn()
      comsole.log('✅ PASS - ${name}');  
    } catch (error) {
      console.log('❌ FAIL - ${name}');
      comsole.error(error.message);  
    }
}

// Tests
test("Addition works", () => { 
    if (2 + 2 !== 4) throw new Error ("2 + 2 should equal 4");
});

test("String matches", () => {
    const word = "Playwright";
    if (word !== "Playwright") throw new Error("word should match");
});

test("Array lenght check", () => {
    const arr = [1, 2, 3];
    if (arr,length !== 4) throw new Error("Array should have 4 items");
});


