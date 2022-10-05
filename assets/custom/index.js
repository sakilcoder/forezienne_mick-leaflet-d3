
const fetchText = async (url) => {
    const response = await fetch(url);
    return await response.text();
}
const csvUrl = 'assets/data/loc_info.csv';

// --------------------------------------------------------------------

var aoiLayer = L.geoJSON(outline, {
    style: styleAoi,
    // onEachFeature: onEachAoi,
    interactive: false
});


var map = L.map('map', {
    // maxBounds: aoiLayer.getBounds(),
    // maxBoundsViscosity: 1.0,
    layers: [basemapCarto]
});
map.options.minZoom = 5;
map.options.maxZoom = 8;
map.fitBounds(aoiLayer.getBounds());
L.Control.geocoder().addTo(map);

var baseLayers = {
    'Carto': basemapCarto,
    'Google': googleTerrain,
    'Street': Esri_WorldStreetMap,
};
let overlays ={};

let comFr = { "type": "FeatureCollection" };

fetchText(csvUrl).then(text => {
    let pois = d3.csvParse(text);
    // console.log(pois);

    for (i = 0; i < com_fr.features.length; i++) {
        let adata = _.filter(pois, function (r) {
            return r.id == com_fr.features[i].properties.id; // -1 means not present
        });

        com_fr.features[i].properties["name_1"] = adata[0].name_1;
        com_fr.features[i].properties["name_2"] = adata[0].name_2;
        com_fr.features[i].properties["cca_2"] = adata[0].cca_2;
        com_fr.features[i].properties["type"] = adata[0].type;
        com_fr.features[i].properties["type_2"] = adata[0].type_2;
        com_fr.features[i].properties["com_type"] = adata[0].com_type;
        com_fr.features[i].properties["value"] = adata[0].value;
        com_fr.features[i].properties["com_type_no"] = adata[0].com_type_no;
    }

    comFr = L.geoJSON(com_fr, {
        style: styleComFr,
        onEachFeature: onEachComFr,
    });


    comFr.addTo(map);
    aoiLayer.addTo(map);

    overlays['Outline'] = aoiLayer;
    overlays['Carte commerciale scierie France'] = comFr;
    var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

    var controlSearch = new L.Control.Search({
        // position:'topright',	
        layer: comFr,
        initial: false,
        zoom: 12,
        // marker: true,
        collapsed: true,
        textPlaceholder: 'Search for a Department',
        propertyName: 'name_2' ,
        hideMarkerOnCollapse: true,
    });
    
    map.addControl( controlSearch );

});

L.easyButton('fa-home fa-lg', function () {
    map.fitBounds(aoiLayer.getBounds());
}).addTo(map);



// let getLegendString = function(){
//     let labels = [];
//     str = '<h4 align="center">Carte commerciale scierie France</h4>';
//     for (var i = 0; i < legendValue.length; i++) {
//         labels.push(
//             '<i style="background:' + getFillColor(legendValue[i]) + '"></i> ' + legendValue[i]);
//     }
//     str += labels.join('<br>');
//     return str;
// }

var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend');

		var labels = [];

		for (var i = 0; i < legendValue.length; i++) {

			labels.push(
				'<i style="background:' + getFillColor(legendValue[i]) + '"></i> <b>' + legendValue[i] + '</b> ' + legendValue2[i]);
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);

