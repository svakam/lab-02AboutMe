'use strict';

var name = prompt('What is your name? ');
console.log('Welcome ' + name);



var wed = prompt('Do you think that I am married?');
wed = wed.toLowerCase();
if (wed === 'yes') {
    //console.log('You are correct! I am happily married.');
    alert('You are correct! I am happily married.')
}
else if (wed === 'no') {
    //console.log('Nope wrong answer!');
    alert('Nope wrong answer!');
}

var children = prompt('Do you think I am a mother yet?');
children = children.toLowerCase();
if (children === 'yes') {
    //console.log('You are correct! I am the mother of four children.');
    alert('You are correct! I am the mother of four children.');
}
else if (children === 'no') {
    //console.log('You are incorrect, I do have children.');
    alert('You are incorrect, I do have children.');
}

var pets = prompt('Do you think that I have any pets?');
pets = pets.toLowerCase();
if (pets === 'yes') {
    //console.log('You know me so well! I do have pets.');
    alert('You know me so well! I do have pets.');
}
else if (pets === 'no') {
    //console.log('I feel like you don\'t know me at all! Of course I have pets!');
    alert('I feel like you don\'t know me at all! Of course I have pets!')
}

var dog = prompt('Do you think one of my pets are a dog?');
dog = dog.toLowerCase();
if (dog === 'yes') {
    //console.log('Yep! My dog Bubba is a awesome black lab who eats way to much.');
    alert('Yep! My dog Bubba is a awesome black lab who eats way to much.');
}
else if (dog === 'no') {
    //console.log('Wrong answer. I do have a dog. His name is Bubba and he likes to eat way to much!')
    alert('Wrong answer. I do have a dog. His name is Bubba and he likes to eat way to much!');
}

var bird = prompt('Did you know my other pet was a yellow-fronted amazon parrot?');
bird = bird.toLowerCase();
if (bird === 'yes') {
    //console.log('You are correct. My pet parrot, Killer, is a cool bird who is actually 2 years older then me! Fun fact: parrots have a life span of 80 to a 100 years.');
    alert('You are correct. My pet parrot, Killer, is a cool bird who is actually 2 years older then me! Fun fact: parrots have a life span of 80 to a 100 years.');
}
else if (bird === 'no') {
    //console.log(' I do have a parrot. His name is Killer and he is 2 years older than me. Fun fact: parrots have a life span of 80-100 years.');
    alert('I do have a parrot. His name is Killer and he is 2 years older than me. Fun fact: parrots have a life span of 80-100 years.');
}

alert('Thank you so much for visiting my site ' + name);


