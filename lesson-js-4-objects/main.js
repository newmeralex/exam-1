;(function () {
    var arr = ['Vasya', 'Phillip', 'Fedor'];
    console.log(arr);
    console.log(typeof arr);
    console.log(arr [3]);
    arr[3] = 'Masha';
    console.log(arr);
    arr[51] = 'Petr';
    console.log(arr);
    console.log(arr.length);
    var str = 'Hello, BeetRoot!!!';
    console.log(str[2]);
    console.log(str.length);
    console.log('---------------');
    for (var i = arr.length; i >= 0; i--) {
        if (arr[i]) console.log(i + ':', arr[i]);
    }
    arr.forEach(function (el, i) {
        if (el) console.log(i + ':', el);
    });
    arr.push('Anna');
    console.log(arr);
    arr.unshift('Nick');
    console.log(arr);
    console.log(arr.pop());
    console.log(arr);
    console.log(arr.shift());

    var arr2 = arr;
    console.log(arr);
    console.log(arr2);
    arr2[0] = 'Ignat';
    console.log(arr);
    console.log(arr2);

    var arr3 = arr2.slice();
    console.log(arr3);
    arr3[0] = 'Dimon';
    console.log(arr);
    console.log(arr2);
    console.log(arr3);

    console.log('В классе учатся: ' + arr3.join(', '));
    console.log(str.split(', '));


    var str2 = 'Honorificabilitudinitatibus';
    var strNew = [];
    console.log(str2);
    str2.split('').forEach(function (letter, i) {
        if (!(i % 2)) strNew[i] = letter.toUpperCase();
        else strNew[i] = strNew[i] = letter.toLowerCase();
    });
    console.log(strNew.join(''));

    var car = {
        engine: '500 Hp',
        speed: 300,
        weight: 1000,
        skin: {
            color: 'red',
            coupe: true,
            cabriolet: true,
            crash: false
        },
        options: ['mini-bar', 'ABS', 'GBO']
    };
    console.log(car.weight);
    car.speed = 350;
    car.wheel = 'left';
    console.log(car);
    console.log(typeof car.skin[0], typeof  car.options);
        for  (var key in car) {
        if ((typeof car[key]) !== 'object')
            console.log(key +': ' + car[key]);
        else if (car[key][0]) console.log(key +': ' + car[key].join(', '));
        else
            var props = car[key];
            for (var prop in car[key]) {
                console.log(prop +': ' + car[key][prop]);
            }
    }
        console.log('--------map--------');
        arr.map(function (el, i) {
            console.log('Номер ' + el.toUpperCase() + " в классном журнале: " + i);
        })


})();