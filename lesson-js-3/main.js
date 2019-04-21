;(function () {
    console.log(123);
    sayHello();

    function sayHello() {
        console.log('Hello!');
    }

    console.log(654);
    var fn = function () {
        console.log('fn');
    };
    fn();

    function returnValue() {
        console.log('Before return');
        return 2 + 3;
    }

    var value = returnValue();
    returnValue();
    console.log(returnValue());
    console.log(value);

    function sum(a, b) {
        return a + b;
    }

    console.log(sum(2, 4));

    function devide(a, b) {
        if (!b) {
            return;
        }
        return !b ? 'Проверьте парметры ф-ции' : a / b;
    }

    console.log(devide(5, 0));
    console.log(devide(10, 2));


    var sayHiEn = function () {
            return 'Hi'
        },
        sayHiRu = function () {
            return 'Привет'
        };
    console.log(sayHiEn);

    function sayHi(Lang, HiEn, HiRu, name) {
        Lang = Lang || 'en';
        /* Name = Name !== udefined ? Name : 'User';*/
        name = name || 'User';
        if (Lang === 'ru') {
            return HiRu() + ', ' + name;
        } else if (Lang === 'en') {
            return HiEn() + ', ' + name;
        } else {
            return 'Sorry, language is not supported';
        }
    }

    console.log(sayHi('', sayHiEn, sayHiRu));
    console.log(sayHi('ru', sayHiEn, sayHiRu, 'Филипп'));
    console.log(
        sayHi(
            'ua', function () {
                return 'hi';
            }, function () {
                return 'Привет';
            }
        )
    );
    var result = function () {
        return 123;
    }();
    console.log(result);

    var aaa = 'Toshiba';
    var bbb;

    function battery() {
        console.log(aaa);
        bbb = 'frfsefew';
        console.log(bbb);
        var bbb = 'test';
        console.log(bbb);
    }

    battery();
    console.log(bbb);

    for (var i = 10; i > 0; i -= 2) {
        if (i === 4 || i === 5) {
            continue;
        }
        if (i === 2) break;
        console.log(i);

    }
    /*cicles*/

    var i = 10;
    while (i > 0) {
        console.log(i--);
        /* i--;*/
        if (i === 4 || i === 5) {
            continue;
        }
        if (i === 2) break;
        /*console.log(i--);*/

    }
    console.log('----------');
    var k = 10;
    do {
        if (k === 4 || k === 5) {
            continue;
        }
        if (k === 2) break;
        console.log(k);
    } while (k-- > 0) ;

    console.log('--------------');
    var n = 0;
    while (true) {
        var rand = Math.random();
        if (Math.round(rand) === 1) {
            break;
        }
        n++;
    }
    console.log(n);

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    console.log(randomInteger(1, 6));
    console.log('--------------');
    var dice1 = Math.round(1 + Math.random() * (6 - 1));
    var dice2 = Math.round(1 + Math.random() * (6 - 1));
    console.log(dice1, dice2);

    function randomInteger2(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    alert(randomInteger(5, 10));


    console.log('----------');

    function randomInteger3(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    console.log(randomInteger(1, 6));


    console.log('----------');

    function pow(i, n) {

        console.log(n);
        if (n === 1) return i;
        else {
            var result = i * pow(i, n - 1);
            console.log(result, n);
            return result;
        }

        /*else return i * pow(i, n - 1);*/
    }

    var num = prompt('vvedite chislo');
    n = prompt('vvedite stepen');
    alert(pow(num, n));




})();




