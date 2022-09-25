import {getCards, getImages} from './database.js'
const cards = getCards()
const images = getImages()


// SHUFFLE CARDS ARRAY
const shuffleCards = () => {
    let currentIndex = cards.length,  randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        // And swap it with the current element.
        [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
    }
    // need to include stateChanged event to reload everything probably
    
}

//SHUFFLE CARDS BUTTON -- only for testing, will not be in game. shuffle will just happen on start of new game
document.addEventListener('click', (e) => {
    const clickedItem = e.target;
    if (clickedItem.id === 'shuffleButton') {
        refreshCards()
    }
})

// DISPLAY CARDS
const cardsHTML = () => {
    let HTML = '';
    for (let i = 0; i < cards.length; i++) {
        HTML += `
        <div id="card--${cards[i].id}" class="card"></div>
        `;
    }
    return HTML;
}

const displayPage = () => {
    let HTML = `
    <div id="cardContainer">${cardsHTML()}</div>
    <button id ="shuffleButton">Shuffle Cards</button>
    `
    document.body.innerHTML = HTML;
}

const refreshCards = () => {
    document.getElementById('cardContainer').innerHTML = cardsHTML();
}

const renderAllAndShuffle = () => {
    shuffleCards();
    displayPage();
}

renderAllAndShuffle();

// REVEAL CARD IMAGE WHEN CLICKED
document.addEventListener('click', (e) => {
    const clickedItem = e.target;
    if (clickedItem.id.startsWith('card--')) {
        clickCounter();
        const idArray = clickedItem.id.split('--');
        for (const card of cards) {
            if (parseInt(idArray[1]) === card.id) {
                for (const image of images) {
                    if (card.imgId === image.id) {
                        clickedItem.innerHTML = `<img src="./images/${image.image}" alt="${image.alt}">`;
                        console.log(image.image);
                    }
                }
            }
        }
        if (x >= 2) {
            setTimeout(() => {refreshCards()}, '2000');
            x = 0;
        }
        console.log(`clicked card with id of ${idArray[1]}`)
    }
})

let x = 0;

const clickCounter = () => {
    x += 1;
}



// i think i need to write a function that detects if you're clicking on a card (detect by id) and have a counter that
// allows only 2 clicks before the two that you clicked on don't have images again (aka the cards flip back over)
// so basically a conditional saying: if the imgId of the two you clicked on don't match, then the div turns blank
// (and maybe the counter resets to 2), ELSE: keep the images there
// note: probably need an initial conditional saying 'only do this function if the current target is blank' (because otherwise
// the turn counter would still occur even if you clicked on a card that already had an img showing, and that could turn out bad

// i'm thinking no score involved, but rather have a timer and try speedruns?
// maybe a score can be implemented that factors in time and amount of turns (amount of times the turn function was invoked) if doable
// for the timer idea, will need a 'start' button that starts the timer

// maybe log completion times to database, sorted as past records to beat!
// also, i just realized would somehow need to detect when every card is turn over so timer can stop and present the 'win' text or something
// i think 'win' state could be detected by having a counter in the match condtional. everytime there's a successful match,
// it adds a point to the global score. when the global score hits 8, the 'win' text appears (also remember to reset global score)