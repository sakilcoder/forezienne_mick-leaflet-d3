

var legendValue = [
    'Bruno CHARLES', 
    'Thierry BOULANGER', 
    'Benoît CURY', 
    'Nicolas OTIN', 
    'Cédric PECHEUR', 
    'Sébastien BOSSU', 
    'Jérôme GOTHON', 
    'Brice SAINT REQUIER', 
    'Fernando FERREIRA', 
    'Romuald NEDAUD', 
    'Sebastien MOLES',
    'Damien KRIF',
    'Antoine DA COSTA'

];

var getFillColor = function (com_type) {
    return com_type =='Bruno CHARLES'? '#81d6f7':
            com_type =='Thierry BOULANGER'? '#03adef':
            com_type =='Benoît CURY'? '#1a71c1':
            com_type =='Nicolas OTIN'? '#4250ab':
            com_type =='Cédric PECHEUR'? '#f6b6c6':
            com_type =='Sébastien BOSSU'? '#ec62a0':
            com_type =='Jérôme GOTHON'? '#ee2080':
            com_type =='Brice SAINT REQUIER'? '#bc3754':
            com_type =='Fernando FERREIRA'? '#ec153b':
            com_type =='Romuald NEDAUD'? '#e5520e':
            com_type =='Sebastien MOLES'? '#f28f17':
            com_type =='Damien KRIF'? '#f9b64f':
            com_type =='Antoine DA COSTA'? '#f7dbac': '#e50031';    
}

var styleAoi = {
    weight: 2,
    color: "#000000",
    opacity: 1,
    fillColor: "#719b6b",
    fillOpacity: 0
}

function styleComFr(feature) {
    let fc = getFillColor(feature.properties.com_type);
    // console.log(fc);
    return {
        weight: 1,
        opacity: 1,
        color: '#2A3E56',
        fillOpacity: 1,
        fillColor: fc
    };
}

let GoogleIcon = function (html) {
    return L.divIcon({
        html: html,
        iconSize: [16, 16],
        className: 'my-google-icon'
    });
}

let pngIconStyle = L.Icon.extend({
    options: {
       iconSize: [10, 19]
    }
});

let pngIcon = function (url) {
    return new pngIconStyle({
        iconUrl: url
    })
}

