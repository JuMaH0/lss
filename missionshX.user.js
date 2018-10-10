// ==UserScript==
// @name         MissionSH
// @version      1.6.7
// @description  Einsätze anzeigen oder ausblenden anhand der Labelfarben grün, gelb, rot
// @author       JuMaHo & Jan (KBOE2)
// @include      *://www.leitstellenspiel.de/
// @grant        none
// @namespace      https://github.com/JuMaH0/lss/raw/master/missionsh.user.js
// ==/UserScript==
 (function() {

    var circle = 'width: 20px; height: 20px; border: 1px solid black; text-align: center; border-radius: 20px;';
    $(".navbar-right").append('<li><a id="green"><div id="green_circle" style="background-color: #32cd32;' + circle + '"></div></a></li>');
    $(".navbar-right").append('<li><a id="yellow"><div id="yellow_circle" style="background-color: #fedc32;' + circle + '"></div></a></li>');
    $(".navbar-right").append('<li><a id="red"><div id="red_circle" style="background-color: #c9302c;' + circle + '"></div></a></li>');
    $(".mission_panel_green").css({ 'display': "block" });
    $(".mission_panel_yellow").css({ 'display': "block" });
    $(".mission_panel_red").css({ 'display': "block" });

     var tid = setInterval(mycode, 5000);
    function mycode() {


        let missionDeleteOrigin = missionDelete;
        missionDelete=function(e){missionDeleteOrigin(e),$("#mission_"+e).addClass("finished")};

        var status_green = document.getElementById('green_circle').style.backgroundColor;
        var status_yellow = document.getElementById('yellow_circle').style.backgroundColor;
        var status_red = document.getElementById('red_circle').style.backgroundColor;
        if(status_green === 'rgb(211, 211, 211)')
        {
            $(".mission_panel_green").css({ 'display': "none" });
            $(".leaflet-interactive[src*='green_images']").hide();
			$(".leaflet-interactive[src*='gruen']").hide();

        }
        else
        {
            $(".mission_panel_green").css({ 'display': "block" });
            $(".leaflet-interactive[src*='green_images']").show();
			$(".leaflet-interactive[src*='gruen']").show();
        }
        if(status_yellow === 'rgb(211, 211, 211)')
        {
            $(".mission_panel_yellow").css({ 'display': "none" });
            $(".leaflet-interactive[src*='yellow_images']").hide();
			$(".leaflet-interactive[src*='gelb']").hide();

        }
        else
        {
            $(".mission_panel_yellow").css({ 'display': "block" });
            $(".leaflet-interactive[src*='yellow_images']").show();
			$(".leaflet-interactive[src*='gelb']").show();
        }
        if(status_red === 'rgb(211, 211, 211)')
        {
            $(".mission_panel_red").css({ 'display': "none" });
            $(".leaflet-interactive[src*='red_images']").hide();
			$(".leaflet-interactive[src*='rot']").hide();
			

        }
        else
        {
            $(".mission_panel_red").css({ 'display': "block" });
            $(".leaflet-interactive[src*='red_images']").show();
			$(".leaflet-interactive[src*='rot']").show();
        }
    }
    $("#green").click(function() {
        if($('.mission_panel_green').css('display') === 'block')
        {
            $(".mission_panel_green").css({ 'display':'none'});
            $("#green_circle").css({ 'background-color':'#D3D3D3'});
            $(".leaflet-interactive[src*='green_images']").hide();
            $(".leaflet-interactive[src*='gruen']").hide();
        }
        else
        {
            $(".mission_panel_green").css({ 'display':'block'});
            $("#green_circle").css({ 'background-color':'#32cd32'});
            $(".leaflet-interactive[src*='green_images']").show();
            $(".leaflet-interactive[src*='gruen']").show();
        }
    });
    $("#yellow").click(function() {
        if($('.mission_panel_yellow').css('display') === 'block')
        {
            $(".mission_panel_yellow").css({ 'display':'none'});
            $("#yellow_circle").css({ 'background-color':'#D3D3D3'});
            $(".leaflet-interactive[src*='yellow_images']").hide();
            $(".leaflet-interactive[src*='gelb']").hide();
        }
        else
        {
            $(".mission_panel_yellow").css({ 'display':'block'});
            $("#yellow_circle").css({ 'background-color':'#fedc32'});
            $(".leaflet-interactive[src*='yellow_images']").show();
            $(".leaflet-interactive[src*='gelb']").show();
        }
    });
    $("#red").click(function() {
        if($('.mission_panel_red').css('display') === 'block')
        {
            $(".mission_panel_red").css({ 'display':'none'});
            $("#red_circle").css({ 'background-color':'#D3D3D3'});
            $(".leaflet-interactive[src*='red_images']").hide();
            $(".leaflet-interactive[src*='rot']").hide();
}
        else
        {
            $(".mission_panel_red").css({ 'display':'block'});
            $("#red_circle").css({ 'background-color':'#c9302c'});
            $(".leaflet-interactive[src*='red_images']").show();
            $(".leaflet-interactive[src*='rot']").show();
        }
    });
})();
