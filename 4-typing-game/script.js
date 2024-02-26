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
    quoteElement.innerHTML = spanWords.join(' ');
    //highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
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
});

//event handler for input element
inputElement.addEventListener('input', () => {
    //get the current word
    const currentWord = words[wordIndex];
    //get the current value
    const typedValue = inputElement.value;

    if(typedValue === currentWord && wordIndex === words.length -1){
        //end of quote
        //display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
    }
    else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord){
        //end of the word
        inputElement.value = ''; //clear the input box
        //move to the next word
        wordIndex++;

        //reset the class name for all elements in quote
        for(const wordElement of quoteElement.childNodes){
            wordElement.className = '';
        }
        //highlight the new word
        quoteElement.childNodes[wordIndex].className = 'highlight';
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