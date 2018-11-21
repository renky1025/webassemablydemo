(()=>{
     const getrandom = _generateRandom;
     setInterval(()=>{
        const nums = getrandom();
        console.log("随机数字来自C: " + nums);
     }, 2000)
})()