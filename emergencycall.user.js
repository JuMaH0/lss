// ==UserScript==
// @name         EmergencyCall
// @version      0.0.10
// @description  dieses Script generiert eine zufällige Einsatzmeldung
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/missions/*
// @updateURL    https://github.com/JuMaH0/lss/raw/master/emergencycall.user.js
// @downloadURL  https://github.com/JuMaH0/lss/raw/master/emergencycall.user.js
// ==/UserScript==

(function () {
    'use strict';
    let github_link = 'https://jumah0.github.io/json/lss/emergencycall.json';
    $.getJSON(github_link, function (data) {
        var mission = $('#mission_help').attr('href').split("/").pop().replace(/\?.*/, '');
        var checkbma = document.getElementById("missionH1").innerHTML;

        for (var i = 0; i < data.mission.length; i++) {
            if (mission === data.mission[i].mission_id) {
                var emergency_txt = data.mission[i].mission_text;
            }
        }
        $('<div id="missiondetails" style="background-color: #e89a0b; margin-bottom: 10px; padding: 5px; display: none; border: 1px solid #000; font-size: 15px;"></div>').prependTo('#col_left');
        var div = document.getElementById('missiondetails');
        var genderarray = ['', 'Herr', 'Frau'];
        var gender = genderarray[Math.floor(Math.random() * genderarray.length)];
        var namearray = data.caller.caller_names;
        var name = namearray[Math.floor(Math.random() * namearray.length)];
        var emergency_textarray = emergency_txt;
        var emergency_text = emergency_textarray[Math.floor(Math.random() * emergency_textarray.length)];
        function emergency_call(xmissionx) {
            if ($(".glyphicon-user").length <= 0) {
                $('#missiondetails').css('display', 'block');
                div.innerHTML += '' + gender + ' ' + name + ' hier, ' + xmissionx + '';
            }
        }
        if ($(".glyphicon-user").length <= 0) {
            if (checkbma.includes('(Brandmeldeanlage)')) {
                $('#missiondetails').css('display', 'block');
                div.innerHTML += 'Brandmeldeanlage aufgelaufen';
                return;
            }
        }
        emergency_call(emergency_text)
    });
})();
