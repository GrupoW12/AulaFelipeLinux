const array = [0, 10, 12, 20];

const find = array.find(element => element > 10);

console.log(find);

const inventory = [
    {
        name: 'maçãs', quantity: 21,
        name: 'bananas', quantity: 6,
        name: 'manga', quantity: 5
    }/*,
    {

    }*/
]

function manga(fruit){
    return fruit.name === 'manga';
}

console.log(inventory.find(manga));

const teste = () =>{
    console.log("oi")
}

teste()