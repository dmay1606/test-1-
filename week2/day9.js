document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  const mainTitle = document.getElementById("mainTitle");
  const demoText = document.querySelector("#demoText");
  const changeTextBtn = document.querySelector("#changeText");
  const testList = document.querySelector("#testList");

  console.log("Element found:", { mainTitle, demoText, changeTextBtn, testList });

  const messages = [
    "Text updated successfully!",
    "Perfect for automation testers!",
    "Now the DOM feels alive!",
    "Dynamic updates achieved!"
  ];

  changeTextBtn.addEventListener("click", function() {
    console.log("Change Text button clicked!");
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    demoText.textContent = randomMessage;
    document.body.style.backgroundColor = "blue";
    let newlistItem = document.createElement('li');
    newlistItem.textContent = "New list item";
    testList.appendChild('newListItem')
  });
});