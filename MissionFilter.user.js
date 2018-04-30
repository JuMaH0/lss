// ==UserScript==
// @name         MissionFilter
// @namespace    Leitstellenspiel
// @version      1.3
// @description  filter missions by name
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var mission = ["Brand in Baumarkt","Gasexplosion","Großfeuer im Krankenhaus","Feuer auf Bauernhof - Groß","Flugzeug abgestürzt"];
    var circle = 'width: 20px; height: 20px; border: 1px solid black; text-align: center; border-radius: 20px;';
    var mission_id;
    var display;
    var x;
    var y;

    $(".navbar-right").append('<li><a id="black"><div id="black_circle" style="background-color: black;' + circle + '"></div></a></li>');

    $("#black").click(function() {
        if($('#black_circle').css('background-color') == 'rgb(0, 0, 0)'){
            $("#black_circle").css({ 'background-color':'grey'});
            display = 'none';
        } else {
            $("#black_circle").css({ 'background-color':'black'});
            display = 'block';
        }

        var mission_count = mission.length;
        var count_missions = $(".missionSideBarEntry").length;
        var strainer = $('[id^=mission_caption_]');

        for (x = 0; x < count_missions; x++) {

            mission_id = $(strainer[x]).attr('id').match(/[0-9]+/);
            var cull = document.getElementById('mission_caption_'+mission_id+'').innerHTML;
            var present = cull.indexOf(mission[0]);

            for (y = 0; y < count_missions; y++){
                if(present > -1){
                    document.getElementById('mission_' + mission_id + '').style.display = "block";
                } else {
                    present = cull.indexOf(mission[y]);
                    document.getElementById('mission_' + mission_id + '').style.display = "" + display + "";
                }
            }
        }
    });
})
();
