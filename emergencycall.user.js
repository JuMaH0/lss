// ==UserScript==
// @name         Projekt X
// @version      0.4
// @description  More detailed mission description
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    $('<div id="missiondetails" style="background-color: #e89a0b; margin-bottom: 10px; padding: 5px; display: none;"></div>').prependTo('#col_left');
    var div = document.getElementById('missiondetails');

    var mission = $('#mission_help').attr('href').split("/").pop().replace(/\?.*/, '');
    var address = $('#mission_general_info').children('small').text().split('|')[0].trim();

    var genderarray = ['Herr', 'Frau'];
    var gender = genderarray[Math.floor(Math.random() * genderarray.length)];

    var namearray = ['Meier', 'Müller', 'Schmitt'];
    var name = namearray[Math.floor(Math.random() * namearray.length)];

    var message_mainarray = ['bitte kommen Sie in die', 'bitte schicken sie jemanden in die', 'kommen Sie schnell zur'];
    var message_main = message_mainarray[Math.floor(Math.random() * message_mainarray.length)];



    var array145 = ['hier fährt einer Schlangenlinie, ich glaub der ist besoffen', 'da fährt jemand total besoffen mit dem Auto'];
    var xmission145 = array145[Math.floor(Math.random() * array145.length)];

    var array476 = ['hier wurde ein Fahhradfahrer angefahren', 'hier liegt ein Fahrradfahrer auf der Straße', 'ich habe einen Fahrradfahrer angefahren', 'hier wurde ein Radfahrer umgemäht'];
    var xmission476 = array476[Math.floor(Math.random() * array476.length)];



    var addressx = address.split(",");
    var addressa = addressx[0];
    var addressb = addressx[1].replace(/\d+/g, '');

    function emergency_call(message, xmissionx) {
        $('#missiondetails').css('display', 'block');
        div.innerHTML += '' + gender + ' ' + name + ' hier, ' + message + ' ' + addressa + ' nach ' + addressb + ', ' + xmissionx + '';
    }

    if ($(".glyphicon-user").length <= 0) {
        if (mission === '145')
        emergency_call(message_main, xmission145)
        if (mission === '476')
        emergency_call(message_main, xmission476)
    }

})();
