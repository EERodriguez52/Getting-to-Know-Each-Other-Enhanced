const funFacts = [
    "I have met former President Biden.",
    "I have a dog named Yoda",
    "My frog is named Mrs.Froggenheimer",
    "My lizard is named Philip J. Fry.",
    "I am deathly afraid of nuclear bombs."
];

let currentFactIndex = 0;

document.getElementById("funFactBtn").addEventListener("click", function() {
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    document.getElementById("funFactText").textContent = funFacts[currentFactIndex];
});

document.getElementById("colorBtn").addEventListener("click", function() {
    document.getElementById("myName").style.color = "#ff0000";
});