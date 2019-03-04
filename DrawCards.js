const BASE_URL = "https://deckofcardsapi.com/api/deck"
$(function(){
    let $cardsArea = $('#card-area');
    let $gameBtn = $('#game-btn');
    let deck = null;
    let zIndex = 0;

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

    $gameBtn.on("click", async function(){
        let cardRes
        if (!deck) {
            cardRes = await $.get(`${BASE_URL}/new/draw/`,
                                data={"count":1});
            deck = cardRes.deck_id;
        }
        else {
            cardRes = await $.get(`${BASE_URL}/${deck}/draw/`,
                                data={"count":1});
        }
        
        let cardIMG = cardRes.cards[0].images.svg;

        $cardsArea.append(`<img src="${cardIMG}" alt="" id="card-${zIndex}">`)
        $(`#card-${zIndex}`).css("z-index", `${zIndex}`);
        $(`#card-${zIndex}`).css("position", "absolute");
        zIndex++;
    })
});





