//Interactive map script

var map = L.map('map', {
    crs: L.CRS.Simple
});


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var bounds = [[1,2.6], [100,260]];

var Map_2042 = L.imageOverlay('images/WP2042_s4.png', bounds);
	Map_2047 = L.imageOverlay('images/WP2047_s4.png', bounds).addTo(map);
	BlankMap = L.imageOverlay('images/WPLeafletMap.png', bounds);

map.fitBounds(bounds);

var cities = new L.layerGroup();

var North_Africa = new L.layerGroup().addTo(map);
var West_Africa = new L.layerGroup().addTo(map);
var East_Africa = new L.layerGroup().addTo(map);
var Central_Africa = new L.layerGroup().addTo(map);
var South_Africa_Layer = new L.layerGroup().addTo(map);

var Islands = new L.layerGroup().addTo(map);

var Asia = new L.layerGroup().addTo(map);
var Middle_East = new L.layerGroup().addTo(map);

var Europe = new L.layerGroup().addTo(map);

var North_America = new L.layerGroup().addTo(map);
var Central_America = new L.layerGroup().addTo(map);

var South_America = new L.layerGroup().addTo(map);



var Oceania = new L.layerGroup().addTo(map);

//Capitals List
London = L.marker([77.13672, 131.12891]).addTo(cities).bindPopup("London");
Dadesville = L.marker([66.14844, 72.44531]).addTo(cities).bindPopup("Dadesville");
Gibraltar = L.marker([63.4375, 127.25391]).addTo(cities).bindPopup("Gibraltar");



var baseMaps = {
	"Season 4 2042": Map_2042,
	"Season 4 2047": Map_2047,
	"Blank Map": BlankMap
}

var overlayMaps = {
	"Cities": cities,
	"North America": North_America,
	"Central_America": Central_America,
	"South America": South_America,
	"Europe": Europe,
	"Asia": Asia,
	"Middle East": Middle_East,
	"North Africa": North_Africa,
	"West Africa": West_Africa,
	"Central Africa": Central_Africa,
	"East Africa": East_Africa,
	"Southern Africa": South_Africa_Layer,
	"Oceania": Oceania,
	"Islands": Islands
}

L.control.layers(baseMaps, overlayMaps).addTo(map);


//Everything above this works

var countrieslist = [
	"Afghanistan", //0
	"Albania", //1
	"Algeria", //2
	"Andorra", //3
	"Angola", //4
	"Antigua_and_Barbuda", //5
	"Argentina", //6
	"Armenia", //7
	"Aruba", //8
	"Australia", //9
	"Austria", //10
	"Azerbaijan", //11
	"Bahamas", //12
	"Bahrain", //13
	"Bangladesh", //14
	"Barbados", //15
	"Belarus", //16
	"Belgium", //17
	"Belize", //18
	"Benin", //19
	"Bhutan", //20
	"Bolivia", //21
	"Bosnia_and_Herzegovina", //22
	"Botswana", //23
	"Brazil", //24
	"Brunei", //25
	"Bulgaria", //26
	"Burkina_Faso", //27
	"Burma", //28
	"Burundi", //29
	"Cambodia", //30
	"Cameroon", //31
	"Canada", //32
	"Cabo_Verde", //33
	"Central_African_Republic", //34
	"Chad", //35
	"Chile", //36
	"China", //37
	"Colombia", //38
	"Comoros", //39
	"Democratic_Republic_Of_Congo", //40
	"Congo", //41
	"Corsica", //42
	"Costa_Rica", //43
	"Croatia", //44
	"Cuba", //45
	"Curacao", //46
	"Cyprus", //47
	"Czechia", //48
	"Denmark", //49
	"Djibouti", //50
	"Dominica", //51
	"Dominican_Republic", //52
	"East_Timor", //53
	"Ecuador", //54
	"Egypt", //55
	"El_Salvador", //56
	"Equatorial_Guinea", //57
	"Eritrea", //58
	"Estonia", //59
	"Ethiopia", //60
	"Fiji", //61
	"Finland", //62
	"France", //63
	"Gabon", //64
	"Gambia", //65
	"Georgia", //66
	"Germany", //67
	"Ghana", //68
	"Greece", //69
	"Grenada", //70
	"Guatemala", //71
	"Guinea", //72
	"Guinea_Bissau", //73
	"Guyana", //74
	"Haiti", //75
	"Holy_See", //76
	"Honduras", //77
	"Hungary", //78
	"Iceland", //79
	"India", //80
	"Indonesia", //81
	"Iran", //82
	"Iraq", //83
	"Ireland", //84
	"Israel", //85
	"Italy", //86
	"Ivory_Coast", //87
	"Jamaica", //88
	"Japan", //89
	"Jordan", //90
	"Kazakhstan", //91
	"Kenya", //92
	"Kiribati", //93
	"Kosovo", //94
	"Kuwait", //95
	"Kyrgyzstan", //96
	"Laos", //97
	"Latvia", //98
	"Lebanon", //99
	"Lesotho", //100
	"Liberia", //101
	"Libya", //102
	"Liechtenstein", //103
	"Lithuania", //104
	"Luxembourg", //105
	"Macau", //106
	"Macedonia", //107
	"Madagascar", //108
	"Malawi", //109
	"Malaysia", //110
	"Maldives", //111
	"Mali", //112
	"Malta", //113
	"Marshall_Islands", //114
	"Mauritania", //115
	"Mauritius", //116
	"Mexico", //117
	"Micronesia", //118
	"Moldova", //119
	"Monaco", //120
	"Mongolia", //121
	"Montenegro", //122
	"Morocco", //123
	"Mozambique", //124
	"Namibia", //125
	"Nauru", //126
	"Nepal", //127
	"Netherlands", //128
	"New_Zealand", //129
	"Nicaragua", //130
	"Niger", //131
	"Nigeria", //132
	"North_Korea", //133
	"Norway", //134
	"Oman", //135
	"Pakistan", //136
	"Palau", //137
	"Palestine", //138
	"Panama", //139
	"Papua_New_Guinea", //140
	"Paraguay", //141
	"Peru", //142
	"Philippines", //143
	"Poland", //144
	"Portugal", //145
	"Qatar", //146
	"Romania", //147
	"Russia", //148
	"Rwanda", //149
	"Saint_Kitts_and_Nevis", //150
	"Saint_Lucia", //151
	"Saint_Vincent_and_the_Grenadines", //152
	"Samoa", //153
	"San_Marino", //154
	"Sao_Tome_and_Principe", //155
	"Saudi_Arabia", //156
	"Senegal", //157
	"Serbia", //158
	"Seychelles", //159
	"Sierra_Leone", //160
	"Singapore", //161
	"Sint_Maarten", //162
	"Slovakia", //163
	"Slovenia", //164
	"Solomon_Islands", //165
	"Somalia", //166
	"Somaliland", //167
	"South_Africa", //168
	"South_Korea", //169
	"South_Sudan", //170
	"Spain", //171
	"Sri_Lanka", //172
	"Sudan", //173
	"Suriname", //174
	"Swaziland", //175
	"Sweden", //176
	"Switzerland", //177
	"Syria", //178
	"Taiwan", //179
	"Tajikistan", //180
	"Tanzania", //181
	"Thailand", //182
	"Timor_Leste", //183
	"Togo", //184
	"Tonga", //185
	"Trinidad_and_Tobago", //186
	"Tunisia", //187
	"Turkey", //188
	"Turkmenistan", //189
	"Tuvalu", //190
	"Uganda", //191
	"Ukraine", //192
	"United_Arab_Emirates", //193
	"United_Kingdom", //194
	"Uruguay", //195
	"Uzbekistan", //196
	"Vanuatu", //197
	"Venezuela", //198
	"Vietnam", //199
	"West_Sahara", //200
	"Yemen", //201
	"Zambia", //202
	"Zimbabwe" //203
]; //this is fine


var ClaimsList = [
	"Unclaimed", //Afghanistan
	"Unclaimed", //Albania
	"Unclaimed", //Algeria
	"Unclaimed", //Andorra
	"Unclaimed", //Angola
	"Unclaimed", //Antigua_and_Barbuda
	"Unclaimed", //Argentina
	"Unclaimed", //Armenia
	"Unclaimed", //Aruba
	"Unclaimed", //Australia
	"Unclaimed", //Austria
	"Unclaimed", //Azerbaijan
	"Unclaimed", //Bahamas
	"Unclaimed", //Bahrain
	"Unclaimed", //Bangladesh
	"Unclaimed", //Barbados
	"Unclaimed", //Belarus
	"Unclaimed", //Belgium
	"Unclaimed", //Belize
	"Unclaimed", //Benin
	"Unclaimed", //Bhutan
	"Unclaimed", //Bolivia
	"Unclaimed", //Bosnia_and_Herzegovina
	"Unclaimed", //Botswana
	"Unclaimed", //Brazil
	"Unclaimed", //Brunei
	"Unclaimed", //Bulgaria
	"Unclaimed", //Burkina_Faso
	"Unclaimed", //Burma
	"Unclaimed", //Burundi
	"Unclaimed", //Cambodia
	"Unclaimed", //Cameroon
	"Unclaimed", //Canada
	"Unclaimed", //Cabo_Verde
	"Unclaimed", //Central_African_Republic
	"Unclaimed", //Chad
	"Unclaimed", //Chile
	"Unclaimed", //China
	"Unclaimed", //Colombia
	"Unclaimed", //Comoros
	"Unclaimed", //Democratic_Republic_Of_Congo
	"Unclaimed", //Congo
	"Unclaimed", //Costa_Rica
	"Unclaimed", //Croatia
	"Unclaimed", //Cuba
	"Unclaimed", //Curacao
	"Unclaimed", //Cyprus
	"Unclaimed", //Czech republic
	"Unclaimed", //Denmark
	"Unclaimed", //Djibouti
	"Unclaimed", //Dominica
	"Unclaimed", //Dominican_Republic
	"Unclaimed", //East_Timor
	"Unclaimed", //Ecuador
	"Unclaimed", //Egypt
	"Unclaimed", //El_Salvador
	"Unclaimed", //Equatorial_Guinea
	"Unclaimed", //Eritrea
	"Unclaimed", //Estonia
	"Unclaimed", //Ethiopia
	"Unclaimed", //Falklands
	"Unclaimed", //Fiji
	"Unclaimed", //Finland
	"Unclaimed", //France
	"Unclaimed", //Gabon
	"Unclaimed", //Gambia
	"Unclaimed", //Georgia
	"Unclaimed", //Germany
	"Unclaimed", //Ghana
	"Unclaimed", //Greece
	"Unclaimed", //Grenada
	"Unclaimed", //Guatemala
	"Unclaimed", //Guinea
	"Unclaimed", //Guinea_Bissau
	"Unclaimed", //Guyana
	"Unclaimed", //Haiti
	"Unclaimed", //Holy_See
	"Unclaimed", //Honduras
	"Unclaimed", //Hungary
	"Unclaimed", //Iceland
	"Unclaimed", //India
	"Unclaimed", //Indonesia
	"Unclaimed", //Iran
	"Unclaimed", //Iraq
	"Unclaimed", //Ireland
	"Unclaimed", //Israel
	"Unclaimed", //Italy
	"Unclaimed", //Ivory_Coast
	"Unclaimed", //Jamaica
	"Unclaimed", //Japan
	"Unclaimed", //Jordan
	"Unclaimed", //Kazakhstan
	"Unclaimed", //Kenya
	"Unclaimed", //Kiribati
	"Unclaimed", //Kosovo
	"Unclaimed", //Kuwait
	"Unclaimed", //Kyrgyzstan
	"Unclaimed", //Laos
	"Unclaimed", //Latvia
	"Unclaimed", //Lebanon
	"Unclaimed", //Lesotho
	"Unclaimed", //Liberia
	"Unclaimed", //Libya
	"Unclaimed", //Liechtenstein
	"Unclaimed", //Lithuania
	"Unclaimed", //Luxembourg
	"Unclaimed", //Macau
	"Unclaimed", //Macedonia
	"Unclaimed", //Madagascar
	"Unclaimed", //Malawi
	"Unclaimed", //Malaysia
	"Unclaimed", //Maldives
	"Unclaimed", //Mali
	"Unclaimed", //Malta
	"Unclaimed", //Marshall_Islands
	"Unclaimed", //Mauritania
	"Unclaimed", //Mauritius
	"Unclaimed", //Mexico
	"Unclaimed", //Micronesia
	"Unclaimed", //Moldova
	"Unclaimed", //Monaco
	"Unclaimed", //Mongolia
	"Unclaimed", //Montenegro
	"Unclaimed", //Morocco
	"Unclaimed", //Mozambique
	"Unclaimed", //Namibia
	"Unclaimed", //Nauru
	"Unclaimed", //Nepal
	"Unclaimed", //Netherlands
	"Unclaimed", //New_Zealand
	"Unclaimed", //Nicaragua
	"Unclaimed", //Niger
	"Unclaimed", //Nigeria
	"Unclaimed", //North_Korea
	"Unclaimed", //Norway
	"Unclaimed", //Oman
	"Unclaimed", //Pakistan
	"Unclaimed", //Palau
	"Unclaimed", //Palestine
	"Unclaimed", //Panama
	"Unclaimed", //Papua_New_Guinea
	"Unclaimed", //Paraguay
	"Unclaimed", //Peru
	"Unclaimed", //Philippines
	"Unclaimed", //Poland
	"Unclaimed", //Portugal
	"Unclaimed", //Qatar
	"Unclaimed", //Romania
	"Unclaimed", //Russia
	"Unclaimed", //Rwanda
	"Unclaimed", //Saint_Kitts_and_Nevis
	"Unclaimed", //Saint_Lucia
	"Unclaimed", //Saint_Vincent_and_the_Grenadines
	"Unclaimed", //Samoa
	"Unclaimed", //San_Marino
	"Unclaimed", //Sao_Tome_and_Principe
	"Unclaimed", //Saudi_Arabia
	"Unclaimed", //Senegal
	"Unclaimed", //Serbia
	"Unclaimed", //Seychelles
	"Unclaimed", //Sierra_Leone
	"Unclaimed", //Singapore
	"Unclaimed", //Sint_Maarten
	"Unclaimed", //Slovakia
	"Unclaimed", //Slovenia
	"Unclaimed", //Solomon_Islands
	"Unclaimed", //Somalia
	"Unclaimed", //Somaliland
	"Unclaimed", //South_Africa
	"Unclaimed", //South_Korea
	"Unclaimed", //South_Sudan
	"Unclaimed", //Spain
	"Unclaimed", //Sri_Lanka
	"Unclaimed", //Sudan
	"Unclaimed", //Suriname
	"Unclaimed", //Swaziland
	"Unclaimed", //Sweden
	"Unclaimed", //Switzerland
	"Unclaimed", //Syria
	"Unclaimed", //Taiwan
	"Unclaimed", //Tajikistan
	"Unclaimed", //Tanzania
	"Unclaimed", //Thailand
	"Unclaimed", //Timor_Leste
	"Unclaimed", //Togo
	"Unclaimed", //Tonga
	"Unclaimed", //Trinidad_and_Tobago
	"Unclaimed", //Tunisia
	"Unclaimed", //Turkey
	"Unclaimed", //Turkmenistan
	"Unclaimed", //Tuvalu
	"Unclaimed", //Uganda
	"Unclaimed", //Ukraine
	"Unclaimed", //United_Arab_Emirates
	"Unclaimed", //United_Kingdom
	"Unclaimed", //Uruguay
	"Unclaimed", //Uzbekistan
	"Unclaimed", //Vanuatu
	"Unclaimed", //Venezuela
	"Unclaimed", //Vietnam
	"Unclaimed", //West_Sahara
	"Unclaimed", //Yemen
	"Unclaimed", //Zambia
	"Unclaimed" //Zimbabwe
]; //this is fine

var AnnexList = [
	"Sovereign", //Afghanistan
	"Sovereign", //Albania
	"Sovereign", //Algeria
	"Sovereign", //Andorra
	"Sovereign", //Angola
	"Sovereign", //Antigua_and_Barbuda
	"Sovereign", //Argentina
	"Sovereign", //Armenia
	"Sovereign", //Aruba
	"Sovereign", //Australia
	"Sovereign", //Austria
	"Sovereign", //Azerbaijan
	"Sovereign", //Bahamas
	"Sovereign", //Bahrain
	"Sovereign", //Bangladesh
	"Sovereign", //Barbados
	"Sovereign", //Belarus
	"Sovereign", //Belgium
	"Sovereign", //Belize
	"Sovereign", //Benin
	"Sovereign", //Bhutan
	"Sovereign", //Bolivia
	"Sovereign", //Bosnia_and_Herzegovina
	"Sovereign", //Botswana
	"Sovereign", //Brazil
	"Sovereign", //Brunei
	"Sovereign", //Bulgaria
	"Sovereign", //Burkina_Faso
	"Sovereign", //Burma
	"Sovereign", //Burundi
	"Sovereign", //Cambodia
	"Sovereign", //Cameroon
	"Sovereign", //Canada
	"Sovereign", //Cabo_Verde
	"Sovereign", //Central_African_Republic
	"Sovereign", //Chad
	"Sovereign", //Chile
	"Sovereign", //China
	"Sovereign", //Colombia
	"Sovereign", //Comoros
	"Sovereign", //Democratic_Republic_Of_Congo
	"Sovereign", //Congo
	"Sovereign", //Costa_Rica
	"Sovereign", //Croatia
	"Sovereign", //Cuba
	"Sovereign", //Curacao
	"Sovereign", //Cyprus
	"Sovereign", //Czech republic
	"Sovereign", //Denmark
	"Sovereign", //Djibouti
	"Sovereign", //Dominica
	"Sovereign", //Dominican_Republic
	"Sovereign", //East_Timor
	"Sovereign", //Ecuador
	"Sovereign", //Egypt
	"Sovereign", //El_Salvador
	"Sovereign", //Equatorial_Guinea
	"Sovereign", //Eritrea
	"Sovereign", //Estonia
	"Sovereign", //Ethiopia
	"Sovereign", //Falklands
	"Sovereign", //Fiji
	"Sovereign", //Finland
	"Sovereign", //France
	"Sovereign", //Gabon
	"Sovereign", //Gambia
	"Sovereign", //Georgia
	"Sovereign", //Germany
	"Sovereign", //Ghana
	"Sovereign", //Greece
	"Sovereign", //Grenada
	"Sovereign", //Guatemala
	"Sovereign", //Guinea
	"Sovereign", //Guinea_Bissau
	"Sovereign", //Guyana
	"Sovereign", //Haiti
	"Sovereign", //Holy_See
	"Sovereign", //Honduras
	"Sovereign", //Hungary
	"Sovereign", //Iceland
	"Sovereign", //India
	"Sovereign", //Indonesia
	"Sovereign", //Iran
	"Sovereign", //Iraq
	"Sovereign", //Ireland
	"Sovereign", //Israel
	"Sovereign", //Italy
	"Sovereign", //Ivory_Coast
	"Sovereign", //Jamaica
	"Sovereign", //Japan
	"Sovereign", //Jordan
	"Sovereign", //Kazakhstan
	"Sovereign", //Kenya
	"Sovereign", //Kiribati
	"Sovereign", //Kosovo
	"Sovereign", //Kuwait
	"Sovereign", //Kyrgyzstan
	"Sovereign", //Laos
	"Sovereign", //Latvia
	"Sovereign", //Lebanon
	"Sovereign", //Lesotho
	"Sovereign", //Liberia
	"Sovereign", //Libya
	"Sovereign", //Liechtenstein
	"Sovereign", //Lithuania
	"Sovereign", //Luxembourg
	"Sovereign", //Macau
	"Sovereign", //Macedonia
	"Sovereign", //Madagascar
	"Sovereign", //Malawi
	"Sovereign", //Malaysia
	"Sovereign", //Maldives
	"Sovereign", //Mali
	"Sovereign", //Malta
	"Sovereign", //Marshall_Islands
	"Sovereign", //Mauritania
	"Sovereign", //Mauritius
	"Sovereign", //Mexico
	"Sovereign", //Micronesia
	"Sovereign", //Moldova
	"Sovereign", //Monaco
	"Sovereign", //Mongolia
	"Sovereign", //Montenegro
	"Sovereign", //Morocco
	"Sovereign", //Mozambique
	"Sovereign", //Namibia
	"Sovereign", //Nauru
	"Sovereign", //Nepal
	"Sovereign", //Netherlands
	"Sovereign", //New_Zealand
	"Sovereign", //Nicaragua
	"Sovereign", //Niger
	"Sovereign", //Nigeria
	"Sovereign", //North_Korea
	"Sovereign", //Norway
	"Sovereign", //Oman
	"Sovereign", //Pakistan
	"Sovereign", //Palau
	"Sovereign", //Palestine
	"Sovereign", //Panama
	"Sovereign", //Papua_New_Guinea
	"Sovereign", //Paraguay
	"Sovereign", //Peru
	"Sovereign", //Philippines
	"Sovereign", //Poland
	"Sovereign", //Portugal
	"Sovereign", //Qatar
	"Sovereign", //Romania
	"Sovereign", //Russia
	"Sovereign", //Rwanda
	"Sovereign", //Saint_Kitts_and_Nevis
	"Sovereign", //Saint_Lucia
	"Sovereign", //Saint_Vincent_and_the_Grenadines
	"Sovereign", //Samoa
	"Sovereign", //San_Marino
	"Sovereign", //Sao_Tome_and_Principe
	"Sovereign", //Saudi_Arabia
	"Sovereign", //Senegal
	"Sovereign", //Serbia
	"Sovereign", //Seychelles
	"Sovereign", //Sierra_Leone
	"Sovereign", //Singapore
	"Sovereign", //Sint_Maarten
	"Sovereign", //Slovakia
	"Sovereign", //Slovenia
	"Sovereign", //Solomon_Islands
	"Sovereign", //Somalia
	"Sovereign", //Somaliland
	"Sovereign", //South_Africa
	"Sovereign", //South_Korea
	"Sovereign", //South_Sudan
	"Sovereign", //Spain
	"Sovereign", //Sri_Lanka
	"Sovereign", //Sudan
	"Sovereign", //Suriname
	"Sovereign", //Swaziland
	"Sovereign", //Sweden
	"Sovereign", //Switzerland
	"Sovereign", //Syria
	"Sovereign", //Taiwan
	"Sovereign", //Tajikistan
	"Sovereign", //Tanzania
	"Sovereign", //Thailand
	"Sovereign", //Timor_Leste
	"Sovereign", //Togo
	"Sovereign", //Tonga
	"Sovereign", //Trinidad_and_Tobago
	"Sovereign", //Tunisia
	"Sovereign", //Turkey
	"Sovereign", //Turkmenistan
	"Sovereign", //Tuvalu
	"Sovereign", //Uganda
	"Sovereign", //Ukraine
	"Sovereign", //United_Arab_Emirates
	"Sovereign", //United_Kingdom
	"Sovereign", //Uruguay
	"Sovereign", //Uzbekistan
	"Sovereign", //Vanuatu
	"Sovereign", //Venezuela
	"Sovereign", //Vietnam
	"Sovereign", //West_Sahara
	"Sovereign", //Yemen
	"Sovereign", //Zambia
	"Sovereign" //Zimbabwe
]; //this is fine


var countriesinfo = []; //this line is fine

for (i = 0; i < 205; i++) {
	countriesinfo[i] = countrieslist[i] + ". <br>Claimant: " + ClaimsList[i] + ".<br>Controlled/Annexed by: " + AnnexList[i] + '.<br> <a href="https://reddit.com/r/worldpowers/wiki/'+ countrieslist[i] + '">Wiki</a>'; 
}


//The section above is the part in question


//Countries

// var Country = L.polygon([ 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	[], [], [], [], 
// 	], {color: 'blue'}).addTo(map).bindPopup(Country_info + "<br> Annexed by: " + Country_Annexed_Owner);

var Afghanistan = L.polygon([[63.22803, 175.08301], [63.09375, 175.08057], [63.09131, 175.03711], [62.72852, 175.03564], 
	[62.7251, 174.99268], [62.63574, 174.98975], [62.6333, 174.94531], [62.31543, 174.94458], 
	[62.31055, 174.90234], [62.22754, 174.89746], [62.21777, 174.85449], [62.1748, 174.80664], 
	[62.08887, 174.80664], [62.08252, 174.71533], [62.0415, 174.71436], [62.03564, 174.62451], 
	[61.85596, 174.62256], [61.85449, 174.53271], [61.49072, 174.53418], [61.48682, 174.62158], 
	[61.44434, 174.62451], [61.43945, 174.76074], [61.35156, 174.75879], [61.34863, 174.7168],
	[61.2627, 174.71436], [61.25879, 174.66992], [61.16699, 174.57959], [60.98438, 174.57959],
	[60.98242, 174.62354], [60.84912, 174.62598], [60.84521, 174.66895], [60.62061, 174.67188],
	[60.61426, 174.71533], [60.48096, 174.71875], [60.47705, 174.76025], [59.79395, 174.76123],
	[59.74609, 174.80957], [59.74561, 175.0835], [59.70166, 175.0835], [59.69922, 175.35693],
	[59.65527, 175.35791], [59.65259, 175.44702], [59.42725, 175.4502], [59.24561, 175.44775],
	[59.24219, 175.40283], [59.15088, 175.40332], [59.15039, 175.35742], [59.01318, 175.22217],
	[58.92334, 175.21875], [58.82666, 175.08252], [58.7417, 175.08008], [58.73779, 175.0376],
	[58.50732, 174.80908], [58.41797, 174.80859], [58.41699, 174.94531], [58.37158, 174.94507],
	[58.37134, 175.03638], [58.32666, 175.03613], [58.0957, 175.86523], [58.09912, 176.18115],
	[58.1416, 176.18359], [58.1416, 176.96191], [58.14258, 177.1899], [58.18726, 177.19141],
	[58.19043, 177.82861], [58.23438, 177.83276], [58.2356, 177.96826], [58.32715, 178.33496],
	[58.37305, 178.47119], [58.4165, 178.4751], [58.41809, 178.70251], [58.55371, 178.70264],
	[58.59961, 178.65723], [58.7832, 178.65771], [58.78589, 178.70215], [58.9668, 178.70361],
	[59.3335, 178.70313], [59.33643, 178.83838], [59.42871, 178.93018], [59.56494, 178.93359],
	[59.56396, 179.02197], [59.56445, 179.20898], [59.56396, 179.34424], [59.51709, 179.34619],
	[59.51904, 179.48096], [59.61084, 179.7085], [59.70044, 179.71069], [59.74438, 179.61865],
	[59.74731, 179.57373], [59.79175, 179.57446], [59.79419, 179.7561], [59.88257, 179.7583],
	[59.88721, 179.89307], [59.979, 179.98242], [59.97461, 180.39795], [59.93018, 180.40088],
	[59.84058, 180.44458], [59.83911, 180.53638], [59.88403, 180.53662], [59.88501, 180.62646],
	[59.97754, 180.71851], [60.06665, 180.71948], [60.06982, 180.76538], [60.11401, 180.80957],
	[60.479, 180.8103], [60.48047, 180.76514], [60.61743, 180.76538], [60.61963, 180.85596],
	[60.66504, 180.9021], [60.89282, 180.90381], [60.89404, 180.94873], [61.0293, 180.94922],
	[61.0752, 180.99536], [61.07715, 181.31348], [61.16797, 181.36426], [61.17139, 181.45166],
	[61.26074, 181.54395], [61.34961, 181.54443], [61.39648, 181.49756], [61.39795, 181.45215],
	[61.53369, 181.45264], [61.62549, 181.36035], [61.62646, 181.27148], [61.71582, 181.26807],
	[61.71777, 181.22314], [61.80859, 181.22363], [61.80908, 181.59082], [61.76514, 181.5918],
	[61.76855, 181.86523], [61.85449, 181.9585], [61.85449, 181.9585], [61.94678, 182.09521],
	[61.94873, 182.1394], [62.12891, 182.14014], [62.17578, 182.09448], [62.177, 182.00317],
	[62.26758, 182.00244], [62.26904, 182.04785], [62.3147, 182.09351], [62.40454, 182.09521],
	[62.40649, 182.1394], [62.45288, 182.18555], [62.54272, 182.18677], [62.54297, 182.27637],
	[62.63525, 182.36938], [62.72607, 182.41455], [63.32031, 182.41455], [63.41016, 182.36914],
	[63.55127, 182.23193], [63.55029, 182.18738], [63.64331, 182.18628],
	[63.64404, 182.23096], [63.68994, 182.32275], [63.82813, 182.4585], [63.8728, 182.59644],
	[63.91797, 182.64453], [63.9646, 182.7356], [64.10156, 182.87231], [64.14648, 182.87402],
	[64.14771, 183.05615], [64.19482, 183.14917], [64.23828, 183.14941], [64.24072, 183.92725],
	[64.28345, 183.92773], [64.27979, 184.06201], [64.23877, 184.06543], [64.19336, 184.1582],
	[64.19482, 184.29321], [64.28857, 184.38428], [64.3302, 184.38538], [64.33179, 184.56714],
	[64.42017, 184.57178], [64.42236, 184.52368], [64.55737, 184.52661], [64.60474, 184.57056],
	[64.60522, 184.70752], [64.5603, 184.70825], [64.56006, 184.79688], [64.65161, 184.79785],
	[64.65259, 184.70776], [64.698, 184.70483], [64.69287, 184.30469], [64.60059, 184.07227],
	[64.55957, 184.06445], [64.56006, 183.88574], [64.64746, 183.8833], [64.65332, 183.97217],
	[64.69922, 184.01709], [64.74231, 184.01831], [64.74219, 183.60938], [64.69775, 183.51904],
	[64.65088, 183.47461], [64.60449, 183.38037], [64.55762, 183.2876], [64.47266, 183.28369],
	[64.46582, 183.23877], [64.42139, 183.19482], [64.37549, 183.19141], [64.37646, 182.96729],
	[64.33008, 182.96191], [64.33008, 182.87402], [64.19092, 182.73779], [64.14795, 182.73486],
	[64.14502, 182.64502], [64.1001, 182.59961], [64.05664, 182.59766], [64.05566, 182.50684],
	[64.09961, 182.50293], [64.19189, 182.4126], [64.19336, 182.37012], [64.28662, 182.36572],
	[64.28711, 182.32471], [64.55908, 182.3252], [64.56152, 182.36328], [65.01758, 182.37061],
	[65.02222, 182.41382], [65.10669, 182.41333], [65.10864, 182.23486], [65.47412, 182.23145],
	[65.56348, 182.13965], [65.56836, 182.04883], [65.60986, 182.04395], [65.61182, 181.86914],
	[65.56592, 181.77881], [65.47656, 181.72949], [65.38232, 181.63721], [65.29199, 181.5918],
	[65.15479, 181.45361], [65.06641, 181.45654], [65.06006, 181.49609], [64.8833, 181.49561],
	[64.83301, 181.4502], [64.83643, 181.27051], [64.87646, 181.26611], [64.87793, 180.95117],
	[64.78516, 180.86035], [64.65283, 180.86035], [64.6499, 180.90234], [64.51709, 180.89941],
	[64.47119, 180.854], [64.46875, 180.72314], [64.51367, 180.71484], [64.64258, 180.57715],
	[64.64746, 180.44824], [64.60547, 180.354], [64.56104, 180.30811], [64.51318, 180.21777],
	[64.42285, 180.03418], [64.33398, 179.98438], [64.33398, 179.80518], [64.37598, 179.80029],
	[64.42432, 179.75195], [64.42432, 179.7146], [64.55737, 179.71118], [64.55859, 179.57813],
	[64.55859, 179.30566], [64.64941, 179.25049], [64.65186, 178.56885], [64.73828, 178.51465],
	[64.7876, 178.37842], [64.78662, 178.2002], [64.65479, 178.1958], [64.65234, 178.1543],
	[64.60303, 178.10742], [64.56152, 178.10596], [64.55859, 177.69678], [64.46387, 177.55859],
	[64.20508, 177.55078], [64.14453, 177.46387], [63.87598, 177.45898], [63.78418, 177.41699],
	[63.73828, 177.36523], [63.7334, 177.28223], [63.5957, 177.00586], [63.55371, 177.00098],
	[63.50781, 176.95801], [63.50488, 176.72949], [63.41797, 176.67578], [63.37012, 176.54492],
	[63.36816, 176.40918], [63.23535, 176.40527], [63.05273, 176.36133], [63, 176.23242],
	[62.91016, 176.09082], [62.86572, 176.08838], [62.8667, 175.77002], [62.90918, 175.7666],
	[63.04492, 175.63037], [63.05078, 175.26758], [63.09229, 175.26514], [63.22998, 175.12451]
	], {color: 'white'}).addTo(Asia).bindPopup(countriesinfo[0]);

