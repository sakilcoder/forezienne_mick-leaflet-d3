function highlightFeature(e) {
    var layer = e.target;
    // console.log(layer);
    layer.setStyle({
        weight: 3,
        color: '#22FFEE',
        fillOpacity: 0,
        fillColor: '#f22a77'
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

}

function resetHighlight(e) {
    comFr.resetStyle(e.target);
}


function onEachComFr(feature, layer) {

    var popup = L.popup();
    let str_popup = '';
    str_popup += '<span class="text-center"><b>'+ feature.properties.com_type +'</b> '+ feature.properties.value +'</span>';
    str_popup += '<p>'+ feature.properties.com_type_no +'</p>';
    str_popup += '<table style="width: 100%">';
    str_popup += '<tr><td class="text-center">' + feature.properties.cca_2 + ', ' + feature.properties.name_2 + '</td></tr>';
    str_popup += '<tr><td class="text-center"></td></tr>';
    str_popup += '<tr><td class="text-center">' + feature.properties.name_1 + '</td></tr>';
    str_popup += '</table>';
    popup.setContent(str_popup);
    layer.bindPopup(popup, popupOptions);


    // layer.on({
    //     mouseover: highlightFeature,
    //     mouseout: resetHighlight
    // });

    layer.on('click', function (e) {
        var popup = e.target.getPopup();
        popup.setLatLng(e.latlng).openOn(map);
    });

    // layer.on('mouseover', function (e) {
    //     var popup = e.target.getPopup();
    //     popup.setLatLng(e.latlng).openOn(map);
    // });

    // layer.on('mouseout', function (e) {
    //     e.target.closePopup();
    // });
}


