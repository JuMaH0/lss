// ==UserScript==
// @name         MissionSH
// @version      1.8.1
// @description  Einsätze anzeigen oder ausblenden anhand der Labelfarben grün, gelb, rot
// @author       JuMaHo
// @include      *://www.leitstellenspiel.de/
// @grant        none
// @namespace      https://github.com/JuMaH0/lss/raw/master/missionsh.user.js
// ==/UserScript==
(function() {

    const showmap = 1; // 1 = Icons auf map ausblenden 0 = Icons nicht ausblenden
    const involved = 0; //1 = beteiligt Einsätze nicht ausblenden 0 = beteiligt Einsätze ausblenden
    const uninvolved = 0; //1 = unbeteiligt Einsätze nicht  ausblenden 0 = unbeteiligt Einsätze ausblenden
    const patients = 0; //1 Einsätze solange einblenden wie Patienten vorhanden sind 0 = Einsätze mit Patienten ausblenden
    const recruitment = 1; //1 = Einsätze einblenden wenn verstäkung benötigt wird
    const radio = 1; //1 = Einsätze mit Sprechwunsch immer anzeigen


    var circle = 'width: 20px; height: 20px; border: 1px solid black; text-align: center; border-radius: 20px;';
    $(".navbar-right").append('<li><a id="green"><div id="green_circle" style="background-color: #32cd32;' + circle + '"></div></a></li>');
    $(".navbar-right").append('<li><a id="yellow"><div id="yellow_circle" style="background-color: #fedc32;' + circle + '"></div></a></li>');
    $(".navbar-right").append('<li><a id="red"><div id="red_circle" style="background-color: #c9302c;' + circle + '"></div></a></li>');

	$(".mission_panel_green").css({
        'display': "block",
        'animation': 'fadeIn 1s linear forwards'
    });
    $(".mission_panel_yellow").css({
        'display': "block",
        'animation': 'fadeIn 1s linear forwards'
    });
    $(".mission_panel_red").css({
        'display': "block",
        'animation': 'fadeIn 1s linear forwards'
    });

var tid = setInterval(mycode, 5000);

    function mycode() {

        let missionDeleteOrigin = missionDelete;
        missionDelete = function(e) {missionDeleteOrigin(e), $("#mission_" + e).addClass("finished")};

        var status_green = document.getElementById('green_circle').style.backgroundColor;
        var status_yellow = document.getElementById('yellow_circle').style.backgroundColor;
        var status_red = document.getElementById('red_circle').style.backgroundColor;

	   if (status_green === 'rgb(211, 211, 211)') {
            $(".mission_panel_green").css({'display': "none"});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='green_images']").css({'display': 'none'})
                $(".leaflet-interactive[src*='gruen']").css({'display': 'none'})
}

        } else {
            $(".mission_panel_green").css({'display': "block"});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='green_images']").css({'display': 'block'});
                $(".leaflet-interactive[src*='gruen']").css({'display': 'block'});

            }
        }

        if (status_yellow === 'rgb(211, 211, 211)') {
           $(".mission_panel_yellow").css({'display': 'none'})
            if (showmap === 1) {
                $(".leaflet-interactive[src*='yellow_images']").css({'display': 'none'});
                $(".leaflet-interactive[src*='gelb']").css({'display': 'none'});

            }

        } else {
           $(".mission_panel_yellow").css({'display': 'block'});

            if (showmap === 1) {
                $(".leaflet-interactive[src*='yellow_images']").css({'display': 'block'});
                $(".leaflet-interactive[src*='gelb']").css({'display': 'block'});

            }
        }

        if (status_red === 'rgb(211, 211, 211)') {
              $(".mission_panel_red").css({'display': 'none'})

            if (showmap === 1) {
                $(".leaflet-interactive[src*='red_images']").css({'display': 'none'})
                $(".leaflet-interactive[src*='rot']").css({'display': 'none'})
                 }

		} else {
             $(".mission_panel_red").css({'display': 'block'})

            if (showmap === 1) {
                $(".leaflet-interactive[src*='red_images']").css({'display': 'block'});
                $(".leaflet-interactive[src*='rot']").css({'display': 'block'});
            }
        }


        var mission = $('[id^=mission_panel_heading_]');
        var x;

        var mission_count = mission.length;

       for (x = 0; x < mission_count; x++) {
       var mission_id = $(mission[x]).attr('id').match(/[0-9]+/);



           if (patients === 1 && $('#mission_patients_'+mission_id+'').html()) {$("#mission_panel_" + mission_id + ".mission_panel_red").css({'display': 'block'});}
           if (recruitment === 1 && $('#mission_missing_'+mission_id+'').html()){$("#mission_panel_" + mission_id + ".mission_panel_red").css({'display': 'block'});}




           if($( radio === 1 && "#mission_missing_short_" + mission_id + "" ).html()){
                $("#mission_panel_" + mission_id + ".mission_panel_red").css({'display': 'block'});
                $("#mission_panel_" + mission_id + ".mission_panel_yellow").css({'display': 'block'});
                $("#mission_panel_" + mission_id + ".mission_panel_green").css({'display': 'block'});

            }



            if($( uninvolved === 1 && "#mission_participant_" + mission_id + "" ).hasClass( "glyphicon-user hidden" )){
               $("#mission_panel_" + mission_id + ".mission_panel_red").css({'display': 'block'});
                $("#mission_panel_" + mission_id + ".mission_panel_yellow").css({'display': 'block'});
                $("#mission_panel_" + mission_id + ".mission_panel_green").css({'display': 'block'});

            }



            if($( involved === 1 && "#mission_participant_new_" + mission_id + "" ).hasClass( "glyphicon-asterisk hidden" )){
                $("#mission_panel_" + mission_id + ".mission_panel_red").css({'display': 'block'});
                $("#mission_panel_" + mission_id + ".mission_panel_yellow").css({'display': 'block'});
                $("#mission_panel_" + mission_id + ".mission_panel_green").css({'display': 'block'});
             }

       }
    }

    $("#green").click(function() {
        if ($('.mission_panel_green').css('display') === 'block') {
            $(".mission_panel_green").css({'display': 'none'})
            $("#green_circle").css({ 'background-color': '#D3D3D3'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='green_images']").css({'display': 'none'})
                $(".leaflet-interactive[src*='gruen']").css({'display': 'none'})

            }
		} else {
             $(".mission_panel_green").css({'display': 'block'});
            $("#green_circle").css({ 'background-color': '#32cd32'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='green_images']").css({'display': 'block'});
                $(".leaflet-interactive[src*='gruen']").css({'display': 'block'});

            }
        }
    });
    $("#yellow").click(function() {
        if ($('.mission_panel_yellow').css('display') === 'block') {
             $(".mission_panel_yellow").css({'display': 'none'})
            $("#yellow_circle").css({'background-color': '#D3D3D3'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='yellow_images']").css({'display': 'none'})
                $(".leaflet-interactive[src*='gelb']").css({'display': 'none'})

            }

        } else {
           $(".mission_panel_yellow").css({'display': 'block'});
            $("#yellow_circle").css({'background-color': '#fedc32'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='yellow_images']").css({'display': 'block'});
                $(".leaflet-interactive[src*='gelb']").css({'display': 'block'});

            }
        }
    });

    $("#red").click(function() {
        if ($('.mission_panel_red').css('display') === 'block') {
            $('.mission_panel_red').css({'display': 'none'}).fadeOut()
            $("#red_circle").css({'background-color': '#D3D3D3'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='red_images']").css({'display': 'none'})
                $(".leaflet-interactive[src*='rot']").css({'display': 'none'})
             }

        } else {
             $(".mission_panel_red").css({'display': 'block'});
            $("#red_circle").css({'background-color': '#c9302c'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='red_images']").css({'display': 'block'})
                $(".leaflet-interactive[src*='rot']").css({'display': 'block'})
            }
        }
    });
})();
