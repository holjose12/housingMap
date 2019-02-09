var wms_layers = [];
var format_nassauUpper2_0 = new ol.format.GeoJSON();
var features_nassauUpper2_0 = format_nassauUpper2_0.readFeatures(json_nassauUpper2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nassauUpper2_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nassauUpper2_0.addFeatures(features_nassauUpper2_0);var lyr_nassauUpper2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nassauUpper2_0, 
                style: style_nassauUpper2_0,
                title: '<img src="styles/legend/nassauUpper2_0.png" /> nassauUpper2'
            });var format_NassauLower_1 = new ol.format.GeoJSON();
var features_NassauLower_1 = format_NassauLower_1.readFeatures(json_NassauLower_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NassauLower_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NassauLower_1.addFeatures(features_NassauLower_1);var lyr_NassauLower_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NassauLower_1, 
                style: style_NassauLower_1,
                title: '<img src="styles/legend/NassauLower_1.png" /> NassauLower'
            });var format_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2 = new ol.format.GeoJSON();
var features_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2 = format_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2.readFeatures(json_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2.addFeatures(features_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2);var lyr_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2, 
                style: style_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2,
                title: '<img src="styles/legend/HousingWGAddressesforGISpropsLandBankIeInterestedIn_2.png" /> HousingWGAddressesforGIS - propsLandBankIeInterestedIn'
            });var format_ShapeFileOfRentRegulation_3 = new ol.format.GeoJSON();
var features_ShapeFileOfRentRegulation_3 = format_ShapeFileOfRentRegulation_3.readFeatures(json_ShapeFileOfRentRegulation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShapeFileOfRentRegulation_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ShapeFileOfRentRegulation_3.addFeatures(features_ShapeFileOfRentRegulation_3);var lyr_ShapeFileOfRentRegulation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShapeFileOfRentRegulation_3, 
                style: style_ShapeFileOfRentRegulation_3,
                title: '<img src="styles/legend/ShapeFileOfRentRegulation_3.png" /> ShapeFileOfRentRegulation'
            });

lyr_nassauUpper2_0.setVisible(true);lyr_NassauLower_1.setVisible(true);lyr_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2.setVisible(true);lyr_ShapeFileOfRentRegulation_3.setVisible(true);
var layersList = [lyr_nassauUpper2_0,lyr_NassauLower_1,lyr_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2,lyr_ShapeFileOfRentRegulation_3];
lyr_nassauUpper2_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'SLDUST': 'SLDUST', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'LSY': 'LSY', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_NassauLower_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'SLDLST': 'SLDLST', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'LSY': 'LSY', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2.set('fieldAliases', {'Address': 'Address', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ShapeFileOfRentRegulation_3.set('fieldAliases', {'Address': 'Address', 'City': 'City', 'State': 'State', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'A_A_B_C_D': 'A_A_B_C_D', 'Street num': 'Street num', 'Street': 'Street', 'City_1': 'City_1', 'State_1': 'State_1', 'Country_1': 'Country_1', 'Zip': 'Zip', 'Address co': 'Address co', 'Relevance': 'Relevance', });
lyr_nassauUpper2_0.set('fieldImages', {'STATEFP': 'TextEdit', 'SLDUST': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'LSY': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_NassauLower_1.set('fieldImages', {'STATEFP': 'TextEdit', 'SLDLST': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'LSY': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2.set('fieldImages', {'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ShapeFileOfRentRegulation_3.set('fieldImages', {'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Country': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'A_A_B_C_D': 'TextEdit', 'Street num': 'TextEdit', 'Street': 'TextEdit', 'City_1': 'TextEdit', 'State_1': 'TextEdit', 'Country_1': 'TextEdit', 'Zip': 'TextEdit', 'Address co': 'TextEdit', 'Relevance': 'TextEdit', });
lyr_nassauUpper2_0.set('fieldLabels', {'STATEFP': 'no label', 'SLDUST': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'LSY': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_NassauLower_1.set('fieldLabels', {'STATEFP': 'no label', 'SLDLST': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'LSY': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', });
lyr_HousingWGAddressesforGISpropsLandBankIeInterestedIn_2.set('fieldLabels', {'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_ShapeFileOfRentRegulation_3.set('fieldLabels', {'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'A_A_B_C_D': 'no label', 'Street num': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State_1': 'no label', 'Country_1': 'no label', 'Zip': 'no label', 'Address co': 'no label', 'Relevance': 'no label', });
lyr_ShapeFileOfRentRegulation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});