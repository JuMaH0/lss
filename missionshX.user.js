// ==UserScript==
// @name         MissionSH
// @version      1.7.0
// @description  Einsätze anzeigen oder ausblenden anhand der Labelfarben grün, gelb, rot
// @author       JuMaHo & Jan (KBOE2)
// @include      *://www.leitstellenspiel.de/
// @grant        none
// @namespace      https://github.com/JuMaH0/lss/raw/master/missionsh.user.js
// ==/UserScript==
(function() {

    const showmap = 1; // 1 = Icons auf map ausblenden 0 = Icons nicht ausblenden
    const involved = 0; //1 = beteiligt Einsätze nicht ausblenden 0 = beteiligt Einsätze ausblenden
    const uninvolved = 1; //1 = unbeteiligt Einsätze nicht  ausblenden 0 = unbeteiligt Einsätze ausblenden


    var circle = 'width: 20px; height: 20px; border: 1px solid black; text-align: center; border-radius: 20px;';
    $(".navbar-right").append('<li><a id="green"><div id="green_circle" style="background-color: #32cd32;' + circle + '"></div></a></li>');
    $(".navbar-right").append('<li><a id="yellow"><div id="yellow_circle" style="background-color: #fedc32;' + circle + '"></div></a></li>');
    $(".navbar-right").append('<li><a id="red"><div id="red_circle" style="background-color: #c9302c;' + circle + '"></div></a></li>');
    
	$(".mission_panel_green").css({
        'display': "block"
    });
    $(".mission_panel_yellow").css({
        'display': "block"
    });
    $(".mission_panel_red").css({
        'display': "block"
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
                $(".leaflet-interactive[src*='green_images']").hide();
                $(".leaflet-interactive[src*='gruen']").hide();

            }

        } else {
            $(".mission_panel_green").css({'display': "block"});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='green_images']").show();
                $(".leaflet-interactive[src*='gruen']").show();

            }
        }
		
        if (status_yellow === 'rgb(211, 211, 211)') {
           $(".mission_panel_yellow").hide();
            if (showmap === 1) {
                $(".leaflet-interactive[src*='yellow_images']").hide();
                $(".leaflet-interactive[src*='gelb']").hide();

            }

        } else {
           $(".mission_panel_yellow").show();

            if (showmap === 1) {
                $(".leaflet-interactive[src*='yellow_images']").show();
                $(".leaflet-interactive[src*='gelb']").show();

            }
        }

        if (status_red === 'rgb(211, 211, 211)') {
              $(".mission_panel_red").hide();
           
            if (showmap === 1) {
                $(".leaflet-interactive[src*='red_images']").hide();
                $(".leaflet-interactive[src*='rot']").hide();
                 }

		} else {
             $(".mission_panel_red").show();
            
            if (showmap === 1) {
                $(".leaflet-interactive[src*='red_images']").show();
                $(".leaflet-interactive[src*='rot']").show();
            }
        }
       
  var mission = $('[id^=mission_panel_heading_]');
    var x;
     //var mission_id = $(mission[0]).attr('id').match(/[0-9]+/);


    var mission_count = mission.length;
   // alert(mission_count);

        for (x = 0; x < mission_count; x++) {

            var mission_id = $(mission[x]).attr('id').match(/[0-9]+/);


            if(uninvolved === 1){

            if($( "#mission_participant_" + mission_id + "" ).hasClass( "glyphicon-user hidden" )){
                $("#mission_panel_" + mission_id + ".mission_panel_red").show();
                $("#mission_panel_" + mission_id + ".mission_panel_yellow").show();
                $("#mission_panel_" + mission_id + ".mission_panel_green").show();
                $(".leaflet-interactive[src*='"+ mission_id +"']").show();
            }
            }
            if(involved === 1){

            if($( "#mission_participant_new_" + mission_id + "" ).hasClass( "glyphicon-asterisk hidden" )){
                $("#mission_panel_" + mission_id + ".mission_panel_red").show();
                $("#mission_panel_" + mission_id + ".mission_panel_yellow").show();
                $("#mission_panel_" + mission_id + ".mission_panel_green").show();
                $(".leaflet-interactive[src*='"+ mission_id +"']").show();
            }
            }



        }

    }
    $("#green").click(function() {
        if ($('.mission_panel_green').css('display') === 'block') {
            $(".mission_panel_green").hide(1500);
            $("#green_circle").css({ 'background-color': '#D3D3D3'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='green_images']").hide(1500);
                $(".leaflet-interactive[src*='gruen']").hide(1500);

            }
		} else {
             $(".mission_panel_green").show(1500);
            $("#green_circle").css({ 'background-color': '#32cd32'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='green_images']").show(1500);
                $(".leaflet-interactive[src*='gruen']").show(1500);

            }
        }
    });
    $("#yellow").click(function() {
        if ($('.mission_panel_yellow').css('display') === 'block') {
             $(".mission_panel_yellow").hide(1500);
            $("#yellow_circle").css({'background-color': '#D3D3D3'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='yellow_images']").hide(1500);
                $(".leaflet-interactive[src*='gelb']").hide(1500);

            }
			
        } else {
           $(".mission_panel_yellow").show(1500);
            $("#yellow_circle").css({'background-color': '#fedc32'});
            if (showmap === 1) {
                $(".leaflet-interactive[src*='yellow_images']").show(1500);
                $(".leaflet-interactive[src*='gelb']").show(1500);

            }
        }
    });

    $("#red").click(function() {
        if ($('.mission_panel_red').css('display') === 'block') {
             $(".mission_panel_red").hide(1500);
            $("#red_circle").css({   'background-color': '#D3D3D3'  });
            if (showmap === 1) {
                $(".leaflet-interactive[src*='red_images']").hide(1500);
                $(".leaflet-interactive[src*='rot']").hide(1500);
             }
			
        } else {
             $(".mission_panel_red").show(1500);
            $("#red_circle").css({ 'background-color': '#c9302c' });
            if (showmap === 1) {
                $(".leaflet-interactive[src*='red_images']").show(1500);
                $(".leaflet-interactive[src*='rot']").show(1500);
            }
        }
    });
})();