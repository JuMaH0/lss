// ==UserScript==
// @name         RenameMission
// @version      0.0.1
// @description  Einsätze umbennen
// @author       JuMaHo
// @include      *://www.leitstellenspiel.de/*
// ==/UserScript==

(function () {
    'use strict';

    var tid = setInterval(mycode, 500);
    function mycode() {
        var mission = $('[id^=mission_panel_heading_]');
        var x;
        var mission_count = mission.length;
        for (x = 0; x < mission_count; x++) {
            var mission_id = $(mission[x]).attr('id').match(/[0-9]+/);

            document.getElementById("mission_caption_" + mission_id + "").innerHTML = "";
            var y = sessionStorage.getItem('' + mission_id + '');
            if (y === null) {
                y = 'neuer Einsatz'
            }
            document.getElementById("mission_caption_" + mission_id + "").innerHTML = "" + y + "";

        }
    }
    var missionid = window.location.pathname.replace(/\D+/g, '');
    var z = sessionStorage.getItem('' + missionid + '');
    if (z === null) {
        z = 'neuer Einsatz'
    }
    document.getElementById("missionH1").innerHTML = "" + z + "";

    $("#missionH1").click(function () {
        var rename = prompt("Einsatz anlegen");

        window.rename

        sessionStorage.setItem('' + missionid + '', '' + rename + '');

        location.reload();
    });
})();
