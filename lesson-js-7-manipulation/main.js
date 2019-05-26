;(function($){
    $(function(){
var btn = document.getElementById('btn'),
    $btn = $('#btn');


        $('#btn').on('contextmenu', function () {
            console.log("Button clicked with double click");
        });
        $btn.on('mousedown', function () {
            console.log("button pressed");
        });

        $btn.on('mouseup', function () {
            console.log("button unpressed");
        });
        var section1 = $('section:nth-of-type(1)'),
            section2 = $('section:nth-of-type(2)') ;
        section1.on('mouseenter', function () {
            console.log('Section mouseenter');
        });
        section1.on('mouseleave', function () {
            console.log('Section mouseleave');
        });

        section2.on('mouseover', function () {
            console.log('Section mouseenter');
        });
        section2.on('mouseout', function (e) {
            console.log(e);
            console.log('Section mouseleave');
        });
        section2.on('mousemove', function (evt) {
            console.log(evt.offsetX, evt.offsetY);
            console.log(evt.pageY);
            console.log(evt.clientX, evt.clientY);
/*            console.log('Section mousemove');
*/
        });

        section2.off('click');

        section2.on('click', function (evt) {
            console.log(evt.target);
            var $target = $(evt.target);
            if ($target.is('section')){
                console.log('Do ev1');
            } else if ($target.is('div')){
                console.log('Do ev2');
            } else {
                console.log('Do noth');
            }
        });

        section1.on('click', function () {
            console.log('s1 clicked');
            section2.click();
/*
            section2.trigger('click');
*/
        });


        section1.on('click', function () {
            var $me = $(this);
        console.log('$(this)', $me, $me[0]);
        });


        $btn.on('click dblclick contextmenu', function () {
            console.log('Multiply events listener');
        });
        $('a').on('click', function (e) {
            e.preventDefault();

var link = $(this).attr('href');
console.log(link);
var confirmation = confirm('Are you shere ' + link + "?");
if (confirmation) {
    location.href = link;
} else {
    alert('Thanks for !');
}
        });
        $(window).on('scroll', function () {
/*
            console.log($(window).scrollTop());
*/
var nav = $ ('nav');
if ($(window).scrollTop() > 50) {
    nav.addClass('fixed');
}else {
        nav.removeClass('fixed');
    }
        });
        var nav = $('nav');
        $(window).on('resize', function () {
            console.log($(window).width, $(this).height);
            var section = $('section');
            if ($(this).width() < 550) {
                section.css({width: '400px', height: '400px'});
            }else {
                section.css({width: '500px', height: '500px'});
            }
        }); })
/*$(window).on('load', function () {
    alert('Window loaded')
});
$(window).on('beforeunload', function () {
    confirm('Are you shure to go out?');
});
$('form').on('submit', function (e) {
    e.preventDefault();

    alert($(this).find('input').val());

    });*/
/*var input = $('input')
$('input').on('input', function () {
    console.log($(this).val());

});
$('input').on('change', function () {
    console.log('Change:', $(this).val());
});
inp.on('focus', function () {
    console.log($(this).val() + ' is focused');
});
inp.on('focus', function () {
    console.log($(this).val() + ' is lost focused');
});*/


var text = $('textarea');
/*text.on('keydown', function (e) {
    console.log(e);
    if (e.keyCode === 13) return false;
    if(e.shiftKey === true) console.log('Была нажата клавиша  Shift');
if (e.shiftKey && e.keyCode === 65) console.log('Была нажата клавиша А');
});*/
text.on('keyup', function (e) {
    console.log(e. keyCode);
    });
text.on('keypress', function (e) {
    console.log('key pressed', e.keyCode);
    });
console.log('key', e.key);

text.on('copy', function (e) {
    e.preventDefault();
    console.log('Пытаются скопировать текст' + $(this).val());
});

})(jQuery);