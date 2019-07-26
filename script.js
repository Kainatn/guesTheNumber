let randm;
let count;

function reSetGame() {
    randm = Math.floor(Math.random() * 100);
    count = 0;
   
}
reSetGame();

function checkEasy() {

    let guessedNumber = document.querySelector('input').value;
    if (guessedNumber != '') {
        if (guessedNumber == randm) {
            alert('Congratulation You guessed the ' + randm + " in : " + count + " tries");
            count++;
            document.querySelector('body').style.backgroundImage = "url('image/star.gif')";
            reSetGame();
        
        } else if (guessedNumber < randm) {
            alert("You guessed Small Number");
            count++;
        } else if (guessedNumber > randm) {
            alert("You guessed Big Number");
            count++;
        }
    } else {
        alert("Enter number First");
    }
}