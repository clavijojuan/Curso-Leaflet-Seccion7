const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



// tipos basicos 


// latlng

const latlng = L.latLng(3.425773, -76.465013, 1000);
const latlng2 = L.latLng([3.425773, -76.465013, 1000]);
const latlng3 = L.latLng({
    lng: -76.465013, 
    alt:1000,
    lat: 3.425773, 
});
const latlng4 = L.latLng({
    lat: 4,
    lng: -77,
    alt: 500
})

// console.log(latlng);
// console.log(latlng2);
// console.log(latlng3);


map.setView(latlng3);


// const marker = L.marker(latlng3).addTo(map);



// console.log(  latlng.equals(latlng3) );
// console.log(  latlng.toString() );
// console.log( latlng4.distanceTo( marker.getLatLng()  ) );
// console.log( latlng.toBounds(1) )


// latLngBounds

// [
//     [3, -76],
//     [4, -77]
// ]

const nuevaLatlng = L.latLng(4.212669, -77.005143);



const latlngBounds = L.latLngBounds(latlng, latlng4);
const latlngBounds2 = L.latLngBounds([latlng, latlng4]);

// console.log(latlngBounds);
// console.log(latlngBounds2);


latlngBounds.extend( nuevaLatlng );


// console.log( latlngBounds.equals(latlngBounds2) );


// console.log( latlngBounds.getCenter() )
// console.log( latlngBounds.getSouthWest() )
// console.log( latlngBounds.getNorthEast() )
// console.log( latlngBounds.getNorthWest() )
// console.log( latlngBounds.getSouthEast() )


const [ coord, coord2, coord3, coord4, coord5 ] = [ latlngBounds.getSouthWest(), latlngBounds.getNorthEast(), latlngBounds.getNorthWest(), latlngBounds.getSouthEast(), latlngBounds.getCenter() ]

// L.marker(coord).addTo(map)
// L.marker(coord2).addTo(map)
// L.marker(coord3).addTo(map)
// L.marker(coord4).addTo(map)


map.fitBounds(latlngBounds)

// console.log( latlngBounds.contains(latlngBounds2) )


// console.log( latlngBounds.intersects(latlngBounds2) )
// console.log( latlngBounds2.intersects(latlngBounds) )



// console.log( latlngBounds.overlaps(latlngBounds2) )


// console.log( latlngBounds.toBBoxString() )


// Point

const point = L.point( 200, 300 );
const point2 = L.point( 300, 300 );
const point3 = L.point( 200.2, 100.7 );

// console.log(point)


// setTimeout(() => {
//     map.panBy(point);
// }, 3000)

// console.log( point.add(point2) );
// console.log( point.divideBy(2) );
// console.log( point.scaleBy(point2) );
// console.log( point3.round() )



// Bounds

const bounds = L.bounds( point, point3 );

// console.log(bounds)

// console.log( bounds.getCenter() );
// console.log( bounds.getBottomLeft() );
// console.log( bounds.getSize() );


// ICON

const icono = L.icon({
    iconUrl: './assets/img/location.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

const marcadorPrueba = L.marker(coord5, {
    icon: icono
}).addTo(map);


marcadorPrueba.bindPopup('Hola mundo').openPopup();


// DIVICON

const divIcon = L.divIcon({
    className: 'mi-icono-personalizado'
});

const divIcon2 = L.divIcon({
    className: 'fa-solid fa-tree mi-segundo-icono-personalizado'
});


L.marker(coord, {
    icon: divIcon2
}).addTo(map);

L.marker(coord2, {
    icon: divIcon2
}).addTo(map);

L.marker(coord3, {
    icon: divIcon2
}).addTo(map);

const marcador4 = L.marker(coord4, {
    icon: divIcon2
}).addTo(map);


marcador4.bindPopup('soy el marcador 4').openPopup();