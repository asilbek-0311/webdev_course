const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

//to store the words user inputed
let words = [];
let wordIndex = 0;

//to store the start time
let startTime = Date.now();

//page elements
const quoteElement = document.getElementById('quoteDisplay');
const messageElement = document.getElementById('statusMessage');
const inputElement = document.getElementById('typedValue');

//ading a start logic
document.getElementById('start').addEventListener('click', function() {
    //get a quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];

    //put hte quote into the array of words
    words = quote.split(' ');
    //reset the word index for tracking
    wordIndex = 0;

    const spanWords = words.map(function(word) { return `<span>${word}</span>` });
    //convert into a string and set as innerHTML on quote display
    console.log(spanWords);
    quoteElement.innerHTML = spanWords.join(' ');
    console.log(quoteElement);
    //highlight the first word
    quoteElement.children[0].className = 'highlight';
    //clear any prior status messages
    messageElement.innerText = '';

    //setup the textbox
    //clear the textbox
    inputElement.value = '';
    //set focus
    inputElement.focus();
    //set the event handler

    //start the timer
    startTime = new Date().getTime();

    //enable the input textbox
    inputElement.disabled = false;
});

//event handler for input element
inputElement.addEventListener('input', () => {
    //get the current word
    const currentWord = words[wordIndex];
    //get the current value
    const typedValue = inputElement.value;

    if(typedValue === currentWord && wordIndex === words.length-1){
        //end of quote
        //display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
        inputElement.removeEventListener('input', () => {}); //remove the event handler
        inputElement.disabled = true; //disable the input box
        displayModal();
    }
    else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord){
        //end of the word
        inputElement.value = ''; //clear the input box
        //move to the next word
        wordIndex++;

        // reset the class name for all elements in quote
        for(const wordElement of quoteElement.children){
            wordElement.className = '';
        }
        //highlight the new word
        quoteElement.children[wordIndex].className = 'highlight';

        console.log('current word', currentWord);
        console.log('typed value', typedValue);
        console.log('word index', wordIndex);
        console.log('quote element child node:', quoteElement.children[wordIndex]);
    }
    else if(currentWord.startsWith(typedValue)){
        //currently correct
        //highlight the next word
        inputElement.className = ''; //clear the red
    }
    else{
        //error state
        inputElement.className = 'error';
    }

});

//modal box handling
function displayModal() {
    // Get the modal
    const modal = document.getElementById("statusBox");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // Display the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// Function to save high score
function saveHighScore(score) {
    // Check if localStorage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Retrieve existing high scores or initialize an empty array
        let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

        // Add the new score to the array
        highScores.push(score);

        // Sort the high scores in descending order
        highScores.sort((a, b) => b - a);

        // Limit the number of high scores to 10
        highScores = highScores.slice(0, 10);

        // Save the updated high scores back to localStorage
        localStorage.setItem("highScores", JSON.stringify(highScores));
    } else {
        // If localStorage is not supported, display an error message
        console.error("localStorage is not supported by your browser.");
    }
}

// Function to retrieve high scores
function getHighScores() {
    // Check if localStorage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Retrieve high scores from localStorage
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        return highScores;
    } else {
        // If localStorage is not supported, display an error message
        console.error("localStorage is not supported by your browser.");
        return [];
    }
}