var Albania = L.polygon([ [66.48389, 145.61426], [66.48682, 145.65088], [66.62061, 145.79199], [66.85107, 145.79541], 
	[66.85205, 145.93213], [66.8999, 145.97559], [66.94189, 145.98047], [66.94141, 146.06787], 
	[67.21436, 146.07275], [67.22021, 146.20361], [67.26514, 146.24951], [67.44385, 146.25098], 
	[67.448, 146.20874], [67.53809, 146.20825], [67.54126, 146.25488], [67.58228, 146.25195], 
	[67.62842, 146.2041], [67.63037, 146.02832], [67.76563, 146.02148], [67.76807, 145.93262], 
	[67.85791, 145.92822], [67.85889, 145.88477], [68.30957, 145.88623], [68.31787, 145.93066], 
	[68.4541, 145.93115], [68.45605, 145.97412], [68.58789, 145.97461], [68.68018, 145.93018], 
	[68.77197, 145.88232], [68.77686, 145.79883], [68.81982, 145.7915], [68.82227, 145.70557], 
	[68.91309, 145.70068], [69.00293, 145.65234], [69.0083, 145.52051], [68.96094, 145.51904], 
	[68.96045, 145.38574], [69.0459, 145.37695], [69.04883, 145.29102], [69.00098, 145.24512], 
	[68.91406, 145.24121], [68.91357, 145.19922], [68.81982, 145.10742], [68.73193, 145.10596], 
	[68.72705, 145.05908], [68.36719, 145.06641], [68.36084, 145.2417], [68.18262, 145.24414], 
	[68.17773, 145.19922], [68.13086, 145.15137], [67.79688, 145.02734], [67.45703, 144.97656], 
	[66.97656, 145.04688], [66.77539, 145.16406], [66.72461, 145.4375], [66.68945, 145.47363], 
	[66.67334, 145.49854], [66.4834, 145.50293] ], {color: 'black'}).addTo(Europe).bindPopup(countriesinfo[1]);

