;(function(){
    $(function () {
        $('nav a').on('click', function () {
           var $this = $(this),
               i = $this.data('tab');
           $this
               .addClass('active')
               .siblings()
               .removeClass('active');
           $('.content div{data-tab=' + i +']')
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
        $('.accordion a').on('click', function () {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active')
        });



    });

})(jQuery);