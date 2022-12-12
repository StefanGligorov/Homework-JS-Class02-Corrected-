let input = prompt("Enter your birth year:");
let numInput = parseInt(input);
let chiZod = (numInput - 4) % 12;
console.log(numInput);

if (!Number.isNaN(chiZod)) {
    if (chiZod === 0) {
        alert("Rat")
    } else if (chiZod === 1) {
        alert("Ox");
    } else if (chiZod === 2) {
        alert("Tiger");
    } else if (chiZod === 3) {
        alert("Rabbit");
    } else if (chiZod === 4) {
        alert("Dragon");
    } else if (chiZod === 5) {
        alert("Snake");
    } else if (chiZod === 6) {
        alert("Horse");
    } else if (chiZod === 7) {
        alert("Goat");
    } else if (chiZod === 8) {
        alert("Monkey");
    } else if (chiZod === 9) {
        alert("Rooster");
    } else if (chiZod === 10) {
        alert("Dog");
    } else if (chiZod === 11) {
        alert("Pig");
    }
}   else {
    alert("Invalid command")
}


    console.log(chiZod);