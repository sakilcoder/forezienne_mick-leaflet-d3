

var legendValue = [
    'Bruno CHARLES', 
    'Thierry BOULANGER', 
    'Benoit CURY', 
    'Nicolas OTIN', 
    'Cedric PECHEUR', 
    'Sebastien BOSSU', 
    'Jerome GOTHON', 
    'Brice SAINT REQUIER', 
    'Fernando FERREIRA', 
    'Romuald NEDAUD', 
    'Sebastien MOLES',
    'Damien KRIF',
    'Antoine DA COSTA'

    // 'Antoine DA COSTA',
    // 'Benoit CURY',
    // 'Brice SAINT REQUIER',
    // 'Bruno CHARLES',
    // 'Cedric PECHEUR',
    // 'Damien KRIF',
    // 'Fernando FERREIRA',
    // 'Jerome GOTHON',
    // 'Nicolas OTIN',
    // 'Romuald NEDAUD',
    // 'Sebastien BOSSU',
    // 'Sebastien MOLES',
    // 'Thierry BOULANGER'
];

var legendValue2 = [
    '06.68.23.62.66 (8034)',
    '06.68.23.63.52 (8667)',
    '06.68.23.63.20 (8668)',
    '06.68.23.62.46 (8193)',
    '06.68.23.62.55 (8020)',
    '06.68.23.63.16 (8161)',
    '06.68.23.65.27 (8046)',
    '06.82.64.85.74 (8003)',
    '00 351 915 856 659 (8227)',
    '06.68.23.64.79 (8065)',
    '06.68.23.62.64 (8036)',
    '06.68.23.62.90 (8704)',
    '06.68.23.62.88 (8238)'

    // Bruno CHARLES	06.68.23.62.66 (8034)
    // Thierry BOULANGER	06.68.23.63.52 (8667)
    // Benoit CURY	06.68.23.63.20 (8668)
    // Nicolas OTIN	06.68.23.62.46 (8193)
    // Cedric PECHEUR	06.68.23.62.55 (8020)
    // Sebastien BOSSU	06.68.23.63.16 (8161)
    // Jerome GOTHON	06.68.23.65.27 (8046)
    // Brice SAINT REQUIER	06.82.64.85.74 (8003)
    // Fernando FERREIRA 00 351 915 856 659 (8227)
    // Romuald NEDAUD	06.68.23.64.79 (8065)
    // Sebastien MOLES	06.68.23.62.64 (8036)
    // Damien KRIF	06.68.23.62.90 (8704)
    // Antoine DA COSTA	06.68.23.62.88 (8238)

]

var getFillColor = function (com_type) {
    return com_type =='Bruno CHARLES'? '#81d6f7':
            com_type =='Thierry BOULANGER'? '#03adef':
            com_type =='Benoit CURY'? '#1a71c1':
            com_type =='Nicolas OTIN'? '#4250ab':
            com_type =='Cedric PECHEUR'? '#f6b6c6':
            com_type =='Sebastien BOSSU'? '#ec62a0':
            com_type =='Jerome GOTHON'? '#ee2080':
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

