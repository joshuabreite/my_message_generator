let nouns = ["dog", "cat", "lion", "gorilla"];
let adjectives = ["brave", "alert", "bad", "better", "busy", "clean", "clever", "creepy"];
let verbs = ["walked", "spoke", "ate", "pooped"];

function randomGenerator(array) {
    return array[Math.floor(Math.random() * array.length)]
}

console.log('The ' + randomGenerator(adjectives) + ' ' + randomGenerator(nouns) + ' ' + randomGenerator(verbs) + '!');