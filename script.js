const messages = [
    "Are you sure, my love?",
    "Really sure, my love",
    "Are you positive, my love",
    "please please, my love",
    "plase my love please please",
    "If you say no, I will cry, my love :((",
    "I will be very sad, my love :((",
    "I will be very very very sad, my love :((",
    "I will not stop asking, my love",
    "Say yes please!🤍"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}