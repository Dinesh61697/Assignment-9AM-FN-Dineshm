function showMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hello after 2 seconds");
      resolve();
    }, 2000);
  });
}


async function run() {
    await showMessage();
    console.log("promise resolved");
    
}

run();