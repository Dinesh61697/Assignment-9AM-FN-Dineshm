useEffectEvent(() => {
    const timer = setInterval(() => {
        console.log("Running...");
        
    }, 1000);


    return () =>{
        clearInterval(timer);
    };
}, []);