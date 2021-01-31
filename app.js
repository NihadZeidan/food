confirm('We will ask you some questions before we start, are you oki with that?');


var yourName = prompt('What is your name?');
alert('Welcome to our website ' + yourName);
document.write('welcome  ' + '<b>' + yourName + '</b>' + '  here are the stars you gave us  ');

var userAge = function () {
    var age = prompt('how old are you? (you must be 18 or above)');
    while (age < 18) { age = prompt('Sorry you can\'t enter, you must be 18 or above!') }
    if (age >= 18) {
        alert("your're welcome");
    }
    else { prompt('Sorry you should enter only numbers!') }
}

userAge();


function prefrance() {
    var userPrefrance = prompt('Are you vigitarian? y/n')
    while (userPrefrance != 'y' && userPrefrance != 'n') { userPrefrance = prompt('You must enter only (y or n)') }

    if (userPrefrance == 'y') {
        alert('You can take a look on the vegitables or healthy food page')
    }
    else if (userPrefrance == 'n') {
        alert('You can take a look on the Sweets or Pizza pages')
    }

   
}
prefrance();     


function rating() {
    var star = prompt('How many stars would you give us? (you can enter any number you want)');
    for (i = 0; i < star; i++) {
        document.write('<br>' + '<img src="Images/1200px-Star_full.svg.png" width= 75px' + '&nbsp');
    }
}

rating();

console.log('Hello World'); 