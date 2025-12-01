// Step 1: Target Elements
const clickBox = document.getElementById("click-Box");
const hoverBox = document.getElementById("hover-Box");
const resetBtn = document.getElementById("reset-Btn");
const simulateBtn = document.getElementById("simulate-Btn");
const eventLog = document.getElementById("event-Log");
//const dbclickBox = document.getElementById("dbl-click-box");
//const logTextBox = document.getElementById("logBox");
//const input = document.getElementById("myInput");

function log(message) {
    const line = document.createElement("div");
    eventLog.appendChild(line);
    // keep newest change in view
    eventLog.scrollTop = eventLog.scrollHeight;
}


// Click Event
let clickCount = 0;
clickBox.addEventListener("click", () => {
  clickCount++;
  clickBox.classList.add('clicked');
  clickBox.textContent = `Clicked ${clickCount} times!`;
  log(`Clicked the box (${clickCount})`);
});

//dbclickBox.addEventListener('dblclick', () => {
    //dbclickBox.style.backgroundColor = 'blue';
    //dbclickBox.style.color = 'red';
    //dbclickBox.textContent = 'Double Click This Box';
    //log('Completed Double Click');
//});

//input.addEventListener('keyup', (event) => {
    //log('Key released:', event.code);
    //log('Updated value', input.value);
//});

// Mouse Over Event
hoverBox.addEventListener('mouseenter', () => {
 hoverBox.style.backgroundColor = '#ff3cd';
 hoverBox.textContent = 'Mouse is hovering!';
 log('Mouse entered the hover box');
});

hoverBox.addEventListener('mouseleave', () => {
  hoverBox.style.backgroundColor = '';
  hoverBox.textContent = 'Hover over me! (Practice requirement)';
  logEvent("Mouse left the hover box");
});

// Reset Event
resetBtn.addEventListener("click", () => {
  clickCount = 0;
  clickBox.classList.remove('clicked');
  clickBox.textContent = 'Click Me! (Practice requirement)';
  clickBox.style.backgroundColor = ''
  //hoverBox.style.backgroundColor = "Brown";
  hoverBox.textContent = 'Hover over me! (Practice requirement)';
  //dbclickBox.style.backgroundColor = "Orange";
  //dbclickBox.style.color = "Purple";
  //dbclickBox.textContent = "Doubel click please";

  eventLog.innerHTML = '';
  log('All reset!');
});

// Simulate Event
//simulateBtn.addEventListener("click", () => {
  //logEvent("Simulating click + hover events...");
  //clickBox.click();
  //dbclickBox.dbclick();
  //const enter = new MouseEvent("mouseenter", {bubbles: true});
  //const leave = new MouseEvent ("mouseleave", {bubbles: true});
  //hoverBox.dispatchEvent(new Event("mouseenter"));
  //hoverBox.dispatchEvent(new Event("mouseleave"));
  //logEvent("Simulation complete");
//});
