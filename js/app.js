var map = L.map('map').setView([-3.6908157,128.1544828],15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap'
}).addTo(map);

const modal = document.getElementById("videoModal");
const frame = document.getElementById("videoFrame");
const judul = document.getElementById("judulCCTV");

cctvs.forEach(function(cctv){

    var marker = L.marker([cctv.lat, cctv.lng]).addTo(map);

    marker.bindPopup(cctv.nama);

    marker.on("click", function(){


    document.getElementById("judulCCTV").innerHTML = cctv.nama;

    document.getElementById("videoFrame").src = cctv.stream;

    document.getElementById("videoModal").style.display = "flex";

    });

});