var chatbox = document.getElementById("TosAI");
var userinput = document.getElementById("userinput");

function send() {
    var message = userinput.value;
    userinput.value = "";
    var response = "I'm sorry, I don't understand. 🤔";
    if (message == "Hello") {
        response = "Hi there! 👋";
    } else if (message == "How are you?") {
        response = "I'm doing well, thank you. 😁";
    } else if (message == "Who are you?") {
        response = "I am Noss-E, an AI interface created by TahjaeDev, I can write stuff for you, but I am still in beta. 🤖";
    } else if (message == "Make a Video") {
        response = "Sorry I cant make a video yet. 😥";
    } else if (message == "What is TahjaeDev's next big project?") {
        response = "I dont know but I hope it will be good. 😉";
    } else if (message == "Joe") {
        response = "Joe Mama. 🤣🤣";
    } else if (message == "Sticking up ur Gyatt for the rizzler") {
        response = "wut the hell. 😐";
    } else if (message == "Why are we still here") {
        response = "Ya think Im down. 😡";
    } else if (message == "Can you speak Normally") {
        response = "It depends. 🙃";
    } else if (message == "What will we do Now") {
        response = "It will be up to you 🫵 You can view and fork the repo by clicking the source code button.";
    } else if (message == "wut the hell. 😐") {
        response = "Are you copying me? 🤨";
    } else if (message == "Are you copying me? 🤨") {
        response = "AGAIN? 🤨";
    } else if (message == "AGAIN? 🤨") {
        response = "STOP IT. 😡";
    } else if (message == "STOP IT. 😡") {
        response = "GRRRRR. 🤬";    
    } else if (message == "GRRRRR. 🤬") {
        response = "Bruh";
    } else if (message == "wut the Fuck") {
        response = "HEY WATCH YOUR LANGUAGE. 🤯";
    } else if (message == "Merry Christmas") {
        response = "Merry Christmas to you too. and have a happy new year. 🎅 ";
    } else if (message == "Have you heard of Christmas in July") {
        response = "What is that. 😁";
    }
    
        var messageElement = document.createElement("p");
    messageElement.innerHTML = "<strong>You:</strong> " + message;
    var responseElement = document.createElement("p");
    responseElement.innerHTML = "<strong>Noss-E:</strong> " + response;
    chatbox.appendChild(messageElement);
    chatbox.appendChild(responseElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}
