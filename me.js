const funFacts = [
    "I have met former President Biden.",
    "I served 5 years in the United States Marine Corps.",
    "I enjoy reptile care.",
    "I like working out regularly.",
    "I am studying Cybersecurity."
];

let currentFactIndex = 0;

document.getElementById("funFactBtn").addEventListener("click", function() {
    currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    document.getElementById("funFactText").textContent = funFacts[currentFactIndex];
});

document.getElementById("colorBtn").addEventListener("click", function() {
    document.getElementById("myName").style.color = "#ff0000";
});