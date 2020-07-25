'use strict'
'debugger';
/*
const guessing = () => {
    const phase1 = prompt('How high is the Mount Everest?');
    const cast = Number(phase1);
    
    if (!phase1) {
        return;
    } else if (Object.is(cast, NaN)) {
        alert(`${phase1} is not a valid number`);
        return;
    } else {
        if (cast <= 2212 || cast >= 15484) {
            alert(`Very, very cold!! Try it again. \n Hint, is a number between 2000 and 15000`);
        } else if (cast > 2212 && cast <= 4424 || cast < 15484 && cast >= 13272 ) {
            alert(`Cold. Try it again. \n Hint, is a number between 4000 and 13000`);
        } else if (cast > 4424 && cast <= 6636 || cast < 13272 && cast >= 11060 ) {
            alert(`Starting to get warmer! \n Hint, is a number between 6500 and 10500`);
        } else if (cast > 6636 && cast <= 8847 || cast < 11060 && cast > 8848 ) {
            alert(`Starting to get warmer! \n Hint, is a number between 8500 and 9000`);
        } else if (cast === 8848) {
            alert('You are right!');
        }
    }
};
*/

const test = () => {
    const objects = [
        {
            name: 'Mount Everest',
            high: 8848,
            picture: 'https://www.scitecheuropa.eu/wp-content/uploads/2020/01/Mount-Everest-1068x601.jpg',
            about: 'https://en.wikipedia.org/wiki/Mount_Everest'
        },
        {
            name: 'Mount K2',
            high: 8611,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/1/12/K2_2006b.jpg',
            about: 'https://en.wikipedia.org/wiki/K2'
        },
        {
            name: 'Mount Kangchenjunga',
            high: 8586,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Kangchenjunga-from-Gangtok.jpg',
            about: 'https://en.wikipedia.org/wiki/Kangchenjunga'
        },
        {
            name: 'Mount Lhotse',
            high: 8516,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Lhotse-fromChukhungRi.jpg',
            about: 'https://en.wikipedia.org/wiki/Lhotse'
        },
        {
            name: 'Mount Makalu',
            high: 8481,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Makalu.jpg',
            about: 'https://en.wikipedia.org/wiki/Makalu'
        },
        {
            name: 'Mount Cho Oyu',
            high: 8201,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/ChoOyu-fromGokyo.jpg',
            about: 'https://en.wikipedia.org/wiki/Cho_Oyu'
        },
        {
            name: 'Mount Dhaulagiri I',
            high: 8167,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Dhaulagiri_mountain.jpg',
            about: 'https://en.wikipedia.org/wiki/Dhaulagiri'
        },
        {
            name: 'Mount Manaslu',
            high: 8156,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Sunrise%2C_Manaslu.jpg',
            about: 'https://en.wikipedia.org/wiki/Manaslu'
        },
        {
            name: 'Nanga Parbat Montain',
            high: 8126,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Fairy_Meadows_and_the_view_of_Nanga_Parbat.jpg',
            about: 'https://en.wikipedia.org/wiki/Nanga_Parbat'
            
        },
        {
            name: 'Annapurna I Montain',
            high: 8091,
            picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/South_Face_of_Annapurna_I_%28Main%29.jpg',
            about: 'https://en.wikipedia.org/wiki/Annapurna_Massif'
        },

    ];
    const shuffle = Math.floor(Math.random() * 10);
    const question = [objects[shuffle].name, objects[shuffle].high, (shuffle + 1), objects[shuffle].about, objects[shuffle].picture];
    console.log(question);
    return question;
}

const guessing = () => {
    let variables = test();
        game(variables);        
}

const game = (input) => {

        const userInput = prompt(`How high is the ${input[0]}?`);
        const cast = Number(userInput);
        const high = input[1];
        let answer = '';

        if (!userInput) {
            return;
        } else if (Object.is(cast, NaN)) {
            alert(`${userInput} is not a valid number`);
            return;
        } else {
            if (cast <= Math.floor(high / 4) || cast >= Math.floor(high * 2)) {
                alert(`Very, very cold!! Try it again. \n Hint, is a number between ${Math.floor(high / 4)} and ${(high * 2)}`);
                game(input);
            } else if (cast > Math.floor(high / 4) && cast <= (Math.floor(high / 2)) || cast < (high * 2) && cast >= Math.floor(high + (high / 2)) ) {
                alert(`Cold. Try it again. \n Hint, is a number between ${Math.floor(high / 2)} and 13000`);
                game(input);
            } else if (cast > Math.floor(high / 2) && cast <= Math.floor(high - (high / 4)) || cast < Math.floor(high + (high / 2)) && cast >= Math.floor(high + (high / 4)) ) {
                alert(`Starting to get warmer! \n Hint, is a number between ${Math.floor(high - (high / 4))} and ${Math.floor(high + (high / 4))}`);
                game(input);
            } else if (cast > Math.floor(high - (high / 4)) && cast <= Math.floor(high - 1) || cast < Math.floor(high + (high / 4)) && cast > high ) {
                alert(`Starting to get warmer! \n Hint, is a number between ${Math.floor(high - 111)} and ${Math.floor(high + 111)}`);
                game(input);
            } else if (cast === high) {
                alert('You are right!');
                document.getElementById('answerTitle').innerHTML = 'Correct answer:';
                document.getElementById('answerNames').innerHTML = `${input[0]} is ${input[1]} meters high`;
                document.getElementById('answerTop').innerHTML = `Top ${input[2]} higher mountain on the world`;
                document.getElementById('link').innerHTML = `<a href="${input[3]}">More Info</a>`;
                document.body.style.backgroundImage = `url('${input[4]}')`;
            }
        }
    
};