var Algeria = L.polygon([[58.55664, 137.95215], [58.4209, 138.00391], [58.36816, 138.08691], [58.0918, 138.19043],
	[57.90723, 138.27344], [57.27637, 138.27344], [57.27148, 138.2334], [57.08398, 138.23828],
	[56.85547, 138.36719], [56.72656, 138.36523], [56.54297, 138.22852], [56.31055, 138.22266],
	[56.07324, 138.32031], [55.76172, 138.32129], [55.71777, 138.27246], [55.66406, 138.09277],
	[55.53027, 137.95801], [55.3916, 137.95996], [55.38379, 138.04004], [55.19922, 138.18262],
	[54.97461, 138.31836], [54.93066, 138.36621], [54.83496, 138.40918], [54.42969, 138.41992],
	[54.42383, 138.50098], [54.37793, 138.54883], [54.29395, 138.55078], [54.28613, 138.59766],
	[54.19727, 138.60449], [54.19434, 139.05664], [54.15039, 139.19336], [54.0625, 139.28906],
	[54.05469, 139.46484], [53.96387, 139.55957], [53.50195, 139.78906], //Libya, southbound
	[53.4209, 139.79028],
	[53.375, 139.78711], [53.01367, 139.14453], [52.73242, 138.72266], [52.36426, 138.04883],
	[52.27832, 137.99121], [52.22656, 137.82031], [52.14551, 137.7666], [52.13574, 137.68555],
	[52.04883, 137.63086], [52.0459, 137.54395], [51.95703, 137.53711], [51.91309, 137.44727],
	[51.90723, 137.36426], [51.81836, 137.30762], [51.81348, 137.22266], [51.73438, 137.17578],
	[51.68359, 137.08105], [51.67676, 136.99805], [51.49512, 136.72461], [51.41016, 136.66797],
	[51.4043, 136.58594], [51.03711, 136.26563], [51.03516, 136.17969], [50.58203, 135.75195],
	[50.57617, 135.66602], [50.31055, 135.42578], [50.20313, 134.80078], [50.07031, 134.33203], //Niger border, south-west bound
	[50.07715, 134.24609], [50.07422, 134.11133], [50.03418, 134.10156], [50.0293, 133.87988],
	[49.98535, 133.87207], [49.98828, 133.5166], [50.12109, 133.50977], [50.2207, 133.55469],
	[50.62207, 133.55176], [50.71484, 133.32324], [50.76367, 132.96777], [50.85547, 132.95703],
	[50.8999, 132.91064], [50.9043, 132.59619], [50.98828, 132.54199], [50.99219, 132.46484],
	[51.125, 132.45508], [51.27344, 132.0918], [51.53125, 132.0918], [51.72656, 131.77539], //mostly mali but also mauritania, westbound
	[52.64355, 130.53223], [53.45703, 129.42383], [54.57227, 127.78516], [55.78711, 125.99023], //South border, westbound
	[56.35938, 125.03613], [57.49902, 125.03027], [57.58984, 125.12646], [57.5918, 125.20996],
	[57.72754, 125.31055], [57.73047, 125.39404], [57.81787, 125.44873], [57.87109, 125.62158],
	[58.04932, 125.77051], [58.05371, 125.94434], [58.18652, 126.04346], [58.18848, 126.58594],
	[58.32275, 126.59131], [58.36963, 126.68408], [58.37207, 126.81445], [58.41699, 126.81982],
	[58.41943, 127.2749], [58.50684, 127.32666], [58.51025, 127.41113], [58.69678, 127.59619],
	[58.87256, 127.64551], [58.96631, 127.7373], [58.96777, 127.91211], [59.0127, 127.91943],
	[59.01465, 128.05176], [59.10645, 128.23291], [59.23828, 128.33252], [59.28516, 128.42578],
	[59.28906, 128.64648], [59.42334, 128.65137], [59.42627, 128.51709], [59.87695, 128.51953],
	[59.88184, 128.78613], [59.9248, 128.78906], [59.9248, 129.01367], [59.97168, 129.10645],
	[60.1543, 129.11133], [60.19922, 129.16113], [60.20508, 129.38281], [60.24121, 129.38672],
	[60.24805, 129.84082], [60.21191, 129.84473], [60.21191, 130.3916], [60.47705, 130.39258],
	[60.48193, 130.48193], [60.56982, 130.4873], [60.66602, 130.25781], [60.75244, 130.25342],
	[60.80518, 130.16504], [61.02588, 130.16064], [61.12256, 130.02881], [61.26074, 130.06592],
	[61.48584, 130.06934], [61.53467, 129.98633], [61.62598, 129.98682], [61.62646, 130.02197],
	[61.94531, 130.02637], [61.94971, 129.98486], [62.40283, 129.97607], [62.40723, 129.89648],
	[62.50049, 129.79883], [62.54102, 129.79199], [62.54688, 129.70898], [62.59277, 129.66211], //border with morocco, northbound
	[62.6748, 129.65918], [63.24219, 129.87891], [64.25, 132.625], [64.53125, 135.84375],
	[64.23535, 137.40918], [64.10059, 137.40332], [63.91797, 137.21875], [63.91455, 137.13721], 
	[63.86768, 137.08789], [63.82471, 137.08447], [63.82324, 137.21875], [63.6875, 137.22021], 
	[63.68359, 137.17773], [63.41455, 137.17578], [63.40723, 137.13672], [63.22754, 137.13379], 
	[63.17773, 137.2168], [62.68164, 137.22363], [62.67773, 137.17773], [62.49805, 137.1748], 
	[62.49121, 137.13477], [62.2666, 137.12988], [62.17969, 137.03809], [62.17285, 136.95166], 
	[62.08789, 136.94727], [61.76563, 136.62305], [61.75928, 136.58105], [61.62695, 136.58398], 
	[61.62109, 136.62573], [61.4895, 136.63037], [61.30762, 136.72266], [61.29736, 136.76221], 
	[61.125, 136.76855], [61.07813, 136.81494], [61.07324, 136.94678], [61.03076, 136.95166], 
	[61.02734, 137.03662], [60.93945, 137.0415], [60.84375, 137.17236], [60.61816, 137.18066], 
	[60.61621, 137.22363], [60.52686, 137.22559], [60.4834, 137.27148], [60.47363, 137.35938], 
	[60.43359, 137.35645], [60.38672, 137.41113], [60.34375, 137.49805], [60.29883, 137.54785], 
	[60.29102, 137.63379], [60.20313, 137.72461], [60.02148, 137.73242], [58.69922, 138.05078], 
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[2]);

var Angola = L.polygon([ 
	[31.56055, 140.07031], [31.55664, 140.29297], [31.65039, 140.47998], [31.64844, 143.08789], 
	[31.45898, 143.17773], [31.14453, 143.1875], [31.00977, 143.23438], [30.91992, 143.27539], 
	[30.86328, 143.36914], [30.59473, 143.36816], [30.59277, 143.45605], [30.50684, 143.45703], 
	[30.45117, 143.54883], [30.36719, 143.55469], [30.23633, 143.60156], [30.18164, 143.64258], 
	[30.18359, 143.72852], [30, 143.77832], [30.00488, 143.86621], [30.04199, 143.86816], 
	[30.0459, 144.19238], [30.09082, 144.23438], [30.09473, 145.05957], [30.22852, 145.10059], 
	[30.41309, 145.1084], [30.41406, 145.19531], [30.5459, 145.19629], [30.5498, 145.15234], 
	[30.72656, 145.1582], [30.82373, 145.20117], [30.82227, 145.93262], [30.59668, 145.93262], 
	[30.5957, 146.84766], [30.32324, 146.84863], //drc east
	[30.31934, 146.80273], [30.04785, 146.80566], [30.04395, 146.84277], [29.8584, 146.8886], 
	[29.44727, 146.88672], [29.44727, 146.85156], [28.85938, 146.85352], [28.80859, 146.9375], 
	[28.71777, 146.94043], [28.70898, 147.03125], [28.5752, 147.11914], [28.3916, 147.16113], 
	[27.70801, 147.16797], [27.70703, 147.20703], [27.75879, 147.30273], [27.84082, 147.30957], 
	[27.8457, 147.44043], [27.80273, 147.44531], [27.80176, 147.85156], [27.88672, 147.9043], 
	[27.88672, 148.22266], [27.8457, 148.2207], [27.8457, 148.30859], [27.9375, 148.39746], //katanga south
	[26.74609, 148.4043], [26.65332, 148.31445], [26.38184, 148.30957], [26.37988, 146.94238], 
	[24.04297, 146.94336], [23.99121, 147.02734], [23.81348, 147.0332], [23.0332, 147.80957], 
	[22.98438, 147.99121], [22.94287, 147.99268], //Zambia
	[22.94043, 147.90186], [22.89648, 147.90039], 
	[22.85156, 147.71484], [22.75977, 147.25977], [22.71094, 146.98438], [22.66992, 146.75195], 
	[22.66406, 146.44141], [22.66211, 145.93555], [22.75391, 145.83594], [22.75977, 145.06055], 
	[22.80469, 145.05664], [22.80664, 144.65234], [22.85254, 144.55762], [23.0293, 144.50684], 
	[23.12598, 144.41797], [23.12109, 141.16504], [23.21191, 141.07227], [23.21582, 140.9873], 
	[23.30957, 140.89551], [23.39844, 140.8877], [23.40332, 140.66406], [23.44434, 140.65918], 
	[23.44629, 140.52246], [23.39844, 140.43066], [23.31055, 140.42773], [23.30957, 140.34277], 
	[23.2207, 140.24316], [23.21777, 139.97559], [23.2627, 139.97266], [23.2627, 139.74707], 
	[23.2207, 139.74316], [23.2168, 139.60547], //namibia
	[23.21875, 139.21875], [31.25, 139.125], [31.50391, 139.85547]
	], {color: 'blue'}).addTo(map).bindPopup(countriesinfo[4]);

var Australia = L.polygon([[20.25, 209.25], [7.5, 211.75], [7.125, 226.5625], [4.59375, 232.71875], 
	[1.125, 235.40625], [1.84375, 238.5625], [15.75, 242.75], [22.75, 241.59375], 
	[27.59375, 235.90625], [28.45313, 233.15625], [28.51563, 227.17188], [28.10938, 222.5], 
	[24.59375, 215.6875]], {color: 'orange'}).addTo(Oceania).bindPopup(countriesinfo[9]);

var Benin = L.polygon([ 
	[40.54395, 133.23584], [41.45313, 133.23242], [41.45923, 133.19043], [42.41309, 133.19141],
	[42.4231, 133.23608], [42.55811, 133.2356], [42.55957, 133.4624], [42.65088, 133.50977],
	[42.92529, 133.51172], [43.02148, 133.64648], [43.15381, 133.64941], [43.15479, 133.78174],
	[43.20313, 133.8291], [43.56934, 133.83301], [43.57178, 133.96875], [43.84326, 133.96729],
	[43.84082, 133.92432], [44.06836, 133.92139], [44.11865, 133.83398], [44.20459, 133.83057],
	[44.25488, 133.74463], [44.43652, 133.74316], [44.4386, 133.78479], //nigeria
	[44.57227, 133.78516], [44.57861, 133.74219], [44.66943, 133.55859], [44.76221, 133.51025],
	[44.85059, 133.51123], [44.85205, 133.42139], [44.94092, 133.41895], [44.94287, 133.33154], 
	[45.03125, 133.27832], [45.03345, 133.19189], [44.94312, 133.14258], [44.94189, 133.0083], 
	[44.8916, 132.96191], //niger
	[44.62207, 132.95898], [44.61621, 132.91797], [44.53027, 132.91211], [44.30273, 132.67773], 
	[44.2998, 132.36816], [44.34375, 132.36426], [44.34082, 132.22754], [44.25, 132.13965], 
	[44.21094, 132.13379], [44.20508, 132.04785], [44.12109, 132.04297], [43.98242, 131.89941], 
	[43.97168, 131.86035], //Burkina faso
	[43.8457, 131.86328], [43.83887, 131.81445], [43.52344, 131.81445], [43.3877, 131.95703],
	[43.33398, 132.13184], [43.28613, 132.17773], [42.87988, 132.18262], [42.87598, 132.22363], 
	[42.74219, 132.23242], [42.64648, 132.36133], [42.55273, 132.40527], [40.72754, 132.41113], 
	[40.54004, 132.54199], [40.49707, 132.54785], //togo 
	[40.28906, 132.63281], [40.30078, 133.17969],//
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[19]);

var Botswana = L.polygon([ 
	[19.50391, 152.16797], [19.54883, 152.03125], [19.59961, 151.97656], [19.7793, 151.97461],
	[19.77734, 151.84961], [19.86914, 151.79492], [19.87305, 151.71289], [19.91309, 151.70996], 
	[19.91699, 151.30176], [19.95996, 151.24805], [20.04883, 151.24609], [20.09668, 151.15723], 
	[20.1875, 151.1543], [20.28369, 151.02002], [20.50977, 151.02051], [20.51172, 151.06006], 
	[20.74023, 151.06348], [20.78516, 151.01611], [20.7876, 150.74561], [21.01172, 150.74219], 
	[21.05957, 150.69727], [21.10254, 150.60156], [21.10938, 150.47168], [21.15332, 150.38086], 
	[21.24609, 150.3291], [21.24609, 150.24512], [21.33447, 150.18701], [21.3374, 150.10547], 
	[21.4248, 150.10059], [21.47705, 149.96924], [21.52441, 149.9209], [21.70117, 149.82813], 
	[21.92676, 149.82422], [22.01758, 149.77637], [22.02637, 149.69043], [22.1582, 149.68555], 
	[22.3418, 149.46387], [22.47852, 149.45801], [22.57422, 149.32324], [22.66992, 149.27832], //zimbabwe northwest
	[22.98242, 149.13428], [22.80469, 149.21387], [22.80176, 149.00195], [22.75586, 148.91211], 
	[22.62305, 148.81641], [22.62402, 148.49023], [22.53027, 148.40527], [22.52539, 148.31348],
	[22.43945, 148.3125], [22.30371, 148.17285], [22.30078, 148.08496], [22.34766, 148.04492], 
	[22.4834, 148.03809], [22.5752, 147.90527], [22.65625, 147.89648], [22.66992, 147.67578], 
	[22.62305, 147.67188], [22.57617, 147.43945], [22.5332, 147.25977], [22.39453, 146.48242], 
	[22.43652, 146.20898], [22.43359, 146.25195], [19.59668, 146.25], [19.59473, 145.51953], [17.48779, 145.5188], //namibia
	[17.35254, 145.6582], [17.34375, 145.74121], [17.24902, 145.83594], [16.98633, 145.93262], 
	[16.93066, 146.02051], [16.70703, 146.0293], [16.61133, 146.10938], [16.3457, 146.11133], 
	[16.25195, 146.06641], [16.20508, 145.97852], [15.88086, 145.97852], [15.88086, 146.79883], 
	[16.01367, 146.80078], [16.02148, 147.02734], [16.19922, 147.0752], [16.24512, 147.12402], 
	[16.25098, 147.20801], [16.33984, 147.26074], [16.34082, 147.34961], [16.43066, 147.35156], 
	[16.52637, 147.48828], [16.70508, 147.49023], [16.75488, 147.58008], [16.98242, 147.58008], 
	[17.07129, 147.6709], [17.06934, 147.99219], [17.02441, 148.07813], [16.89355, 148.18066], 
	[16.88672, 148.26758], [16.80078, 148.27148], [16.79883, 148.54199], [16.70996, 148.63965], 
	[16.66406, 148.77344], [16.66211, 149.04785], [16.74707, 149.09375], [16.75195, 149.18359], 
	[16.71094, 149.1875], [16.70898, 149.36523], [16.75586, 149.45313], [16.84277, 149.54688], 
	[16.94043, 149.59082], [17.30859, 149.72754], [17.48535, 149.73633], [17.52832, 149.78223], 
	[17.5332, 149.91699], [17.58008, 149.91992], [17.57715, 150.10645], [17.62695, 150.18945], 
	[17.71484, 150.19629], [17.84766, 150.33008], [17.85352, 150.41992], [17.99219, 150.46094], 
	[18.21777, 150.46973], [18.31152, 150.51465], [18.53711, 150.74316], [18.54297, 150.9248], 
	[18.62695, 150.92969], [18.67773, 150.97266], [18.72363, 151.14941], [18.77148, 151.20215], 
	[18.85742, 151.19824], [19.00098, 151.38184], [19.13721, 151.42871], [19.13867, 151.65918], 
	[19.22949, 151.93262], [19.36621, 151.93945], [19.40723, 151.98047], [19.45801, 152.25391], 
	[19.50037, 152.25623] //south africa northeast
	], {color: 'blue'}).addTo(South_Africa_Layer).bindPopup(countriesinfo[23]);

var Burkina_Faso = L.polygon([
	[46.54492, 131.35742], [46.45117, 131.49023], [46.22754, 131.49707], [46.13379, 131.53906], 
	[46.08105, 131.62988], [45.99805, 131.63184], [45.99219, 131.8125], [45.89941, 131.94531], 
	[45.49414, 131.95117], [45.48828, 132.04199], [45.40137, 132.0918], [45.39551, 132.17969], 
	[45.21875, 132.32129], [45.20898, 132.45215], [45.17188, 132.45898], [45.16992, 132.59277], 
	[45.26074, 132.59473], [45.25684, 132.77637], [45.21289, 132.81934], [45.03711, 132.81934], 
	[45.02734, 132.73242], [44.94531, 132.73145], [44.85547, 132.77832], [44.80078, 132.86426], 
	[44.71289, 132.86816], [44.66406, 132.95703], //niger
	[44.62207, 132.95898], [44.61621, 132.91797], [44.53027, 132.91211], [44.30273, 132.67773], 
	[44.2998, 132.36816], [44.34375, 132.36426], [44.34082, 132.22754], [44.25, 132.13965], 
	[44.21094, 132.13379], [44.20508, 132.04785], [44.12109, 132.04297], [43.98242, 131.89941], 
	[43.97168, 131.86035], //benin
	[43.97656, 131.86133], [43.97949, 131.54102], [44.02539, 131.53857], [44.02637, 131.35889], [44.07031, 131.35449], //togo
	[44.07031, 131.17969], [44.11499, 131.17334], [44.1167, 130.9917], [43.97949, 130.896], 
	[43.97754, 129.2041], [43.84473, 129.2002], [43.83984, 129.15723], [43.61328, 129.1582], 
	[43.47168, 129.24805], [42.92676, 129.24902], [42.92383, 129.29102], [42.78711, 129.2937], //ghana
	[42.87305, 129.1543], [42.96484, 129.15332], [43.15039, 128.9668], [43.1543, 128.83594],
	[43.19531, 128.83301], [43.19531, 128.51758], [43.15527, 128.51367], [43.10645, 128.28906],
	[42.97559, 128.14355], [42.97168, 128.06055], [43.01782, 128.05713], [43.01855, 128.01318],
	[43.02051, 127.87891], [43.06348, 127.78809], [43.15381, 127.78076], [43.15283, 127.69043],
	[43.28857, 127.68896], [43.37988, 127.64258], [43.4751, 127.5498], [43.47705, 127.37158],
	[43.52344, 127.32568], [43.60986, 127.32129], //ivory coast
	[44.06445, 127.3291], [44.11719, 127.45313], [44.20508, 127.50781], [44.43652, 127.50488],
	[44.43457, 127.46289], [44.62012, 127.46387], [44.71191, 127.55469], [44.71094, 127.77734],
	[44.75684, 127.91699], [44.84473, 127.91895], [44.94043, 128.05273], [45.25977, 128.06055],
	[45.26367, 128.23926], [45.44043, 128.2373], [45.48926, 128.14941], [45.62402, 128.15039],
	[45.62988, 128.2373], [45.80469, 128.37891], [45.80859, 128.46484], [45.63379, 128.60938],
	[45.62793, 128.79102], [45.67285, 128.79297], [45.67676, 128.92383], [45.80859, 128.9248],
	[45.8125, 128.88672], [45.99316, 128.88477], [45.99023, 129.06055], [45.95117, 129.06641],
	[45.94922, 129.15234], [46.1748, 129.1582], [46.30762, 129.25293], [46.31934, 129.33398],
	[46.41016, 129.43262], [46.40625, 129.61035], [46.36328, 129.61523], [46.3623, 129.7959],
	[46.5918, 129.80078], [46.5918, 130.06738], [46.7207, 130.2168], [46.78125, 130.38281],
	[46.81836, 130.39648], [46.90332, 130.53516], [47.00195, 130.67188], [46.99902, 131.1709],
	[46.95703, 131.1748], [46.95117, 131.30664], [46.91187, 131.35657] //Mali
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[27]);

var Burundi = L.polygon([ 
	[32.65723, 152.48486], [32.65967, 152.5249], [32.74658, 152.57813], [32.75293, 152.66797],
	[32.93457, 152.80664], [33.11426, 152.90137], [33.16553, 152.98584], [33.34326, 153.0376], 
	[33.39063, 153.08057], [33.39355, 153.17334], [33.52881, 153.17236], [33.52979, 153.31006], 
	[33.76074, 153.30615], [33.76074, 153.17871], [33.80225, 153.16943], [33.80518, 153.03711], 
	[34.0332, 153.03516], [34.03418, 153.08008], [34.21436, 153.08447], //tanzania north
	[34.21777, 152.90173], [34.17664, 152.89417], [34.17609, 152.71878], [34.21622, 152.7128], 
	[34.21716, 152.67047], [33.9931, 152.66821], [33.90228, 152.57538], [33.8963, 152.26065], 
	[33.9856, 152.25635], [33.98657, 152.17017], [34.03369, 152.16394], [34.03345, 152.03113], //Rwanda 
	[33.9458, 152.02673], [33.80371, 152.02832], [33.71387, 152.11865], [33.70996, 152.16504], 
	[33.62158, 152.16699], [33.62305, 152.11768], [33.48438, 152.11719], [33.32715, 152.1582], 
	[33.07031, 152.16797], [32.66602, 152.29883] //DRC south
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[29]);

var Canada = L.polygon([[99.97754, 30.38379], [95.22656, 30.38721], [95.25391, 31.75586], [94.98633, 31.67773], 
	[94.79297, 32.03516], [94.66797, 32.03906], [94.11719, 32.73828], [94.10156, 32.80469], 
	[93.76172, 32.86914], [93.75586, 33.00293], [94.02344, 33.37891], [94.02539, 33.54688], 
	[94.24219, 33.59961], [94.34766, 33.7832], [94.48242, 33.78125], [94.67578, 34.28125], 
	[94.48438, 34.51367], [94.47461, 34.64648], [94.22266, 34.60742], [94.12305, 34.69922], 
	[94.08008, 34.8457], [93.96875, 35.05664], [93.82422, 35.15234], [93.70898, 35.16211], 
	[93.61914, 35.25195], [93.5293, 35.47266], [92.91211, 36.01953], [92.70508, 36.06641], 
	[92.37109, 36.31445], [91.63672, 36.5332], [91.41016, 36.66797], [91.09766, 36.90234], 
	[91.00977, 36.99805], [90.91016, 37.93555], [90.77734, 37.99805], [90.76758, 38.22266], 
	[90.45508, 38.22266], [90.39258, 38.14453], [90.32031, 38.15039], [90.14258, 38.18945], 
	[89.9043, 38.27344], [89.85938, 38.16016], [89.38672, 37.78125], [89.28711, 37.57031], 
	[88.78711, 36.99609], [88.8457, 35.94922], [88.0957, 36.03906], [86.52344, 37.46875],
	[85.32813, 39.34375], [84.04688, 40.67969], [83.51172, 41.71484], [83.21289, 42.33398],
	[83.11914, 42.82227], [83.24609, 43.42188], [83.48242, 43.46289], [83.67383, 43.33398],
	[83.76123, 43.40442], [83.76465, 63.47803], [83.58203, 63.48633], [83.49414, 63.58105],
	[83.4375, 64.11621], [83.30762, 64.12402], [83.30469, 64.25391], [83.44238, 64.40332],
	[83.44336, 64.80371], [83.26172, 64.99707], [83.25391, 65.08398], [83.12793, 65.13184],
	[83.02734, 65.50781], [82.89063, 65.83984], [83.06836, 66.2793], [82.94434, 66.27734],
	[82.94238, 66.68262], [82.80664, 67.24219], [82.49023, 67.36328], [82.87109, 68.83594],
	[82.32422, 69.65625], [81.76563, 70.46289], [81.33984, 70.77344], [81.33887, 70.80664],
	[81.37646, 70.81445], [81.37646, 70.89844], [81.29541, 70.95117], [81.21973, 71.08887],
	[81.22656, 71.25098], [81.15918, 71.32129], [81.04883, 71.2998], [80.97949, 71.2041],
	[80.81592, 71.19727], [80.58789, 72.08105], [80.21484, 72.59375], [79.76172, 72.94531],
	[79.26172, 72.66797], [78.65234, 72.65234], [78.35156, 72.2793], [78.25781, 72.23633],
	[77.99219, 72.23438], [77.93262, 72.09473], [77.76172, 71.91113], [77.75293, 71.82617],
	[77.70508, 71.78125], [77.53516, 71.77637], [77.41797, 71.79883], [77.37109, 72.16504],
	[78.2207, 74.75244], [78.25781, 74.75244], [78.26807, 74.71533], [78.34912, 74.70801],
	[78.35547, 74.66357], [78.53076, 74.66357], [78.77148, 74.65137], [79.04492, 76.33984], 
	[79.28223, 76.47559], [79.57617, 76.9502], [79.85547, 77.24023], [80.01123, 77.49756],
	[80.09033, 77.59912], [80.10352, 77.82178], [80.14063, 77.82959], [80.2915, 78.04688], //starts to connect w/ QC at this line
	[80.37744, 77.96875], [80.64453, 77.96338], [80.60645, 77.54102], [80.46191, 77.04004],
	[80.46387, 76.90625], [80.52979, 76.90332], [80.55078, 76.49902], [80.91858, 76.25037],
	[80.83435, 76.21985], [80.83252, 76.08594], [80.92285, 75.94727], [81.11133, 75.81445],
	[81.19727, 75.45215], [81.29199, 74.99512], [81.38281, 74.84961], [81.61523, 74.66406],
	[81.83984, 74.48145], [82.3418, 74.33496], [86.23486, 74.34326], [86.32227, 74.4375],
	[86.79492, 74.59375], [89.47656, 73.60938], [90.84375, 75.375], [92.875, 74.40625],
	[97.1875, 74.92969], [98.02344, 75.60156], [98.75, 77.77344], [98.04688, 79.75],
	[97.58594, 80.64063], [96.91406, 82.10156], [95, 82.22656], [95.07813, 82.59961],
	[95.41406, 82.85938], [96.40234, 84.55859], [96.25391, 84.82422], [96.52734, 85.13672],
	[97.25195, 84.98828], [97.65625, 85.29102], [98.58594, 85.49414], [99.97754, 84.69971]
	], {color: 'red'}).addTo(North_America).bindPopup(countriesinfo[32]);

var Canada2 = L.polygon([[82.24854, 81.85986], [82.11621, 81.85889], [82.11621, 82.0835], [82.2041, 82.13623], //Maritime Canada
	[82.24854, 82.2749], [82.24951, 82.49658], [82.02051, 82.72656], [81.10742, 82.73047], 
	[81.10498, 82.77295], [80.92432, 82.77222], [80.92163, 82.72852], [80.73853, 82.73364], 
	[80.73828, 82.77295], [80.69556, 82.77563], [80.64697, 82.87109], [80.64648, 83], 
	[80.55664, 83.00195], [80.55371, 82.96094], [80.32324, 82.95898], [80.23535, 83.05176], 
	[80.23438, 83.09277], [80.2793, 83.09863], [80.27734, 83.23193], [80.23438, 83.23633], 
	[80.23486, 83.41406], [80.14355, 83.46973], [80.14355, 83.55273], [80.14648, 83.85938], 
	[79.75195, 84.07422], [79.33203, 83.8125], [78.98047, 83.86719], [78.7207, 84.16797], 
	[78.67969, 84.43164], [80.23828, 88.12891], [81.52344, 93.35938], [81.80469, 93.69531], 
	[83.17969, 93.61719], [84.17969, 93.10156], [86.27344, 91.67188], [86.46094, 91.37891], 
	[86.03906, 90.60938], [84.67188, 88.98438], [84.22656, 87.13281], [84.50391, 86.34375], 
	[84.68359, 85.48242], [84.69336, 84.98828], [84.56445, 85.0957], [84.51367, 85.12891], 
	[84.30469, 85.64648], [83.65234, 85.64453], [82.96875, 85.35547], [82.78906, 84.67578], 
	[82.9248, 83.78809], [82.89795, 83.68604], [82.85254, 83.59082], [82.8457, 83.37402], 
	[82.75781, 83.27344], [82.7627, 82.92285], [82.84375, 82.8623], [82.80176, 82.54492], 
	[82.75488, 82.36035], [82.44238, 82.31934], [82.34521, 82.12891], [82.25, 81.90283]
	], {color: 'red'}).addTo(North_America).bindPopup(countriesinfo[32]);

var Canada3 = L.polygon([[95.45313, 85], [95.42969, 85.73438], [91.70313, 88.125], [89.64063, 90.04688], //Labrador
	[86.82813, 91.80469], [86.65479, 91.33789], [86.65332, 85.62012], [86.74609, 83.97461], 
	[87.00977, 83.69141], [87.34082, 83.50342], [87.3833, 83.24316], [87.61035, 83.24219], 
	[87.70752, 83.36426], [88.01855, 83.36816], [88.02344, 83.27832], [88.20605, 83.18164], 
	[88.21094, 82.96582], [88.43945, 82.96191], [88.62988, 82.78223], [88.75586, 82.77832], 
	[88.80176, 82.82715], [88.81152, 82.9541], [89.12695, 83.09082], [89.21484, 83.14453], 
	[89.21777, 83.27734], [89.30273, 83.27539], [89.39844, 83.41211], [89.39941, 83.59766], 
	[89.48633, 83.59766], [89.71777, 83.50195], [89.90039, 83.50293], [89.90723, 83.56055], 
	[89.89844, 83.6416], [89.7666, 83.69824], [89.48828, 84.15039], [89.30469, 84.38086], 
	[89.0332, 84.61719], [89.4375, 85.19531], [89.49805, 85.84961], [89.62891, 85.86035], 
	[89.84863, 85.84668], [89.95117, 86.12402], [90.04102, 86.11279], [90.3667, 85.80273], 
	[90.50928, 85.66797], [90.68945, 85.61719], [90.90723, 85.56641], [91.37305, 85.42969], 
	[91.78613, 85.60938], [91.96094, 85.61523], [92.4248, 85.6582], [92.81677, 85.30127], 
	[93.57617, 85.30786], [93.80273, 85.23926], [94.03516, 85.07031], [94.31055, 84.93457], 
	[94.85352, 84.92285], [94.99023, 84.89893], [95.4458, 85.00146]], {color: 'red'}).addTo(North_America).bindPopup(countriesinfo[32]);

var Cameroon = L.polygon([
	[40.50098, 141.79883], [40.59082, 141.84668], [40.72754, 141.85449], [40.81445, 141.89551], 
	[40.91406, 142.0332], [41.00391, 142.07813], [41.18359, 142.0752], [41.27393, 142.17432], 
	[41.28223, 142.25928], [41.32422, 142.30762], [41.41211, 142.30908], [41.41211, 142.41309], 
	[41.36328, 142.49609],[41.36816, 142.62598], [41.45508, 142.68066], [41.45898, 142.85742], 
	[41.50195, 142.86328],[41.50684, 142.94629], [41.55176, 142.99609], [41.63281, 143.00195], //Car

	[41.68604, 143.09131], [41.78174, 143.22461],
	[42.2793, 143.22363], [42.37207, 143.1792], [42.46777, 143.04492], [42.64746, 142.99414], 
	[42.69531, 142.9082], [42.78125, 142.90625], [42.87695, 142.80762], [42.88184, 142.72754], 
	[42.92773, 142.68066], [43.0127, 142.6748], [43.01855, 142.58643], [43.10596, 142.58154],
	[43.24658, 142.4082], [43.29163, 142.40332], [43.29224, 142.31311], [43.38525, 142.22119],
	[43.56445, 142.16992], [43.61426, 142.08154], [43.74951, 142.07959], [43.79688, 141.9917],
	[44.29834, 141.98877], [44.34766, 142.03223], [44.61719, 142.03369], [44.62402, 141.99048],
	[44.80225, 141.98828], [44.80273, 141.89844], [45.07813, 141.89844], [45.08032, 141.85388],
	[45.21533, 141.85107], [45.26099, 141.80396], [45.26416, 141.71802], [45.30859, 141.71387], 
	[45.30957, 141.62451], //chad
	[45.37305, 141.51074],[45.21094, 141.30469],  //lake
	[45.0752, 141.39258], [44.9873, 141.39453], [44.98242, 141.62109], [44.89746, 141.62695],
	[44.89258, 141.71094], [44.75977, 141.71289], [44.75684, 141.66602], [44.48438, 141.67188], 
	[44.48145, 141.71191], [44.3916, 141.71094], [44.2998, 141.61816], [44.29395, 141.53516], 
	[44.20801, 141.4834], [44.20313, 141.20898], [44.11816, 141.20996], [44.01953, 141.07324], 
	[43.65527, 140.90039], [43.42871, 140.88867], [43.42285, 140.84473], [43.33789, 140.84277], 
	[43.33105, 140.75488], [43.28516, 140.71094], [42.92676, 140.7041], [42.87598, 140.66016], 
	[42.87305, 140.52832], [42.82813, 140.4834], [42.69629, 140.47461], [42.69531, 140.43457], 
	[42.46582, 140.43066], [42.46094, 140.38867], [42.3252, 140.38281], [42.2373, 140.28906], 
	[42.23438, 140.11621], [42.10156, 140.10742], [42.09473, 140.02344], [42.04492, 139.97852], 
	[41.73438, 139.96973], [41.72852, 139.93164], [41.64258, 139.92676], [41.5918, 139.83691], 
	[41.40527, 139.83008], [41.26855, 139.6582], [41.17969, 139.65332], [41.18164, 139.74438], 
	[41.09277, 139.74121], [41.04736, 139.69531], [41.04297, 139.60889], [40.95068, 139.51758], 
	[40.77148, 139.51367], [40.76465, 139.4248], [40.68262, 139.41992], [40.63574, 139.37402], 
	[40.63086, 139.19629], [40.7207, 139.14844], [40.8584, 139.14648], [40.86133, 139.06152], 
	[40.90918, 139.01074], [40.99316, 139.00879], [41.03418, 138.95996], [41.04688, 138.87988], 
	[41.08789, 138.86914], [41.08887, 138.78613], [40.95117, 138.78125], [40.95801, 138.50586], 
	[41.04297, 138.50977], [41.04199, 138.46484], [40.91211, 138.36035], [40.90234, 138.23047], 
	[40.76465, 138.14063], [40.63281, 138.08984], [40.62207, 138.00195], [40.48926, 137.87207], 
	[40.40332, 137.86328], [40.39746, 137.78027], [40.30762, 137.68262], [40.2207, 137.67969],
	[40.17188, 137.55371], [40.08691, 137.54297], [40.03809, 137.58887], [39.90088, 137.58545],
	[39.89893, 137.54736], [39.67529, 137.54346], [39.62354, 137.45557], [39.53418, 137.45068],
	[39.52783, 137.40381], [39.44434, 137.40674], [39.43848, 137.36084], [39.39355, 137.35645], //nigeria
	[38.83398, 137.18164], [38.73828, 137.63281], [38.10547, 138.04297], [37.61133, 138.11133], //coast
	[37.60498, 138.23584], [37.60938, 138.27441], [37.52051, 138.32568], [37.5127, 139.33008], //equatorial guinea
	[37.60498, 139.38135], [37.60059, 139.64844], [37.55957, 139.65137], [37.55273, 140.70215], 
	[37.51758, 140.70898], [37.51367, 140.75146], // gabon
	[37.51367, 141.71191], [37.42627, 141.76465], [37.38086, 141.85303], [37.37402, 142.35449], 
	[37.33301, 142.35938], [37.32715, 142.49023], [37.28027, 142.58398], [37.15234, 142.68164], 
	[37.15186, 142.76099], [37.32715, 142.75977], [37.33521, 142.72485], [37.51465, 142.72559], 
	[37.51855, 142.8125], [37.60522, 142.81421], // congo
	[37.70215, 142.72412], [38.10889, 142.71826], [38.20166, 142.625], [38.20557, 142.49854], 
	[38.56445, 142.12793], [38.6582, 142.12158], [38.74658, 142.03174], [39.0708, 142.02979], 
	[39.1626, 141.93652], [39.16504, 141.854], [39.25977, 141.76367], [39.71191, 141.75293], 
	[39.71826, 141.67358], [40.21875, 141.66357], [40.31299, 141.53857], [40.35791, 141.5346] //CAR
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[31]);

var Central_African_Republic = L.polygon([ 

	[42.83496, 148.17871], [43.1543, 148.17676], [43.24219, 148.12988], [43.29492, 148.0459], 
	[43.56543, 147.94531], [43.74707, 147.76074], [43.75098, 147.67773], [43.83691, 147.67188], 
	[43.89111, 147.58398],//sudan north

	[43.93396, 147.49048], [43.979, 147.49048], [43.97925, 147.21558], 
	[43.93262, 147.12646], [43.89453, 147.12402], [43.8877, 146.98682], [43.79785, 146.98389], 
	[43.79541, 146.84717], [43.70459, 146.75879], [43.43115, 146.75488], [43.38574, 146.70508], 
	[43.38086, 146.62305], [43.2959, 146.61719], [43.24414, 146.53125], [43.24512, 146.4375], 
	[43.10376, 146.29858], [43.02051, 146.29639], [42.92285, 146.16309], [42.83691, 146.1582], 
	[42.83252, 146.06836], [42.78516, 146.02295], [42.78662, 145.93262], [42.65088, 145.92871], 
	[42.60352, 145.83691], [42.60254, 145.52344], [42.5603, 145.51709], [42.55371, 144.91992], 
	[42.46484, 144.73828], [42.37646, 144.73975],
	[42.33008, 144.79102], [42.32422, 144.87207], [42.19727, 144.87598], [42.10547, 144.83105], 
	[42.00586, 144.69727], [41.92188, 144.69141], [41.91504, 144.55957], [41.7832, 144.55469], 
	[41.77832, 144.10059], [41.73682, 144.09619], [41.73096, 143.82471], [41.68994, 143.82324], 
	[41.68652, 143.6416], [41.63916, 143.54736], [41.50781, 143.4541], [41.5, 143.31836], 
	[41.45215, 143.27637], //chad left

	[41.63281, 143.00195], [41.55176, 142.99609], [41.50684, 142.94629], [41.50195, 142.86328], 
	[41.45898, 142.85742], [41.45508, 142.68066], [41.36816, 142.62598], [41.36328, 142.49609],
	[41.41211, 142.41309], [41.41211, 142.30908], [41.32422, 142.30762], [41.28223, 142.25928], 
	[41.27393, 142.17432], [41.18359, 142.0752], [41.00391, 142.07813], [40.91406, 142.0332], 
	[40.81445, 141.89551], [40.72754, 141.85449], [40.59082, 141.84668], [40.50098, 141.79883], 
	[40.35791, 141.5346], [40.31299, 141.53857], [40.21875, 141.66357], [39.71826, 141.67358],
	[39.71191, 141.75293], [39.25977, 141.76367], [39.16504, 141.854], [39.1626, 141.93652], 
	[39.0708, 142.02979], [38.74658, 142.03174], [38.6582, 142.12158], [38.56445, 142.12793], 
	[38.20557, 142.49854], [38.20166, 142.625], [38.10889, 142.71826], [37.70215, 142.72412], //cameroon southbound
	
	[37.60498, 142.81439], 
	[37.60693, 142.86084], [37.65527, 142.90576], [37.78809, 142.90918], [37.97705, 142.99707], 
	[37.96777, 143.04395], [38.38574, 143.04199], [38.52344, 143.18164], [38.52441, 143.58984], 
	[38.57227, 143.59473], [38.56348, 143.68457], [38.61719, 143.68457], [38.61035, 143.82031], 
	[38.56836, 143.82324], [38.56543, 144.00586], [38.52246, 144.00977], [38.52051, 144.37207], 
	[38.56641, 144.37598], //Republic of Congo eastbound

	[38.56738, 144.55469], [39.0293, 144.55566], [39.02905, 144.51172], [39.12231, 144.51172], 
	[39.12036, 144.64697], [39.16943, 144.69214], [39.25781, 144.69165], [39.30542, 144.78369], 
	[39.396, 144.78638], [39.44263, 144.87744], [39.53442, 144.87744], [39.58008, 145.05518], 
	[39.66846, 145.1084], [39.66846, 145.37988], [39.57617, 145.42676], [39.4834, 145.69824], 
	[39.29883, 145.88477], [39.16602, 145.88477], [39.11523, 145.93164], [39.11816, 146.06543], 
	[39.16211, 146.07031], [39.16309, 146.24707], [39.11328, 146.34082], [39.02734, 146.34375], 
	[39.02441, 146.98535], [38.93359, 147.07813], [38.93555, 147.30469], [38.98193, 147.35059], 
	[39.16406, 147.40088], [39.21387, 147.48682], [39.30127, 147.48926], [39.35107, 147.57568], 
	[39.43945, 147.5835], [39.43848, 147.67139], [39.35059, 147.71973], [39.34766, 147.85303], 
	[39.30078, 147.90039], [39.30225, 147.99512], [39.34912, 148.0459], [39.43359, 148.22559], 
	[39.5293, 148.62695], [39.57715, 148.68359], [39.61816, 148.68066], [39.62207, 148.8125], 
	[39.5293, 148.90723], [39.53125, 149.18262], [39.57715, 149.18945], [39.57422, 149.36816], 
	[39.80469, 149.37012], [39.80469, 149.45703], [39.80371, 149.5918], [39.71875, 149.69336],
	[39.71484, 150.05273], [39.66895, 150.13867], [39.62012, 150.18945], [39.62305, 150.41797],
	[39.71094, 150.51758], [39.70996, 150.69238], [39.62207, 150.87598], //DRC eastbound

	[39.66895, 150.88257], [39.71558, 150.83496], [39.71777, 150.74463], [40.0332, 150.74219],
	[40.03857, 150.70129], [40.12891, 150.69482], [40.12939, 150.61035], [40.21729, 150.55859],
	[40.22168, 150.42578], [40.31348, 150.42188], [40.3125, 150.19678], [40.49219, 150.19434],
	[40.53711, 150.14355], [40.54346, 150.05957], [40.67773, 150.05762], [40.68018, 150.10156],
	[40.81445, 150.1001], [40.81934, 150.01221], [40.85889, 150.00879], [40.86523, 149.91943],
	[41.04492, 149.87305], [41.04688, 149.78418], [41.13428, 149.73438], [41.27783, 149.37207],
	[41.36426, 149.36816], [41.41553, 149.27979], [41.68506, 149.27588], [41.68848, 149.14209],
	[41.73682, 149.09473], [41.82324, 149.09277], [41.91602, 149.00146], [41.96484, 148.54883],
	[42.28223, 148.54492], [42.28613, 148.4082], [42.32617, 148.40723], [42.33008, 148.22559],
	[42.33105, 148.08496], [42.46484, 148.08496], [42.51563, 147.99365], [42.60449, 147.99609],
	[42.64844, 148.04395], [42.65283, 148.12891], [42.69922, 148.1792] // south sudan, northbound
	], {color: 'blue'}).addTo(Central_Africa).bindPopup(countriesinfo[34]);

var Chad = L.polygon([
	[53.01025, 141.98828], [53.24023, 142.44189], [53.32617, 142.49463], [53.33057, 142.62891], [53.3252, 142.80566], 
	[53.28711, 142.90234], [53.19043, 142.95508], [53.05078, 143.31348], [52.91699, 143.51172], 
	[52.78613, 143.73535], [52.27344, 144.70313], [51.7207, 145.79688], [51.53906, 146.08008], 
	[51.53906, 146.20117], [50.99414, 147.13086], [50.98438, 147.25], [50.34668, 148.40039],
	[47.51221, 148.40527], [47.51123, 148.27148], [47.55469, 148.26953], [47.5542, 148.0874], 
	[47.51025, 148.08545], [47.50879, 147.99609], [47.46289, 147.99316], [47.46191, 147.90576], 
	[47.50732, 147.90137], [47.50928, 147.72266], [47.4165, 147.62793], [47.32422, 147.62598],
	[47.27783, 147.6709], [47.09766, 147.67285], [46.95654, 147.49219], [46.86816, 147.48975], 
	[46.86426, 147.44629], [46.77588, 147.44531], [46.73145, 147.48828], [46.72754, 147.3999], 
	[46.68457, 147.39844], [46.68262, 147.26221], [46.54785, 147.26367], [46.40967, 147.30908], 
	[46.22461, 147.30615], [46.22412, 147.17139], [46.0918, 147.07715], [45.95068, 147.08105], 
	[45.81494, 147.12451], [45.81006, 147.17041], [45.67822, 147.16846], [45.58496, 147.07568], 
	[45.58252, 146.98682], [45.48926, 146.89551], [45.35596, 146.89355], [45.35254, 146.85107], 
	[45.26416, 146.8501], [45.22021, 146.89648], [45.21826, 147.07666], [45.26172, 147.07666], 
	[45.26221, 147.21338], [45.21631, 147.2168], [45.21631, 147.30518], [45.12793, 147.30615], 
	[45.12305, 147.26465], [44.98877, 147.2627], [44.98486, 147.30664], [44.85205, 147.30957], 
	[44.80273, 147.39844], [44.53027, 147.39648], [44.52832, 147.35352], [44.43994, 147.35449], 
	[44.30176, 147.49316], [44.29834, 147.62646], [44.25488, 147.62939],
	[44.25146, 147.67432], [44.07324, 147.67285], [44.0708, 147.62842], [43.98047, 147.625], 
	[43.93384, 147.58191], [43.93396, 147.49048], [43.979, 147.49048], [43.97925, 147.21558], 
	[43.93262, 147.12646], [43.89453, 147.12402], [43.8877, 146.98682], [43.79785, 146.98389], 
	[43.79541, 146.84717], [43.70459, 146.75879], [43.43115, 146.75488], [43.38574, 146.70508], 
	[43.38086, 146.62305], [43.2959, 146.61719], [43.24414, 146.53125], [43.24512, 146.4375], 
	[43.10376, 146.29858], [43.02051, 146.29639], [42.92285, 146.16309], [42.83691, 146.1582], 
	[42.83252, 146.06836], [42.78516, 146.02295], [42.78662, 145.93262], [42.65088, 145.92871], 
	[42.60352, 145.83691], [42.60254, 145.52344], [42.5603, 145.51709], [42.55371, 144.91992], 
	[42.46484, 144.73828], [42.37646, 144.73975],
	[42.33008, 144.79102], [42.32422, 144.87207], [42.19727, 144.87598], [42.10547, 144.83105], 
	[42.00586, 144.69727], [41.92188, 144.69141], [41.91504, 144.55957], [41.7832, 144.55469], 
	[41.77832, 144.10059], [41.73682, 144.09619], [41.73096, 143.82471], [41.68994, 143.82324], 
	[41.68652, 143.6416], [41.63916, 143.54736], [41.50781, 143.4541], [41.5, 143.31836], 
	[41.45215, 143.27637], //CAR, down-left
	[41.45972, 143.22852], [41.59473, 143.0957], [41.68604, 143.09131], [41.78174, 143.22461],
	[42.2793, 143.22363], [42.37207, 143.1792], [42.46777, 143.04492], [42.64746, 142.99414], 
	[42.69531, 142.9082], [42.78125, 142.90625], [42.87695, 142.80762], [42.88184, 142.72754], 
	[42.92773, 142.68066], [43.0127, 142.6748], [43.01855, 142.58643], [43.10596, 142.58154],
	[43.24658, 142.4082], [43.29163, 142.40332], [43.29224, 142.31311], [43.38525, 142.22119],
	[43.56445, 142.16992], [43.61426, 142.08154], [43.74951, 142.07959], [43.79688, 141.9917],
	[44.29834, 141.98877], [44.34766, 142.03223], [44.61719, 142.03369], [44.62402, 141.99048],
	[44.80225, 141.98828], [44.80273, 141.89844], [45.07813, 141.89844], [45.08032, 141.85388],
	[45.21533, 141.85107], [45.26099, 141.80396], [45.26416, 141.71802], [45.30859, 141.71387], 
	[45.30957, 141.62451], //cameroon northbound
	[46.50391, 140.88916], [46.58887, 140.89453], [46.59277, 140.97852], [46.64063, 141.02637],
	[46.72461, 141.02734], [46.77808, 141.11816], [46.95996, 141.11963], [47.14063, 141.21387],
	[47.23633, 141.3457], [47.41748, 141.39746], [47.55762, 141.57471], [47.646, 141.57861],
	[48.10693, 142.07861], [48.19531, 142.08154], [48.38281, 142.30811], [48.65381, 142.31104],
	[48.70166, 142.35449], [49.74902, 142.35645], [49.75366, 142.40063], [50.12061, 142.4043],
	[50.12207, 142.44824], [50.48535, 142.44775], [50.48816, 142.49451], [50.71753, 142.49512],
	[50.81079, 142.54395], [50.98828, 142.62891], [51.0415, 142.63013], [51.31445, 142.36035],
	[51.5918, 142.35449], [51.67773, 142.22461], [51.76367, 142.2168], [51.86816, 142.08105],
	[52.54492, 142.07715], [52.73535, 141.99609]//niger north
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[35]);

var Congo = L.polygon([ 
	[37.51367, 141.71191], [37.42627, 141.76465], [37.38086, 141.85303], [37.37402, 142.35449], 
	[37.33301, 142.35938], [37.32715, 142.49023], [37.28027, 142.58398], [37.15234, 142.68164], 
	[37.15186, 142.76099], [37.32715, 142.75977], [37.33521, 142.72485], [37.51465, 142.72559], 
	[37.51855, 142.8125], [37.60522, 142.81421],//cameroon
	[37.60498, 142.81439], 
	[37.60693, 142.86084], [37.65527, 142.90576], [37.78809, 142.90918], [37.97705, 142.99707], 
	[37.96777, 143.04395], [38.38574, 143.04199], [38.52344, 143.18164], [38.52441, 143.58984], 
	[38.57227, 143.59473], [38.56348, 143.68457], [38.61719, 143.68457], [38.61035, 143.82031], 
	[38.56836, 143.82324], [38.56543, 144.00586], [38.52246, 144.00977], [38.52051, 144.37207], 
	[38.56641, 144.37598], // CAR east
	[38.06445, 144.4209], [37.79297, 144.37305], [37.79102, 144.28223], [37.65527, 144.28027], 
	[37.60449, 144.19043], [37.51855, 144.1875], [37.51563, 144.14551], [36.87695, 144.14453], 
	[36.87598, 144.09863], [36.73926, 144.0957], [36.73145, 144.05371], [36.09863, 144.05371], 
	[36.04492, 143.95703], [35.9082, 143.91602], [35.49805, 143.91211], [35.41016, 143.86523], 
	[35.17969, 143.63086], [35.04297, 143.36523], [34.94727, 143.22852], [34.85742, 143.22461], 
	[34.72168, 143.17773], [34.6709, 143.09082], [34.49512, 143.04102], [34.48926, 142.95313], 
	[34.35449, 142.81738], [34.08105, 142.81738], [34.07422, 142.86035], [33.9375, 142.85742], 
	[33.93359, 142.81641], [33.4375, 142.81445], [33.38672, 142.76953], [33.2998, 142.76563], 
	[33.25, 142.67676], [33.07324, 142.62988], [33.02539, 142.58301], [33.02344, 142.44824], 
	[32.97168, 142.3584], [32.93262, 142.3125], [32.84668, 142.31055], [32.79688, 142.26172], 
	[32.79297, 142.12891], [32.75, 142.08398], [32.65723, 142.08105], [32.61621, 142.03223], 
	[32.60742, 141.94629], [32.51855, 141.85059], [32.42676, 141.84766], [32.38281, 141.80469], 
	[32.38379, 141.53223], [32.79297, 141.52832], [32.6582, 141.25098], [32.65625, 141.02637], 
	[32.47559, 141.02539], [32.47363, 140.89648], [32.3877, 140.84082], [32.38086, 140.75684], 
	[32.47559, 140.66309], [32.56543, 140.65918], [32.56445, 140.52832], [32.6123, 140.47852], 
	[32.69727, 140.47559], [32.70215, 140.34375], [32.56934, 140.24512], [32.56445, 140.06836], 
	[32.42676, 140.0625], [32.42773, 139.92871], [32.33984, 139.9248], [32.28711, 139.83691], //DRC South
	[32.1875, 139.55078], [32.97852, 139.09766], //sea 
	[33.06982, 139.19189], [33.11621, 139.23828], [33.20508, 139.23926], [33.34277, 139.38281], 
	[33.34082, 139.51367], [33.25586, 139.56543], [33.20215, 139.73633], [33.30176, 139.74316], 
	[33.29785, 139.70215], [33.38867, 139.7002], [33.43555, 139.78516], [33.52832, 139.78418], 
	[33.57422, 139.60938], [33.84766, 139.59766], [33.85059, 139.51855], [33.93848, 139.5166], 
	[33.93945, 139.55859], [34.16895, 139.56934], [34.16895, 140.0625], [34.21191, 140.06641], 
	[34.21484, 140.15039], [34.44141, 140.1543], [34.44434, 140.11328], [34.53711, 140.11328], 
	[34.53418, 140.37988], [34.4873, 140.42676], [34.35254, 140.42969], [34.21777, 140.57227], 
	[34.16699, 140.74609], [34.12305, 140.75098], [34.12695, 140.84082], [34.16895, 140.84375], 
	[34.16699, 140.93066], [34.2627, 141.01953], [34.35059, 141.02734], [34.35156, 141.11328], 
	[34.25879, 141.1582], [34.08008, 141.16895], [34.0791, 141.34668], [34.30664, 141.35254], 
	[34.35449, 141.43262], [34.49121, 141.44141], [34.49023, 141.52734], [34.76172, 141.53125], 
	[34.76758, 141.57324], [35.13086, 141.57227], [35.13574, 141.53516], [35.2666, 141.52832], 
	[35.27148, 141.5752], [35.50195, 141.5752], [35.58789, 141.52734], [35.59277, 141.34766], 
	[35.72754, 141.34668], [35.72754, 141.11621], [35.82129, 141.12109], [35.86523, 141.20117], 
	[36, 141.20508], [36.00195, 141.16504], [36.1416, 141.16602], [36.14258, 141.25], 
	[36.32129, 141.30566], [36.32324, 141.48438], [36.50488, 141.53125], [36.50684, 141.57617], 
	[36.59082, 141.57324], [36.59961, 141.53516], [36.68652, 141.53223], [36.73633, 141.44141], 
	[36.91406, 141.43848], [36.92285, 141.25781], [36.96387, 141.25684], [36.96191, 141.07617],
	[36.87695, 141.02344], [36.82813, 140.93262], [36.82813, 140.7041], [37.00684, 140.70801],
	[37.05762, 140.61328], [37.19238, 140.61816], [37.19336, 140.65918], [37.37695, 140.66113],
	[37.42285, 140.75195] // gabon
	], {color: 'blue'}).addTo(Central_Africa).bindPopup(countriesinfo[41]);

var Democratic_Republic_Of_Congo = L.polygon([ 
	[31.31836, 152.38477], [31.61719, 152.41992], [31.8125, 152.44531], [32.0332, 152.38672], 
	[32.41406, 152.26953], [32.65625, 152.29883], //Tanzania North
	[32.66602, 152.29883], [33.07031, 152.16797], [33.32715, 152.1582], [33.48438, 152.11719], 
	[33.62305, 152.11768], [33.62158, 152.16699], [33.70996, 152.16504], [33.71387, 152.11865], 
	[33.80371, 152.02832], [33.9458, 152.02673], //Burundi north
	[33.94385, 151.94165], [33.98462, 151.89404], [34.07422, 151.89233], [34.672, 152.16272], 
	[34.72009, 152.16736], [34.81128, 152.25916], [34.81793, 152.34402], [34.8584, 152.35489], 
	[34.90289, 152.39835], [34.90448, 152.43927], //Rwanda north
	[35.03809, 152.43701], [35.04321, 152.39551], [35.04321, 152.39551], [35.27197, 152.43945], 
	[35.45361, 152.43896], [35.45361, 152.48389], [35.71777, 152.48633], [35.86572, 152.53174], 
	[36.0498, 152.53369], [36.23486, 152.66455], [36.55371, 152.66797], [36.60107, 152.71387], 
	[36.60156, 152.85205], [36.73828, 152.85303], [36.8291, 152.94775], [36.83154, 153.0332], 
	[36.87305, 153.03564], [37.21191, 153.43555], [37.3877, 153.63574], [37.51709, 153.63184], 
	[37.65527, 153.49365], [37.6543, 153.27051], [37.9248, 153.26465], [37.97461, 153.35156], 
	[38.06445, 153.35547], [38.11523, 153.26563], [38.20898, 153.26172], [38.25391, 153.30859], 
	[38.34375, 153.35645], [38.47656, 153.35449], [38.59766, 153.35547], //Uganda northbound 
	[38.61133, 153.21875], [38.56836, 153.21582], [38.57227, 153.12842], [38.70361, 153.12646], 
	[38.75244, 153.08203], [38.75488, 152.94482], [38.79785, 152.94385], [38.80127, 152.85303], 
	[38.84521, 152.80762], [38.93799, 152.80615], [38.9375, 152.71436], [38.98438, 152.66943],
	[39.07373, 152.66895], [39.07471, 152.57959], [39.25732, 152.57568], [39.30371, 152.39941],
	[39.34912, 152.39453], [39.35107, 152.30371], [39.2124, 152.30078], [39.12012, 152.21094],
	[39.12061, 152.0752], [39.16602, 152.07324], [39.1665, 151.84375], [39.25781, 151.84326],
	[39.2583, 151.79932], [39.12207, 151.70459], [39.11914, 151.61621], [39.07471, 151.61475],
	[39.07617, 151.38672], [39.21094, 151.29297], [39.25635, 151.11182], [39.44043, 151.11035],
	[39.5332, 151.01904], [39.5332, 150.88281], //South Sudan west
	[39.62207, 150.87598], [39.70996, 150.69238], [39.71094, 150.51758], [39.62305, 150.41797],
	[39.62012, 150.18945], [39.66895, 150.13867], [39.71484, 150.05273], [39.71875, 149.69336],
	[39.80371, 149.5918], [39.80469, 149.45703], [39.80469, 149.37012], [39.57422, 149.36816], 
	[39.57715, 149.18945], [39.53125, 149.18262], [39.5293, 148.90723], [39.62207, 148.8125], 
	[39.61816, 148.68066], [39.57715, 148.68359], [39.5293, 148.62695], [39.43359, 148.22559], 
	[39.34912, 148.0459], [39.30225, 147.99512], [39.30078, 147.90039], [39.34766, 147.85303], 
	[39.35059, 147.71973], [39.43848, 147.67139], [39.43945, 147.5835], [39.35107, 147.57568], 
	[39.30127, 147.48926], [39.21387, 147.48682], [39.16406, 147.40088], [38.98193, 147.35059], 
	[38.93555, 147.30469], [38.93359, 147.07813], [39.02441, 146.98535], [39.02734, 146.34375], 
	[39.11328, 146.34082], [39.16309, 146.24707], [39.16211, 146.07031], [39.11816, 146.06543], 
	[39.11523, 145.93164], [39.16602, 145.88477], [39.29883, 145.88477], [39.4834, 145.69824],
	[39.57617, 145.42676], [39.66846, 145.37988], [39.66846, 145.1084], [39.58008, 145.05518], 
	[39.53442, 144.87744], [39.44263, 144.87744], [39.396, 144.78638], [39.30542, 144.78369], 
	[39.25781, 144.69165], [39.16943, 144.69214], [39.12036, 144.64697], [39.12231, 144.51172], 
	[39.02905, 144.51172], [39.0293, 144.55566], [38.56738, 144.55469], //CAR westbound
	[38.56641, 144.55542], [38.2041, 144.55566], [38.19922, 144.51367], [38.11328, 144.50879], 
	[38.06445, 144.4209], [37.79297, 144.37305], [37.79102, 144.28223], [37.65527, 144.28027], 
	[37.60449, 144.19043], [37.51855, 144.1875], [37.51563, 144.14551], [36.87695, 144.14453], 
	[36.87598, 144.09863], [36.73926, 144.0957], [36.73145, 144.05371], [36.09863, 144.05371], 
	[36.04492, 143.95703], [35.9082, 143.91602], [35.49805, 143.91211], [35.41016, 143.86523], 
	[35.17969, 143.63086], [35.04297, 143.36523], [34.94727, 143.22852], [34.85742, 143.22461], 
	[34.72168, 143.17773], [34.6709, 143.09082], [34.49512, 143.04102], [34.48926, 142.95313], 
	[34.35449, 142.81738], [34.08105, 142.81738], [34.07422, 142.86035], [33.9375, 142.85742], 
	[33.93359, 142.81641], [33.4375, 142.81445], [33.38672, 142.76953], [33.2998, 142.76563], 
	[33.25, 142.67676], [33.07324, 142.62988], [33.02539, 142.58301], [33.02344, 142.44824], 
	[32.97168, 142.3584], [32.93262, 142.3125], [32.84668, 142.31055], [32.79688, 142.26172], 
	[32.79297, 142.12891], [32.75, 142.08398], [32.65723, 142.08105], [32.61621, 142.03223], 
	[32.60742, 141.94629], [32.51855, 141.85059], [32.42676, 141.84766], [32.38281, 141.80469], 
	[32.38379, 141.53223], [32.79297, 141.52832], [32.6582, 141.25098], [32.65625, 141.02637], 
	[32.47559, 141.02539], [32.47363, 140.89648], [32.3877, 140.84082], [32.38086, 140.75684], 
	[32.47559, 140.66309], [32.56543, 140.65918], [32.56445, 140.52832], [32.6123, 140.47852], 
	[32.69727, 140.47559], [32.70215, 140.34375], [32.56934, 140.24512], [32.56445, 140.06836], 
	[32.42676, 140.0625], [32.42773, 139.92871], [32.33984, 139.9248], [32.28711, 139.83691], //congo southwest 
	[32.18359, 139.63281], [31.59766, 139.76563], //sea
	[31.56055, 140.07031], [31.55664, 140.29297], [31.65039, 140.47998], [31.64844, 143.08789], 
	[31.45898, 143.17773], [31.14453, 143.1875], [31.00977, 143.23438], [30.91992, 143.27539], 
	[30.86328, 143.36914], [30.59473, 143.36816], [30.59277, 143.45605], [30.50684, 143.45703], 
	[30.45117, 143.54883], [30.36719, 143.55469], [30.23633, 143.60156], [30.18164, 143.64258], 
	[30.18359, 143.72852], [30, 143.77832], [30.00488, 143.86621], [30.04199, 143.86816], 
	[30.0459, 144.19238], [30.09082, 144.23438], [30.09473, 145.05957], [30.22852, 145.10059], 
	[30.41309, 145.1084], [30.41406, 145.19531], [30.5459, 145.19629], [30.5498, 145.15234], 
	[30.72656, 145.1582], [30.82373, 145.20117], [30.82227, 145.93262], [30.59668, 145.93262], 
	[30.5957, 146.84766], [30.32324, 146.84863], //angola
	[30.31885, 146.93848], [30.23047, 146.98535], [30.23242, 147.3501], [30.27588, 147.35498],
	[30.27148, 147.43848], [30.18555, 147.44336], [30.13867, 147.49121], [30.1377, 147.62695], 
	[30.18164, 147.62695], [30.18164, 147.8999], [30.13574, 147.9043], [30.13867, 148.2666], 
	[30.22949, 148.36035], [30.50195, 148.35938], [30.50684, 148.4043], [30.72949, 148.40723], 
	[30.78516, 148.49316], [30.7793, 148.76855], [30.87109, 148.94922], [30.96191, 149.04297], 
	[31.05078, 149.0498], [31.0498, 149.27539], [31.00488, 149.27734], [31.00684, 149.41406], 
	[31.0957, 149.46387], [31.14258, 149.45605], [31.14258, 149.37012], [31.19141, 149.32324], 
	[31.3252, 149.32227], [31.32813, 149.63867], [31.375, 149.68066], [31.37109, 149.96191], 
	[31.32617, 149.96484], [31.32813, 150.10059], [31.41797, 150.10059], [31.5127, 149.9668], 
	[31.73633, 149.96094], [31.78711, 149.87598], [31.87988, 149.875], [31.88086, 149.91699], 
	[32.1084, 149.9209], [32.15527, 150.00879], [32.24609, 150.0127], [32.24609, 150.2334], 
	[32.19141, 150.2793], [32.1123, 150.28809], [32.06543, 150.33398], [32.05859, 150.4668], 
	[32.0166, 150.50977], [31.65332, 150.5166], [31.64648, 150.69922], [31.55957, 150.74512], 
	[31.55664, 150.88086], [31.60645, 151.01563], [31.64844, 151.10547], [31.73633, 151.1582],
	[31.7373, 151.29102], [31.64941, 151.3457], [31.64844, 151.42871], [31.55957, 151.4834],
	[31.55762, 151.61523], [31.60156, 151.61523], [31.60254, 152.11914] //katanga east
	], {color: 'blue'}).addTo(Central_Africa).bindPopup(countriesinfo[40]);

var Djibouti = L.polygon([ 
	[43.98047, 161.83984], [44.06738, 161.83594], [44.07129, 161.65234], [44.02832, 161.64941],
	[44.02637, 161.47266], [43.98242, 161.46777], [43.98145, 161.15039], [44.52734, 161.15039],
	[44.62109, 161.2832], [44.80371, 161.33496], [44.84863, 161.41895], [44.9375, 161.42578],
	[44.98926, 161.50977], //ethiopia
	[45.0791, 161.51514], [45.08008, 161.56104], [45.12402, 161.56201], [45.12402, 161.65039], 
	[45.03711, 161.70313], [45.03516, 161.88281], [45.16992, 161.88184], [45.21484, 162.06348], 
	[45.26221, 162.06543], //eritrea
	[45.32422, 162.09961], [45.08594, 162.28906], [45.00195, 162.34961], [44.50391, 162.31055], //coast
	[44.34424, 162.15674], [44.25635, 162.15625], [44.20605, 162.06738], [44.02734, 162.01465], 
	[43.98047, 161.97168], //somaliland south 
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[50]);

var Egypt = L.polygon([ [57.90967, 149.13721], [58.05566, 149.05273], [58.23145, 149.00586], [58.45605, 148.99902], 
	[58.54688, 148.95313], [58.77832, 148.95508], [58.92188, 149.08789], [59.28418, 149.09082], 
	[59.28613, 149.04785], [59.65234, 149.05371], [59.7002, 149.09766], [59.70239, 149.18042], 
	[59.74683, 149.18652], [59.74951, 149.23169], //libya border
	[60.24805, 149.35742], [59.64063, 152.05469], [60.14844, 153.375], [59.75781, 154.46875], //
	[59.37305, 154.5498], [58.69238, 154.55127], [58.69019, 154.59326], [58.51001, 154.59253], 
	[58.50769, 154.55164], [58.46436, 154.54865], //Sinai
	[58.3457, 154.50781], [58.11328, 154.53906], [57.96484, 154.63867], [57.60938, 154.7793], 
	[57.34375, 154.9043], [57.08789, 155.11523], [56.91406, 155.28711], [56.66016, 155.5293], //coast w sinai
	[54.64844, 156.54688], [53.78125, 156.96094], [53.25, 156.89063], //
	[53.14453, 156.70361], [53.10303, 156.69922], [53.00684, 156.56641], [52.9209, 156.5625], 
	[52.91553, 156.47656], [52.87158, 156.4751], [52.87109, 156.20117], [52.73682, 156.19434], 
	[52.729, 156.15234], [52.59619, 156.15234], [52.50781, 156.104], [52.45996, 156.05469], 
	[52.45752, 155.83545], [52.41602, 155.83105], [52.41113, 155.69434], [52.36426, 155.65039], //halaib
	[52.27588, 155.64795], [52.27429, 149.13972] //south
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[55]);

var Equatorial_Guinea = L.polygon([ 
	[37.60498, 138.23584], [37.60938, 138.27441], [37.52051, 138.32568], [37.5127, 139.33008], // cameroon east
	[37.5105, 139.33081], [36.8291, 139.33301], [36.82617, 139.37598], [36.64746, 139.37793],
	[36.64355, 138.36816], [36.59912, 138.36719], [36.59863, 138.32324], [36.69434, 138.22998], //gabon southwest
 	[36.73438, 137.84961], [36.92383, 137.83398], [37.3418, 138.10547], [37.5957, 138.17969]
	], {color: 'blue'}).addTo(Central_Africa).bindPopup(countriesinfo[57]);

var Eritrea = L.polygon([ 
	[46.50293, 157.34546], [46.95557, 157.34082], [46.95996, 157.30078], [47.09448, 157.30005],
	[47.1438, 157.38916], [47.2771, 157.39233], [47.54785, 157.48633], [47.60327, 157.57202],
	[47.73828, 157.57544], [47.74048, 157.61914], [47.87598, 157.6626], [48.10303, 157.66211],
	[48.10535, 157.62109], [48.19714, 157.61938], [48.24414, 157.70996], [48.51367, 157.71045],
	[48.51416, 157.80127], [48.47021, 157.80371], [48.4707, 157.93945], [48.51563, 157.94141],
	[48.5166, 158.03027], [48.56543, 158.07666], [48.74609, 158.07861], [48.74756, 158.25879],
	[48.79297, 158.26123], [48.79443, 158.34863], [48.83643, 158.35205], [48.88281, 158.39893],
	[48.88184, 158.58301], [48.97656, 158.71875], [49.10742, 158.71973], [49.19922, 158.85449], //sudan northbound
	[49.3125, 159.00781], [47.63672, 159.78906], [47.17969, 160.35156], [46.70313, 161.10938], 
	[45.40625, 162.07813], //coast
	[45.26221, 162.06543], [45.21484, 162.06348], [45.16992, 161.88184], [45.03516, 161.88281],
	[45.03711, 161.70313], [45.12402, 161.65039], [45.12402, 161.56201], [45.08008, 161.56104],
	[45.0791, 161.51514], //djibouti westbound
	[45.26123, 161.37744], [45.26367, 161.24121], [45.30566, 161.19629], [45.39941, 161.19238],
	[45.53613, 161.05371], [45.54102, 160.96777], [45.90527, 160.59863], [45.99023, 160.59766], 
	[46.08447, 160.50439], [46.08789, 160.41748], [46.21973, 160.41309], [46.22559, 160.28125], 
	[46.31348, 160.18457], [46.40527, 160.18164], [46.54395, 160.0459], [46.54688, 159.73242], 
	[46.58887, 159.72559], [46.59375, 159.27148], [46.68115, 159.26709], [46.68359, 159.13232], 
	[46.59326, 159.08594], [46.54785, 158.94727], [46.5459, 158.7168], [46.63867, 158.62695], 
	[46.72559, 158.62695], [46.73047, 158.45215], [46.77539, 158.39844], [46.77637, 158.30664], 
	[46.59375, 158.25977], [46.45605, 158.21289], [46.36621, 158.16895], [46.31641, 158.12305], 
	[46.31934, 158.08008], [46.36426, 158.03613], [46.4541, 158.0293], [46.5, 157.94141], 
	[46.5459, 157.93945], [46.54297, 157.7998], [46.50098, 157.75879], [46.41113, 157.75684], 
	[46.40625, 157.66895], [46.45605, 157.66406], [46.45459, 157.39331] //ethiopia northwest 
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[58]);

var Ethiopia = L.polygon([
	[45.26123, 161.37744], [45.26367, 161.24121], [45.30566, 161.19629], [45.39941, 161.19238],
	[45.53613, 161.05371], [45.54102, 160.96777], [45.90527, 160.59863], [45.99023, 160.59766], 
	[46.08447, 160.50439], [46.08789, 160.41748], [46.21973, 160.41309], [46.22559, 160.28125], 
	[46.31348, 160.18457], [46.40527, 160.18164], [46.54395, 160.0459], [46.54688, 159.73242], 
	[46.58887, 159.72559], [46.59375, 159.27148], [46.68115, 159.26709], [46.68359, 159.13232], 
	[46.59326, 159.08594], [46.54785, 158.94727], [46.5459, 158.7168], [46.63867, 158.62695], 
	[46.72559, 158.62695], [46.73047, 158.45215], [46.77539, 158.39844], [46.77637, 158.30664], 
	[46.59375, 158.25977], [46.45605, 158.21289], [46.36621, 158.16895], [46.31641, 158.12305], 
	[46.31934, 158.08008], [46.36426, 158.03613], [46.4541, 158.0293], [46.5, 157.94141], 
	[46.5459, 157.93945], [46.54297, 157.7998], [46.50098, 157.75879], [46.41113, 157.75684], 
	[46.40625, 157.66895], [46.45605, 157.66406], [46.45459, 157.39331], //eritrea northwest
	[46.4541, 157.39258], [46.36328, 157.38965], [46.36523, 157.34766], [46.04492, 157.34375],
	[45.90039, 157.25781], [45.71875, 157.16211], [45.57813, 157.11816], [45.25977, 157.1123],
	[45.25586, 156.92969], [45.21582, 156.92969], [45.21484, 156.7959], [45.07422, 156.66016],
	[44.94238, 156.65332], [44.89648, 156.56689], [44.7168, 156.51807], [44.57568, 156.33643],
	[44.30225, 156.33301], [44.29932, 156.29053], [44.02759, 156.28955], [44.02344, 156.24609],
	[43.88574, 156.24512], [43.80273, 156.19629], [43.79688, 156.10938], [43.88379, 156.01367],
	[43.88379, 155.92676], [43.79492, 155.83301], [43.70117, 155.78906], //sudan
	[43.29395, 155.78418], [43.24219, 155.69824], [43.06348, 155.69336], [43.05957, 155.64941], 
	[42.19238, 155.64697], [42.10254, 155.55469], [42.09766, 155.46484], [42.05664, 155.46387], 
	[42.05176, 155.32715], [42.09863, 155.32715], [42.09375, 155.00977], [42.05371, 154.96387], 
	[41.82813, 154.95605], [41.73633, 154.86914], [41.5957, 154.86914], [41.59473, 155.18945], 
	[41.50684, 155.2832], [41.50391, 155.41895], [41.36621, 155.55664], [41.18652, 155.60547], 
	[41.17676, 155.69336], [41.04688, 155.69531], [41, 155.74121], [40.99609, 155.875], 
	[40.95313, 155.92188], [40.86328, 155.9248], [40.81836, 155.97168], [40.81055, 156.05859], 
	[40.76758, 156.10352], [40.67969, 156.11035], [40.40479, 156.19873], [40.2207, 156.24609], 
	[40.03711, 156.33594], [39.94238, 156.47168], [39.85449, 156.47363], [39.85156, 156.79297], 
	[39.80469, 156.83936], [39.39648, 156.84082], [39.30566, 156.93213], //south sudan south
	[39.3042, 156.97705], [39.30518, 157.11768], [39.16895, 157.11523], [39.16406, 157.66309], 
	[39.11914, 157.75488], [39.02539, 157.80859], [39.02148, 157.89258], [38.89063, 157.98828], 
	[38.88867, 158.07422], [38.79883, 158.125], [38.74805, 158.30078], [38.66016, 158.35547], 
	[38.65625, 158.44141], [38.57227, 158.43945], [38.56445, 158.85547], [38.52246, 158.99023], 
	[38.48047, 158.99609], [38.47363, 159.36035], [38.43066, 159.49609], [38.61621, 159.72266], 
	[38.70703, 159.77148], [38.75586, 159.8623], [38.84424, 159.9126], [38.8916, 160.00439], 
	[38.93652, 160.14014], [39.0293, 160.32666], [39.02881, 160.46143], [38.93652, 160.50781], 
	[38.93701, 160.59814], [38.80176, 160.68994], [38.80176, 160.91943], [38.84717, 160.91992], 
	[38.84473, 161.14746], [38.7998, 161.14941], [38.79883, 161.19629], //kenya westbound
	[38.79932, 161.23975], [38.89063, 161.24268], [38.98047, 161.33447], [39.03125, 161.83594], 
	[39.07227, 161.9248], [39.12207, 161.97363], [39.20996, 161.97461], [39.34375, 162.11621], 
	[39.39551, 162.29297], [39.43945, 162.29785], [39.53125, 162.70508], [39.5752, 162.70703], 
	[39.57617, 162.84082], [39.53613, 162.8457], [39.53027, 163.29883], [39.48926, 163.30469], 
	[39.4873, 163.3916], [39.58105, 163.48535], [39.66602, 163.48633], [40.63477, 164.49316], 
	[40.72168, 164.49512], [41.5957, 165.40332], //somalia north west
	[41.69141, 165.50391], [41.77344, 165.50098], //puntland north
	[41.78027, 164.82031], [41.96289, 164.27051], [42.00879, 164.1748], [42.05273, 163.99316],
	[42.10156, 163.90039], [42.23828, 163.49219], [42.28223, 163.39551], [42.32715, 163.21387], 
	[42.37695, 163.07715], [42.4209, 162.98438], [42.46777, 162.80176], [42.50977, 162.79785], 
	[42.51172, 162.7041], [42.78516, 162.47559], [42.78418, 162.3418], [42.83203, 162.29297],
	[42.9248, 162.29102], [43.0166, 162.15625], [43.15332, 162.15527], [43.15137, 162.06738],
	[43.20215, 162.01855], [43.33301, 162.01465], [43.38184, 161.9707], [43.38379, 161.88086],
	[43.56738, 161.88184], [43.61621, 161.79199], [43.79395, 161.78516], [43.84375, 161.87793],
	[43.97949, 161.87891], //somaliland northwest
	[43.98047, 161.83984], [44.06738, 161.83594], [44.07129, 161.65234], [44.02832, 161.64941],
	[44.02637, 161.47266], [43.98242, 161.46777], [43.98145, 161.15039], [44.52734, 161.15039],
	[44.62109, 161.2832], [44.80371, 161.33496], [44.84863, 161.41895], [44.9375, 161.42578],
	[44.98926, 161.50977] //djibouti north
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[60]);

var Gabon = L.polygon([ 
	[33.06982, 139.19189], [33.11621, 139.23828], [33.20508, 139.23926], [33.34277, 139.38281], 
	[33.34082, 139.51367], [33.25586, 139.56543], [33.20215, 139.73633], [33.30176, 139.74316], 
	[33.29785, 139.70215], [33.38867, 139.7002], [33.43555, 139.78516], [33.52832, 139.78418], 
	[33.57422, 139.60938], [33.84766, 139.59766], [33.85059, 139.51855], [33.93848, 139.5166], 
	[33.93945, 139.55859], [34.16895, 139.56934], [34.16895, 140.0625], [34.21191, 140.06641], 
	[34.21484, 140.15039], [34.44141, 140.1543], [34.44434, 140.11328], [34.53711, 140.11328], 
	[34.53418, 140.37988], [34.4873, 140.42676], [34.35254, 140.42969], [34.21777, 140.57227], 
	[34.16699, 140.74609], [34.12305, 140.75098], [34.12695, 140.84082], [34.16895, 140.84375], 
	[34.16699, 140.93066], [34.2627, 141.01953], [34.35059, 141.02734], [34.35156, 141.11328], 
	[34.25879, 141.1582], [34.08008, 141.16895], [34.0791, 141.34668], [34.30664, 141.35254], 
	[34.35449, 141.43262], [34.49121, 141.44141], [34.49023, 141.52734], [34.76172, 141.53125], 
	[34.76758, 141.57324], [35.13086, 141.57227], [35.13574, 141.53516], [35.2666, 141.52832], 
	[35.27148, 141.5752], [35.50195, 141.5752], [35.58789, 141.52734], [35.59277, 141.34766], 
	[35.72754, 141.34668], [35.72754, 141.11621], [35.82129, 141.12109], [35.86523, 141.20117], 
	[36, 141.20508], [36.00195, 141.16504], [36.1416, 141.16602], [36.14258, 141.25], 
	[36.32129, 141.30566], [36.32324, 141.48438], [36.50488, 141.53125], [36.50684, 141.57617], 
	[36.59082, 141.57324], [36.59961, 141.53516], [36.68652, 141.53223], [36.73633, 141.44141], 
	[36.91406, 141.43848], [36.92285, 141.25781], [36.96387, 141.25684], [36.96191, 141.07617],
	[36.87695, 141.02344], [36.82813, 140.93262], [36.82813, 140.7041], [37.00684, 140.70801],
	[37.05762, 140.61328], [37.19238, 140.61816], [37.19336, 140.65918], [37.37695, 140.66113],
	[37.42285, 140.75195], // Congo north
 	[37.51172, 140.75244], [37.51367, 140.75146], [37.51758, 140.70898], [37.55273, 140.70215], 
	[37.55957, 139.65137], [37.60059, 139.64844], [37.60498, 139.38135], //cameroon west
	[37.5105, 139.33081], [36.8291, 139.33301], [36.82617, 139.37598], [36.64746, 139.37793],
	[36.64355, 138.36816], [36.59912, 138.36719], [36.59863, 138.32324], [36.69434, 138.22998], //equatorial guinea southwest
	[36.67578, 137.85352], [35.52344, 137.40234], [34.20313, 137.5], [32.90625, 138.73438] //sea
	], {color: 'blue'}).addTo(Central_Africa).bindPopup(countriesinfo[64]);

var Gambia = L.polygon([
	[45.53516, 119.26172], [45.58301, 119.30469], [45.58545, 119.94189], [45.71973, 119.9458], 
	[45.72266, 120.12598], [45.72266, 120.30811], [45.76855, 120.35547], [45.85791, 120.3584], 
	[45.85645, 120.49121], [45.81689, 120.49707], [45.81152, 120.63086], [45.7666, 120.63477], 
	[45.72363, 120.72461], [45.7207, 120.85547], [45.63574, 120.95117], [45.63086, 121.13379], 
	[45.71875, 121.22754], [45.72266, 121.36133], [45.85938, 121.36035], [45.89844, 121.31348], 
	[45.89746, 121.17969], [45.86328, 121.17969], [45.85547, 121.04297], [45.81445, 121.04102], 
	[45.8125, 120.90747], [45.90308, 120.90796], [45.94531, 120.85352], [45.95166, 120.67871], 
	[46.03662, 120.62842], [46.0415, 120.54199], [46.08447, 120.53809], [46.0874, 120.40576], 
	[46.04297, 120.3999], [46.03809, 120.22119], [45.99268, 120.1748], [45.9043, 120.17139], 
	[45.90283, 119.39502], [45.85156, 119.18359], [45.56445, 119.13281]
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[65]);

var Ghana = L.polygon([
	[40.35596, 132.04639], [40.44824, 132.04297], [40.53809, 131.95166], [40.54248, 131.86133], 
	[40.67969, 131.7251], [40.8125, 131.72461], [40.86279, 131.63428], [41.04639, 131.63184], 
	[41.04639, 131.67676], [41.22852, 131.67725], [41.23096, 131.72314], [41.3208, 131.72412], 
	[41.32275, 131.6333], [41.54834, 131.63379], [41.55225, 131.67773], [41.95996, 131.67773], 
	[41.96387, 131.72168], [42.09766, 131.72363], [42.18994, 131.62939], [42.19434, 131.54297], 
	[42.37109, 131.53906], [42.37402, 131.58398], [42.875, 131.58496], [42.87891, 131.49316], 
	[43.47168, 131.49414], [43.56543, 131.44531], [43.56641, 131.36035], [43.70117, 131.26465], 
	[43.70605, 131.17773], [43.83887, 131.17578], [43.84277, 131.21582], [43.97656, 131.22168], 
	[43.98145, 131.26367], [44.06738, 131.26758], //togo north
	[44.07031, 131.17969], [44.11499, 131.17334], [44.1167, 130.9917], [43.97949, 130.896], 
	[43.97754, 129.2041], [43.84473, 129.2002], [43.83984, 129.15723], [43.61328, 129.1582], 
	[43.47168, 129.24805], [42.92676, 129.24902], [42.92383, 129.29102], [42.78711, 129.2937], //burkina faso southwest
	[42.51465, 129.29492], [42.42188, 129.34277], [42.41992, 129.38379], [42.19141, 129.3877], 
	[42.19043, 129.42871], [41.91797, 129.43164], [41.91504, 129.38672], [41.78076, 129.38525], 
	[41.77686, 129.29541], [41.73096, 129.24951], [41.5498, 129.15723], [41.41016, 129.10938], 
	[41.18555, 129.10986], [41.18311, 129.06592], [41.09277, 129.06348], [41.04688, 128.97559], 
	[40.95215, 128.93262], [40.59082, 128.92969], [40.45117, 128.97754], [40.08594, 129.06738], 
	[40.03906, 129.11621], [40.03516, 129.24707], [39.66992, 129.24023], [39.66895, 129.15723], 
	[39.58008, 129.15625], //ivory coast south 
	[38.75, 129.57031], [39.50781, 132.05469]
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[68]);

var Guinea = L.polygon([
	[44.98633, 123.0625], [44.89941, 123.05664], [44.89355, 123.01465], [44.80762, 123.01563], 
	[44.80078, 123.10156], [44.75586, 123.15234], [44.75781, 123.28516], [44.85059, 123.37891], 
	[44.84961, 123.4707], [44.7998, 123.5166], [44.71582, 123.52148], [44.66504, 123.56641], 
	[44.66406, 123.65137], [44.84863, 123.7959], [44.84668, 124.06641], [44.80762, 124.07227], 
	[44.79688, 124.20605], [44.75781, 124.21094], [44.75977, 124.34277], [44.84766, 124.34766],
	[44.85059, 124.43164], [44.93945, 124.4834], [44.93848, 124.56641], [45.07031, 124.57227],
	[45.0752, 124.74902], [45.03418, 124.75781], [45.02637, 124.84668], [44.85449, 124.84668],
	[44.8457, 124.88867], [44.76074, 124.89258], [44.70996, 124.94141], [44.47949, 124.94629],
	[44.48047, 125.02832], [44.34668, 125.0293], [44.33887, 125.12207], [44.30176, 125.12598],
	[44.29688, 125.25879], [44.21191, 125.25879], [44.1123, 125.07813], [44.02637, 125.07813],
	[44.02148, 125.30176], [43.6123, 125.30664], [43.56641, 125.35645], [43.5625, 125.4834],
	[43.51563, 125.53516], [43.38086, 125.53906],//mali south
	[43.37988, 125.53467], [43.28711, 125.44238], [42.78906, 125.44238], [42.78418, 125.57617],
	[42.70215, 125.58496], [42.64551, 125.6709], [42.55762, 125.67188], [42.50684, 125.58398],
	[42.41895, 125.53613], [42.3291, 125.53906], [42.32422, 125.71777], [42.23535, 125.76367], 
	[42.05371, 125.76074], [42.05469, 125.67676], [42.13965, 125.57715], [42.14355, 125.35254], 
	[41.91504, 125.35645], [41.90918, 125.48145], [41.86914, 125.53516], [41.7793, 125.53125], 
	[41.72852, 125.44238], [41.55664, 125.44141], [41.45703, 125.39551], //ivory coast south
	[41.46094, 125.12695], [41.54688, 125.12305], [41.54688, 125.03516], [41.41211, 125.0293], 
	[41.31348, 124.89844], [41.23145, 124.89258], [41.23047, 124.6709], [41.31641, 124.66406], 
	[41.32349, 124.57446], [41.36694, 124.57275], [41.36719, 124.52686], [41.6377, 124.52441], 
	[41.64063, 124.48096], [41.86963, 124.47949], [41.87305, 124.43604], [42.05273, 124.43311], 
	[42.0542, 124.34619], [42.09912, 124.34375], [42.10352, 124.25537], [42.14355, 124.25098], 
	[42.14355, 123.88672], //liberia
	[42.14355, 123.7959], [42.06152, 123.79102], [42.01172, 123.74609], [42.00879, 123.57031], 
	[42.23535, 123.6582], [42.50586, 123.65527], [42.55566, 123.56641], [42.65332, 123.56152], 
	[42.6543, 123.61035], [42.73535, 123.61035], [42.83594, 123.47266], [42.91797, 123.47168], 
	[42.96973, 123.38477], [43.05664, 123.37793], [43.15332, 123.25], [43.24219, 123.24121], 
	[43.24414, 122.74219], [43.15234, 122.64648], [43.15039, 122.28711], [43.01367, 122.28027], 
	[42.74316, 122.1377], [42.73926, 122.00879], [42.60254, 122.00195], [42.5625, 121.91113], 
	[42.55859, 121.73828], //sierra leone
	[42.51172, 120.94141], [43.76953, 120.33984], //
	[43.92871, 120.45215], [43.98047, 120.53418], [44.06934, 120.5459], [44.11719, 120.62793],
	[44.25195, 120.63477], [44.33984, 120.67676], [44.38965, 120.94336], [44.47754, 121.00391], 
	[44.48438, 121.40527], [44.5293, 121.4541], [44.70898, 121.45508], [44.7998, 121.36035], 
	[44.80664, 121.27832], [44.8916, 121.27344], [44.93652, 121.32422], [44.94043, 121.4541], [45.2168, 121.46094], //guinea-bissau
	[45.21289, 121.91211], [45.12695, 121.91602], [45.12207, 122.0459], [45.08008, 122.05371], 
	[45.07324, 122.18457], [45.02637, 122.2334], [45.02734, 122.36816], [44.98828, 122.37402], 
	[44.9873, 122.55273], [45.03125, 122.55762], [45.02979, 123.09717] //senegal  
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[72]);

var Guinea_Bissau = L.polygon([ 
	[43.92871, 120.45215], [43.98047, 120.53418], [44.06934, 120.5459], [44.11719, 120.62793],
	[44.25195, 120.63477], [44.33984, 120.67676], [44.38965, 120.94336], [44.47754, 121.00391], 
	[44.48438, 121.40527], [44.5293, 121.4541], [44.70898, 121.45508], [44.7998, 121.36035], 
	[44.80664, 121.27832], [44.8916, 121.27344], [44.93652, 121.32422], [44.94043, 121.4541], [45.2168, 121.46094],
	[45.20996, 120.26855], [45.125, 120.21094], [45.08301, 120.12109], [45.07715, 119.62793], 
	[44.99121, 119.52539], [44.98047, 119.35059], //senegal
	[44.80078, 119.21875], [43.74609, 120.28125] 
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[73]);

var Iceland = L.polygon([[95.03125, 119.39063], [94.65625, 118.14063], [94.64063, 117.6875], [94.5625, 116.73438], 
	[94.05469, 116.48438], [94.23438, 116.05469], [94.46875, 115.9375], [94.77344, 115.47656], [94.65625, 114.6875], 
	[93.77344, 113.625], [93.00781, 114], [92.8125, 114.23438], [91.77344, 114.98438], [91.77344, 116.375], 
	[91.45313, 116.80469], [91.27344, 117.78906], [91.45313, 118.5], [92.25, 120.57031], 
	[93.19531, 121.625], [93.85938, 121.57813], [94.57813, 120.70313]]).addTo(Islands).bindPopup(countriesinfo[79]);

var Ireland = L.polygon([[76.96484, 124.26172], [77.375, 125.73438], [77.75391, 126.74219], [78.52344, 127.02344], 
	[79.5874, 126.82031], [79.63635, 126.77246], [79.5979, 126.63354], [79.54651, 126.59033], 
	[79.5498, 126.50281], [79.59619, 126.45752], [79.68506, 126.40771], [79.82446, 126.31787], 
	[79.86987, 126.27173], [79.91064, 126.26953], [79.90076, 126.13367], [79.68823, 126.12915], 
	[79.63599, 125.99683], [79.63721, 125.76953], [79.73047, 125.58496], [79.78076, 125.53711], 
	[79.87207, 125.44922], [79.95776, 125.42871], [80.00879, 125.48828], [80.09766, 125.58228], 
	[80.72461, 126.24854], [81.01172, 126.21875], [80.91406, 125.49609], [80.24609, 124.67969], 
	[79.95313, 123.82813], [78.67969, 123.71484], [77.63281, 123.39453]], {color: 'green'}).addTo(Europe).bindPopup(countriesinfo[84]);

var Israel = L.polygon([[60.98267, 156.33704], [60.80371, 156.3335], [60.79395, 156.24902], [60.70605, 156.2002], 
	[60.11719, 156.10547], [60.01953, 156.0166], [59.83691, 155.92578], [59.79297, 155.87598], 
	[59.70801, 155.87109], [59.69922, 155.83252], [59.6084, 155.74414], [59.51611, 155.69482], 
	[59.28906, 155.79199], [59.0625, 155.88379], [58.91992, 155.92676], [58.83008, 155.92773], 
	[58.77637, 156.00879], [58.55762, 156.06934], [58.23633, 156.15723], [58.14453, 156.15527], 
	[58.14429, 156.24243], [58.23291, 156.24609], [58.3667, 156.29346], [58.55273, 156.33936], 
	[58.55884, 156.37964], [58.96729, 156.38037], [59.14941, 156.47412], [59.15234, 156.51807], 
	[59.28467, 156.52002], [59.37695, 156.56738], [59.38428, 156.60742], [59.41895, 156.60938], 
	[59.56543, 156.56494], [59.61523, 156.56641], [59.65479, 156.52051], [59.61133, 156.51807],
	[59.6084, 156.42969], [59.56738, 156.42578], [59.56494, 156.24561], [59.61279, 156.20117], 
	[59.69971, 156.19922], [59.83594, 156.24609], [59.88379, 156.29346], [59.88574, 156.38013],
	[59.97314, 156.38135], [59.97705, 156.29248], [60.06982, 156.24658], [60.29443, 156.24609],
	[60.29761, 156.29053], [60.47607, 156.29249], [60.5249, 156.33838], [60.52295, 156.56396],
	[60.47754, 156.61035], [60.43604, 156.61328], [60.43457, 156.65771], [60.66309, 156.65869], //palestine
	[60.66553, 156.74756], [60.79785, 156.74805], [60.80029, 156.70264], [60.93604, 156.7041],
	[60.9408, 156.745], [61.11816, 156.74854], [61.12109, 156.66113], 
	[61.0332, 156.65576], [60.98389, 156.60938] //lebanon
	], {color: 'white'}).addTo(Middle_East).bindPopup(countriesinfo[85]);

var Ivory_Coast = L.polygon([
	[43.38086, 125.62012], [43.5625, 125.7207], [43.5625, 125.89941], [43.5166, 125.99316],
	[43.43262, 125.99707], [43.4248, 126.12598], [43.34082, 126.18066], [43.33887, 126.26758],
	[43.51953, 126.27246], [43.52051, 126.49609], [43.65527, 126.50195], [43.66016, 126.68262],
	[43.78906, 126.68262], [43.79199, 126.81348], [43.38574, 126.81836], [43.38379, 126.95215],
	[43.56738, 127.22949], [43.61035, 127.2373], //mali east
	[43.60986, 127.32129], [43.52344, 127.32568], [43.47705, 127.37158], [43.4751, 127.5498],
	[43.37988, 127.64258], [43.28857, 127.68896], [43.15283, 127.69043], [43.15381, 127.78076], 
	[43.06348, 127.78809], [43.02051, 127.87891], [43.01855, 128.01318], [43.01782, 128.05713], 
	[42.97168, 128.06055], [42.97559, 128.14355], [43.10645, 128.28906], [43.15527, 128.51367], 
	[43.19531, 128.51758], [43.19531, 128.83301], [43.1543, 128.83594], [43.15039, 128.9668],
	[42.96484, 129.15332], [42.87305, 129.1543], //burkina
	[42.51465, 129.29492], [42.42188, 129.34277], [42.41992, 129.38379], [42.19141, 129.3877], 
	[42.19043, 129.42871], [41.91797, 129.43164], [41.91504, 129.38672], [41.78076, 129.38525], 
	[41.77686, 129.29541], [41.73096, 129.24951], [41.5498, 129.15723], [41.41016, 129.10938], 
	[41.18555, 129.10986], [41.18311, 129.06592], [41.09277, 129.06348], [41.04688, 128.97559], 
	[40.95215, 128.93262], [40.59082, 128.92969], [40.45117, 128.97754], [40.08594, 129.06738], 
	[40.03906, 129.11621], [40.03516, 129.24707], [39.66992, 129.24023], [39.66895, 129.15723], 
	[39.58008, 129.15625], //ghana south
	[38.46875, 127.96094], [38.73047, 125.91797],//
	[39.07422, 125.85596], [39.66895, 125.85254],  [39.7207, 125.94141], [40.16992, 125.94238],
	[40.21484, 125.89453], [40.2207, 125.77344], [40.2666, 125.67871], [40.35938, 125.62891], 
	[40.49414, 125.62207], [40.53906, 125.53223], [40.54297, 125.31055], [40.58887, 125.22363], 
	[40.67676, 125.21191], [40.67871, 125.11914], [40.72168, 125.12402], [40.86719, 125.30078], 
	[41.22168, 125.30273], [41.32031, 125.2207], [41.4541, 125.21094], //Liberia
	[41.45703, 125.39551], [41.55664, 125.44141], [41.72852, 125.44238], [41.7793, 125.53125], 
	[41.86914, 125.53516], [41.90918, 125.48145], [41.91504, 125.35645], [42.14355, 125.35254], 
	[42.13965, 125.57715], [42.05469, 125.67676], [42.05371, 125.76074], [42.23535, 125.76367], 
	[42.32422, 125.71777], [42.3291, 125.53906], [42.41895, 125.53613], [42.50684, 125.58398], 
	[42.55762, 125.67188], [42.64551, 125.6709], [42.70215, 125.58496], [42.78418, 125.57617], 
	[42.78906, 125.44238], [43.28711, 125.44238], [43.37988, 125.53467] //guinea 
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[87]);

var Kenya = L.polygon([ 
	[38.79883, 161.19629], [38.7998, 161.14941], [38.84473, 161.14746], [38.84717, 160.91992], 
	[38.80176, 160.91943], [38.80176, 160.68994], [38.93701, 160.59814], [38.93652, 160.50781], 
	[39.02881, 160.46143], [39.0293, 160.32666], [38.93652, 160.14014], [38.8916, 160.00439], 
	[38.84424, 159.9126], [38.75586, 159.8623], [38.70703, 159.77148], [38.61621, 159.72266], 
	[38.43066, 159.49609], [38.47363, 159.36035], [38.48047, 158.99609], [38.52246, 158.99023], 
	[38.56445, 158.85547], [38.57227, 158.43945], [38.65625, 158.44141], [38.66016, 158.35547], 
	[38.74805, 158.30078], [38.79883, 158.125], [38.88867, 158.07422], [38.89063, 157.98828], 
	[39.02148, 157.89258], [39.02539, 157.80859], [39.11914, 157.75488], [39.16406, 157.66309], 
	[39.16895, 157.11523], [39.30518, 157.11768], [39.3042, 156.97705], ///ethiopia westbound
	[39.30566, 155.83301], [38.98438, 155.55566],  //south sudan west
	[38.93457, 155.64551], [38.75586, 155.65332], [38.66211, 155.74414], [38.66016, 155.82813], 
	[38.61328, 155.87598], [38.29883, 155.87891], [38.20313, 155.9248], [38.19922, 155.96289], 
	[38.06836, 155.96875], [38.02051, 156.01563], [38.01563, 156.10645], [37.83887, 156.10938], 
	[37.78809, 156.19434], [37.60742, 156.20117], [37.46973, 156.24707], [37.46777, 156.28906], 
	[37.14746, 156.28906], [36.96484, 156.19727], [36.91602, 156.14746], [36.83008, 156.15039], 
	[36.82617, 156.01758], [36.73535, 155.92578], [36.55762, 155.87402], [36.50293, 155.78809], 
	[36.41602, 155.7832], [36.41309, 155.69434], [36.28223, 155.69043], [36.27734, 155.64844], 
	[36.18652, 155.64355], [36.05566, 155.50781], //uganda south
	[35.18945, 155.48633], //lake
	[35.17822, 155.60205], [35.17578, 155.64746], [35.13086, 155.73633], [35.04395, 155.79199],
	[34.99023, 155.96582], [34.91016, 156.02246], [34.80957, 156.28516], [34.72363, 156.34668], 
	[34.62402, 156.60449], [34.54004, 156.66211], [34.44434, 156.93066], [34.35547, 156.97949], 
	[34.30957, 157.15527], [34.21582, 157.20898], [34.21387, 157.34277], [34.12598, 157.39551], 
	[34.03125, 157.66211], [33.94434, 157.71777], [33.75586, 158.16699], [33.66699, 158.17383], 
	[33.66016, 158.21289], [33.48438, 158.21191], [33.43652, 158.1709], [33.34961, 158.1709], 
	[33.20996, 158.30859], [33.2041, 158.39355], [33.07129, 158.49316], [33.06934, 158.57813], 
	[32.93652, 158.67773], [32.93066, 158.76074], [32.79492, 158.86133], [32.79199, 158.94336], 
	[32.65918, 159.04199], [32.61621, 159.13281], [32.57324, 159.18262], [32.56836, 159.27246], //Tanzania south east
	[34.71582, 160.9668], [34.80859, 160.96143], [34.90576, 160.83105], [34.99365, 160.82471], 
	[35.08691, 160.68848], [35.17725, 160.68848], [35.22559, 160.59814], [35.58691, 160.5957], 
	[35.59082, 160.55176], [38.01563, 160.5498], [38.06055, 160.60254], [38.06934, 160.68359], 
	[38.1543, 160.69141], [38.15625, 160.77539], [38.20605, 160.8252], [38.29004, 160.83203], 
	[38.34082, 160.91309], [38.42773, 160.91895], [38.52344, 161.05273], [38.61426, 161.05957], 
	[38.66309, 161.14453], [38.79004, 161.19434] // somalia north
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[92]);

var Kosovo = L.polygon([[68.4082, 145.93945], [68.45605, 145.97412], [68.58789, 145.97461], [68.68018, 145.93018], 
	[68.77197, 145.88232], [68.77686, 145.79883], [68.81982, 145.7915], [68.82227, 145.70557], 
	[68.91309, 145.70068], [69.00293, 145.65234], [69.00635, 145.61133], [69.09473, 145.61377],
	[69.09521, 145.65527], [69.18701, 145.65723], [69.18896, 145.74365], [69.23096, 145.74902],
	[69.23389, 145.83691], [69.3252, 145.84058], [69.32617, 145.9314], [69.37061, 145.93188],
	[69.41699, 145.97998], [69.41846, 146.02271], [69.55298, 146.02368], [69.55444, 146.11499],
	[69.50928, 146.16138], [69.45898, 146.25146], [69.41699, 146.34277], [69.32666, 146.34521],
	[69.32422, 146.38965], [69.2793, 146.43604], [69.23242, 146.4375], [69.23242, 146.52734],
	[69.14502, 146.5293], [69.14111, 146.61719], [69.09668, 146.62012], [69.0957, 146.79932],
	[69.00928, 146.80127], [69, 146.75537], [68.9165, 146.75684], [68.82275, 146.66113],
	[68.72852, 146.5293], [68.68506, 146.52588], [68.68604, 146.25586], [68.64063, 146.24902],
	[68.63721, 146.16309], [68.59131, 146.15869], [68.54785, 146.11377], [68.54443, 146.06836],
	[68.40723, 146.06982]], {color: 'blue'}).addTo(Europe).bindPopup(countriesinfo[94]);

var Liberia = L.polygon([ 
	[39.07422, 125.85596], [39.66895, 125.85254],  [39.7207, 125.94141], [40.16992, 125.94238],
	[40.21484, 125.89453], [40.2207, 125.77344], [40.2666, 125.67871], [40.35938, 125.62891], 
	[40.49414, 125.62207], [40.53906, 125.53223], [40.54297, 125.31055], [40.58887, 125.22363], 
	[40.67676, 125.21191], [40.67871, 125.11914], [40.72168, 125.12402], [40.86719, 125.30078], 
	[41.22168, 125.30273], [41.32031, 125.2207], [41.4541, 125.21094], //ivory coast
	[41.46094, 125.12695], [41.54688, 125.12305], [41.54688, 125.03516], [41.41211, 125.0293], 
	[41.31348, 124.89844], [41.23145, 124.89258], [41.23047, 124.6709], [41.31641, 124.66406], 
	[41.32349, 124.57446], [41.36694, 124.57275], [41.36719, 124.52686], [41.6377, 124.52441], 
	[41.64063, 124.48096], [41.86963, 124.47949], [41.87305, 124.43604], [42.05273, 124.43311], 
	[42.0542, 124.34619], [42.09912, 124.34375], [42.10352, 124.25537], [42.14355, 124.25098], 
	[42.14355, 123.88672], //guinea west
	[41.92041, 123.88623], [41.87402, 123.83887], [41.87012, 123.70264], [41.82324, 123.66113], 
	[41.59766, 123.65674], [41.59473, 123.56738], [41.50586, 123.56201], [41.41602, 123.46924], 
	[41.4126, 123.38232], [41.23291, 123.24463], [41.23145, 123.15332], [41.18213, 123.10742], 
	[41.04834, 123.10498], [40.99707, 123.01953], //sierra leone 
	[40.15625, 122.89063], [38.5, 125.70313]
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[101]);

var Libya = L.polygon([	[61.11328, 139.46582], [60.44043, 139.46094], [60.44043, 139.46094], [60.44043, 139.46094], 
	[60.25049, 139.01074], [60.16309, 139.00537], [59.88428, 138.73193], [59.88574, 138.60059],
	[59.79053, 138.50635], [59.604, 138.50439], [59.51367, 138.54883], [59.38086, 138.55127],
	[59.37695, 138.59326], [59.19922, 138.59131], [59.01855, 138.50293], [58.92139, 138.36816],
	[58.83301, 138.36816], [58.78906, 138.31982], [58.78271, 138.1875], [58.55664, 137.95215], 
	[58.4209, 138.00391], [58.36816, 138.08691], [58.0918, 138.19043],
	[57.90723, 138.27344], [57.27637, 138.27344], [57.27148, 138.2334], [57.08398, 138.23828],
	[56.85547, 138.36719], [56.72656, 138.36523], [56.54297, 138.22852], [56.31055, 138.22266],
	[56.07324, 138.32031], [55.76172, 138.32129], [55.71777, 138.27246], [55.66406, 138.09277],
	[55.53027, 137.95801], [55.3916, 137.95996], [55.38379, 138.04004], [55.19922, 138.18262],
	[54.97461, 138.31836], [54.93066, 138.36621], [54.83496, 138.40918], [54.42969, 138.41992],
	[54.42383, 138.50098], [54.37793, 138.54883], [54.29395, 138.55078], [54.28613, 138.59766],
	[54.19727, 138.60449], [54.19434, 139.05664], [54.15039, 139.19336], [54.0625, 139.28906],
	[54.05469, 139.46484], [53.96387, 139.55957], [53.50195, 139.78906], //shared western border
	[53.32617, 140.33789], [53.19434, 140.66797], [53.18945, 140.88965], [53.14063, 140.97949], 
	[52.91797, 141.17383], [52.91699, 141.25537], [52.73633, 141.39941], [52.73486, 141.48633], 
	[52.77979, 141.4873], [52.91992, 141.84619], [53.01025, 141.85352], [53.01025, 141.98828], 
	[53.24023, 142.44189], [53.32617, 142.49463], [53.33057, 142.62891], [53.3252, 142.80566], 
	[53.28711, 142.90234], [53.19043, 142.95508], [53.05078, 143.31348], [52.91699, 143.51172], 
	[52.78613, 143.73535], [52.27344, 144.70313], [51.7207, 145.79688], [51.53906, 146.08008], 
	[51.53906, 146.20117], [50.99414, 147.13086], [50.98438, 147.25], [50.34668, 148.40039], //border with niger and chad
	[50.71582, 148.41016], [50.71875, 149.13965], [52.26953, 149.13965], //border with sudan
	[57.90967, 149.13721], [58.05566, 149.05273], [58.23145, 149.00586], [58.45605, 148.99902], 
	[58.54688, 148.95313], [58.77832, 148.95508], [58.92188, 149.08789], [59.28418, 149.09082], 
	[59.28613, 149.04785], [59.65234, 149.05371], [59.7002, 149.09766], [59.70239, 149.18042], 
	[59.74683, 149.18652], [59.74951, 149.23169], //border with egypt, northbound
	[60.44531, 149.29297], [61.19922, 147.69922], [60.9375, 145.13281], [61.28125, 140.64063], 
	[61.2832, 139.50586]
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[102]);

var Namibia = L.polygon([ 
	[22.98828, 149.00391], [23.0293, 149.00195], [22.93945, 148.125], [22.93945, 148.125], //zambia
	[22.94043, 147.90186], [22.89648, 147.90039], 
	[22.85156, 147.71484], [22.75977, 147.25977], [22.71094, 146.98438], [22.66992, 146.75195], 
	[22.66406, 146.44141], [22.66211, 145.93555], [22.75391, 145.83594], [22.75977, 145.06055], 
	[22.80469, 145.05664], [22.80664, 144.65234], [22.85254, 144.55762], [23.0293, 144.50684], 
	[23.12598, 144.41797], [23.12109, 141.16504], [23.21191, 141.07227], [23.21582, 140.9873], 
	[23.30957, 140.89551], [23.39844, 140.8877], [23.40332, 140.66406], [23.44434, 140.65918], 
	[23.44629, 140.52246], [23.39844, 140.43066], [23.31055, 140.42773], [23.30957, 140.34277], 
	[23.2207, 140.24316], [23.21777, 139.97559], [23.2627, 139.97266], [23.2627, 139.74707], 
	[23.2207, 139.74316], [23.2168, 139.60547], //Angola west
	[23.07031, 139.30469], [22.42188, 139.35938], [18.84375, 140.92188], [16.1875, 141.40625], 
	[14.5, 142.20313], [14.44141, 142.73047], //sea south
	[14.46582, 142.99512], [14.55273, 143.04785], [14.55273, 143.17969], [14.60449, 143.22559],
	[14.7373, 143.22559], [14.91797, 143.31738], [14.92383, 143.45703], [14.87402, 143.45898], 
	[14.78125, 143.50098], [14.77539, 143.58789], [14.73047, 143.63379], [14.41602, 143.64258], 
	[14.36914, 144.00293], [14.23535, 144.19043], [14.23145, 144.28223], [14.27637, 144.2832], 
	[14.27832, 144.78027], [14.19043, 144.83301], [14.18945, 144.9209], [14.23145, 144.9668], 
	[14.37012, 144.97168], [14.41699, 145.14941], [14.50586, 145.15234], [14.55469, 145.19922], 
	[14.55469, 145.375], [14.60059, 145.38086], [14.64551, 145.5166], [17.49023, 145.51758], //south africa northeast
	[19.59473, 145.51953], [19.59668, 146.25], [22.43359, 146.25195], [22.43652, 146.20898], 
	[22.39453, 146.48242], [22.5332, 147.25977], 
	[22.57617, 147.43945], [22.62305, 147.67188], [22.66992, 147.67578], [22.65625, 147.89648], 
	[22.5752, 147.90527], [22.4834, 148.03809], [22.34766, 148.04492], [22.30078, 148.08496], 
	[22.30371, 148.17285], [22.43945, 148.3125], [22.52539, 148.31348], [22.53027, 148.40527], 
	[22.62402, 148.49023], [22.62305, 148.81641], [22.75586, 148.91211], [22.80176, 149.00195], 
	[22.80469, 149.21387], [22.98242, 149.13428]
	], {color: 'blue'}).addTo(South_Africa_Layer).bindPopup(countriesinfo[125]);
	
var New_Zealand = L.polygon([[11.96875, 254.79688], [10.95313, 254.26563], [8.48438, 255.71875], [7.01563, 254.6875], 
	[5.03125, 253.45313], [3.39063, 251.53125], [2.14063, 250.17188], [1.10938, 250.35938], 
	[1.03125, 252.19922], [1.08594, 253.17969], [3.15625, 255.26563], [4.53125, 256.46875], 
	[6.13281, 258.01563], [7.49219, 258.84375], [8.69531, 259.1875], [9.26563, 258.92188], 
	[10.57813, 257.02344]], {color: 'blue'}).addTo(Oceania).bindPopup(countriesinfo[129]);

var Niger = L.polygon([
	[46.50391, 140.88916], [46.58887, 140.89453], [46.59277, 140.97852], [46.64063, 141.02637],
	[46.72461, 141.02734], [46.77808, 141.11816], [46.95996, 141.11963], [47.14063, 141.21387],
	[47.23633, 141.3457], [47.41748, 141.39746], [47.55762, 141.57471], [47.646, 141.57861],
	[48.10693, 142.07861], [48.19531, 142.08154], [48.38281, 142.30811], [48.65381, 142.31104],
	[48.70166, 142.35449], [49.74902, 142.35645], [49.75366, 142.40063], [50.12061, 142.4043],
	[50.12207, 142.44824], [50.48535, 142.44775], [50.48816, 142.49451], [50.71753, 142.49512],
	[50.81079, 142.54395], [50.98828, 142.62891], [51.0415, 142.63013], [51.31445, 142.36035],
	[51.5918, 142.35449], [51.67773, 142.22461], [51.76367, 142.2168], [51.86816, 142.08105],
	[52.54492, 142.07715], [52.73535, 141.99609],//chad
	[53.01025, 141.98828], [53.01025, 141.85352], [52.91992, 141.84619], [52.77979, 141.4873],
	[52.73486, 141.48633], [52.73633, 141.39941], [52.91699, 141.25537], [52.91797, 141.17383], 
	[53.14063, 140.97949], [53.18945, 140.88965], [53.19434, 140.66797], [53.32617, 140.33789], //libya
	[53.4209, 139.79028], [53.375, 139.78711], [53.01367, 139.14453], [52.73242, 138.72266], [52.36426, 138.04883],
	[52.27832, 137.99121], [52.22656, 137.82031], [52.14551, 137.7666], [52.13574, 137.68555],
	[52.04883, 137.63086], [52.0459, 137.54395], [51.95703, 137.53711], [51.91309, 137.44727],
	[51.90723, 137.36426], [51.81836, 137.30762], [51.81348, 137.22266], [51.73438, 137.17578],
	[51.68359, 137.08105], [51.67676, 136.99805], [51.49512, 136.72461], [51.41016, 136.66797],
	[51.4043, 136.58594], [51.03711, 136.26563], [51.03516, 136.17969], [50.58203, 135.75195],
	[50.57617, 135.66602], [50.31055, 135.42578], [50.20313, 134.80078], [50.07031, 134.33203], //algeria
	[50.07422, 134.24463], [49.06934, 134.24512], [49.06592, 134.28809], [48.47266, 134.28857], 
	[48.4707, 134.24414], [48.01416, 134.24219], [47.91895, 134.10986], [47.7832, 134.10254], 
	[47.77832, 134.06348], [47.60547, 134.05957], [47.5957, 134.01465], [47.46484, 134.01343], 
	[47.46387, 133.87988], [47.41113, 133.79004], [47.3252, 133.78516], [47.32446, 133.74072], 
	[47.23389, 133.74072], [47.23291, 133.64941], [47.27832, 133.64893], [47.27637, 133.37402], 
	[47.23438, 133.37207], [47.22852, 132.50586], [47.18945, 132.49902], [47.18652, 132.13672], 
	[46.95801, 131.94824], [46.9541, 131.40527], [46.91113, 131.35742], //mali 
	[46.54492, 131.35742], [46.45117, 131.49023], [46.22754, 131.49707], [46.13379, 131.53906], 
	[46.08105, 131.62988], [45.99805, 131.63184], [45.99219, 131.8125], [45.89941, 131.94531], 
	[45.49414, 131.95117], [45.48828, 132.04199], [45.40137, 132.0918], [45.39551, 132.17969], 
	[45.21875, 132.32129], [45.20898, 132.45215], [45.17188, 132.45898], [45.16992, 132.59277], 
	[45.26074, 132.59473], [45.25684, 132.77637], [45.21289, 132.81934], [45.03711, 132.81934], 
	[45.02734, 132.73242], [44.94531, 132.73145], [44.85547, 132.77832], [44.80078, 132.86426], 
	[44.71289, 132.86816], [44.66406, 132.95703], //burkina faso
	[44.8916, 132.96191], [44.94189, 133.0083], [44.94312, 133.14258], [45.03345, 133.19189], 
	[45.03125, 133.27832], [44.94287, 133.33154], [44.94092, 133.41895], [44.85205, 133.42139], 
	[44.85059, 133.51123], [44.76221, 133.51025], [44.66943, 133.55859], [44.57861, 133.74219], 
	[44.57227, 133.78516], //benin
	[44.57678, 133.83118], [45.16602, 133.83496], [45.21973, 134.01172], [45.30859, 134.10254],
	[45.44434, 134.10938], [45.49609, 134.19434], [45.67578, 134.19922], [45.80957, 134.20117],
	[45.81567, 134.24268], [45.85889, 134.33252], [45.99463, 134.42822], [45.99854, 134.56201],
	[46.04199, 134.56689], [46.04297, 135.06738], [46.13574, 135.11377], [46.13086, 135.25195],
	[46.08984, 135.25342], [46.08691, 135.34229], [45.95313, 135.62305], [45.94238, 135.7998],
	[45.89844, 135.89063], [45.85059, 135.9375], [45.77148, 135.94238], [45.76172, 136.02832], 
	[45.63086, 136.03223], [45.54004, 136.08203], [45.49512, 136.12598], [45.4873, 136.21582],
	[45.44727, 136.21777], [45.44434, 136.30615], [45.58057, 136.39844], [45.58447, 136.62451],
	[45.67627, 136.67432], [45.7207, 136.76611], [45.72021, 137.03906], [45.63281, 137.08789],
	[45.62402, 137.16992], [45.53906, 137.22754], [45.5332, 137.35547], [45.40527, 137.45898],
	[45.39453, 137.63379], [45.35254, 137.6377], [45.35352, 138.17676], [45.39941, 138.22949],
	[45.49023, 138.23193], [45.62939, 138.37354], [45.67529, 138.46143], [45.6792, 138.59521],
	[45.7207, 138.64258], [45.72412, 138.78027], [45.76855, 138.82764], [45.76514, 139.42188],
	[45.66895, 139.69434], [45.58496, 139.7959], [45.53906, 139.92969], [45.54004, 140.20313],
	[45.58545, 140.24658], [45.67529, 140.24902], [45.67798, 140.33887], [45.80859, 140.43555],
	[45.85693, 140.52539], [45.86035, 140.70313], [45.94873, 140.70752], [45.99609, 140.7959] //nigeria east bound
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[131]);

var Nigeria = L.polygon([ 
	[44.57678, 133.83118], [45.16602, 133.83496], [45.21973, 134.01172], [45.30859, 134.10254],
	[45.44434, 134.10938], [45.49609, 134.19434], [45.67578, 134.19922], [45.80957, 134.20117],
	[45.81567, 134.24268], [45.85889, 134.33252], [45.99463, 134.42822], [45.99854, 134.56201],
	[46.04199, 134.56689], [46.04297, 135.06738], [46.13574, 135.11377], [46.13086, 135.25195],
	[46.08984, 135.25342], [46.08691, 135.34229], [45.95313, 135.62305], [45.94238, 135.7998],
	[45.89844, 135.89063], [45.85059, 135.9375], [45.77148, 135.94238], [45.76172, 136.02832], 
	[45.63086, 136.03223], [45.54004, 136.08203], [45.49512, 136.12598], [45.4873, 136.21582],
	[45.44727, 136.21777], [45.44434, 136.30615], [45.58057, 136.39844], [45.58447, 136.62451],
	[45.67627, 136.67432], [45.7207, 136.76611], [45.72021, 137.03906], [45.63281, 137.08789],
	[45.62402, 137.16992], [45.53906, 137.22754], [45.5332, 137.35547], [45.40527, 137.45898],
	[45.39453, 137.63379], [45.35254, 137.6377], [45.35352, 138.17676], [45.39941, 138.22949],
	[45.49023, 138.23193], [45.62939, 138.37354], [45.67529, 138.46143], [45.6792, 138.59521],
	[45.7207, 138.64258], [45.72412, 138.78027], [45.76855, 138.82764], [45.76514, 139.42188],
	[45.66895, 139.69434], [45.58496, 139.7959], [45.53906, 139.92969], [45.54004, 140.20313],
	[45.58545, 140.24658], [45.67529, 140.24902], [45.67798, 140.33887], [45.80859, 140.43555],
	[45.85693, 140.52539], [45.86035, 140.70313], [45.94873, 140.70752], [45.99609, 140.7959], //niger
	[45.71484, 141.18359], [45.12109, 141.25488], //
	[45.0752, 141.39258], [44.9873, 141.39453], [44.98242, 141.62109], [44.89746, 141.62695],
	[44.89258, 141.71094], [44.75977, 141.71289], [44.75684, 141.66602], [44.48438, 141.67188], 
	[44.48145, 141.71191], [44.3916, 141.71094], [44.2998, 141.61816], [44.29395, 141.53516], 
	[44.20801, 141.4834], [44.20313, 141.20898], [44.11816, 141.20996], [44.01953, 141.07324], 
	[43.65527, 140.90039], [43.42871, 140.88867], [43.42285, 140.84473], [43.33789, 140.84277], 
	[43.33105, 140.75488], [43.28516, 140.71094], [42.92676, 140.7041], [42.87598, 140.66016], 
	[42.87305, 140.52832], [42.82813, 140.4834], [42.69629, 140.47461], [42.69531, 140.43457], 
	[42.46582, 140.43066], [42.46094, 140.38867], [42.3252, 140.38281], [42.2373, 140.28906], 
	[42.23438, 140.11621], [42.10156, 140.10742], [42.09473, 140.02344], [42.04492, 139.97852], 
	[41.73438, 139.96973], [41.72852, 139.93164], [41.64258, 139.92676], [41.5918, 139.83691], 
	[41.40527, 139.83008], [41.26855, 139.6582], [41.17969, 139.65332], [41.18164, 139.74438], 
	[41.09277, 139.74121], [41.04736, 139.69531], [41.04297, 139.60889], [40.95068, 139.51758], 
	[40.77148, 139.51367], [40.76465, 139.4248], [40.68262, 139.41992], [40.63574, 139.37402], 
	[40.63086, 139.19629], [40.7207, 139.14844], [40.8584, 139.14648], [40.86133, 139.06152], 
	[40.90918, 139.01074], [40.99316, 139.00879], [41.03418, 138.95996], [41.04688, 138.87988], 
	[41.08789, 138.86914], [41.08887, 138.78613], [40.95117, 138.78125], [40.95801, 138.50586], 
	[41.04297, 138.50977], [41.04199, 138.46484], [40.91211, 138.36035], [40.90234, 138.23047], 
	[40.76465, 138.14063], [40.63281, 138.08984], [40.62207, 138.00195], [40.48926, 137.87207], 
	[40.40332, 137.86328], [40.39746, 137.78027], [40.30762, 137.68262], [40.2207, 137.67969],
	[40.17188, 137.55371], [40.08691, 137.54297], [40.03809, 137.58887], [39.90088, 137.58545],
	[39.89893, 137.54736], [39.67529, 137.54346], [39.62354, 137.45557], [39.53418, 137.45068],
	[39.52783, 137.40381], [39.44434, 137.40674], [39.43848, 137.36084], [39.39355, 137.35645], //cameroon southbound
	[38.80859, 137.15234], [38.44531, 134.46875], [40.33594, 133.22656], //sea
	[40.54395, 133.23584], [41.45313, 133.23242], [41.45923, 133.19043], [42.41309, 133.19141],
	[42.4231, 133.23608], [42.55811, 133.2356], [42.55957, 133.4624], [42.65088, 133.50977],
	[42.92529, 133.51172], [43.02148, 133.64648], [43.15381, 133.64941], [43.15479, 133.78174],
	[43.20313, 133.8291], [43.56934, 133.83301], [43.57178, 133.96875], [43.84326, 133.96729],
	[43.84082, 133.92432], [44.06836, 133.92139], [44.11865, 133.83398], [44.20459, 133.83057],
	[44.25488, 133.74463], [44.43652, 133.74316], [44.4386, 133.78479] //benin northbound
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[132]);

var Maldives = L.polygon([[41.1875, 182.76563], [39.1875, 182.67188], [37.84375, 182.78125], [35.6875, 182.98438], 
	[35.64063, 183.59375], [36, 183.84375], [37.25, 183.96875], [39.46875, 184.04688], 
	[41.07813, 183.60938]], {color: 'green'}).addTo(Islands).bindPopup(countriesinfo[111]);

var Macedonia = L.polygon([ [68.73193, 146.61914], [68.73047, 146.8457], [68.77441, 146.84961],
	[68.77686, 147.25879], [68.72852, 147.30566], [68.63721, 147.35059], [68.54102, 147.5332],
	[68.49805, 147.58008], [68.40674, 147.62744], [68.31787, 147.71729], [68.23096, 147.71826],
	[68.22266, 147.67285], [67.95166, 147.67236], [67.95068, 147.49414], [67.81494, 147.4873],
	[67.76855, 147.39746], [67.76855, 147.17578], [67.80762, 147.17383], [67.80957, 146.98926],
	[67.77051, 146.98438], [67.76563, 146.89648], [67.67969, 146.8916], [67.63086, 146.84766],
	[67.62598, 146.71289], [67.58691, 146.71191], [67.58398, 146.3457], [67.54004, 146.34277],
	[67.54126, 146.25488], [67.58228, 146.25195], 
	[67.62842, 146.2041], [67.63037, 146.02832], [67.76563, 146.02148], [67.76807, 145.93262], 
	[67.85791, 145.92822], [67.85889, 145.88477], [68.30957, 145.88623], [68.31787, 145.93066],
	[68.4082, 145.93945], [68.40723, 146.06982], [68.54443, 146.06836], [68.54785, 146.11377],
	[68.59131, 146.15869], [68.63721, 146.16309], [68.64063, 146.24902], [68.68604, 146.25586],
	[68.68506, 146.52588], [68.72852, 146.5293]], {color: 'blue'}).addTo(Europe).bindPopup(countriesinfo[107]);

var Madagascar = L.polygon([ 
	[27.42188, 166.45313], [26.79688, 167.25], [24.5625, 167.75], [17.26563, 165.46875], 
	[16.375, 164.28125], [16.41406, 162.6875], [17.25781, 161.92969], [19.35938, 161.53125], 
	[20.1875, 161.85156], [21.14844, 162.47656], [22.48438, 162.23438], [23.19531, 162.22656], 
	[24.08594, 162.51563], [24.52344, 163.90625], [25.22656, 164.85156], [26.03125, 165.0625], 
	[27.19531, 165.90625]
	], {color: 'blue'}).addTo(South_Africa_Layer).bindPopup(countriesinfo[108]);

var Malawi = L.polygon([ 
	[27.13281, 155.91406], [25.96875, 156.10156], [25.96484, 156.19824], [25.9668, 156.37695], 
	[25.875, 156.38086], [25.73242, 156.56348], [25.55566, 156.61133], [25.50781, 156.70117], 
	[25.32617, 156.75098], [25.27539, 156.83789], [25.18555, 156.88379], [24.86914, 156.88281], 
	[24.86426, 156.83984], [24.68164, 156.83984], [24.68262, 156.88086], [24.45801, 156.88184], 
	[24.4541, 156.83789], [24.13672, 156.83594], [24.04395, 156.74414], [24.04004, 156.51855], 
	[23.99414, 156.47266], [23.90039, 156.43066], [23.7666, 156.42383], [23.75977, 156.33594], 
	[23.72363, 156.33301], [23.62598, 156.4707], [23.30957, 156.4707], [23.30859, 156.33887], 
	[23.44189, 156.33691], [23.44531, 156.38037], [23.53711, 156.37891], [23.58398, 156.20117], 
	[23.67285, 156.10938], [23.7627, 156.10547], [23.86035, 155.97168], [23.94922, 155.9668], 
	[23.94824, 155.88379], [23.99219, 155.83301], [24.13184, 155.83398], [24.21875, 155.74316], 
	[24.31348, 155.74316], [24.40918, 155.87305], [24.58887, 155.87793], [24.63477, 155.9668], 
	[25.08984, 155.96777], [25.2334, 155.87695], [25.32324, 155.87402], [25.32324, 155.65332], 
	[25.27832, 155.64648], [25.27734, 155.24219], [25.37207, 155.14355], [25.46094, 155.1416], 
	[25.50879, 155.05469], [25.59766, 155.0498], [25.646, 155.00391], [25.646, 154.96265], //mozambique south then west
	[25.69043, 154.95801], [25.68848, 154.83008], [25.78516, 154.73438], [25.87402, 154.69141],
	[25.97168, 154.67871], [26.0127, 154.72949], [26.19727, 154.8125], [26.65039, 154.82422], 
	[26.69727, 154.87305], [26.69922, 155.05078], [26.74414, 155.14258], [26.78906, 155.1875], 
	[26.92969, 155.18555], [26.92871, 155.05371], [27.43066, 155.04688], [27.43262, 155.00879], 
	[27.61133, 155.00977], [27.7041, 155.09961], [27.76074, 155.09668], [27.7998, 155.05273], 
	[27.88965, 155.0166], [27.9834, 155.00879], [28.02344, 155.10059], [28.02539, 155.23438], 
	[28.11719, 155.23438], [28.16016, 155.28125], [28.29688, 155.27539], [28.30371, 155.23828],
	[28.43457, 155.23145], [28.48438, 155.18555], [28.4873, 155.10547], [28.62402, 155.09277],
	[28.89258, 155.00488], [28.89746, 154.82617], [29.07129, 154.77148], //zambia north
	[29.08154, 154.77783], [29.08203, 154.86523], [28.99219, 154.91992], [28.98828, 155.09375], 
	[28.90137, 155.15039], [28.90283, 155.42334], [28.85059, 155.50928], //tanzania east
	[28.40234, 155.79688]
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[109]);

var Mali = L.polygon([ 
	[44.06445, 127.3291], [44.11719, 127.45313], [44.20508, 127.50781], [44.43652, 127.50488],
	[44.43457, 127.46289], [44.62012, 127.46387], [44.71191, 127.55469], [44.71094, 127.77734],
	[44.75684, 127.91699], [44.84473, 127.91895], [44.94043, 128.05273], [45.25977, 128.06055],
	[45.26367, 128.23926], [45.44043, 128.2373], [45.48926, 128.14941], [45.62402, 128.15039],
	[45.62988, 128.2373], [45.80469, 128.37891], [45.80859, 128.46484], [45.63379, 128.60938],
	[45.62793, 128.79102], [45.67285, 128.79297], [45.67676, 128.92383], [45.80859, 128.9248],
	[45.8125, 128.88672], [45.99316, 128.88477], [45.99023, 129.06055], [45.95117, 129.06641],
	[45.94922, 129.15234], [46.1748, 129.1582], [46.30762, 129.25293], [46.31934, 129.33398],
	[46.41016, 129.43262], [46.40625, 129.61035], [46.36328, 129.61523], [46.3623, 129.7959],
	[46.5918, 129.80078], [46.5918, 130.06738], [46.7207, 130.2168], [46.78125, 130.38281],
	[46.81836, 130.39648], [46.90332, 130.53516], [47.00195, 130.67188], [46.99902, 131.1709],
	[46.95703, 131.1748], [46.95117, 131.30664], [46.91187, 131.35657], //burkina east
	[46.91113, 131.35742], [46.9541, 131.40527], [46.95801, 131.94824], [47.18652, 132.13672], 
	[47.18945, 132.49902], [47.22852, 132.50586], [47.23438, 133.37207], [47.27637, 133.37402], 
	[47.27832, 133.64893], [47.23291, 133.64941], [47.23389, 133.74072], [47.32446, 133.74072], 
	[47.3252, 133.78516], [47.41113, 133.79004], [47.46387, 133.87988], [47.46484, 134.01343], 
	[47.5957, 134.01465], [47.60547, 134.05957], [47.77832, 134.06348], [47.7832, 134.10254], 
	[47.91895, 134.10986], [48.01416, 134.24219], [48.4707, 134.24414], [48.47266, 134.28857], 
	[49.06592, 134.28809], [49.06934, 134.24512], [50.07422, 134.24463], //niger north
	[50.07715, 134.24609], [50.07422, 134.11133], [50.03418, 134.10156], [50.0293, 133.87988],
	[49.98535, 133.87207], [49.98828, 133.5166], [50.12109, 133.50977], [50.2207, 133.55469],
	[50.62207, 133.55176], [50.71484, 133.32324], [50.76367, 132.96777], [50.85547, 132.95703],
	[50.8999, 132.91064], [50.9043, 132.59619], [50.98828, 132.54199], [50.99219, 132.46484],
	[51.125, 132.45508], [51.27344, 132.0918], [51.53125, 132.0918], [51.72656, 131.77539], 
	[52.64355, 130.53223], [53.45703, 129.42383], //algeria
	[54.57227, 127.78516],
	[54.55859, 126.55078], [54.38086, 126.54492], [54.37793, 126.58887], [53.65234, 126.63867], 
	[53.19336, 126.6875], [52.50586, 126.77734], [51.9043, 126.82227], [51.11914, 126.95313], 
	[50.67188, 126.95898], [48.88281, 127.14453], [48.05664, 127.23438], [48.0127, 127.27832], 
	[47.96289, 127.41211], [47.78613, 127.40918], [47.77832, 127.37109], [47.55469, 127.36719], 
	[47.55078, 127.32324], [47.32715, 127.32227], [47.32715, 124.79688], [47.32715, 124.5752], 
	[47.27832, 124.47656], [47.27832, 123.56348], [47.19141, 123.5625], [47.13574, 123.47363], 
	[47.0498, 123.4707], [47.05176, 123.38379], [47.13867, 123.37988], [47.22656, 123.28809], 
	[47.23535, 123.20313], [47.3252, 123.10742], [47.41309, 123.10742], [47.41113, 122.97266], 
	[47.3252, 122.91797], [47.32715, 122.83398], [47.22949, 122.78809], [46.86719, 122.78223], 
	[46.77832, 122.68945], [46.77246, 122.46387], //mauritania south
	[46.54492, 122.46582], [46.4043, 122.64844], [45.86133, 122.64941], [45.80664, 122.73926], 
	[45.72168, 122.74023], [45.71973, 122.96582], [45.54004, 122.97168], [45.53516, 123.05957], 
	[45.4834, 123.10352], [45.0332, 123.10449], //Senegal south
	[44.98633, 123.0625], [44.89941, 123.05664], [44.89355, 123.01465], [44.80762, 123.01563], 
	[44.80078, 123.10156], [44.75586, 123.15234], [44.75781, 123.28516], [44.85059, 123.37891], 
	[44.84961, 123.4707], [44.7998, 123.5166], [44.71582, 123.52148], [44.66504, 123.56641], 
	[44.66406, 123.65137], [44.84863, 123.7959], [44.84668, 124.06641], [44.80762, 124.07227], 
	[44.79688, 124.20605], [44.75781, 124.21094], [44.75977, 124.34277], [44.84766, 124.34766],
	[44.85059, 124.43164], [44.93945, 124.4834], [44.93848, 124.56641], [45.07031, 124.57227],
	[45.0752, 124.74902], [45.03418, 124.75781], [45.02637, 124.84668], [44.85449, 124.84668],
	[44.8457, 124.88867], [44.76074, 124.89258], [44.70996, 124.94141], [44.47949, 124.94629],
	[44.48047, 125.02832], [44.34668, 125.0293], [44.33887, 125.12207], [44.30176, 125.12598],
	[44.29688, 125.25879], [44.21191, 125.25879], [44.1123, 125.07813], [44.02637, 125.07813],
	[44.02148, 125.30176], [43.6123, 125.30664], [43.56641, 125.35645], [43.5625, 125.4834],
	[43.51563, 125.53516], [43.38086, 125.53906], //guinea south
	[43.38086, 125.62012], [43.5625, 125.7207], [43.5625, 125.89941], [43.5166, 125.99316],
	[43.43262, 125.99707], [43.4248, 126.12598], [43.34082, 126.18066], [43.33887, 126.26758],
	[43.51953, 126.27246], [43.52051, 126.49609], [43.65527, 126.50195], [43.66016, 126.68262],
	[43.78906, 126.68262], [43.79199, 126.81348], [43.38574, 126.81836], [43.38379, 126.95215],
	[43.56738, 127.22949], [43.61035, 127.2373] //ivory coast east
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[112]);

var Malta = L.polygon([[63.64453, 141.22852], [63.61523, 141.42578], [63.47852, 141.69922], [63.12891, 141.70898], 
	[63.12891, 141.55469], [63.32813, 141.33398], [63.43359, 141.20898], [63.58789, 141.2168]], {color: 'gold'}).addTo(Islands).bindPopup(countriesinfo[113]);

var Mauritania = L.polygon([
	[51.73438, 118.9043], [51.72266, 119.0752], 
	[51.72803, 121.95703], [52.08789, 121.95508], [52.08838, 121.91602], [52.63965, 121.91309], 
	[52.64355, 121.87305], [52.95801, 121.875], [53.09473, 122.00781], [53.09863, 122.09766], 
	[53.2334, 122.19238], [53.28418, 122.45703], [53.37207, 122.56348], [53.37891, 122.64648],
	[55.33398, 122.6543], [55.34375, 125.0332], [56.35864, 125.03442], //west sahara north
	[54.57227, 127.78516],
	[54.55859, 126.55078], [54.38086, 126.54492], [54.37793, 126.58887], [53.65234, 126.63867], 
	[53.19336, 126.6875], [52.50586, 126.77734], [51.9043, 126.82227], [51.11914, 126.95313], 
	[50.67188, 126.95898], [48.88281, 127.14453], [48.05664, 127.23438], [48.0127, 127.27832], 
	[47.96289, 127.41211], [47.78613, 127.40918], [47.77832, 127.37109], [47.55469, 127.36719], 
	[47.55078, 127.32324], [47.32715, 127.32227], [47.32715, 124.79688], [47.32715, 124.5752], 
	[47.27832, 124.47656], [47.27832, 123.56348], [47.19141, 123.5625], [47.13574, 123.47363], 
	[47.0498, 123.4707], [47.05176, 123.38379], [47.13867, 123.37988], [47.22656, 123.28809], 
	[47.23535, 123.20313], [47.3252, 123.10742], [47.41309, 123.10742], [47.41113, 122.97266], 
	[47.3252, 122.91797], [47.32715, 122.83398], [47.22949, 122.78809], [46.86719, 122.78223], 
	[46.77832, 122.68945], [46.77246, 122.46387], //Mali south
	[46.77148, 122.46228], [46.77832, 122.42188], [46.86621, 122.32715], [46.95898, 122.32031], 
	[46.99805, 122.27832], [47.00879, 122.14844], [47.0918, 122.09473], [47.10156, 122.01074], 
	[47.27637, 122.00586], [47.32227, 121.95703], [47.32422, 121.87402], [47.46484, 121.73535], 
	[47.64258, 121.73242], [47.65039, 121.68652], [47.7334, 121.68164], [47.78027, 121.6377], 
	[47.78516, 121.45898], [47.83008, 121.45605], [47.83008, 121.27832], [47.91797, 121.27051], 
	[48.19336, 120.99902], [48.19434, 120.4502], [48.10352, 120.35059], [48.1001, 119.62305],
	[48.01172, 119.53613], [47.87793, 119.52881], [47.82715, 119.39697], //senegal east
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[115]);

var Morocco = L.polygon([ [56.35938, 125.03613], [57.49902, 125.03027], [57.58984, 125.12646], [57.5918, 125.20996],
	[57.72754, 125.31055], [57.73047, 125.39404], [57.81787, 125.44873], [57.87109, 125.62158],
	[58.04932, 125.77051], [58.05371, 125.94434], [58.18652, 126.04346], [58.18848, 126.58594],
	[58.32275, 126.59131], [58.36963, 126.68408], [58.37207, 126.81445], [58.41699, 126.81982],
	[58.41943, 127.2749], [58.50684, 127.32666], [58.51025, 127.41113], [58.69678, 127.59619],
	[58.87256, 127.64551], [58.96631, 127.7373], [58.96777, 127.91211], [59.0127, 127.91943],
	[59.01465, 128.05176], [59.10645, 128.23291], [59.23828, 128.33252], [59.28516, 128.42578],
	[59.28906, 128.64648], [59.42334, 128.65137], [59.42627, 128.51709], [59.87695, 128.51953],
	[59.88184, 128.78613], [59.9248, 128.78906], [59.9248, 129.01367], [59.97168, 129.10645],
	[60.1543, 129.11133], [60.19922, 129.16113], [60.20508, 129.38281], [60.24121, 129.38672],
	[60.24805, 129.84082], [60.21191, 129.84473], [60.21191, 130.3916], [60.47705, 130.39258],
	[60.48193, 130.48193], [60.56982, 130.4873], [60.66602, 130.25781], [60.75244, 130.25342],
	[60.80518, 130.16504], [61.02588, 130.16064], [61.12256, 130.02881], [61.26074, 130.06592],
	[61.48584, 130.06934], [61.53467, 129.98633], [61.62598, 129.98682], [61.62646, 130.02197],
	[61.94531, 130.02637], [61.94971, 129.98486], [62.40283, 129.97607], [62.40723, 129.89648],
	[62.50049, 129.79883], [62.54102, 129.79199], [62.54688, 129.70898], //border with algeria is everything above this line
	[63.26172, 129.12891], [63.46094, 127.71875], [63.38086, 127.29102], [63.35156, 126.92969],
	[62.10938, 125.85938], [60.85938, 123.85938], [58.8125, 123.28125], [56.91016, 121.44922], 
	[56.62891, 121.77881], [56.63025, 125.03308] //west sahara
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[123]);

var Mozambique = L.polygon([
	[28.25732, 160.14209], [28.16895, 160.09082], [28.16602, 160.00391], [28.0752, 159.95508], 
	[28.07471, 159.86279], [27.9834, 159.81738], [27.93652, 159.63867], [27.88867, 159.50293], 
	[27.80176, 159.44727], [27.7959, 159.35938], [27.75391, 159.36133], [27.75195, 158.99805], 
	[27.66211, 158.94336], [27.61328, 158.76758], [27.6123, 158.58301], [27.65527, 158.58203], 
	[27.65723, 158.30859], [27.52148, 158.30371], [27.3877, 158.16406], [27.37988, 158.03418], 
	[27.33887, 158.0293], [27.33789, 157.84863], [27.4209, 157.75098], [27.42871, 157.52832], 
	[27.37891, 157.44238], [27.39063, 157.11426], [27.46875, 157.0625], [27.47656, 156.97754], 
	[27.56836, 156.92871], [27.56738, 156.84082], [27.52637, 156.83691], [27.52246, 156.75293], 
	[27.47949, 156.74902], [27.47656, 156.24512], //tanzania west 
	[27.13281, 155.91406], [25.96875, 156.10156], [25.96484, 156.19824], [25.9668, 156.37695], 
	[25.875, 156.38086], [25.73242, 156.56348], [25.55566, 156.61133], [25.50781, 156.70117], 
	[25.32617, 156.75098], [25.27539, 156.83789], [25.18555, 156.88379], [24.86914, 156.88281], 
	[24.86426, 156.83984], [24.68164, 156.83984], [24.68262, 156.88086], [24.45801, 156.88184], 
	[24.4541, 156.83789], [24.13672, 156.83594], [24.04395, 156.74414], [24.04004, 156.51855], 
	[23.99414, 156.47266], [23.90039, 156.43066], [23.7666, 156.42383], [23.75977, 156.33594], 
	[23.72363, 156.33301], [23.62598, 156.4707], [23.30957, 156.4707], [23.30859, 156.33887], 
	[23.44189, 156.33691], [23.44531, 156.38037], [23.53711, 156.37891], [23.58398, 156.20117], 
	[23.67285, 156.10938], [23.7627, 156.10547], [23.86035, 155.97168], [23.94922, 155.9668], 
	[23.94824, 155.88379], [23.99219, 155.83301], [24.13184, 155.83398], [24.21875, 155.74316], 
	[24.31348, 155.74316], [24.40918, 155.87305], [24.58887, 155.87793], [24.63477, 155.9668], 
	[25.08984, 155.96777], [25.2334, 155.87695], [25.32324, 155.87402], [25.32324, 155.65332], 
	[25.27832, 155.64648], [25.27734, 155.24219], [25.37207, 155.14355], [25.46094, 155.1416], 
	[25.50879, 155.05469], [25.59766, 155.0498], [25.646, 155.00391], [25.646, 154.96265], //malamwi south then west
	[25.64453, 154.96094], [25.60156, 154.9082], [25.55566, 154.81055], [25.50195, 154.55371], 
	[25.41602, 154.44727], [25.40918, 154.22168], [25.32324, 154.12988], [25.27441, 153.85938], 
	[25.14063, 153.6709], [25.04395, 153.13281], [24.91406, 152.85449], [24.72754, 152.85547], 
	[24.68164, 152.93945], //Zambia west
	[24.45313, 152.98633], [24.18164, 152.99121], [24.1748, 153.53516], [24.04199, 153.68066],
	[23.99121, 153.94531], [23.81445, 154.0918], [23.80566, 154.40625], [23.7627, 154.54199],
	[23.63086, 154.64258], [23.62891, 154.77539], [23.2666, 154.7744], [23.25879, 154.81836],
	[22.81055, 154.82129], [22.79883, 154.77441], [22.61816, 154.7793], [22.61816, 154.81934],
	[22.3916, 154.82422], [22.3877, 154.8623], [22.30664, 154.8623], [22.25781, 154.82031],
	[22.25, 154.73047], [22.16699, 154.73145], [22.16016, 154.77539], [22.0752, 154.77344],
	[22.06934, 154.6416], [22.02246, 154.5957], [21.8877, 154.59766], [21.88184, 154.67676],
	[21.83984, 154.72656], [21.42969, 154.7334], [21.33301, 154.86523], [21.19922, 154.86816],
	[21.02148, 154.77441], [20.88184, 154.72656], [20.83301, 154.63867], [20.74609, 154.63574],
	[20.69727, 154.58887], [20.69336, 154.45508], [20.33203, 154.4541], [20.28223, 154.36914],
	[20.19336, 154.36426], [20.18848, 154.4082], [20.10449, 154.40625], [19.77832, 154.04297],
	[19.69043, 154.04102], [19.31934, 153.62891], [19.2666, 153.62793], //zimbabwe
	[18.86133, 153.76563], [18.49414, 153.77148], [18.44531, 153.85742], [18.17773, 153.9082],
	[18.07617, 154.04102], [17.85742, 154.04688], [17.67578, 154.13086], [17.66602, 154.0918],
	[17.48438, 154.08984], [17.47656, 154.13672], [17.0293, 154.13477], [17.02539, 154.0918],
	[16.52148, 154.0918], [16.46875, 154.17969], [15.88672, 154.17773], [15.88086, 154.72656], //south africa
	[15.90625, 155.40625], [16.63281, 155.38281], [17.38672, 156.92969], [20.92188, 157.1875],
	[22.60938, 159.34375], [24.4375, 160.9375], [28.29688, 160.60938]
	], {color: 'blue'}).addTo(South_Africa_Layer).bindPopup(countriesinfo[124]);

var Palestine = L.polygon([ [59.93164, 156.65625], [59.65479, 156.52051], [59.61133, 156.51807],
	[59.6084, 156.42969], [59.56738, 156.42578], [59.56494, 156.24561], [59.61279, 156.20117], 
	[59.69971, 156.19922], [59.83594, 156.24609], [59.88379, 156.29346], [59.88574, 156.38013],
	[59.97314, 156.38135], [59.97705, 156.29248], [60.06982, 156.24658], [60.29443, 156.24609],
	[60.29761, 156.29053], [60.47607, 156.29249], [60.5249, 156.33838], [60.52295, 156.56396],
	[60.47754, 156.61035], [60.43604, 156.61328], [60.43457, 156.65771]
	], {color: 'blue'}).addTo(Middle_East).bindPopup(countriesinfo[138]);

var Rwanda = L.polygon([[35.17773, 152.94824], [35.17651, 153.03345], [35.1311, 153.08154], [34.95264, 153.08716], 
	[34.90723, 153.1311], [34.85645, 153.26123], [34.68018, 153.2666], [34.6709, 153.30957], 
	[34.45264, 153.31299], [34.21777, 153.30859], [34.21777, 153.12891], [34.21875, 152.90137], 
	[34.17676, 152.89355], [34.17627, 152.71875], [34.21631, 152.71289], [34.21729, 152.67041], 
	[33.99316, 152.66797], [33.90234, 152.5752], [33.89648, 152.26074], [33.98633, 152.25684], 
	[33.98682, 152.17041], [34.03418, 152.16455], [34.03369, 152.03076], [33.94629, 152.02637], 
	[33.94434, 151.94141], [33.98486, 151.89453], [34.07422, 151.89355], [34.20996, 151.9834], 
	[34.67188, 152.16309], [34.72021, 152.16748], [34.81104, 152.25928], [34.81787, 152.34424], 
	[34.8584, 152.35498], [34.90283, 152.39844], [34.90723, 152.5293], [34.94751, 152.53467], 
	[34.94873, 152.62354], [34.86133, 152.62427], [34.86157, 152.71338], [34.9043, 152.7168], 
	[34.90967, 152.8042], [34.94971, 152.80713], [35.03955, 152.90283]
	], {color: 'red'}).addTo(Central_Africa).bindPopup(countriesinfo[149]);

var Senegal = L.polygon([
	[46.54492, 122.46582], [46.4043, 122.64844], [45.86133, 122.64941], [45.80664, 122.73926], 
	[45.72168, 122.74023], [45.71973, 122.96582], [45.54004, 122.97168], [45.53516, 123.05957], 
	[45.4834, 123.10352], [45.0332, 123.10449], //mali
	[45.02979, 123.09717], [45.03125, 122.55762], [44.9873, 122.55273], [44.98828, 122.37402],
	[45.02734, 122.36816], [45.02637, 122.2334], [45.07324, 122.18457], [45.08008, 122.05371], 
	[45.12207, 122.0459], [45.12695, 121.91602], [45.21289, 121.91211], //guinea
	[45.20996, 120.26855], [45.125, 120.21094], [45.08301, 120.12109], [45.07715, 119.62793], 
	[44.99121, 119.52539], [44.98047, 119.35059], //guinea bissau
	[44.97656, 118.96875], [45.52344, 119.12695], //ocean 
	[45.53516, 119.26172], [45.58301, 119.30469], [45.58545, 119.94189], [45.71973, 119.9458], 
	[45.72266, 120.12598], [45.72266, 120.30811], [45.76855, 120.35547], [45.85791, 120.3584], 
	[45.85645, 120.49121], [45.81689, 120.49707], [45.81152, 120.63086], [45.7666, 120.63477], 
	[45.72363, 120.72461], [45.7207, 120.85547], [45.63574, 120.95117], [45.63086, 121.13379], 
	[45.71875, 121.22754], [45.72266, 121.36133], [45.85938, 121.36035], [45.89844, 121.31348], 
	[45.89746, 121.17969], [45.86328, 121.17969], [45.85547, 121.04297], [45.81445, 121.04102], 
	[45.8125, 120.90747], [45.90308, 120.90796], [45.94531, 120.85352], [45.95166, 120.67871], 
	[46.03662, 120.62842], [46.0415, 120.54199], [46.08447, 120.53809], [46.0874, 120.40576], 
	[46.04297, 120.3999], [46.03809, 120.22119], [45.99268, 120.1748], [45.9043, 120.17139], 
	[45.90283, 119.39502], //gambia
	[45.98828, 119.05078], [46.73828, 118.55469], [47.26172, 119.02344], [47.8125, 119.26758], //coast
	[47.82715, 119.39697], [47.87793, 119.52881], [48.01172, 119.53613], [48.1001, 119.62305], 
	[48.10352, 120.35059], [48.19434, 120.4502], [48.19336, 120.99902], [47.91797, 121.27051], 
	[47.83008, 121.27832], [47.83008, 121.45605], [47.78516, 121.45898], [47.78027, 121.6377], 
	[47.7334, 121.68164], [47.65039, 121.68652], [47.64258, 121.73242], [47.46484, 121.73535], 
	[47.32422, 121.87402], [47.32227, 121.95703], [47.27637, 122.00586], [47.10156, 122.01074], 
	[47.0918, 122.09473], [47.00879, 122.14844], [46.99805, 122.27832], [46.95898, 122.32031], 
	[46.86621, 122.32715], [46.77832, 122.42188], [46.77148, 122.46228] //mauritania
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[157]);

var Sierra_Leone = L.polygon([ 
	[42.14355, 123.7959], [42.06152, 123.79102], [42.01172, 123.74609], [42.00879, 123.57031], 
	[42.23535, 123.6582], [42.50586, 123.65527], [42.55566, 123.56641], [42.65332, 123.56152], 
	[42.6543, 123.61035], [42.73535, 123.61035], [42.83594, 123.47266], [42.91797, 123.47168], 
	[42.96973, 123.38477], [43.05664, 123.37793], [43.15332, 123.25], [43.24219, 123.24121], 
	[43.24414, 122.74219], [43.15234, 122.64648], [43.15039, 122.28711], [43.01367, 122.28027], 
	[42.74316, 122.1377], [42.73926, 122.00879], [42.60254, 122.00195], [42.5625, 121.91113], 
	[42.55859, 121.73828], // guinea north
	[42.42578, 121.08594], [40.5, 122.44531], //coast
	[40.99707, 123.01953], [41.04834, 123.10498], [41.18213, 123.10742], [41.23145, 123.15332], 
	[41.23291, 123.24463], [41.4126, 123.38232], [41.41602, 123.46924], [41.50586, 123.56201], 
	[41.59473, 123.56738], [41.59766, 123.65674], [41.82324, 123.66113], [41.87012, 123.70264], 
	[41.87402, 123.83887], [41.92041, 123.88623], //liberia
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[160]);

var Sri_Lanka = L.polygon([[43.07813, 188.66797], [42.71094, 189.19531], [41.91797, 189.58203], [41.22266, 189.89453], 
	[40.69531, 189.91406], [40.26563, 189.66016], [39.96875, 188.99219], [39.97656, 188.55078], 
	[40.55078, 188.21094], [41.91016, 188.17969], [42.35547, 188.32813], [43.00391, 188.35547]
	], {color: '#922B21'}).addTo(Islands).bindPopup(countriesinfo[172]);

var Somalia = L.polygon([ 
	[38.79932, 161.23975], [38.89063, 161.24268], [38.98047, 161.33447], [39.03125, 161.83594], 
	[39.07227, 161.9248], [39.12207, 161.97363], [39.20996, 161.97461], [39.34375, 162.11621], 
	[39.39551, 162.29297], [39.43945, 162.29785], [39.53125, 162.70508], [39.5752, 162.70703], 
	[39.57617, 162.84082], [39.53613, 162.8457], [39.53027, 163.29883], [39.48926, 163.30469], 
	[39.4873, 163.3916], [39.58105, 163.48535], [39.66602, 163.48633], [40.63477, 164.49316], 
	[40.72168, 164.49512], [41.5957, 165.40332], //ethiopia north
	[41.77148, 165.58594], [41.86621, 165.64258], [41.87012, 165.72852], [42.00586, 165.7334], 
	[42.23633, 165.95996], [42.24121, 166.0498], [42.41895, 166.19141], [42.42041, 166.28076], 
	[42.92529, 166.28076], [42.92578, 166.23682], [44.06787, 166.23682], [44.07129, 166.2793], 
	[44.16113, 166.27832], [44.5, 166.2793], //somaliland
	[44.86719, 167.45313], [44.78125, 168.24219], [40.95313, 167.77344], [37.39844, 164.5625], 
	[34.54688, 161.17969], //coast 
	[34.71582, 160.9668], [34.80859, 160.96143], [34.90576, 160.83105], [34.99365, 160.82471], 
	[35.08691, 160.68848], [35.17725, 160.68848], [35.22559, 160.59814], [35.58691, 160.5957], 
	[35.59082, 160.55176], [38.01563, 160.5498], [38.06055, 160.60254], [38.06934, 160.68359], 
	[38.1543, 160.69141], [38.15625, 160.77539], [38.20605, 160.8252], [38.29004, 160.83203], 
	[38.34082, 160.91309], [38.42773, 160.91895], [38.52344, 161.05273], [38.61426, 161.05957], 
	[38.66309, 161.14453], [38.79004, 161.19434] //Kenya north
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[166]);

var Somaliland = L.polygon([ 
	[41.78027, 164.82031], [41.96289, 164.27051], [42.00879, 164.1748], [42.05273, 163.99316],
	[42.10156, 163.90039], [42.23828, 163.49219], [42.28223, 163.39551], [42.32715, 163.21387], 
	[42.37695, 163.07715], [42.4209, 162.98438], [42.46777, 162.80176], [42.50977, 162.79785], 
	[42.51172, 162.7041], [42.78516, 162.47559], [42.78418, 162.3418], [42.83203, 162.29297],
	[42.9248, 162.29102], [43.0166, 162.15625], [43.15332, 162.15527], [43.15137, 162.06738],
	[43.20215, 162.01855], [43.33301, 162.01465], [43.38184, 161.9707], [43.38379, 161.88086],
	[43.56738, 161.88184], [43.61621, 161.79199], [43.79395, 161.78516], [43.84375, 161.87793],
	[43.97949, 161.87891], //ethiopia north west
	[43.98047, 161.97168], [44.02734, 162.01465], [44.20605, 162.06738], [44.25635, 162.15625], [44.34424, 162.15674], //djibouti
	[44.48828, 162.39063], [44.30469, 164.625], [44.49609, 166.0625], [44.5, 166.2793], //coast
	[44.16113, 166.27832], [44.07129, 166.2793], [44.06787, 166.23682], [42.92578, 166.23682], 
	[42.92529, 166.28076], [42.42041, 166.28076], [42.41895, 166.19141], [42.24121, 166.0498], 
	[42.23633, 165.95996], [42.00586, 165.7334], [41.87012, 165.72852], [41.86621, 165.64258], [41.77148, 165.58594] //puntland south
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[167]);

var South_Africa = L.polygon([ 
	[14.46582, 142.99512], [14.55273, 143.04785], [14.55273, 143.17969], [14.60449, 143.22559],
	[14.7373, 143.22559], [14.91797, 143.31738], [14.92383, 143.45703], [14.87402, 143.45898], 
	[14.78125, 143.50098], [14.77539, 143.58789], [14.73047, 143.63379], [14.41602, 143.64258], 
	[14.36914, 144.00293], [14.23535, 144.19043], [14.23145, 144.28223], [14.27637, 144.2832], 
	[14.27832, 144.78027], [14.19043, 144.83301], [14.18945, 144.9209], [14.23145, 144.9668], 
	[14.37012, 144.97168], [14.41699, 145.14941], [14.50586, 145.15234], [14.55469, 145.19922], 
	[14.55469, 145.375], [14.60059, 145.38086], [14.64551, 145.5166], [17.49023, 145.51758], //namibia northeast
	[17.35254, 145.6582], [17.34375, 145.74121], [17.24902, 145.83594], [16.98633, 145.93262], 
	[16.93066, 146.02051], [16.70703, 146.0293], [16.61133, 146.10938], [16.3457, 146.11133], 
	[16.25195, 146.06641], [16.20508, 145.97852], [15.88086, 145.97852], [15.88086, 146.79883], 
	[16.01367, 146.80078], [16.02148, 147.02734], [16.19922, 147.0752], [16.24512, 147.12402], 
	[16.25098, 147.20801], [16.33984, 147.26074], [16.34082, 147.34961], [16.43066, 147.35156], 
	[16.52637, 147.48828], [16.70508, 147.49023], [16.75488, 147.58008], [16.98242, 147.58008], 
	[17.07129, 147.6709], [17.06934, 147.99219], [17.02441, 148.07813], [16.89355, 148.18066], 
	[16.88672, 148.26758], [16.80078, 148.27148], [16.79883, 148.54199], [16.70996, 148.63965], 
	[16.66406, 148.77344], [16.66211, 149.04785], [16.74707, 149.09375], [16.75195, 149.18359], 
	[16.71094, 149.1875], [16.70898, 149.36523], [16.75586, 149.45313], [16.84277, 149.54688], 
	[16.94043, 149.59082], [17.30859, 149.72754], [17.48535, 149.73633], [17.52832, 149.78223], 
	[17.5332, 149.91699], [17.58008, 149.91992], [17.57715, 150.10645], [17.62695, 150.18945], 
	[17.71484, 150.19629], [17.84766, 150.33008], [17.85352, 150.41992], [17.99219, 150.46094], 
	[18.21777, 150.46973], [18.31152, 150.51465], [18.53711, 150.74316], [18.54297, 150.9248], 
	[18.62695, 150.92969], [18.67773, 150.97266], [18.72363, 151.14941], [18.77148, 151.20215], 
	[18.85742, 151.19824], [19.00098, 151.38184], [19.13721, 151.42871], [19.13867, 151.65918], 
	[19.22949, 151.93262], [19.36621, 151.93945], [19.40723, 151.98047], [19.45801, 152.25391], 
	[19.50037, 152.25623], //botswana northeast
	[19.50098, 152.25879], [19.49805, 152.52246], [19.45117, 152.6543], [19.36133, 152.75977], 
	[19.36523, 153.53564], //zimbabwe east
	[18.86133, 153.76563], [18.49414, 153.77148], [18.44531, 153.85742], [18.17773, 153.9082],
	[18.07617, 154.04102], [17.85742, 154.04688], [17.67578, 154.13086], [17.66602, 154.0918],
	[17.48438, 154.08984], [17.47656, 154.13672], [17.0293, 154.13477], [17.02539, 154.0918],
	[16.52148, 154.0918], [16.46875, 154.17969], [15.88672, 154.17773], [15.88086, 154.72656], //mozambique south
	[15.82031, 154.92969], [14.4375, 154.57813], [13.32813, 153.82813], [12.01563, 152.90625], 
	[10.67188, 151.59375], [9.78125, 150], [9.46875, 148.51563], [9.14063, 145.90625], 
	[9.3125, 144.67188], [9.79688, 143.95313], [11.03125, 143.1875], [14.28125, 142.3125]
	], {color: 'blue'}).addTo(South_Africa_Layer).bindPopup(countriesinfo[168]);

var South_Sudan = L.polygon([
	[39.66895, 150.88257], [39.71558, 150.83496], [39.71777, 150.74463], [40.0332, 150.74219],
	[40.03857, 150.70129], [40.12891, 150.69482], [40.12939, 150.61035], [40.21729, 150.55859],
	[40.22168, 150.42578], [40.31348, 150.42188], [40.3125, 150.19678], [40.49219, 150.19434],
	[40.53711, 150.14355], [40.54346, 150.05957], [40.67773, 150.05762], [40.68018, 150.10156],
	[40.81445, 150.1001], [40.81934, 150.01221], [40.85889, 150.00879], [40.86523, 149.91943],
	[41.04492, 149.87305], [41.04688, 149.78418], [41.13428, 149.73438], [41.27783, 149.37207],
	[41.36426, 149.36816], [41.41553, 149.27979], [41.68506, 149.27588], [41.68848, 149.14209],
	[41.73682, 149.09473], [41.82324, 149.09277], [41.91602, 149.00146], [41.96484, 148.54883],
	[42.28223, 148.54492], [42.28613, 148.4082], [42.32617, 148.40723], [42.33008, 148.22559],
	[42.33105, 148.08496], [42.46484, 148.08496], [42.51563, 147.99365], [42.60449, 147.99609],
	[42.64844, 148.04395], [42.65283, 148.12891], [42.69922, 148.1792], //CAR, northward

	[42.83643, 148.31445], [42.88379, 148.40137], [42.92822, 148.44971], [43.01953, 148.45508],
	[43.01953, 148.63428], [43.10889, 148.68066], [43.10938, 149.00244], [43.24854, 149.13867],
	[43.42822, 149.13965], [43.47559, 149.18799], [43.47754, 149.3667], [43.521, 149.37061],
	[43.52344, 149.59473], [43.56641, 149.59766], [43.56543, 149.87061], [43.51807, 149.92041],
	[43.38721, 149.92236], [43.33154, 150.05371], [43.20215, 150.15234], [43.10986, 150.15088],
	[43.01953, 150.24414], [43.01855, 150.37598], [43.06152, 150.37744], [43.0625, 150.91992],
	[43.10938, 150.92969], [43.1084, 151.15381], [43.06348, 151.15967], [43.0625, 151.33789],
	[42.88232, 151.47998], [42.87939, 151.70557], [42.97314, 151.91016], [43.03906, 151.91357],
	[43.04248, 152.14014], [43.06934, 152.27588], [43.11328, 152.34326], [43.29346, 152.3501],
	[43.38525, 152.43945], [43.3877, 152.53125], [43.43066, 152.53271], [43.42725, 152.66699],
	[43.33887, 152.72168], [43.33496, 152.87402], [43.27246, 152.88086], [43.26563, 153.05566],
	[43.17871, 153.13281], [43.17871, 153.58398], [43.15234, 153.58887], [43.1582, 153.67188],
	[43.19824, 153.68066], [43.43359, 153.94824], [43.5166, 153.95215], [43.57129, 154.03906],
	[43.70508, 154.04688], [43.79492, 154.08984], [43.7998, 154.17676], [43.88867, 154.23047],
	[43.88965, 154.31641], [43.97754, 154.32031], [43.98242, 154.4043], [44.52246, 154.40723],
	[44.53125, 154.31934], [44.61621, 154.31934], [44.66309, 154.26758], [44.66992, 154.18359],
	[44.71533, 154.18555], [44.71484, 154.61426], [44.84863, 154.61914], [44.84717, 154.95996],
	[44.48535, 154.95801], [44.48145, 154.91699], [44.02637, 154.91602], [44.02246, 154.95996],
	[43.79883, 154.96582], [43.75586, 155.01172], [43.74609, 155.22949], [43.61035, 155.50879],
	[43.56641, 155.5166], [43.57324, 155.69336], [43.61133, 155.69141], [43.61182, 155.78369], //border w sudan, eastward
	[43.29395, 155.78418], [43.24219, 155.69824], [43.06348, 155.69336], [43.05957, 155.64941], 
	[42.19238, 155.64697], [42.10254, 155.55469], [42.09766, 155.46484], [42.05664, 155.46387], 
	[42.05176, 155.32715], [42.09863, 155.32715], [42.09375, 155.00977], [42.05371, 154.96387], 
	[41.82813, 154.95605], [41.73633, 154.86914], [41.5957, 154.86914], [41.59473, 155.18945], 
	[41.50684, 155.2832], [41.50391, 155.41895], [41.36621, 155.55664], [41.18652, 155.60547], 
	[41.17676, 155.69336], [41.04688, 155.69531], [41, 155.74121], [40.99609, 155.875], 
	[40.95313, 155.92188], [40.86328, 155.9248], [40.81836, 155.97168], [40.81055, 156.05859], 
	[40.76758, 156.10352], [40.67969, 156.11035], [40.40479, 156.19873], [40.2207, 156.24609], 
	[40.03711, 156.33594], [39.94238, 156.47168], [39.85449, 156.47363], [39.85156, 156.79297], 
	[39.80469, 156.83936], [39.39648, 156.84082], [39.30566, 156.93213], //ethiopia southbound 
	[39.30566, 155.83301], [38.98438, 155.55566], //Kenya westbound 
	[38.66309, 155.23438], [38.6582, 154.96191], [38.75537, 154.91455], [38.75146, 154.82324],
	[38.70898, 154.68701], [38.66504, 154.68555], [38.66211, 154.36523], [38.56445, 154.27539], 
	[38.56543, 154.0918], [38.65332, 154.08594], [38.7041, 154.03906], [38.70508, 153.95508], 
	[38.61719, 153.9043], [38.61621, 153.72559], [38.66113, 153.72266], [38.66309, 153.63574], 
	[38.7041, 153.62891], [38.70508, 153.49609], [38.61816, 153.44629], [38.61621, 153.35742], //Uganda westbound
	[38.61133, 153.21875], [38.56836, 153.21582], [38.57227, 153.12842], [38.70361, 153.12646], 
	[38.75244, 153.08203], [38.75488, 152.94482], [38.79785, 152.94385], [38.80127, 152.85303], 
	[38.84521, 152.80762], [38.93799, 152.80615], [38.9375, 152.71436], [38.98438, 152.66943],
	[39.07373, 152.66895], [39.07471, 152.57959], [39.25732, 152.57568], [39.30371, 152.39941],
	[39.34912, 152.39453], [39.35107, 152.30371], [39.2124, 152.30078], [39.12012, 152.21094],
	[39.12061, 152.0752], [39.16602, 152.07324], [39.1665, 151.84375], [39.25781, 151.84326],
	[39.2583, 151.79932], [39.12207, 151.70459], [39.11914, 151.61621], [39.07471, 151.61475],
	[39.07617, 151.38672], [39.21094, 151.29297], [39.25635, 151.11182], [39.44043, 151.11035],
	[39.5332, 151.01904], [39.5332, 150.88281] //DRC
	], {color: 'blue'}).addTo(Central_Africa).bindPopup(countriesinfo[170]);

var Sudan = L.polygon([ 
	[52.27521, 157.61859], [52.27428, 149.13965], [50.71857, 149.14008], [50.71548, 148.41046], 
	[50.34766, 148.40674], //north border 
	[47.51221, 148.40527], [47.51123, 148.27148], [47.55469, 148.26953], [47.5542, 148.0874], 
	[47.51025, 148.08545], [47.50879, 147.99609], [47.46289, 147.99316], [47.46191, 147.90576], 
	[47.50732, 147.90137], [47.50928, 147.72266], [47.4165, 147.62793], [47.32422, 147.62598], //chad, downward
	[47.27783, 147.6709], [47.09766, 147.67285], [46.95654, 147.49219], [46.86816, 147.48975], 
	[46.86426, 147.44629], [46.77588, 147.44531], [46.73145, 147.48828], [46.72754, 147.3999], 
	[46.68457, 147.39844], [46.68262, 147.26221], [46.54785, 147.26367], [46.40967, 147.30908], 
	[46.22461, 147.30615], [46.22412, 147.17139], [46.0918, 147.07715], [45.95068, 147.08105], 
	[45.81494, 147.12451], [45.81006, 147.17041], [45.67822, 147.16846], [45.58496, 147.07568], 
	[45.58252, 146.98682], [45.48926, 146.89551], [45.35596, 146.89355], [45.35254, 146.85107], 
	[45.26416, 146.8501], [45.22021, 146.89648], [45.21826, 147.07666], [45.26172, 147.07666], 
	[45.26221, 147.21338], [45.21631, 147.2168], [45.21631, 147.30518], [45.12793, 147.30615], 
	[45.12305, 147.26465], [44.98877, 147.2627], [44.98486, 147.30664], [44.85205, 147.30957], 
	[44.80273, 147.39844], [44.53027, 147.39648], [44.52832, 147.35352], [44.43994, 147.35449], 
	[44.30176, 147.49316], [44.29834, 147.62646], [44.25488, 147.62939], //edge of darfur region, downward border with CAR
	[44.25146, 147.67432], [44.07324, 147.67285], [44.0708, 147.62842], [43.98047, 147.625], 
	[43.97754, 147.58447], [43.89111, 147.58398], [43.83691, 147.67188], [43.75098, 147.67773],
	[43.74707, 147.76074], [43.56543, 147.94531], [43.29492, 148.0459], [43.24219, 148.12988],
	[43.1543, 148.17676], [42.83496, 148.17871], //border with car, downward
	[42.83643, 148.31445], [42.88379, 148.40137], [42.92822, 148.44971], [43.01953, 148.45508],
	[43.01953, 148.63428], [43.10889, 148.68066], [43.10938, 149.00244], [43.24854, 149.13867],
	[43.42822, 149.13965], [43.47559, 149.18799], [43.47754, 149.3667], [43.521, 149.37061],
	[43.52344, 149.59473], [43.56641, 149.59766], [43.56543, 149.87061], [43.51807, 149.92041],
	[43.38721, 149.92236], [43.33154, 150.05371], [43.20215, 150.15234], [43.10986, 150.15088],
	[43.01953, 150.24414], [43.01855, 150.37598], [43.06152, 150.37744], [43.0625, 150.91992],
	[43.10938, 150.92969], [43.1084, 151.15381], [43.06348, 151.15967], [43.0625, 151.33789],
	[42.88232, 151.47998], [42.87939, 151.70557], [42.97314, 151.91016], [43.03906, 151.91357],
	[43.04248, 152.14014], [43.06934, 152.27588], [43.11328, 152.34326], [43.29346, 152.3501],
	[43.38525, 152.43945], [43.3877, 152.53125], [43.43066, 152.53271], [43.42725, 152.66699],
	[43.33887, 152.72168], [43.33496, 152.87402], [43.27246, 152.88086], [43.26563, 153.05566],
	[43.17871, 153.13281], [43.17871, 153.58398], [43.15234, 153.58887], [43.1582, 153.67188],
	[43.19824, 153.68066], [43.43359, 153.94824], [43.5166, 153.95215], [43.57129, 154.03906],
	[43.70508, 154.04688], [43.79492, 154.08984], [43.7998, 154.17676], [43.88867, 154.23047],
	[43.88965, 154.31641], [43.97754, 154.32031], [43.98242, 154.4043], [44.52246, 154.40723],
	[44.53125, 154.31934], [44.61621, 154.31934], [44.66309, 154.26758], [44.66992, 154.18359],
	[44.71533, 154.18555], [44.71484, 154.61426], [44.84863, 154.61914], [44.84717, 154.95996],
	[44.48535, 154.95801], [44.48145, 154.91699], [44.02637, 154.91602], [44.02246, 154.95996],
	[43.79883, 154.96582], [43.75586, 155.01172], [43.74609, 155.22949], [43.61035, 155.50879],
	[43.56641, 155.5166], [43.57324, 155.69336], [43.61133, 155.69141], [43.61182, 155.78369], //border w s. sudan, eastward
	[43.70117, 155.78906], [43.79492, 155.83301], [43.88379, 155.92676], [43.88379, 156.01367],
	[43.79688, 156.10938], [43.80273, 156.19629], [43.88574, 156.24512], [44.02344, 156.24609],
	[44.02759, 156.28955], [44.29932, 156.29053], [44.30225, 156.33301], [44.57568, 156.33643],
	[44.7168, 156.51807], [44.89648, 156.56689], [44.94238, 156.65332], [45.07422, 156.66016],
	[45.21484, 156.7959], [45.21582, 156.92969], [45.25586, 156.92969], [45.25977, 157.1123],
	[45.57813, 157.11816], [45.71875, 157.16211], [45.90039, 157.25781], [46.04492, 157.34375],
	[46.36523, 157.34766], [46.36328, 157.38965], [46.4541, 157.39258], //border w ethiopia
	[46.50293, 157.34546], [46.95557, 157.34082], [46.95996, 157.30078], [47.09448, 157.30005],
	[47.1438, 157.38916], [47.2771, 157.39233], [47.54785, 157.48633], [47.60327, 157.57202],
	[47.73828, 157.57544], [47.74048, 157.61914], [47.87598, 157.6626], [48.10303, 157.66211],
	[48.10535, 157.62109], [48.19714, 157.61938], [48.24414, 157.70996], [48.51367, 157.71045],
	[48.51416, 157.80127], [48.47021, 157.80371], [48.4707, 157.93945], [48.51563, 157.94141],
	[48.5166, 158.03027], [48.56543, 158.07666], [48.74609, 158.07861], [48.74756, 158.25879],
	[48.79297, 158.26123], [48.79443, 158.34863], [48.83643, 158.35205], [48.88281, 158.39893],
	[48.88184, 158.58301], [48.97656, 158.71875], [49.10742, 158.71973], [49.19922, 158.85449], //northbound eritrea
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[173]);

var Taiwan = L.polygon([[55.04688, 218.1875], [54.33594, 217.32031], [53.60938, 216.95313], [52.91406, 217], 
	[52.41406, 217.26563], [52.10156, 217.50781], [52.10547, 217.82227], [52.63672, 217.99609], 
	[53.21484, 218.33008], [54.13281, 218.50391], [54.81641, 218.65625]
	], {color: 'blue'}).addTo(Islands).bindPopup(countriesinfo[179]);

var Tanzania = L.polygon([
	[35.13257, 153.08179], [35.13452, 153.1272], [35.17871, 153.125], [35.17969, 153.53955], 
	[35.22559, 153.54053], [35.22803, 153.99854], //uganda east
	[35.17822, 155.60205], [35.17578, 155.64746], [35.13086, 155.73633], [35.04395, 155.79199],
	[34.99023, 155.96582], [34.91016, 156.02246], [34.80957, 156.28516], [34.72363, 156.34668], 
	[34.62402, 156.60449], [34.54004, 156.66211], [34.44434, 156.93066], [34.35547, 156.97949], 
	[34.30957, 157.15527], [34.21582, 157.20898], [34.21387, 157.34277], [34.12598, 157.39551], 
	[34.03125, 157.66211], [33.94434, 157.71777], [33.75586, 158.16699], [33.66699, 158.17383], 
	[33.66016, 158.21289], [33.48438, 158.21191], [33.43652, 158.1709], [33.34961, 158.1709], 
	[33.20996, 158.30859], [33.2041, 158.39355], [33.07129, 158.49316], [33.06934, 158.57813], 
	[32.93652, 158.67773], [32.93066, 158.76074], [32.79492, 158.86133], [32.79199, 158.94336], 
	[32.65918, 159.04199], [32.61621, 159.13281], [32.57324, 159.18262], [32.56836, 159.27246], //kenya southeast
	[32.47266, 159.57031], [32.44531, 159.88672], [29.57813, 159.78906], [28.3125, 160.20508], //coast
	[28.25732, 160.14209], [28.16895, 160.09082], [28.16602, 160.00391], [28.0752, 159.95508], 
	[28.07471, 159.86279], [27.9834, 159.81738], [27.93652, 159.63867], [27.88867, 159.50293], 
	[27.80176, 159.44727], [27.7959, 159.35938], [27.75391, 159.36133], [27.75195, 158.99805], 
	[27.66211, 158.94336], [27.61328, 158.76758], [27.6123, 158.58301], [27.65527, 158.58203], 
	[27.65723, 158.30859], [27.52148, 158.30371], [27.3877, 158.16406], [27.37988, 158.03418], 
	[27.33887, 158.0293], [27.33789, 157.84863], [27.4209, 157.75098], [27.42871, 157.52832], 
	[27.37891, 157.44238], [27.39063, 157.11426], [27.46875, 157.0625], [27.47656, 156.97754], 
	[27.56836, 156.92871], [27.56738, 156.84082], [27.52637, 156.83691], [27.52246, 156.75293], 
	[27.47949, 156.74902], [27.47656, 156.24512], //mozambique westbound
	[27.53125, 155.95117], [27.875, 155.86914], [28.43945, 155.85156], [28.83008, 155.61133], //lake
	[28.85059, 155.50928], [28.90283, 155.42334], [28.90137, 155.15039], [28.98828, 155.09375], 
	[28.99219, 154.91992], [29.08203, 154.86523], [29.08154, 154.77783], //malawi westbound
	[29.08398, 154.73193], [29.12549, 154.72998], [29.12988, 154.5957], [29.17383, 154.50977],
	[29.26074, 154.45605], [29.26465, 154.27637], [29.31152, 154.08887], [29.39844, 154.08594], 
	[29.40332, 153.86133], [29.44824, 153.81543], [29.58398, 153.81055], [29.62891, 153.76563], 
	[29.63281, 153.67871], [29.67383, 153.67773], [29.67773, 153.54102], //zambia
	[30.06445, 153.20117], [30.31836, 153.01758], [30.76563, 152.91211], [31.13086, 152.46289],
	[31.31836, 152.38477], [31.61719, 152.41992], [31.8125, 152.44531], [32.0332, 152.38672], 
	[32.41406, 152.26953], [32.65625, 152.29883], //lake north
	[32.65723, 152.48486], [32.65967, 152.5249], [32.74658, 152.57813], [32.75293, 152.66797],
	[32.93457, 152.80664], [33.11426, 152.90137], [33.16553, 152.98584], [33.34326, 153.0376], 
	[33.39063, 153.08057], [33.39355, 153.17334], [33.52881, 153.17236], [33.52979, 153.31006], 
	[33.76074, 153.30615], [33.76074, 153.17871], [33.80225, 153.16943], [33.80518, 153.03711], 
	[34.0332, 153.03516], [34.03418, 153.08008], [34.21436, 153.08447], //burundi north 
	[34.21753, 153.30884], [34.67078, 153.31018], [34.68066, 153.26697], [34.85614, 153.26135], 
	[34.90759, 153.13135], [34.95288, 153.08752], [35.13123, 153.08191], //rwanda north
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[181]);

var Togo = L.polygon([
	[43.8457, 131.86328], [43.83887, 131.81445], [43.52344, 131.81445], [43.3877, 131.95703],
	[43.33398, 132.13184], [43.28613, 132.17773], [42.87988, 132.18262], [42.87598, 132.22363], 
	[42.74219, 132.23242], [42.64648, 132.36133], [42.55273, 132.40527], [40.72754, 132.41113], 
	[40.54004, 132.54199], [40.49707, 132.54785], //benin south
	[40.29102, 132.43164], [40.26758, 132.0918], //ocean
	[40.35596, 132.04639], [40.44824, 132.04297], [40.53809, 131.95166], [40.54248, 131.86133], 
	[40.67969, 131.7251], [40.8125, 131.72461], [40.86279, 131.63428], [41.04639, 131.63184], 
	[41.04639, 131.67676], [41.22852, 131.67725], [41.23096, 131.72314], [41.3208, 131.72412], 
	[41.32275, 131.6333], [41.54834, 131.63379], [41.55225, 131.67773], [41.95996, 131.67773], 
	[41.96387, 131.72168], [42.09766, 131.72363], [42.18994, 131.62939], [42.19434, 131.54297], 
	[42.37109, 131.53906], [42.37402, 131.58398], [42.875, 131.58496], [42.87891, 131.49316], 
	[43.47168, 131.49414], [43.56543, 131.44531], [43.56641, 131.36035], [43.70117, 131.26465], 
	[43.70605, 131.17773], [43.83887, 131.17578], [43.84277, 131.21582], [43.97656, 131.22168], 
	[43.98145, 131.26367], [44.06738, 131.26758], //ghana north  
	[44.07031, 131.35449], [44.02637, 131.35889], [44.02539, 131.53857], [43.97949, 131.54102], [43.97656, 131.86133] //Burkina faso east
	], {color: 'blue'}).addTo(West_Africa).bindPopup(countriesinfo[184]);

var Tunisia = L.polygon([[64.23535, 137.40918], [64.10059, 137.40332], [63.91797, 137.21875], [63.91455, 137.13721], 
	[63.86768, 137.08789], [63.82471, 137.08447], [63.82324, 137.21875], [63.6875, 137.22021], 
	[63.68359, 137.17773], [63.41455, 137.17578], [63.40723, 137.13672], [63.22754, 137.13379], 
	[63.17773, 137.2168], [62.68164, 137.22363], [62.67773, 137.17773], [62.49805, 137.1748], 
	[62.49121, 137.13477], [62.2666, 137.12988], [62.17969, 137.03809], [62.17285, 136.95166], 
	[62.08789, 136.94727], [61.76563, 136.62305], [61.75928, 136.58105], [61.62695, 136.58398], 
	[61.62109, 136.62573], [61.4895, 136.63037], [61.30762, 136.72266], [61.29736, 136.76221], 
	[61.125, 136.76855], [61.07813, 136.81494], [61.07324, 136.94678], [61.03076, 136.95166], 
	[61.02734, 137.03662], [60.93945, 137.0415], [60.84375, 137.17236], [60.61816, 137.18066], 
	[60.61621, 137.22363], [60.52686, 137.22559], [60.4834, 137.27148], [60.47363, 137.35938], 
	[60.43359, 137.35645], [60.38672, 137.41113], [60.34375, 137.49805], [60.29883, 137.54785], 
	[60.29102, 137.63379], [60.20313, 137.72461], [60.02148, 137.73242], [58.69922, 138.05078], ///border w/ algeria, southbound
	[58.78271, 138.1875], [58.78906, 138.31982], [58.83301, 138.36816], [58.92139, 138.36816], 
	[59.01855, 138.50293], [59.19922, 138.59131], [59.37695, 138.59326], [59.38086, 138.55127], 
	[59.51367, 138.54883], [59.604, 138.50439], [59.79053, 138.50635], [59.88574, 138.60059], 
	[59.88428, 138.73193], [60.16309, 139.00537], [60.25049, 139.01074], [60.25195, 139.10059], 
	[60.44043, 139.46094], [61.11328, 139.46582], //border with Libya, northbound
	[62.125, 139.34375], [63.29688, 139.4375], [64.3125, 139.27344], [64.78906, 138.63281], 
	[64.50781, 137.42188]], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[187]);

var Uganda = L.polygon([
	[38.61621, 153.35742], [38.61816, 153.44629], [38.70508, 153.49609], [38.7041, 153.62891], 
	[38.66309, 153.63574], [38.66113, 153.72266], [38.61621, 153.72559], [38.61719, 153.9043], 
	[38.70508, 153.95508], [38.7041, 154.03906], [38.65332, 154.08594], [38.56543, 154.0918], 
	[38.56445, 154.27539], [38.66211, 154.36523], [38.66504, 154.68555], [38.70898, 154.68701],
	[38.75146, 154.82324], [38.75537, 154.91455], [38.6582, 154.96191], [38.66309, 155.23438], //south sudan east
	[38.93457, 155.64551], [38.75586, 155.65332], [38.66211, 155.74414], [38.66016, 155.82813], 
	[38.61328, 155.87598], [38.29883, 155.87891], [38.20313, 155.9248], [38.19922, 155.96289], 
	[38.06836, 155.96875], [38.02051, 156.01563], [38.01563, 156.10645], [37.83887, 156.10938], 
	[37.78809, 156.19434], [37.60742, 156.20117], [37.46973, 156.24707], [37.46777, 156.28906], 
	[37.14746, 156.28906], [36.96484, 156.19727], [36.91602, 156.14746], [36.83008, 156.15039], 
	[36.82617, 156.01758], [36.73535, 155.92578], [36.55762, 155.87402], [36.50293, 155.78809], 
	[36.41602, 155.7832], [36.41309, 155.69434], [36.28223, 155.69043], [36.27734, 155.64844], 
	[36.18652, 155.64355], [36.05566, 155.50781], //kenya south 
	[35.55469, 154.80078], [35.22461, 154.08008], //lake 
	[35.22803, 153.99854], [35.22559, 153.54053], [35.17969, 153.53955], [35.17871, 153.125],
	[35.13452, 153.1272], [35.13257, 153.08179], //tanzania west
	[35.17656, 153.03348], [35.1778, 152.94815], [35.03957, 152.90279], [34.94958, 152.80682],
	[34.90973, 152.80408], [34.90433, 152.71661], [34.86169, 152.71313], [34.86139, 152.62431], 
	[34.94876, 152.62354], [34.94754, 152.53458], [34.90726, 152.52927], [34.90479, 152.4397], //rwanda
	[35.03809, 152.43701], [35.04321, 152.39551], [35.04321, 152.39551], [35.27197, 152.43945], 
	[35.45361, 152.43896], [35.45361, 152.48389], [35.71777, 152.48633], [35.86572, 152.53174], 
	[36.0498, 152.53369], [36.23486, 152.66455], [36.55371, 152.66797], [36.60107, 152.71387], 
	[36.60156, 152.85205], [36.73828, 152.85303], [36.8291, 152.94775], [36.83154, 153.0332], 
	[36.87305, 153.03564], [37.21191, 153.43555], [37.3877, 153.63574], [37.51709, 153.63184], 
	[37.65527, 153.49365], [37.6543, 153.27051], [37.9248, 153.26465], [37.97461, 153.35156], 
	[38.06445, 153.35547], [38.11523, 153.26563], [38.20898, 153.26172], [38.25391, 153.30859], 
	[38.34375, 153.35645], [38.47656, 153.35449], [38.59766, 153.35547] //DRC northbound 
	], {color: 'blue'}).addTo(East_Africa).bindPopup(countriesinfo[191]);

var United_Kingdom = L.polygon([[75.73828, 127.22266], [75.66016, 127.59766], [76.36328, 131.46484], [76.83984, 132.31641], 
	[77.43359, 132.19141], [78.1582, 132.54102], [78.52148, 132.16602], [78.52148, 131.68164], [78.70898, 131.52148], 
	[79.16992, 131.3457], [79.64258, 131.20508], [80.06836, 130.64648], [80.16602, 130.38867], [81.00977, 130.13086], 
	[81.20898, 129.88477], [81.33789, 129.7832], [81.54492, 129.40039], [82.00586, 129.34961], [82.60742, 129.76758], 
	[82.99805, 130.00977], [83.24023, 129.91602], [83.36523, 128.38867], [84.03711, 129.08008], [84.25586, 129.10742], 
	[84.54492, 129.31445], [84.80664, 129.03711], [84.80273, 128.81445], [84.25977, 128.68164], [84.24805, 127.63086], 
	[83.90039, 127.41211], [83.48633, 127.11133], [84.19727, 126.83008], [83.86523, 126.11914], [83.25586, 125.77148], 
	[82.45703, 125.79297], [81.33203, 126.59766], [80.71484, 126.29297], [79.95703, 125.43359], [79.71484, 125.60547], 
	[79.62891, 126.05859], [79.90527, 126.13379], [79.91309, 126.27051], [79.55176, 126.50684], [79.5459, 126.58887], 
	[79.62988, 126.64941], [79.6377, 126.77246], [79.53613, 126.91895], [79.7627, 127.06152], [80.03516, 127.53516], 
	[78.88672, 127.91797], [77.55078, 127.39453] ]).addTo(Europe).bindPopup(countriesinfo[194]);


var West_Sahara = L.polygon([[56.62891, 121.77881], [56.63025, 125.03308], [56.66016, 121.33984], [55.59375, 120.34375], 
	[53.28125, 119.14063], [51.98438, 118.85938], [51.73438, 118.9043], [51.72266, 119.0752], 
	[51.72803, 121.95703], [52.08789, 121.95508], [52.08838, 121.91602], [52.63965, 121.91309], 
	[52.64355, 121.87305], [52.95801, 121.875], [53.09473, 122.00781], [53.09863, 122.09766], 
	[53.2334, 122.19238], [53.28418, 122.45703], [53.37207, 122.56348], [53.37891, 122.64648],
	[55.33398, 122.6543], [55.34375, 125.0332], [56.62988, 125.03293]
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[200]);

var Zambia = L.polygon([ 
	[29.08398, 154.73193], [29.12549, 154.72998], [29.12988, 154.5957], [29.17383, 154.50977],
	[29.26074, 154.45605], [29.26465, 154.27637], [29.31152, 154.08887], [29.39844, 154.08594], 
	[29.40332, 153.86133], [29.44824, 153.81543], [29.58398, 153.81055], [29.62891, 153.76563], 
	[29.63281, 153.67871], [29.67383, 153.67773], [29.67773, 153.54102], //tanzania west
	[29.90723, 153.08398], [29.90039, 152.90234], [29.85352, 152.67188], [29.81055, 152.30469], 
	[29.76758, 152.03516], [29.71875, 151.97852], [29.08398, 151.66211], [29.03516, 151.66309], 
	[28.94727, 151.66162], [28.84961, 151.70508], [28.03516, 151.70313], [27.93164, 151.61719], 
	[27.70703, 151.61133], [27.61133, 151.52344], [27.38867, 151.52539], [27.37891, 151.56836], 
	[27.25195, 151.57031], [27.20508, 151.61523], [27.19922, 151.70117], [27.06445, 151.79688], 
	[27.06055, 151.88672], [26.98047, 151.88867], [26.88477, 151.98242], [26.875, 152.1582], 
	[26.78906, 152.34277], [26.83594, 152.3457], [26.83984, 152.30566], [26.9707, 152.30469], 
	[27.01465, 152.35254], [27.01465, 152.52734], [26.06055, 152.52832], [26.05908, 152.43848], 
	[26.2417, 152.43994], [26.24316, 152.34961], [26.15234, 152.30078], [26.10693, 152.2085], 
	[26.10742, 151.93604], [26.2876, 151.93359], [26.33496, 151.84473], [26.42285, 151.83984], 
	[26.51611, 151.75049], [26.51807, 151.61719], [26.69434, 151.61035], [26.79004, 151.56543], 
	[26.83691, 151.47656], [26.83984, 151.29785], [26.92773, 151.24414], [26.92578, 150.97754], 
	[27.06348, 150.91992], [27.0625, 150.88086], [27.2041, 150.87793], [27.2041, 150.79004], 
	[27.29688, 150.70215], [27.43066, 150.69434], [27.43164, 150.5625], [27.33887, 150.51758], 
	[27.20508, 150.50977], [27.16211, 150.46777], [27.1543, 150.19141], [27.20117, 150.19141], 
	[27.20898, 149.78516], [27.29102, 149.73242], [27.3418, 149.46484], [27.3916, 149.37305], 
	[27.4873, 149.32324], [27.66211, 149.32422], [27.65918, 148.95703], [27.61523, 148.82617], 
	[27.52344, 148.82031], [27.52539, 148.73242], [27.56836, 148.68652], [27.79199, 148.67676],
	[27.8457, 148.63086], [27.84766, 148.5498], [27.94043, 148.45508], // Katanga west
	[26.74609, 148.4043], [26.65332, 148.31445], [26.38184, 148.30957], [26.37988, 146.94238], 
	[24.04297, 146.94336], [23.99121, 147.02734], [23.81348, 147.0332], [23.0332, 147.80957], 
	[22.98438, 147.99121], [22.94287, 147.99268], // Angola
	[22.93945, 148.125], [22.93945, 148.125], [23.0293, 149.00195], [22.98828, 149.00391], //namibia 
	[22.98535, 149.13477], [22.80566, 149.27637], [22.7959, 149.36523], [22.76172, 149.37207], 
	[22.75293, 149.68652], [22.66895, 149.74316], [22.66699, 149.91504], [22.70801, 149.91797], 
	[22.70703, 150.14453], [22.6709, 150.14941], [22.66504, 150.55664], [22.76074, 150.64844], 
	[22.84668, 150.65332], [23.16992, 151.01758], [23.35254, 151.06738], [23.49121, 151.20801], 
	[23.54004, 151.37988], [23.62891, 151.43457], [23.6748, 151.52441], [23.72363, 151.79199], 
	[23.76855, 151.84277], [24.13086, 151.84375], [24.17285, 151.89258], [24.17969, 151.97754], 
	[24.31445, 152.07617], [24.35742, 152.20801], [24.4082, 152.30762], [24.44434, 152.48633], 
	[24.45313, 152.85059], [24.41016, 152.85938], [24.40723, 152.93555], [24.45117, 152.94238], //zimbabwe east
	[24.68164, 152.93945], [24.72754, 152.85547], [24.91406, 152.85449], [25.04395, 153.13281], 
	[25.14063, 153.6709], [25.27441, 153.85938], [25.32324, 154.12988], [25.40918, 154.22168], 
	[25.41602, 154.44727], [25.50195, 154.55371], [25.55566, 154.81055], [25.60156, 154.9082], 
	[25.64453, 154.96094], //mozambique
	[25.69043, 154.95801], [25.68848, 154.83008], [25.78516, 154.73438], [25.87402, 154.69141],
	[25.97168, 154.67871], [26.0127, 154.72949], [26.19727, 154.8125], [26.65039, 154.82422], 
	[26.69727, 154.87305], [26.69922, 155.05078], [26.74414, 155.14258], [26.78906, 155.1875], 
	[26.92969, 155.18555], [26.92871, 155.05371], [27.43066, 155.04688], [27.43262, 155.00879], 
	[27.61133, 155.00977], [27.7041, 155.09961], [27.76074, 155.09668], [27.7998, 155.05273], 
	[27.88965, 155.0166], [27.9834, 155.00879], [28.02344, 155.10059], [28.02539, 155.23438], 
	[28.11719, 155.23438], [28.16016, 155.28125], [28.29688, 155.27539], [28.30371, 155.23828],
	[28.43457, 155.23145], [28.48438, 155.18555], [28.4873, 155.10547], [28.62402, 155.09277],
	[28.89258, 155.00488], [28.89746, 154.82617], [29.07129, 154.77148] //malawi
	], {color: 'blue'}).addTo(Central_Africa).bindPopup(countriesinfo[202]);

var Zimbabwe = L.polygon([
 	[22.98535, 149.13477], [22.80566, 149.27637], [22.7959, 149.36523], [22.76172, 149.37207], 
	[22.75293, 149.68652], [22.66895, 149.74316], [22.66699, 149.91504], [22.70801, 149.91797], 
	[22.70703, 150.14453], [22.6709, 150.14941], [22.66504, 150.55664], [22.76074, 150.64844], 
	[22.84668, 150.65332], [23.16992, 151.01758], [23.35254, 151.06738], [23.49121, 151.20801], 
	[23.54004, 151.37988], [23.62891, 151.43457], [23.6748, 151.52441], [23.72363, 151.79199], 
	[23.76855, 151.84277], [24.13086, 151.84375], [24.17285, 151.89258], [24.17969, 151.97754], 
	[24.31445, 152.07617], [24.35742, 152.20801], [24.4082, 152.30762], [24.44434, 152.48633], 
	[24.45313, 152.85059], [24.41016, 152.85938], [24.40723, 152.93555], [24.45117, 152.94238], //zambia east
	[24.45313, 152.98633], [24.18164, 152.99121], [24.1748, 153.53516], [24.04199, 153.68066],
	[23.99121, 153.94531], [23.81445, 154.0918], [23.80566, 154.40625], [23.7627, 154.54199],
	[23.63086, 154.64258], [23.62891, 154.77539], [23.2666, 154.7744], [23.25879, 154.81836],
	[22.81055, 154.82129], [22.79883, 154.77441], [22.61816, 154.7793], [22.61816, 154.81934],
	[22.3916, 154.82422], [22.3877, 154.8623], [22.30664, 154.8623], [22.25781, 154.82031],
	[22.25, 154.73047], [22.16699, 154.73145], [22.16016, 154.77539], [22.0752, 154.77344],
	[22.06934, 154.6416], [22.02246, 154.5957], [21.8877, 154.59766], [21.88184, 154.67676],
	[21.83984, 154.72656], [21.42969, 154.7334], [21.33301, 154.86523], [21.19922, 154.86816],
	[21.02148, 154.77441], [20.88184, 154.72656], [20.83301, 154.63867], [20.74609, 154.63574],
	[20.69727, 154.58887], [20.69336, 154.45508], [20.33203, 154.4541], [20.28223, 154.36914],
	[20.19336, 154.36426], [20.18848, 154.4082], [20.10449, 154.40625], [19.77832, 154.04297],
	[19.69043, 154.04102], [19.31934, 153.62891], [19.2666, 153.62793], //mozambique southwest
	[19.36523, 153.53564], [19.36133, 152.75977], [19.45117, 152.6543], [19.49805, 152.52246], 
	[19.50098, 152.25879], //south africa west
	[19.50391, 152.16797], [19.54883, 152.03125], [19.59961, 151.97656], [19.7793, 151.97461],
	[19.77734, 151.84961], [19.86914, 151.79492], [19.87305, 151.71289], [19.91309, 151.70996], 
	[19.91699, 151.30176], [19.95996, 151.24805], [20.04883, 151.24609], [20.09668, 151.15723], 
	[20.1875, 151.1543], [20.28369, 151.02002], [20.50977, 151.02051], [20.51172, 151.06006], 
	[20.74023, 151.06348], [20.78516, 151.01611], [20.7876, 150.74561], [21.01172, 150.74219], 
	[21.05957, 150.69727], [21.10254, 150.60156], [21.10938, 150.47168], [21.15332, 150.38086], 
	[21.24609, 150.3291], [21.24609, 150.24512], [21.33447, 150.18701], [21.3374, 150.10547], 
	[21.4248, 150.10059], [21.47705, 149.96924], [21.52441, 149.9209], [21.70117, 149.82813], 
	[21.92676, 149.82422], [22.01758, 149.77637], [22.02637, 149.69043], [22.1582, 149.68555], 
	[22.3418, 149.46387], [22.47852, 149.45801], [22.57422, 149.32324], [22.66992, 149.27832] //botswana northwest
	], {color: 'blue'}).addTo(South_Africa_Layer).bindPopup(countriesinfo[203]);




var Corsica = L.polygon([[69.46094, 138.08594], [68.8125, 138.17969], [68.625, 138.16016], [68.21875, 138.03125], 
	[67.94629, 137.80371], [67.98633, 137.65723], [68.125, 137.42188], [68.42969, 137.30859], 
	[68.75391, 137.2793], [68.95898, 137.30273], [69.20898, 137.58984], [69.40234, 137.88672]], {color: 'blue'}).addTo(Europe).bindPopup(countriesinfo[63]);

var Falklands = L.polygon([[5.14844, 88.20313], [4.41406, 87.47656], [4.25, 87.51563], [3.96094, 87.84375], 
	[3.84375, 88.77344], [3.9375, 89.02344], [4.50781, 90.03906], [4.75, 90], [4.92969, 89.59375]
	]).addTo(Islands).bindPopup(countriesinfo[194]);

var Halaib_Triangle = L.polygon([ 	[53.14453, 156.70361], [53.10303, 156.69922], [53.00684, 156.56641], [52.9209, 156.5625], 
	[52.91553, 156.47656], [52.87158, 156.4751], [52.87109, 156.20117], [52.73682, 156.19434], 
	[52.729, 156.15234], [52.59619, 156.15234], [52.50781, 156.104], [52.45996, 156.05469], 
	[52.45752, 155.83545], [52.41602, 155.83105], [52.41113, 155.69434], [52.36426, 155.65039], //egypt border
	[52.27589, 155.64803], [52.27588, 157.61841], [52.59766, 157.74609], [53.15527, 156.79297]
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[55]);

var Katanga = L.polygon([ 
	[30.31885, 146.93848], [30.23047, 146.98535], [30.23242, 147.3501], [30.27588, 147.35498],
	[30.27148, 147.43848], [30.18555, 147.44336], [30.13867, 147.49121], [30.1377, 147.62695], 
	[30.18164, 147.62695], [30.18164, 147.8999], [30.13574, 147.9043], [30.13867, 148.2666], 
	[30.22949, 148.36035], [30.50195, 148.35938], [30.50684, 148.4043], [30.72949, 148.40723], 
	[30.78516, 148.49316], [30.7793, 148.76855], [30.87109, 148.94922], [30.96191, 149.04297], 
	[31.05078, 149.0498], [31.0498, 149.27539], [31.00488, 149.27734], [31.00684, 149.41406], 
	[31.0957, 149.46387], [31.14258, 149.45605], [31.14258, 149.37012], [31.19141, 149.32324], 
	[31.3252, 149.32227], [31.32813, 149.63867], [31.375, 149.68066], [31.37109, 149.96191], 
	[31.32617, 149.96484], [31.32813, 150.10059], [31.41797, 150.10059], [31.5127, 149.9668], 
	[31.73633, 149.96094], [31.78711, 149.87598], [31.87988, 149.875], [31.88086, 149.91699], 
	[32.1084, 149.9209], [32.15527, 150.00879], [32.24609, 150.0127], [32.24609, 150.2334], 
	[32.19141, 150.2793], [32.1123, 150.28809], [32.06543, 150.33398], [32.05859, 150.4668], 
	[32.0166, 150.50977], [31.65332, 150.5166], [31.64648, 150.69922], [31.55957, 150.74512], 
	[31.55664, 150.88086], [31.60645, 151.01563], [31.64844, 151.10547], [31.73633, 151.1582],
	[31.7373, 151.29102], [31.64941, 151.3457], [31.64844, 151.42871], [31.55957, 151.4834],
	[31.55762, 151.61523], [31.60156, 151.61523], [31.60254, 152.11914], //DRC east
	[31.30859, 152.37109], [31.10938, 152.45313], [30.75781, 152.90234], [29.90625, 153.26563], //lake south 
	[29.90723, 153.08398], [29.90039, 152.90234], [29.85352, 152.67188], [29.81055, 152.30469], 
	[29.76758, 152.03516], [29.71875, 151.97852], [29.08398, 151.66211], [29.03516, 151.66309], 
	[28.94727, 151.66162], [28.84961, 151.70508], [28.03516, 151.70313], [27.93164, 151.61719], 
	[27.70703, 151.61133], [27.61133, 151.52344], [27.38867, 151.52539], [27.37891, 151.56836], 
	[27.25195, 151.57031], [27.20508, 151.61523], [27.19922, 151.70117], [27.06445, 151.79688], 
	[27.06055, 151.88672], [26.98047, 151.88867], [26.88477, 151.98242], [26.875, 152.1582], 
	[26.78906, 152.34277], [26.83594, 152.3457], [26.83984, 152.30566], [26.9707, 152.30469], 
	[27.01465, 152.35254], [27.01465, 152.52734], [26.06055, 152.52832], [26.05908, 152.43848], 
	[26.2417, 152.43994], [26.24316, 152.34961], [26.15234, 152.30078], [26.10693, 152.2085], 
	[26.10742, 151.93604], [26.2876, 151.93359], [26.33496, 151.84473], [26.42285, 151.83984], 
	[26.51611, 151.75049], [26.51807, 151.61719], [26.69434, 151.61035], [26.79004, 151.56543], 
	[26.83691, 151.47656], [26.83984, 151.29785], [26.92773, 151.24414], [26.92578, 150.97754], 
	[27.06348, 150.91992], [27.0625, 150.88086], [27.2041, 150.87793], [27.2041, 150.79004], 
	[27.29688, 150.70215], [27.43066, 150.69434], [27.43164, 150.5625], [27.33887, 150.51758], 
	[27.20508, 150.50977], [27.16211, 150.46777], [27.1543, 150.19141], [27.20117, 150.19141], 
	[27.20898, 149.78516], [27.29102, 149.73242], [27.3418, 149.46484], [27.3916, 149.37305], 
	[27.4873, 149.32324], [27.66211, 149.32422], [27.65918, 148.95703], [27.61523, 148.82617], 
	[27.52344, 148.82031], [27.52539, 148.73242], [27.56836, 148.68652], [27.79199, 148.67676],
	[27.8457, 148.63086], [27.84766, 148.5498], [27.94043, 148.45508], //zambia southwest
	[27.9375, 148.39746], [27.8457, 148.30859], [27.8457, 148.2207], [27.88672, 148.22266],
	[27.88672, 147.9043], [27.80176, 147.85156], [27.80273, 147.44531], [27.8457, 147.44043],
	[27.84082, 147.30957], [27.75879, 147.30273], [27.70703, 147.20703], [27.70801, 147.16797],
	[28.3916, 147.16113], [28.5752, 147.11914], [28.70898, 147.03125], [28.71777, 146.94043],
	[28.80859, 146.9375], [28.85938, 146.85352], [29.44727, 146.85156], [29.44727, 146.88672],
	[29.8584, 146.8886], [30.04395, 146.84277], [30.04785, 146.80566], [30.31934, 146.80273] //angola northwest
	], {color: 'blue'}).addTo(Central_Africa).bindPopup(countriesinfo[40]);

var Quebec = L.polygon([[86.125, 74.35156], [82.32031, 74.35156], [81.82813, 74.50781], [81.35938, 74.94531], 
	[81.125, 75.82813], [80.89453, 76.00391], [80.82422, 76.21484], [80.92188, 76.25], 
	[80.61719, 76.39844], [80.53516, 76.90625], [80.45703, 76.92578], [80.4668, 77.04297], 
	[80.67578, 77.60742], [80.64844, 77.96484], [80.29492, 78.06055], [80.11133, 77.83789], 
	[80.09961, 80.06445], [80.36719, 80.16992], [80.37109, 80.60547], [80.64063, 80.67383], 
	[80.87109, 80.94922], [81.19531, 80.94141], [81.38672, 81.11914], [81.68555, 81.17188], 
	[82.32227, 81.67578], [82.33789, 81.86133], [82.25, 81.86523], [82.43945, 82.31445], 
	[82.75, 82.31641], [82.83984, 82.55273], [82.92969, 83.76953], [83.02539, 84.10352], 
	[82.84375, 84.53516], [83.29492, 85.28906], [83.66406, 85.35156], [84.00391, 84.61328], 
	[85, 84.60938], [84.79688, 87.14063], [84.94727, 88.32227], [85.46484, 89.07031], 
	[86.08594, 90.12109], [86.63281, 91.33203], [86.64648, 85.62598], [86.71094, 83.99219],
	[86.83203, 83.69141], [87.31641, 83.50391], [87.32031, 83.23438], [87.60547, 83.23438],
	[87.94141, 83.3125], [88.19141, 82.96094], [88.69531, 82.75], [90.09766, 83.25781],
	[90.375, 83.86719], [90.27344, 84.07813], [89.76172, 84.07031], [89.45313, 84.23047],
	[89.25, 84.55469], [89.34375, 84.78125], [89.64453, 85.14063], [89.65625, 85.48438],
	[89.61914, 85.85547], [89.84375, 85.80469], [89.94922, 86.12109], [90.51953, 85.65625],
	[91.09766, 85.45703], [91.42578, 85.39453], [91.94922, 85.60547], [92.37891, 85.65234],
	[92.81641, 85.30078], [93.57813, 85.30469], [94.39063, 84.875], [94.97656, 84.88672],
	[95.4375, 84.99609], [95.45313, 84.82813], [93.67969, 83.78516], [93.27734, 82.94922],
	[94.64844, 81.61719], [96.15625, 81.67969], [96.25781, 80.28125], [98.1875, 78.26563],
	[97.60938, 75.35156], [96.70313, 75.26563], [93.39063, 74.95313], [91.30469, 76.26563],
	[89.40625, 74.04688], [86.95313, 74.875] ]).addTo(North_America).bindPopup(countriesinfo[32]);

var Sinai = L.polygon([ 
	[59.37305, 154.5498], [58.69238, 154.55127], [58.69019, 154.59326], [58.51001, 154.59253], 
	[58.50769, 154.55164], [58.46436, 154.54865], //egypt 
	[58.3457, 154.50781], [58.11328, 154.53906], [57.96484, 154.63867], [57.60938, 154.7793], 
	[57.34375, 154.9043], [57.08789, 155.11523], [56.91406, 155.28711], [56.66016, 155.5293], //coast w egypt 
	[56.64844, 155.76953], [56.89648, 155.91992], [57.16211, 155.93359], [57.64063, 156.0918], 
	[58.00195, 156.16895], [58.09668, 156.19678], [58.14221, 156.19885], [58.14432, 156.15518], 
	[58.23618, 156.15546], [58.37476, 156.11133], [58.56055, 156.0647], [58.69531, 156.01904], 
	[58.78711, 155.97217], [58.83151, 155.92651], [58.92438, 155.9245], [59.0625, 155.88037], 
	[59.15503, 155.8335], [59.38184, 155.74316], [59.4751, 155.69727], [59.51703, 155.6944], 
	[59.75391, 155.625], [59.6875, 154.57031]
	], {color: 'blue'}).addTo(North_Africa).bindPopup(countriesinfo[55]);
