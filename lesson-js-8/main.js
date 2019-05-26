;(function ($) {
    $(function () {
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 100
            }
        });

        /*--*//*--*//*--*/

// init Isotope
        var $grid = $('.table').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
            getSortData: {
                name: '.name',
                symbol: '.symbol',
                number: '.number parseInt',
                category: '[data-category]',
                weight: function (itemElem) {
                    var weight = $(itemElem).find('.weight').text();
                    return parseFloat(weight.replace(/[\(\)]/g, ''));
                }
            }
        });
        function tooglBtnChecked($this) {
            $this
                .addClass('is-checked')
                .siblings()
                .removeClass('is-checked');
        }
// filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function () {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            },
            w: function () {
                var weight = $(this).find('.weight').text();
                return weight > 100 && weight < 150;
            }
        };
// bind filter button click
        $('.filters-button-group button').on('click', function () {
            var $this = $(this),
                filterValue = $this.data('filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({filter: filterValue});

            tooglBtnChecked($this);
        });

// bind sort button click
        $('.sort-by-button-group button').on('click', function () {
            var $this = $(this),
                sortValue = $this.attr('data-sort-value');
            $grid.isotope({sortBy: sortValue});
            tooglBtnChecked($this);
        });
    });
})(jQuery);