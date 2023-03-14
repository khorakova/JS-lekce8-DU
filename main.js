// ukol 1 Catering
function justFood (numberOfPeople) {
    const priceOnMan = 100
    let price = priceOnMan * numberOfPeople
    return `catering od Just Food pro ${numberOfPeople} lidí za ${price} Kč.`
}

function yourMama (numberOfPeople) {
    const priceOnMan = 250
    let price = priceOnMan * numberOfPeople
    return `catering od Your Mama pro ${numberOfPeople} lidí za ${price} Kč.`
}

function flavourHaven (numberOfPeople) {
    const priceOnMan = 400
    let price = priceOnMan * numberOfPeople
    return `catering od Flavour Haven pro ${numberOfPeople} lidí za ${price} Kč.`
}

function createEvent (nameOfEvent, numberOfPeople, typeOfCatering) {
    return `Událost ${nameOfEvent} s ${typeOfCatering(numberOfPeople)}`
}