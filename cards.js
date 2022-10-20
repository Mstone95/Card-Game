class Card {
    constructor(rank, suit) {
        this.rank = rank
        this.suit = suit
    }
}

class Deck {
    constructor() {
        this.cards = []
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
}

const deck1 = new Deck()
deck1.fillDeck()
console.log(deck1.cards)
