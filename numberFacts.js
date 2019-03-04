const URL = 'http://numbersapi.com'

async function favNum(){
    let numFac = await $.get(`${URL}/8?json`);
    console.log(numFac);
}

async function batchRequest(){

    let mapOfFacts = await $.get(`${URL}/1..5,10..20`)
    console.log(mapOfFacts);
}

async function multFavNum(){
    let multFac = await Promise.all([
        $.get(`${URL}/8?json`),
        $.get(`${URL}/8?json`),
        $.get(`${URL}/8?json`),
        $.get(`${URL}/8?json`)
    ]);
    for (let fact of multFac){
        console.log(fact.text);
    }
}