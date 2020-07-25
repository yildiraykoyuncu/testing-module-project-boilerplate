'use strict';
//debugger;

console.log('--- loading: memory game');


const memoryGameHandler = () => {
    let arr = [];
    while(arr.length < 20){
        
        let r = Math.floor(Math.random() * 1000) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    const stringToDisplay = reduceForAlert(arr);

    const userInput = prompt('Enter as many numbers as you remember, comma separated(no spaces)');

    let nrs = userInput.split(',');
    let correctCount = 0;
    let nrsFound = [];
    for (let nr of nrs) {
        if (isNaN(nr)) {
            alert(nr + ' is not a number!');
            return;
        } else {
            nr = Number(nr);
            console.log(nr);
            console.log('index:' + arr.indexOf(nr));
            if (arr.indexOf(nr) >= 0) {
                correctCount++;
                nrsFound.push(nr);
                console.log(nr + ' is correct!');
            }                
        }
    }
    alert('You remembered: ' + correctCount + ' number(s)! ' + nrsFound);
}

const reduceForAlert = (arr) => alert('Remember as many numbers as you can! And remember: NO cheating ;-) You are not allowed to write them down:' + '\n' + `${arr.join(' ')}`);

 