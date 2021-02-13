// ==UserScript==
// @name         Projekt X
// @version      0.2
// @description  More detailed mission description
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    $('<div id="missiondetails" style="background-color: #e89a0b; margin-bottom: 10px; padding: 5px;"></div>').prependTo('#col_left');
    var div = document.getElementById('missiondetails');

    var mission = $('#mission_help').attr('href').split("/").pop().replace(/\?.*/, '');
    var address = $('#mission_general_info').children('small').text().split('|')[0].trim();

    var genderarray = ['Herr', 'Frau'];
    var gender = genderarray[Math.floor(Math.random() * genderarray.length)];

    var namearray = ['Meier', 'Müller', 'Schmitt'];
    var name = namearray[Math.floor(Math.random() * namearray.length)];

    var array476 = ['hier wurde ein Fahhradfahrer angefahren', 'hier liegt ein Fahrradfahrer auf der Straße', 'ich habe einen Fahrradfahrer angefahren', 'hier wurde ein Radfahrer umgemäht'];
    var mission476 = array476[Math.floor(Math.random() * array476.length)];

    var addressx = address.split(",");
    var addressa = addressx[0];
    var addressb = addressx[1].replace(/\d+/g, '');

    if (mission === '476') {
        div.innerHTML += '' + gender + ' ' + name + ' hier, schicken Sie schnell jemanden in die ' + addressa + ' nach ' + addressb + ', ' + mission476 + '';
    }
})();
