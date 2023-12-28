function randomGame() {
    let counter = 0;

    let id = setInterval(function() 
    {
        let num = Math.random();
        counter += 1;
        console.log(num);
        if (num > 0.75){
            console.log(counter);
            clearInterval(id)
        }
    }, 1000);
   
}