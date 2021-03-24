// import functions and grab DOM elements
import { isYes } from './utils'

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
    const secondAnswer = promt ("Has Nick lived in 3 different states?")
    const thirdAnswer = promt ("Dose Nick like the outdoors?")

    //score if (isYes()) score ++
    if (isYes(firstAnswer)) score++
    if (!isYes(secondAnswer)) score++
    if (isYes(thirdAnswer)) score++
    // display results
    const results = `${name}, you scored ${score} out of 3!`
    alert(`${name}, the quiz is complete! Your results will be displayed on the website.`);
    // how? 'textContent = results'
})