var wms_layers = [];

var format_Limites_MAR_0 = new ol.format.GeoJSON();
var features_Limites_MAR_0 = format_Limites_MAR_0.readFeatures(json_Limites_MAR_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_MAR_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_MAR_0.addFeatures(features_Limites_MAR_0);
var lyr_Limites_MAR_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limites_MAR_0, 
                style: style_Limites_MAR_0,
                popuplayertitle: 'Limites_MAR',
                interactive: true,
                title: '<img src="styles/legend/Limites_MAR_0.png" /> Limites_MAR'
            });
var format_Regions_MAR_1 = new ol.format.GeoJSON();
var features_Regions_MAR_1 = format_Regions_MAR_1.readFeatures(json_Regions_MAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_MAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_MAR_1.addFeatures(features_Regions_MAR_1);
var lyr_Regions_MAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_MAR_1, 
                style: style_Regions_MAR_1,
                popuplayertitle: 'Regions_MAR',
                interactive: true,
                title: '<img src="styles/legend/Regions_MAR_1.png" /> Regions_MAR'
            });
var format_CAPACITE2_2 = new ol.format.GeoJSON();
var features_CAPACITE2_2 = format_CAPACITE2_2.readFeatures(json_CAPACITE2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAPACITE2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPACITE2_2.addFeatures(features_CAPACITE2_2);
var lyr_CAPACITE2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAPACITE2_2, 
                style: style_CAPACITE2_2,
                popuplayertitle: 'CAPACITE2',
                interactive: true,
                title: '<img src="styles/legend/CAPACITE2_2.png" /> CAPACITE2'
            });

lyr_Limites_MAR_0.setVisible(true);lyr_Regions_MAR_1.setVisible(true);lyr_CAPACITE2_2.setVisible(true);
var layersList = [lyr_Limites_MAR_0,lyr_Regions_MAR_1,lyr_CAPACITE2_2];
lyr_Limites_MAR_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_Regions_MAR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE_REGIO': 'CODE_REGIO', 'Nom_Region': 'Nom_Region', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Non_ar': 'Non_ar', });
lyr_CAPACITE2_2.set('fieldAliases', {'Nom_fr': 'Nom_fr', 'Nom_ar': 'Nom_ar', 'iata': 'iata', 'Capacité': 'Capacité', 'Capacite_A': 'Capacite_A', 'Capacite_1': 'Capacite_1', 'Capacite_2': 'Capacite_2', });
lyr_Limites_MAR_0.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr_Regions_MAR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'Nom_Region': 'TextEdit', 'Population': 'TextEdit', 'Menages': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', 'Non_ar': 'TextEdit', });
lyr_CAPACITE2_2.set('fieldImages', {'Nom_fr': 'TextEdit', 'Nom_ar': 'TextEdit', 'iata': 'TextEdit', 'Capacité': 'TextEdit', 'Capacite_A': 'TextEdit', 'Capacite_1': 'TextEdit', 'Capacite_2': 'TextEdit', });
lyr_Limites_MAR_0.set('fieldLabels', {'OBJECTID': 'no label', });
lyr_Regions_MAR_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'CODE_REGIO': 'hidden field', 'Nom_Region': 'inline label - always visible', 'Population': 'inline label - always visible', 'Menages': 'hidden field', 'Etrangers': 'hidden field', 'Marocains': 'hidden field', 'Non_ar': 'inline label - always visible', });
lyr_CAPACITE2_2.set('fieldLabels', {'Nom_fr': 'inline label - always visible', 'Nom_ar': 'inline label - always visible', 'iata': 'hidden field', 'Capacité': 'hidden field', 'Capacite_A': 'hidden field', 'Capacite_1': 'inline label - always visible', 'Capacite_2': 'hidden field', });
lyr_CAPACITE2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});