;(function(){
    console.log(document.getElementById('menu'));
   var logo = document.getElementById('logo');
   console.log(logo);
   var text = document.getElementsByClassName('main-text');
   console.log(text);
   console.log(text[0]);
   if (text.length) {
       console.log('Элемент есть в ДОМ - дереве');
   }
   var list = document.getElementsByTagName("ul");
   console.log(list);
    var link = document.querySelector('a');
    console.log(link);
    var links = document.querySelectorAll('a');
    console.log(links);

    logo.style.FontSize = '20px';
    document.getElementById('menu').style.float = 'right';

    logo.classList.add('logo');
    text[0].classList.remove('main-text');

    links.forEach(function (link) {
        if (link.classList.contains('active')) {
            link.style.backgroundColor = 'red';
        }
    });
    links[5].classList.toggle('active');
    links[4].classList.toggle('active');
    console.log('Logo Id:', logo.getAttribute('id'));
    console.log('Logo Link:', logo.getAttribute('href'));
    logo.setAttribute('href', '/main.html');
    console.log(logo.hasAttribute('title'));
    logo.removeAttribute('class');


    links[3].dataset.myAttr2 = 'test2';
    console.log(links[3].dataset.myAttribute);

    logo.innerText = 'New Logo';
    console.log(menu.innerHTML);
    menu.innerHTML = 'Here was your menu';
    document.getElementById('s3').outerHTML = 'Here was Section #3';




    var playList = [
        {
            author: "LED ZEPPELIN",
            song:"STAIRWAY TO HEAVEN"
        },
        {
            author: "QUEEN",
            song:"BOHEMIAN RHAPSODY"
        },
        {
            author: "LYNYRD SKYNYRD",
            song:"FREE BIRD"
        },
        {
            author: "DEEP PURPLE",
            song:"SMOKE ON THE WATER"
        },
        {
            author: "JIMI HENDRIX",
            song:"ALL ALONG THE WATCHTOWER"
        },
        {
            author: "AC/DC",
            song:"BACK IN BLACK"
        },
        {
            author: "QUEEN",
            song:"WE WILL ROCK YOU"
        },
        {
            author: "METALLICA",
            song:"ENTER SANDMAN"
        }
    ];
    if (playList.length) {
    playList.unshift({});

        for (var i = 1; i< playList.length; i++) {
            /*console.log(i, playList[i]);*/

            document.write(i + '. Name of song: ' +
                playList[i].song +
                ' (' + playList.author + ')<br>');
        }
        } else {
        document.write('No songs in playlist');
    }

})();