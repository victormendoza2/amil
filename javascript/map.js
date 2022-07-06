var map = L.map('map', {});

// PAINEIS
map.createPane('pane_0').style.zIndex = 499;
map.createPane('pane_1').style.zIndex = 498;
map.createPane('pane_2').style.zIndex = 497;
map.createPane('pane_3').style.zIndex = 496;
map.createPane('pane_4').style.zIndex = 495;
map.createPane('pane_5').style.zIndex = 494;

var baseMaps = {};
var overlayMaps = {};

// CAMADAS BASE
var googleStreet = L.tileLayer('http://{s}.google.com/vt/lyrs=m,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Street"] = googleStreet;

var googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
googleSatellite.addTo(map);
baseMaps['Google Satellite'] = googleSatellite;

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
	maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2021 Google</a>'
});
baseMaps["Google Hybrid"] = googleHybrid;

// CAMADAS VETORIAIS
var _Anguia_Preliminar_Oficiar_Wgs84 = L.geoJSON(_Anguia_Preliminar_Oficiar_Wgs84_data, {
			pane: 'pane_0',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(141, 90, 153, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Anguia_Preliminar_Oficiar_Wgs84</h4><br/>'  +
							'<b>AREA_HA:</b>&ensp;' + feature.properties['Area_ha'] + '<br/>' +
							'<b>COD_SUELO:</b>&ensp;' + feature.properties['Cod_suelo'] + '<br/>' +
							'<b>DESC_PENDI:</b>&ensp;' + feature.properties['Desc_pendi'] + '<br/>' +
							'<b>DESC_SUELO:</b>&ensp;' + feature.properties['Desc_suelo'] + '<br/>' +
							'<b>DRENAJE:</b>&ensp;' + feature.properties['Drenaje'] + '<br/>' +
							'<b>FERTILID_N:</b>&ensp;' + feature.properties['Fertilid_n'] + '<br/>' +
							'<b>MATER_ORGA:</b>&ensp;' + feature.properties['Mater_orga'] + '<br/>' +
							'<b>OBJECTID:</b>&ensp;' + feature.properties['OBJECTID'] + '<br/>' +
							'<b>ORIGEN:</b>&ensp;' + feature.properties['Origen'] + '<br/>' +
							'<b>PEDREGOSID:</b>&ensp;' + feature.properties['Pedregosid'] + '<br/>' +
							'<b>PENDIENTE:</b>&ensp;' + feature.properties['Pendiente'] + '<br/>' +
							'<b>PERFIL:</b>&ensp;' + feature.properties['Perfil'] + '<br/>' +
							'<b>PERMEABILI:</b>&ensp;' + feature.properties['Permeabili'] + '<br/>' +
							'<b>PROFUND_EF:</b>&ensp;' + feature.properties['Profund_ef'] + '<br/>' +
							'<b>SHAPE_AREA:</b>&ensp;' + feature.properties['Shape_Area'] + '<br/>' +
							'<b>SHAPE_LENG:</b>&ensp;' + feature.properties['Shape_Leng'] + '<br/>' +
							'<b>TEXTURA:</b>&ensp;' + feature.properties['Textura'] + '<br/>' +
							'<b>ZONA_VIDA:</b>&ensp;' + feature.properties['Zona_vida'] + '<br/>' +
							'<b>FID:</b>&ensp;' + feature.properties['fid'] + '<br/>' +
							'<b>PH:</b>&ensp;' + feature.properties['pH'] + '<br/>' +
							'<b>P_SMPP_PEG:</b>&ensp;' + feature.properties['p_smpp_peG'] + '<br/>' +
							'<b>P_SMPP_PER:</b>&ensp;' + feature.properties['p_smpp_per'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Anguia_Preliminar_Oficiar_Wgs84'] = _Anguia_Preliminar_Oficiar_Wgs84;

var _Santos_Tomas_1_Oficiar_Wgs84 = L.geoJSON(_Santos_Tomas_1_Oficiar_Wgs84_data, {
			pane: 'pane_1',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(232, 113, 141, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: Santos Tomas 1_Oficiar_Wgs84</h4><br/>'  +
							'<b>AREA_HA:</b>&ensp;' + feature.properties['Area_ha'] + '<br/>' +
							'<b>COD_SUELO:</b>&ensp;' + feature.properties['Cod_suelo'] + '<br/>' +
							'<b>DESC_PENDI:</b>&ensp;' + feature.properties['Desc_pendi'] + '<br/>' +
							'<b>DESC_SUELO:</b>&ensp;' + feature.properties['Desc_suelo'] + '<br/>' +
							'<b>DRENAJE:</b>&ensp;' + feature.properties['Drenaje'] + '<br/>' +
							'<b>FERTILID_N:</b>&ensp;' + feature.properties['Fertilid_n'] + '<br/>' +
							'<b>MATER_ORGA:</b>&ensp;' + feature.properties['Mater_orga'] + '<br/>' +
							'<b>OBJECTID:</b>&ensp;' + feature.properties['OBJECTID'] + '<br/>' +
							'<b>ORIGEN:</b>&ensp;' + feature.properties['Origen'] + '<br/>' +
							'<b>PEDREGOSID:</b>&ensp;' + feature.properties['Pedregosid'] + '<br/>' +
							'<b>PENDIENTE:</b>&ensp;' + feature.properties['Pendiente'] + '<br/>' +
							'<b>PERFIL:</b>&ensp;' + feature.properties['Perfil'] + '<br/>' +
							'<b>PERMEABILI:</b>&ensp;' + feature.properties['Permeabili'] + '<br/>' +
							'<b>PROFUND_EF:</b>&ensp;' + feature.properties['Profund_ef'] + '<br/>' +
							'<b>SHAPE_AREA:</b>&ensp;' + feature.properties['Shape_Area'] + '<br/>' +
							'<b>SHAPE_LENG:</b>&ensp;' + feature.properties['Shape_Leng'] + '<br/>' +
							'<b>TEXTURA:</b>&ensp;' + feature.properties['Textura'] + '<br/>' +
							'<b>ZONA_VIDA:</b>&ensp;' + feature.properties['Zona_vida'] + '<br/>' +
							'<b>FID:</b>&ensp;' + feature.properties['fid'] + '<br/>' +
							'<b>PH:</b>&ensp;' + feature.properties['pH'] + '<br/>' +
							'<b>P_SMPP_PEG:</b>&ensp;' + feature.properties['p_smpp_peG'] + '<br/>' +
							'<b>P_SMPP_PER:</b>&ensp;' + feature.properties['p_smpp_per'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['Santos_Tomas_1_Oficiar_Wgs84'] = _Santos_Tomas_1_Oficiar_Wgs84;

var _UT_CALLAYUC = L.geoJSON(_UT_CALLAYUC_data, {
			pane: 'pane_2',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(255, 158, 23, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: UT_CALLAYUC</h4><br/>'  +
							'<b>AREA_HA:</b>&ensp;' + feature.properties['Area_ha'] + '<br/>' +
							'<b>COD_SUELO:</b>&ensp;' + feature.properties['Cod_suelo'] + '<br/>' +
							'<b>DESC_PENDI:</b>&ensp;' + feature.properties['Desc_pendi'] + '<br/>' +
							'<b>DESC_SUELO:</b>&ensp;' + feature.properties['Desc_suelo'] + '<br/>' +
							'<b>DRENAJE:</b>&ensp;' + feature.properties['Drenaje'] + '<br/>' +
							'<b>FERTILID_N:</b>&ensp;' + feature.properties['Fertilid_n'] + '<br/>' +
							'<b>MATER_ORGA:</b>&ensp;' + feature.properties['Mater_orga'] + '<br/>' +
							'<b>OBJECTID:</b>&ensp;' + feature.properties['OBJECTID'] + '<br/>' +
							'<b>ORIGEN:</b>&ensp;' + feature.properties['Origen'] + '<br/>' +
							'<b>PEDREGOSID:</b>&ensp;' + feature.properties['Pedregosid'] + '<br/>' +
							'<b>PENDIENTE:</b>&ensp;' + feature.properties['Pendiente'] + '<br/>' +
							'<b>PERFIL:</b>&ensp;' + feature.properties['Perfil'] + '<br/>' +
							'<b>PERMEABILI:</b>&ensp;' + feature.properties['Permeabili'] + '<br/>' +
							'<b>PROFUND_EF:</b>&ensp;' + feature.properties['Profund_ef'] + '<br/>' +
							'<b>SHAPE_AREA:</b>&ensp;' + feature.properties['Shape_Area'] + '<br/>' +
							'<b>SHAPE_LENG:</b>&ensp;' + feature.properties['Shape_Leng'] + '<br/>' +
							'<b>TEXTURA:</b>&ensp;' + feature.properties['Textura'] + '<br/>' +
							'<b>ZONA_VIDA:</b>&ensp;' + feature.properties['Zona_vida'] + '<br/>' +
							'<b>FID:</b>&ensp;' + feature.properties['fid'] + '<br/>' +
							'<b>PH:</b>&ensp;' + feature.properties['pH'] + '<br/>' +
							'<b>P_SMPP_PEG:</b>&ensp;' + feature.properties['p_smpp_peG'] + '<br/>' +
							'<b>P_SMPP_PER:</b>&ensp;' + feature.properties['p_smpp_per'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['UT_CALLAYUC'] = _UT_CALLAYUC;

var _UT_SanJuanCutervo_Oficiar_Wgs84 = L.geoJSON(_UT_SanJuanCutervo_Oficiar_Wgs84_data, {
			pane: 'pane_3',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(183, 72, 75, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: UT_SanJuanCutervo_Oficiar_Wgs84</h4><br/>'  +
							'<b>AREA_HA:</b>&ensp;' + feature.properties['Area_ha'] + '<br/>' +
							'<b>COD_SUELO:</b>&ensp;' + feature.properties['Cod_suelo'] + '<br/>' +
							'<b>DESC_PENDI:</b>&ensp;' + feature.properties['Desc_pendi'] + '<br/>' +
							'<b>DESC_SUELO:</b>&ensp;' + feature.properties['Desc_suelo'] + '<br/>' +
							'<b>DRENAJE:</b>&ensp;' + feature.properties['Drenaje'] + '<br/>' +
							'<b>FERTILID_N:</b>&ensp;' + feature.properties['Fertilid_n'] + '<br/>' +
							'<b>MATER_ORGA:</b>&ensp;' + feature.properties['Mater_orga'] + '<br/>' +
							'<b>OBJECTID:</b>&ensp;' + feature.properties['OBJECTID'] + '<br/>' +
							'<b>ORIGEN:</b>&ensp;' + feature.properties['Origen'] + '<br/>' +
							'<b>PEDREGOSID:</b>&ensp;' + feature.properties['Pedregosid'] + '<br/>' +
							'<b>PENDIENTE:</b>&ensp;' + feature.properties['Pendiente'] + '<br/>' +
							'<b>PERFIL:</b>&ensp;' + feature.properties['Perfil'] + '<br/>' +
							'<b>PERMEABILI:</b>&ensp;' + feature.properties['Permeabili'] + '<br/>' +
							'<b>PROFUND_EF:</b>&ensp;' + feature.properties['Profund_ef'] + '<br/>' +
							'<b>SHAPE_AREA:</b>&ensp;' + feature.properties['Shape_Area'] + '<br/>' +
							'<b>SHAPE_LENG:</b>&ensp;' + feature.properties['Shape_Leng'] + '<br/>' +
							'<b>TEXTURA:</b>&ensp;' + feature.properties['Textura'] + '<br/>' +
							'<b>ZONA_VIDA:</b>&ensp;' + feature.properties['Zona_vida'] + '<br/>' +
							'<b>FID:</b>&ensp;' + feature.properties['fid'] + '<br/>' +
							'<b>PH:</b>&ensp;' + feature.properties['pH'] + '<br/>' +
							'<b>P_SMPP_PEG:</b>&ensp;' + feature.properties['p_smpp_peG'] + '<br/>' +
							'<b>P_SMPP_PER:</b>&ensp;' + feature.properties['p_smpp_per'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['UT_SanJuanCutervo_Oficiar_Wgs84'] = _UT_SanJuanCutervo_Oficiar_Wgs84;

var _UT_TORIBIO_CASANOVA_1 = L.geoJSON(_UT_TORIBIO_CASANOVA_1_data, {
			pane: 'pane_4',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(231, 113, 72, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: UT_TORIBIO CASANOVA 1</h4><br/>'  +
							'<b>AREA_HA:</b>&ensp;' + feature.properties['Area_ha'] + '<br/>' +
							'<b>COD_SUELO:</b>&ensp;' + feature.properties['Cod_suelo'] + '<br/>' +
							'<b>DESC_PENDI:</b>&ensp;' + feature.properties['Desc_pendi'] + '<br/>' +
							'<b>DESC_SUELO:</b>&ensp;' + feature.properties['Desc_suelo'] + '<br/>' +
							'<b>DRENAJE:</b>&ensp;' + feature.properties['Drenaje'] + '<br/>' +
							'<b>FERTILID_N:</b>&ensp;' + feature.properties['Fertilid_n'] + '<br/>' +
							'<b>MATER_ORGA:</b>&ensp;' + feature.properties['Mater_orga'] + '<br/>' +
							'<b>OBJECTID:</b>&ensp;' + feature.properties['OBJECTID'] + '<br/>' +
							'<b>ORIGEN:</b>&ensp;' + feature.properties['Origen'] + '<br/>' +
							'<b>PEDREGOSID:</b>&ensp;' + feature.properties['Pedregosid'] + '<br/>' +
							'<b>PENDIENTE:</b>&ensp;' + feature.properties['Pendiente'] + '<br/>' +
							'<b>PERFIL:</b>&ensp;' + feature.properties['Perfil'] + '<br/>' +
							'<b>PERMEABILI:</b>&ensp;' + feature.properties['Permeabili'] + '<br/>' +
							'<b>PROFUND_EF:</b>&ensp;' + feature.properties['Profund_ef'] + '<br/>' +
							'<b>SHAPE_AREA:</b>&ensp;' + feature.properties['Shape_Area'] + '<br/>' +
							'<b>SHAPE_LENG:</b>&ensp;' + feature.properties['Shape_Leng'] + '<br/>' +
							'<b>TEXTURA:</b>&ensp;' + feature.properties['Textura'] + '<br/>' +
							'<b>ZONA_VIDA:</b>&ensp;' + feature.properties['Zona_vida'] + '<br/>' +
							'<b>FID:</b>&ensp;' + feature.properties['fid'] + '<br/>' +
							'<b>PH:</b>&ensp;' + feature.properties['pH'] + '<br/>' +
							'<b>P_SMPP_PEG:</b>&ensp;' + feature.properties['p_smpp_peG'] + '<br/>' +
							'<b>P_SMPP_PER:</b>&ensp;' + feature.properties['p_smpp_per'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['UT_TORIBIO_CASANOVA_1'] = _UT_TORIBIO_CASANOVA_1;

var _UT_TORIBIO_CASANOVA_2 = L.geoJSON(_UT_TORIBIO_CASANOVA_2_data, {
			pane: 'pane_5',
			style: {
						opacity: 1.0,
						fillOpacity: 1.0,
						weight: 1.3,
						color: 'rgba(35, 35, 35, 1.00)',
						fillColor: 'rgba(152, 125, 183, 1.00)'
			},
			onEachFeature: function (feature, layer){
				layer.on({click: clickedFeature});
				layer.bindPopup(function (layer) {
					return '<h4>CAMADA: UT_TORIBIO CASANOVA 2</h4><br/>'  +
							'<b>AREA_HA:</b>&ensp;' + feature.properties['Area_ha'] + '<br/>' +
							'<b>COD_SUELO:</b>&ensp;' + feature.properties['Cod_suelo'] + '<br/>' +
							'<b>DESC_PENDI:</b>&ensp;' + feature.properties['Desc_pendi'] + '<br/>' +
							'<b>DESC_SUELO:</b>&ensp;' + feature.properties['Desc_suelo'] + '<br/>' +
							'<b>DRENAJE:</b>&ensp;' + feature.properties['Drenaje'] + '<br/>' +
							'<b>FERTILID_N:</b>&ensp;' + feature.properties['Fertilid_n'] + '<br/>' +
							'<b>MATER_ORGA:</b>&ensp;' + feature.properties['Mater_orga'] + '<br/>' +
							'<b>OBJECTID:</b>&ensp;' + feature.properties['OBJECTID'] + '<br/>' +
							'<b>ORIGEN:</b>&ensp;' + feature.properties['Origen'] + '<br/>' +
							'<b>PEDREGOSID:</b>&ensp;' + feature.properties['Pedregosid'] + '<br/>' +
							'<b>PENDIENTE:</b>&ensp;' + feature.properties['Pendiente'] + '<br/>' +
							'<b>PERFIL:</b>&ensp;' + feature.properties['Perfil'] + '<br/>' +
							'<b>PERMEABILI:</b>&ensp;' + feature.properties['Permeabili'] + '<br/>' +
							'<b>PROFUND_EF:</b>&ensp;' + feature.properties['Profund_ef'] + '<br/>' +
							'<b>SHAPE_AREA:</b>&ensp;' + feature.properties['Shape_Area'] + '<br/>' +
							'<b>SHAPE_LENG:</b>&ensp;' + feature.properties['Shape_Leng'] + '<br/>' +
							'<b>TEXTURA:</b>&ensp;' + feature.properties['Textura'] + '<br/>' +
							'<b>ZONA_VIDA:</b>&ensp;' + feature.properties['Zona_vida'] + '<br/>' +
							'<b>FID:</b>&ensp;' + feature.properties['fid'] + '<br/>' +
							'<b>PH:</b>&ensp;' + feature.properties['pH'] + '<br/>' +
							'<b>P_SMPP_PEG:</b>&ensp;' + feature.properties['p_smpp_peG'] + '<br/>' +
							'<b>P_SMPP_PER:</b>&ensp;' + feature.properties['p_smpp_per'] + '<br/>' 
				});
			}
}).addTo(map);
overlayMaps['UT_TORIBIO_CASANOVA_2'] = _UT_TORIBIO_CASANOVA_2;

//Função que dá zoom sobre a feição clicada
function clickedFeature(e) {
	var feature = e.target;
	if (feature.feature.geometry.type == 'Point' ) {
		map.setView(feature.getLatLng(), 16);
	} else {
		map.fitBounds(feature.getBounds());
	}
}

// LEGENDA
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	var div = L.DomUtil.create('div', 'info legend');
	div.innerHTML = '<dl>';
	div.innerHTML += 	'<dt class="_Anguia_Preliminar_Oficiar_Wgs84_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(141, 90, 153, 1.00)"></svg>Anguia_Preliminar_Oficiar_Wgs84</dt>';
	div.innerHTML += 	'<dt class="_Santos_Tomas_1_Oficiar_Wgs84_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(232, 113, 141, 1.00)"></svg>Santos Tomas 1_Oficiar_Wgs84</dt>';
	div.innerHTML += 	'<dt class="_UT_CALLAYUC_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(255, 158, 23, 1.00)"></svg>UT_CALLAYUC</dt>';
	div.innerHTML += 	'<dt class="_UT_SanJuanCutervo_Oficiar_Wgs84_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(183, 72, 75, 1.00)"></svg>UT_SanJuanCutervo_Oficiar_Wgs84</dt>';
	div.innerHTML += 	'<dt class="_UT_TORIBIO_CASANOVA_1_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(231, 113, 72, 1.00)"></svg>UT_TORIBIO CASANOVA 1</dt>';
	div.innerHTML += 	'<dt class="_UT_TORIBIO_CASANOVA_2_lgd"><svg class="legendIcon"><rect width="18" height="18" stroke="rgba(35, 35, 35, 1.00)" stroke-width="3" fill="rgba(152, 125, 183, 1.00)"></svg>UT_TORIBIO CASANOVA 2</dt>';
	div.innerHTML += '</dl>';
	return div
}
legend.addTo(map);

//ESCALA
L.control.scale({
	maxWidth: 250,
	imperial: false
}).addTo(map);

// CONTROLE DE CAMADAS
L.control.layers(baseMaps, overlayMaps, {
	position: 'topright',
	collapsed: false,
	sortLayers: true
}).addTo(map);

function layerON (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'block';
	}
}

function layerOFF (event){
	var className = event.name + '_lgd';
	var legendItems = document.getElementsByClassName(className);
	for (var i = 0; i < legendItems.length; i++) {
		legendItems[i].style.display = 'none';
	}
}

map.on('overlayadd', layerON);
map.on('overlayremove', layerOFF);

// CALCULA A AREA QUE COBRE TODAS AS CAMADAS
var bounds = {xmin: 180, ymin: 90, xmax: -180, ymax: -90};
for (var layer in overlayMaps) {
	var layerBounds = overlayMaps[layer].getBounds();
	if (bounds.xmin > layerBounds.getSouthWest().lng) {bounds.xmin = layerBounds.getSouthWest().lng};
	if (bounds.ymin > layerBounds.getSouthWest().lat) {bounds.ymin = layerBounds.getSouthWest().lat};
	if (bounds.xmax < layerBounds.getNorthEast().lng) {bounds.xmax = layerBounds.getNorthEast().lng};
	if (bounds.ymax < layerBounds.getNorthEast().lat) {bounds.ymax = layerBounds.getNorthEast().lat};
}
map.fitBounds([
	[bounds.ymin, bounds.xmin],
	[bounds.ymax, bounds.xmax]
]);
