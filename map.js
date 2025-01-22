(function() {
    window.onload = function() {
        var mapDiv = document.getElementById('map');
        var latlng = new google.maps.LatLng(40.7257, -74.0047);
        var options = {
            center: latlng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(mapDiv, options);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.7257, -74.0047),
            map: map,
            title: 'Click Me'
        }); 

	var infowindow = new google.maps.InfoWindow({
		content: "Hello World"
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});

    };
})();
