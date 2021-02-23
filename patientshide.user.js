// ==UserScript==
// @name         PatientsHide
// @version      0.1
// @description  Patienten bei größerer Anzahl ausblenden
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/missions/*
// ==/UserScript==

(function () {

    var patient_max_numbs = 3;
    var patient_numbs = $('.mission_patient').length;
    var show = false;
    var new_item_html = "<div id='show_patient' class='btn btn-xs btn-warning btn-block' style='margin-bottom: 3px;'>Patienten anzeigen</div>";
    var show_patient = document.getElementsByClassName('mission_patient');

    if (patient_max_numbs < patient_numbs) {
        $("#col_left").prepend(new_item_html);

        for (var i = 0; i < show_patient.length; i++) {

            show_patient[i].style.display = 'none'
        };
    }

    $("#show_patient").click(function () {

        if (show === false) {
            var display = 'block';
            show = true;
            document.getElementById('show_patient').innerHTML = 'Patienten ausblenden';
        } else {
            display = 'none';
            show = false;
            document.getElementById('show_patient').innerHTML = 'Patienten anzeigen';
        }
        for (var i = 0; i < show_patient.length; i++) {
            show_patient[i].style.display = '' + display + ''
        };
    });
})();
