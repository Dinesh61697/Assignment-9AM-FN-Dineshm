function showMessage(callback) {
  setTimeout(function () {
    console.log("Hello after 2 seconds");
    callback();
  }, 2000);
}

function done() {
    console.log("callback function executed");
    
}


showMessage(done);