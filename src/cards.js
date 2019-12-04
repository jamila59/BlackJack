export class Cards {

    constructor(){
        this.id = 'ir9enypf9gs5';
        this.remaining = 0;
    }

    async makeDecks(){
        //let decks = numDecks;
        try {
            let response = await fetch(`https://deckofcardsapi.com/api/deck/ir9enypf9gs5/shuffle/?deck_count=1`);
            let jsonifiedResponse = await response.json();
            this.id = jsonifiedResponse.deck_id;
            this.remaining = jsonifiedResponse.remaining;
            return jsonifiedResponse;
        } catch (error) {
            return "heck";
        }
    }

    async nextCard(){
        try {
            let response = await fetch(`https://deckofcardsapi.com/api/deck/ir9enypf9gs5/draw/?count=1`);
            let jsonResponse = await response.json();
            this.cardCode = jsonResponse.cards[0].code;
            this.cardValue = jsonResponse.cards[0].value;
            console.log(this.cardCode);
            return jsonResponse;
        } catch (error) {
            return "super heck";
        }
    }
    

    getRemaining(response) {
        return response.remaining;
    }

    getDeck_id(){
        return this.id;
    }

    getValue(response){
        if (isNaN(response.cards[0].value)){
            if (response.cards[0].value === "ACE"){
                return 11;
            } else {
                return 10;
            }
        }
        return response.cards[0].value;
    }
}
                    