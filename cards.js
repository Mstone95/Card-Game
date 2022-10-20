class Card {
    constructor(rank, suit) {
        this.rank = rank
        this.suit = suit
    }
}

class Deck {
    constructor() {
        this.cards = []
        // this.shuffledCards =[]
        this.dealtCards = []
    }
    fillDeck() {
        this.cards = []
        let suit;
        let value;
        for (let i = 0; i < 4; i++) {
            //suit for each i

            if (i === 0) {
                suit = "clover"
            }
            else if (i === 1) {
                suit = "heart"
            }
            else if (i === 2) {
                suit = "spade"
            }
            else if (i === 3) {
                suit = "diamond"
            }
            for (let j = 1; j < 14; j++) {
                //card value for each j

                if (j === 11) {
                    value = "jack"
                }
                else if (j === 12) {
                    value = "queen"
                }
                else if (j === 13) {
                    value = "king"
                }
                else if (j === 1) {
                    value = "ace"
                }
                else {
                    value = j
                }
                this.cards.push(new Card(value, suit))
            }


        }
    }
    
    // shuffleDeck(){
    //     for(let i=0; i <= 52; i++){
    //     let random = Math.floor(Math.random()*51)
    //     if(!(this.shuffledCards.includes(this.cards[random]))){
    //     this.shuffledCards.push(this.cards[random])
    //     }
    //     else{
    //     }
    //     }
    // }
    shuffleDeck(){
        
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
    }

}
    deal(numOfCards){
       for(let i = 0; i < numOfCards; i++){
        this.dealtCards.push(this.cards[i])
       } 
    }

}

const deck1 = new Deck()
deck1.fillDeck()
console.log(deck1.cards)
deck1.shuffleDeck()
console.log(deck1.cards)
deck1.deal(2)
console.log(deck1.dealtCards)
deck1.deal(2)
console.log(deck1.dealtCards)


const deck2 = new Deck



// shuffle the cards
// for (let i = deck.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     let temp = deck[i];
//     deck[i] = deck[j];
//     deck[j] = temp;