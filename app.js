confirm('We will ask you some questions before we start, are you oki with that?');


var yourName = prompt('What is your name?');
alert('Welcome to our website ' + yourName);
document.write('welcome ' + '<b>' + yourName + '</b>');


var age = prompt('how old are you? (you must be 18 or above)');
if (age >= 18) {
    alert('welcome')
}
else if (age < 18) {
    alert('Sorry you can not continue')
}
else {
    alert('You must be 18 or above')
};



var userPrefrance = prompt('Are you vigitarian? yes/no');
if (userPrefrance == 'yes') {
    alert('You can take a look on the vegitables or healthy food page')
} else if (userPrefrance == 'no') {
    alert('You can take a look on the Sweets or Pizza pages')
} else { alert('You have to enter your answer (only yes/no)') };



console.log('Hello world');