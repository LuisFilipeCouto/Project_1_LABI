var map = new L.Map("oMeuMapa", {center: [33.10810599906644,-41.48437500000001],zoom: 2});
var osmUrl="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var osmAttrib="Map data OpenStreetMap contributors";
var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});

map.addLayer(osm);

map.on("click", mostraCoordenadas);

function mostraCoordenadas(e){
  var s = document.getElementById("coordenadas");
  s.innerHTML = "Latitude, Longitude = "+e.latlng.lat+", "+e.latlng.lng;
}


var CERN = L.icon({
    iconUrl: 'Imagens/cern.jpeg',
    iconSize:     [35, 35], 
    iconAnchor:   [17.5, 17.5], 
    popupAnchor:  [1, 1] 
});

L.marker([46.233832398, 6.053166454], {icon: CERN}).addTo(map).bindPopup("CERN - Local de desenvolvimento da World Wide Web, HTML e HTTP");


var BELL = L.icon({
    iconUrl: 'Imagens/bell.png',
    iconSize:     [35, 35], 
    iconAnchor:   [15, 15], 
    popupAnchor:  [1, 1] 
});

L.marker([40.683404, -74.400744], {icon: BELL}).addTo(map).bindPopup("Bell Telephone Laboratories - Local de desenvolvimento do transístor, UNIX, linguagem C, LEDs e lasers.");


var INTEL = L.icon({
    iconUrl: 'Imagens/intel.jpg',
    iconSize:     [35, 35], 
    iconAnchor:   [15, 15], 
    popupAnchor:  [1, 1] 
});

L.marker([37.3860884556, -121.958119501], {icon: INTEL}).addTo(map).bindPopup("Intel Corporation - Local de desenvolvimento do Intel 4004, o primeiro microprocessador");



var IBM = L.icon({
    iconUrl: 'Imagens/ibm.jpg',
    iconSize:     [35, 35], 
    iconAnchor:   [16, 50], 
    popupAnchor:  [1, 1] 
});

L.marker([41.2102, -73.803], {icon: IBM}).addTo(map).bindPopup("IBM Research - Local de desenvolvimento da DRAM, HDD e linguagem SQL");



var TI = L.icon({
    iconUrl: 'Imagens/TI.jpg',
    iconSize:     [35, 35], 
    iconAnchor:   [17.5, 17.5], 
    popupAnchor:  [1, 1] 
});

L.marker([32.911247, -96.752320], {icon: TI}).addTo(map).bindPopup("Texas Instruments - Local de desenvolvimento do primeiro circuito integrado");



var ENIAC = L.icon({
    iconUrl: 'Imagens/pen.jpg',
    iconSize:     [35, 35], 
    iconAnchor:   [13, -18], 
    popupAnchor:  [1, 1] 
});

L.marker([39.953885, -75.193048], {icon: ENIAC}).addTo(map).bindPopup("Universidade da Pennsylvania - Local de desenvolvimento do ENIAC, o primeiro computador digital programável");

for(i in pontos) {
  pontos[i].addTo(map);
}

 
