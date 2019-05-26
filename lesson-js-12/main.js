;(function ($) {
    $(function () {

    });
})(jQuery);
function initMap() {
    var coords = {lat: 48.7342467, lng: 37.5797784},

    container = document.getElementById('map'),
        contant = container.innerHTML,
    map = new google.maps.Map(container, {
        center: coords,
        zoom: 19
    }),
        marker = new google.maps.Marker({
            position: coords,
            map: map,
            title: 'BeetRoot!'
        }),
        infowindow = new google.maps.InfoWindow({
            content: contant
        });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}