// Generate a random number between 1 and 10
var luckyNumber = Math.floor(Math.random() * 10) + 1;

function guessLuckyNumber() {
    // Get the user's guess
    var userGuess = Number(document.getElementById("userGuessInput").value);

    // Validate the input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        document.getElementById("guessResult").innerHTML = "Tada~~ bạn đã bị hackFB vì không nhập số";
    } else if (userGuess === luckyNumber) {
        document.getElementById("guessResult").innerHTML = "Ting ting!!~~ Bạn đã trúng giải người cô đơn nhất thế giới";
    } else {
        document.getElementById("guessResult").innerHTML = "Bru Bru~~ đoán sai rồi bạn hiền";
    }
}