"use strict"

let sandwiches = [
    {
        type: "italian",
        calories: 1000,
        cost: 7.69,
        isVegetarian: false
    },
    {
        type: "veggie",
        calories: 500,
        cost: 9.50,
        isVegetarian: true
    },
    {
        type: "meatball",
        calories: 900,
        cost: 8.25,
        isVegetarian: false
    },
    {
        type: "jackfruit",
        calories: 650,
        cost: 8.50,
        isVegetarian: true
    }
]

const makeSandwich = (sandwichArray, type, calories, cost, isVegetarian) => {
    sandwichArray.push({type, calories, cost, isVegetarian})
}

makeSandwich(sandwiches, "turkey tom", 4000, 19.00, false)

console.log(sandwiches)

const findVegetarianSandwich = (sandwichArray) => {
    return sandwichArray.find((zebra) => {return zebra.isVegetarian === true})
}
console.log(sandwiches)
console.log(findVegetarianSandwich(sandwiches))

const findCheapestSandwich = (sandwichArray) => {
    let cheapestSandwich = sandwichArray[0]
    sandwichArray.forEach(element => {
        if(cheapestSandwich.cost > element.cost){
            cheapestSandwich = element
        }
    });

    return cheapestSandwich

    return sandwichArray.reduce((ac,cv) => {
        return ac.cost > cv.cost ? cv:ac
    })
}

findCheapestSandwich(sandwiches)
console.log(findCheapestSandwich(sandwiches))









