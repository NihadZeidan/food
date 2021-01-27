


var yourName = prompt('What is your name?');
alert('Welcome to our website ' + <b> yourName </b>);
document.write( 'welcome ' + yourName );

var age = prompt('how old are you? (you must be 18 or above)');
if (age >= 18) { 'Welcome' }
else { 'Sorry you can not continue' };

var userPrefrance = prompt('Are you a vigitarian? yes/no');
if (userPrefrance == 'yes') {
    alert('You can take a look on the vegitables or healthy food page')
} else if (userPrefrance == 'no') {
    alert('You can take a look on the Sweets or Pizza pages')
} else { alert('You have to enter your answer (only yes/no)') };


console.log('Hello world');