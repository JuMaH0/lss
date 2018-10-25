// ==UserScript==
// @name         BuildingSelector
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  Gebäudeliste nur LST anzeigen
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/*
// ==/UserScript==

(function() {

    var group = [ "feuerwehr", "rettung", "polizei", "thw", "wasserrettung", "schule" ];
    $.each( group, function( i, value ) {

 if (!$("#building_selection_" + value + "").hasClass("btn-danger")) { $( "#building_selection_" + value + "" )[0].click(); }

});
})();
