// ==UserScript==
// @name         MissionFilter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Missionen Filtern
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var circle = 'width: 20px; height: 20px; border: 1px solid black; text-align: center; border-radius: 20px;';
    $(".navbar-right").append('<li><a id="black"><div id="black_circle" style="background-color: black;' + circle + '"></div></a></li>');

    $("#black").click(function() {

        if($('#black_circle').css('background-color') == 'rgb(0, 0, 0)'){
            $("#black_circle").css({ 'background-color':'grey'});


            var mission = ["Flächenbrand","Taschendiebstahl","Brennender Bus","Person im Aufzug"];
            var mission_count = mission.length;
            var count_missions = $(".missionSideBarEntry").length;
            var strainer = $('[id^=mission_caption_]');
            var mission_id;
            var x;
            var y;


            for (x = 0; x < count_missions; x++) {

                mission_id = $(strainer[x]).attr('id').match(/[0-9]+/);
                var cull = document.getElementById('mission_caption_'+mission_id+'').innerHTML;
                var present = cull.indexOf(mission[0]);

                for (y = 0; y < count_missions; y++) {
                    if(present > -1){
                        document.getElementById('mission_'+mission_id+'').style.display = "block";
                    } else {
                        present = cull.indexOf(mission[y]);
                        document.getElementById('mission_'+mission_id+'').style.display = "none";
                    }

                }

            }
        }
    });

})
();