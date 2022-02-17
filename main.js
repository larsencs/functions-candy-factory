//initializes the candy object
const buyChocolate = () =>{
    chocolateObject = {
        property: "Milk chocolate"
    }
    return chocolateObject
}
//adds the flavor property to the candy object
const addFlavoring = (candyObject) =>{
    candyObject.flavor = "Mint"
    return candyObject
}
//adds the mixture property to the candy object if conditions are met
const makeBarkMixture = (candyObject) => {
    if(candyObject.flavor.toLowerCase() === "mint"){
        candyObject.mixture = true
    }else{
        candyObject.mixture = false
    }
    return candyObject
}
//adds the baked property to the candy object if conditions are met
const bakeCandy = (candyObject) =>{
    if(candyObject.mixture === true){
        candyObject.baked = true
    }else{
        candyObject.baked = false
    }
    return candyObject
}
//returns an array of pieces of candy if conditions are met
const breakBark = (candyObject) => {
    if(candyObject.baked === true){
        return [
            "Mint Chocolate Bark Piece"
            ,"Mint Chocolate Bark Piece"
            ,"Mint Chocolate Bark Piece"
            ,"Mint Chocolate Bark Piece"
            ,"Mint Chocolate Bark Piece"
            ,"Mint Chocolate Bark Piece"
        ]
        
    }

}


const candy = buyChocolate()
addFlavoring(candy)
makeBarkMixture(candy)
bakeCandy(candy)
breakBark(candy)

const enjoyCandy = breakBark(candy)
//iterates through candy array
for(pieces of enjoyCandy){
    console.log(pieces)
}


