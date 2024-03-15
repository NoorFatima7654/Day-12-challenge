//Question no 34
let pizzas: string[] =["pepproni","vegetable","margherita"];

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
})
console.log("I really like pizza!");

//Question no 35

let animals: string[] =["cat","dog","rabbit"];
animals. forEach(animal => {
    console.log(`A ${animal} is a great pet`);
});
console.log("Any of these animals would make a great pet");

//Quetion no 36

function make_shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with message ${message} printrd on it.`);
}

make_shirt("medium", "i love typescript");
