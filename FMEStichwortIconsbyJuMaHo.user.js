// ==UserScript==
// @name         FME Stichwort Icons by JuMaHo
// @namespace    Leitstellenspiel
// @version      0.5
// @description  Icon resize
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/
// ==/UserScript==

(function() {
    'use strict';
///Größe der Einsatzgrafiken
    $(".mission_vehicle_state").css({ 'min-width': '30px', 'min-height': '42px' });
    var tid = setInterval(buttonsize, 5000);
    function buttonsize() {
        $(".mission_vehicle_state").css({ 'min-width': '30px', 'min-height': '42px'  });
}
   })();
