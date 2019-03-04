const BASE_URL = "https://deckofcardsapi.com/api/deck"

function drawACard(){
    let response = Promise.resolve($.getJSON(`${BASE_URL}/new/draw/`,
                            data={"count":1}));

    response.then(msg => console.log(msg.cards[0].value, msg.cards[0].suit))
}

async function drawTwoCards(){

    let firstCardResp = await $.get(`${BASE_URL}/new/draw/`,
                            data={"count":1});

    let deckId = firstCardResp.deck_id;
    let firstCardSuit = firstCardResp.cards[0].suit;
    let firstCardValue = firstCardResp.cards[0].value;

    let secondCardResp = await $.get(`${BASE_URL}/${deckId}/draw/`,
                                    data={"count":1});

    let secondCardSuit = secondCardResp.cards[0].suit;
    let secondCardValue = secondCardResp.cards[0].value;

    console.log("firstCard:", firstCardValue, firstCardSuit, "secondCard:", secondCardValue, secondCardSuit);
}









