'use strict';

var name = prompt('What is your name? ');
console.log('Welcome ' + name);



var wed = prompt('Do you think that I am married?');
wed = wed.toLowerCase();
if (wed === 'yes') {
    //console.log('You are correct! I am happily married.');
    alert('You areo correct! I am happily married.')
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
    console.log('I feel like you don\'t know me at all! Of course I have pets!');
    alert('I feel like you don\'t know me at all! Of course I have pets!')

}





alert('Thank you so much for visiting my site ' + name);


