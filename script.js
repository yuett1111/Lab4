let hp = 70;
let fullness = 60;
let happiness = 50;

let hpText = document.getElementById("hp");
let fullnessText = document.getElementById("fullness");
let happinessText = document.getElementById("happiness");

let message = document.getElementById("message");
let petImg = document.getElementById("petImg");

function update() {
    if (hp > 100) {
        hp = 100;
    }

    if (fullness > 100) {
        fullness = 100;
    }

    if (happiness > 100) {
        happiness = 100;
    }

    if (hp < 0) {
        hp = 0;
    }

    if (fullness < 0) {
        fullness = 0;
    }

    if (happiness < 0) {
        happiness = 0;
    }
    
    hpText.innerHTML = hp;
    fullnessText.innerHTML = fullness;
    happinessText.innerHTML = happiness;

     if (hp === 0 || fullness === 0 || happiness === 0) {
        message.innerHTML = "Oh no! One of my needs reached 0. I need better care next time. Press Restart and try again!";
        petImg.src = "images/lose.jpg";
        feedButton.disabled = true;
        playButton.disabled = true;
        sleepButton.disabled = true;


    } else if (hp >= 90 && fullness >= 90 && happiness >= 90) {
        message.innerHTML = "You did it! I'm healthy, full, and super happy! Thanks for taking great care of me!";
        petImg.src = "images/win.jpg";
        feedButton.disabled = true;
        playButton.disabled = true;
        sleepButton.disabled = true;
    }

}

document.getElementById("feedButton").addEventListener("click", function() {
    petImg.src = "images/feed.jpg"

    if (fullness >= 90) {
        message.innerHTML = "I'm already full! Maybe we can play together instead!";

    } else if (fullness >= 50) {
        fullness += 25;
        hp += 5;
        message.innerHTML = "Yum! That was delicious. Thanks for feeding me!";

    } else {
        fullness += 25;
        hp += 10;
        message.innerHTML = "I was so hungry! I feel much better now. Thank you!";
    }
    update();
});

document.getElementById("playButton").addEventListener("click", function() {
    petImg.src = "images/play.jpg"

    if (hp <= 20) {
        message.innerHTML = "I'm too tired to play right now. Can I get some sleep first?";

    } else if (happiness >= 90) {
        message.innerHTML = "I'm already super happy! Maybe you should feed me or let me rest.";

    } else {
        happiness += 20;
        hp -= 10;
        fullness -= 10;
        message.innerHTML = "That was so much fun! I love playing with you!";
    }
    update();
});

document.getElementById("sleepButton").addEventListener("click", function() {
    petImg.src = "images/sleep.jpg"
    if (hp >= 90) {
        message.innerHTML = "I'm not tired yet! Let's play or have something to eat!";
    } else {
        hp += 20;
        fullness -= 10;
        happiness -= 5;
        message.innerHTML = "Zzz... I had a great nap! I feel refreshed now!";
    }
    update();
});

document.getElementById("restartButton").addEventListener("click", function() {
    hp = 80;
    fullness = 50;
    happiness = 50;

    message.innerHTML = "Hi! I'm Bugie. Keep my HP, fullness, and happiness up by feeding me, playing with me, and letting me rest!";
    petImg.src = "images/intro.jpg";

    feedButton.disabled = false;
    playButton.disabled = false;
    sleepButton.disabled = false;

    update();
});