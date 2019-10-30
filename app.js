'use strict';

var totalScore = 0;
console.log(totalScore, 'initial');


//ASKING FOR A NAME

var name = prompt('What is your name? ');
console.log('Welcome ' + name);

//QUESTION 1.

var wed = prompt('Do you think that I am married?');
wed = wed.toLowerCase();
if (wed === 'yes') {
    //console.log('You are correct! I am happily married.');
    alert('You are correct! I am happily married.')
    totalScore++;
    console.log(totalScore, 'question 1');
}
else if (wed === 'no') {
    //console.log('Nope wrong answer!');
    alert('Nope wrong answer!');

}

//QUESTION 2.

var children = prompt('Do you think I am a mother yet?');
children = children.toLowerCase();
if (children === 'yes') {
    //console.log('You are correct! I am a mother .');
    alert('You are correct! I am a mother.');
    totalScore++;
    console.log(totalScore, 'question 2');
}
else if (children === 'no') {
    //console.log('You are incorrect, I do have children.');
    alert('You are incorrect, I do have children.');
}

//QUESTION 3.

var pets = prompt('Do you think that I have any pets?');
pets = pets.toLowerCase();
if (pets === 'yes') {
    //console.log('You know me so well! I do have pets.');
    alert('You know me so well! I do have pets.');
    totalScore++;
    console.log(totalScore, 'question 2');
}
else if (pets === 'no') {
    //console.log('I feel like you don\'t know me at all! Of course I have pets!');
    alert('I feel like you don\'t know me at all! Of course I have pets!')
}

//QUESTION 4.

var dog = prompt('Do you think one of my pets are a dog?');
dog = dog.toLowerCase();
if (dog === 'yes') {
    //console.log('Yep! My dog Bubba is a awesome black lab who eats way to much.');
    alert('Yep! My dog Bubba is a awesome black lab who eats way to much.');
    totalScore++;
    console.log(totalScore, 'question 4');
}
else if (dog === 'no') {
    //console.log('Wrong answer. I do have a dog. His name is Bubba and he likes to eat way to much!')
    alert('Wrong answer. I do have a dog. His name is Bubba and he likes to eat way to much!');
}

//QUESTION 5.

var bird = prompt('Did you know my other pet was a yellow-fronted amazon parrot?');
bird = bird.toLowerCase();
if (bird === 'yes') {
    //console.log('You are correct. My pet parrot, Killer, is a cool bird who is actually 2 years older then me! Fun fact: parrots have a life span of 80 to a 100 years.');
    alert('You are correct. My pet parrot, Killer, is a cool bird who is actually 2 years older then me! Fun fact: parrots have a life span of 80 to a 100 years.');
    totalScore++;
    console.log(totalScore, 'question 5');
}
else if (bird === 'no') {
    //console.log(' I do have a parrot. His name is Killer and he is 2 years older than me. Fun fact: parrots have a life span of 80-100 years.');
    alert('I do have a parrot. His name is Killer and he is 2 years older than me. Fun fact: parrots have a life span of 80-100 years.');
}

//QUESTION 6.

var correctAnswer = 4;
var guessCounter = 4;
var userResponse = prompt('Guess how many children we have?');


while (guessCounter > 0 && userResponse !== '4') {
    if (userResponse > '4') {
        userResponse = prompt('You are to high!');
    }
    else if (userResponse < '4') {
        userResponse = prompt('You are to low!');
    }
    guessCounter--;
}
if (userResponse === '4') {

    totalScore++;
    console.log(totalScore, 'question 6');

}

alert('In case you are dying to know we have 4 children!');

//QUESTION 7.

var childsName = ['lilly', 'isabella', 'lieng', 'katherine'];
var guessCount = 5;
var correctGuessFlag = false;
var theirGuessAtName = prompt('Can you guess one of my childrens names?').toLowerCase();
console.log(theirGuessAtName);

while (guessCount > 0 && correctGuessFlag === false) {

    guessCount--;
    for (var i = 0; i < childsName.length; i++) {
        if (childsName[i] === theirGuessAtName) {
            totalScore++;
            console.log(totalScore, 'question 7');
            correctGuessFlag = true;

        }
    }

    if (correctGuessFlag === false) {
        theirGuessAtName = prompt('try again').toLowerCase();
    }
}
console.log(correctGuessFlag);
alert('In case you were wondering my children\'s names are Lilly, Isabella, Lieng, and Katherine.');



alert('Thank you so much for visiting my site ' + name + ' You answered my questions correctly  ' + totalScore + ' times.');


