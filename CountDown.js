function countDown(number)
{
    for (let i = number - 1; i > 0; i--) {
        let j = number - i
        setTimeout(function() {console.log(i)}, 1000 * j);
    }

    setTimeout(function() {console.log('"DONE!"');}, 1000 * number);
}

countDown(4)