
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getsuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
    //make storage for your card objects
    this.deck = [];
	}
	addCard( suit, faceValue ){
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
    //adds the card object to the storage in the constructor
    this.deck.unshift(new Card(suit, faceValue));
    //returns the amount of cards currently stored
    return this.deck.length;
	}
	shuffle(){
    const deck = this.deck;
    //reorders the cards in the storage array in a random order
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.random() * i | 0;

      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
    //returns the amount of cards stored in the array in the constructor
    return this.deck.length;
	}
	dealCards(number){
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
    //cannot return more cards than the deck has
    number = number > this.deck.length ? this.deck.length : number;

    return this.deck.splice(0, number);
	}
}