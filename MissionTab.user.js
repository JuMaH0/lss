// ==UserScript==
// @name         MissionTab
// @version      1.0
// @description  changes tabname to missionname
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var mission = $( "h3#missionH1" ).text();
    mission = $.trim(mission);

    document.title = mission;

})();