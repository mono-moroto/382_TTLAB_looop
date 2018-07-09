var map;
var marker = [];
var data = [ 
    {
        name: '三重県名張市',
        lat: 34.627659,
        lng: 136.108296 
    }, {
        name: '三重県菰野町',
        lat: 35.020068,
        lng: 136.507344
    }, {
        name: '三重県熊野市',
        lat: 33.888604, 
        lng: 136.100237
    }, {
        name: '奈良県御所市',
        lat: 34.463331, 
        lng: 135.74024
    }
];
 
function initMap() {
    map = new google.maps.Map(document.getElementById('mapBox'), {
        center: {lat: 34.436718, lng: 136.05644} ,
        zoom: 8
	});
 
    for (var i = 0; i < data.length; i++) {
        markerLatLng = {lat: data[i]['lat'], lng: data[i]['lng']}; 
        marker[i] = new google.maps.Marker({ 
            position: markerLatLng, 
            map: map 
        });
    }
 
}