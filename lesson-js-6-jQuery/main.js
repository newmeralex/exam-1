;(function($){
    $(function () {

    var logo = $('#logo');
    console.log(document.getElementById('logo'));
    console.log(logo);
    console.log(logo[0]);
    logo.css('font-size', '28px');
    $('header')
        .css('border-bottom', '1px solid black')
        .find('#menu')
        .css({
        float: 'right',
        backgroundColor: '#ddd',
        padding: '5px 20px'
    })
        .find('a')
        .css({textDecoration: 'none'});

    $('ul')
        .css({
            padding: '20px',
            backgroundColor: '#eee'
        })
        .closest('section')
        .css('border', '1px solid grey')
        .end()  //<ul>
        .siblings('h2')
        .css('text-align', 'center')
        .end()
        .find('li:nth-child(2)')
        .next('li')
        .css({marginLeft: '100px'})
        .siblings('li')
        .css({marginLeft: '50px'})
        .last()
        .prev()
        .next('li')
        .css({marginLeft: '0'});
    $('#s3').addClass('section');

    var divs = $('div'),
        chain = divs
        .removeClass('main-text')
        .first()
        .hasClass('toooy');
        console.log(chain);
        divs.toggleClass('vfserv');

        console.log(logo.attr('href'));
        logo.attr('href', '/main.html');
        $('#s2').removeAttr('id');
        var dataA = $('nav a:eq(2)');
        console.log(dataA.data('my-attribute'));
        dataA.data('my-attribute', 'test2');
        console.log(dataA.data('my-attribute'));
        console.log(logo.text());
        logo.text('New Logo');
        logo.html('<span style="color:red;">' + 'New' + '</span>' + ' Logo');

        var newNavLink = $('<a href="#"> New Menu Item </a>');
        newNavLink.clone().appendTo('nav');
        newNavLink.clone().appendTo('#s1');

        var newListItem = $('<li>newListItem</li>');
        $('ul')
            .append(newListItem.clone())
            .prepend(newListItem.clone());
        $('#s1').append(newListItem.clone());

        var li3 = $('li:nth-of-type(3)');
        newListItem.clone().insertAfter($('li:nth-of-type(3)'));
        newListItem.clone().insertBefore($('li:nth-of-type(3)'));
        li3.hide();
        $('#s1 li').remove();

        $('section:nth-of-type(2) h2').click(function () {
            $('ul li:nth-child(even)').toggleClass('red');
        });
});
})(jQuery);


