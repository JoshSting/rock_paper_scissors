prompt(("enter rock, paper or siccors"))
console.log("Hello world")

function getRandomString(strings) {
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

function getComputerChoice() {
    const stringList = ["Rock", "Paper", "Scissors"]; 
    const randomString = getRandomString(stringList);
    console.log(randomString);
}

getComputerChoice();
