
function renderUpToTwenty(imprimir) {
    for (let numeros = 20; imprimir <= numeros; imprimir++) {
        console.log(`Contando: ${imprimir}`)
    }
    return imprimir
}

renderUpToTwenty(0)

function tenInTenToAHundred() {
    for(let i = 10; i <= 100; i += 10) {
        console.log(`toma ai ${i}`)
    }
}
   
tenInTenToAHundred()

function oddUpToTwenty() {
    for(let i = 0; i <= 20; i++) {
        if(i % 2 === 1) {
            console.log(i)
        }
    }
}

oddUpToTwenty()

function evenUpToTwenty() {
    for(let i = 0; i <= 20; i++) {
        if(i % 2 === 0) {
            console.log(`só par ${i}`)
        }
    }
}

evenUpToTwenty()

function fromNegativeToPositive() {
    for(let i = -10; i <= 0; i++) {
        console.log(`é o ${i}`)
    }
}

fromNegativeToPositive()

function inDescendingDirection() {
    for(let i = 10; i >= 0; i--) {
        console.log(i)
        if(i <= 0) {
            console.log('terminou')
        }
    }
}


inDescendingDirection()

function toSquare() {
    for(let i = 1; i <= 10; i++) {
    const square = i ** 2;
    console.log(square)
}
}

toSquare()