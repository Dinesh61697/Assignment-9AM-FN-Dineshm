function clickCounter() {
  let count = 0; 

  return function () {
    count++;
    document.getElementById("output").textContent = "Clicks: " + count;
  };
}

const countClicks = clickCounter();

document.getElementById("btn").addEventListener("click", countClicks);
