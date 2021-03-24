// import functions and grab DOM elements
import { isYes } from './utils.js';

const button = document.getElementById('quiz-button');
const results = document.getElementById('results');

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    // inform user they are in a quiz
    alert('Welcome to the quiz!');
    // check if they definitely want to take the quiz
    const takeQuizYes = confirm('Would you like to proceed to the quiz?');

    if (!takeQuizYes) {
        alert('Okay, Goodbye!');
        return;
    }

    // get name with 'prompt()'
    const name = prompt ("What is your name?");
    
    let score = 0;
    // ask questions
    const firstAnswer = prompt ("Does Nick write?");
    const secondAnswer = prompt ("Has Nick lived in 3 different states?");
    const thirdAnswer = prompt ("Does Nick like the outdoors?");

    //score if (isYes()) score ++
    if (isYes(firstAnswer)) score++;
    if (!isYes(secondAnswer)) score++;
    if (isYes(thirdAnswer)) score++;
    // display results

    alert(`${name}, the quiz is complete! Your results will be displayed on the website.`);


    //if statement for different result messages
    if(score <= 1) {
        score = Math.round((score / 3) * 100);
        const resultsReadout = `${name}, you know Nick ${score}%.`;
        results.textContent = resultsReadout
    } else if(score === 2) {
        score = Math.round((score / 3) * 100);
        const resultsReadout = `${name}, you know Nick ${score}%. That's awesome!`;
        results.textContent = resultsReadout
    } else {
        score = Math.round((score / 3) * 100);
        const resultsReadout = `${name}, you know Nick ${score}%. Don't be such a stalker!`;
        results.textContent = resultsReadout
    }
    //const resultsReadout = `${name}, you scored ${score} out of 3!`;
    //alert(`${name}, the quiz is complete! Your results will be displayed on the website.`);

    // how? 'textContent = results'
    //results.textContent = resultsReadout
});