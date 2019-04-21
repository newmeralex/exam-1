console.log('From external script');
//console.info('From info');
// jjjjjjjjj
// jjjjjjjjj
console.error('ERROR'); //dcecf
console.log();
var num = 122333;
var string = 'Ctroka';
var nullVar = null;
var undefinedVar = undefined;
var bool = true;

var obj = {
    name: 'Bill',
    surname: 'Clinton',
    job: 'President',
    yaerOfBirdth: 1900,
    isAmerican: true
};

console.log(num, string,
    nullVar, undefinedVar,
    bool, obj);

// var confirm = confirm('Vi Ukr?');
// console.log(confirm);
//
// var defoultname = 'gtgtgt';
//
// var prompt = prompt('What is your name?', defoultname);
// console.log(prompt);

if (1 > 2) {
    console.log('true! 1 > 2');
} else if (1 === 2) {
    console.log('true! 1 = 2');
} else {
    console.log ('not true!');
}


var is18 = confirm('Do you have 18?');
if (is18) {
    var name = prompt('What is your name?', 'User');
    alert('Dear ' + name + '! Welcome !')
} else  {
    alert('Sorry! acsess denyed!');
}

