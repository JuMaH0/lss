// ==UserScript==
// @name         EmergencyCall
// @version      0.0.9
// @description  dieses Script generiert eine zufällige Einsatzmeldung
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/missions/*
// @updateURL    https://github.com/JuMaH0/lss/raw/master/emergencycall.user.js
// @downloadURL  https://github.com/JuMaH0/lss/raw/master/emergencycall.user.js
// ==/UserScript==

(function () {
    'use strict';
    
    $('<div id="missiondetails" style="background-color: #e89a0b; margin-bottom: 10px; padding: 5px; display: none; border: 1px solid #000; font-size: 15px;"></div>').prependTo('#col_left');
    var div = document.getElementById('missiondetails');

    var mission = $('#mission_help').attr('href').split("/").pop().replace(/\?.*/, '');
    var checkbma = document.getElementById("missionH1").innerHTML;
    
    var genderarray = ['', 'Herr', 'Frau'];
    var gender = genderarray[Math.floor(Math.random() * genderarray.length)];

    var namearray = ['Meier', 'Müller', 'Schmitt', 'Wagner', 'Richter', 'Schneider', 'Werner', 'Jung'];
    var name = namearray[Math.floor(Math.random() * namearray.length)];

    var message_mainarray = ['bitte kommen Sie schnell', 'bitte schicken Sie jemanden vorbei', 'wir brauchen hilfe'];
    var message_main = message_mainarray[Math.floor(Math.random() * message_mainarray.length)];

    var array145 = ['hier fährt einer Schlangenlinie, ich glaub der ist besoffen', 'da fährt jemand total besoffen mit dem Auto'];
    var xmission145 = array145[Math.floor(Math.random() * array145.length)];

    var array164 = ['mein Kind ist auf den Kopf gefallen und blutet nun stark.'];
    var xmission164 = array164[Math.floor(Math.random() * array164.length)];

    var array476 = ['hier wurde ein Fahhradfahrer angefahren', 'hier liegt ein Fahrradfahrer auf der Straße', 'ich habe einen Fahrradfahrer angefahren', 'hier wurde ein Radfahrer umgemäht'];
    var xmission476 = array476[Math.floor(Math.random() * array476.length)];

    function emergency_call(message, xmissionx) {
        $('#missiondetails').css('display', 'block');
        div.innerHTML += '' + gender + ' ' + name + ' hier, ' + message + ', ' + xmissionx + '';
    }

    if ($(".glyphicon-user").length <= 0) {
        if (checkbma.includes('(Brandmeldeanlage)')) {
            $('#missiondetails').css('display', 'block');
            div.innerHTML += 'Brandmeldeanlage aufgelaufen';
            return;
        }
            if (mission === '145')
            emergency_call(message_main, xmission145)
            if (mission === '164')
            emergency_call(message_main, xmission164)
            if (mission === '476')
            emergency_call(message_main, xmission476)
    }

})();
