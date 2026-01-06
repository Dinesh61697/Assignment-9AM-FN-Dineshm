function showMessage() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try {
                console.log("Hello after 2 seconds");
                resolve("Done successfully");
                
            } catch (error) {
                reject(error);
            }
        }, 2000);
    })
}



async function runprogram() {
    try {
        const result = await showMessage();
        console.log(result);
        console.log("Async function executed");
    } catch (error) {
       console.log("Error occured:", error);
       
    }
}


runprogram();
