// ==UserScript==
// @name         Projekt X
// @version      0.1
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
    var adress = $('#mission_help').attr('href').split("=").pop().replace(/\?.*/, '');
    var innenTeil = document.getElementById('mission_general_info').innerHTML;

    var genderarray = ['Herr', 'Frau'];
    var gender = genderarray[Math.floor(Math.random() * genderarray.length)];

    var namearray = ['Meier', 'Müller', 'Schmitt'];
    var name = namearray[Math.floor(Math.random() * namearray.length)];

    var array476 = ['hier wurde ein Fahhradfahrer angefahren', 'hier liegt ein Fahrradfahrer auf der Straße', 'ich habe einen Fahrradfahrer angefahren', 'hier wurde ein Radfahrer umgemäht'];
    var mission476 = array476[Math.floor(Math.random() * array476.length)];

    var res = innenTeil.split(">");
    var mos = res[8].split(",");
    var pos = mos[1].split("|");
    var kos = pos[0].split("<");

    var address1 = mos[0].split(" ");
    var address2 = kos[0].split(" ");

    if (address1[7] === undefined) {
        address1[7] = '';
    }
    if (address1[8] === undefined) {
        address1[8] = '';
    }

    if (mission === '476') {
        div.innerHTML += '' + gender + ' ' + name + ' hier, schicken Sie schnell jemanden in die ' + address1[6] + ' ' + address1[7] + ' ' + address1[8] + ' nach ' + address2[2] + ' ' + address2[3] + ', ' + mission476 + '';
    }
})();
