;(function(){
    var str1 = 'Hello',
        str2 = 'world',
        str3 = 'oalolalll dklkl cdkm dcm',
        num = 13123;
    /*console.log(num);
    console.log(str1 + '' + str2 + '! ' + num);
    console.log(str2.length);
    console.log(str3.substring(3, 17));
    console.log(str3.substr(3,8));
    console.log(str2.toLocaleUpperCase());
    console.log(str1.toLowerCase());
    console.log(str3[7]);*/

    var num1 = 123;
        num2 = 12.111;
        console.log(num1, typeof num2);
        console.log(3 % 2);
        console.log(num1 / 3, num1 % 3);
        console.log(str1 % 3);
        var unNam = +'123';
        console.log(typeof unNam);
      /*  console.log(num1++);*/
        console.log(-unNam);
      /*  console.log(num1++);*/
        console.log(num1--);
        console.log(num1);
        var n1 = num2++;
        console.log(n1, num2);

        n1 += 3;
        console.log(n1);
        n1 -= 2;
        console.log(n1);

        str1 += ' Fillip';
        console.log(str1);

        var str4 = '123456 opopo';
        console.log(parseInt(str4));
        var num5 = 54.878;
        console.log(typeof num2.toFixed(5));
        console.log(Math.floor(num5));
        console.log(Math.ceil(num5));
        console.log(Math.round(num5));

        console.log(2 > 3);
        console.log(2 < 55);
        console.log(2 == 3);
        console.log(2 >= 3);
        console.log(2 <= '3');
        console.log(2 === '2');
        console.log(2 !== '1');

        var str10 = 'opiopiope',
            str11 = 'opiopiopr';
        console.log('strings', str10 >= str11);
        console.log(NaN >= NaN);
        console.log(NaN != NaN);

        var variable;
        console.log(1 + 1);
        console.log(variable);
        variable = 111;
        console.log(variable);

        console.log(undefined == null);
        console.log(!undefined);
        console.log(!null);
        console.log('!!', !!str10);
        console.log(!!'');
        console.log(!!0);
        console.log(!!-100);
        console.log(1 / 0);
        console.log(-84834 / 0);

        console.log( true && true);
        console.log( true && true && true && 2===3 );
        console.log( true || false || false );
        console.log( '', 1 === 1 && (1 === 2 || 2 === 2)  && 88 + 66 && null);


        var result;

        if ( 1 && '')
result = true;
         else
result = false;
         result = 1 && '' ? 'true' : 'false';
         console.log(result);
         console.log(result && true);





})();
