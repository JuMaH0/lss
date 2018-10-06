// ==UserScript==
// @name         MissionSH
// @version      1.5.3
// @description  Einsätze anzeigen oder ausblenden anhand der Labelfarben grün, gelb, rot
// @author       JuMaHo & Jan (KBOE2)
// @include      *://www.leitstellenspiel.de/
// @grant        none
// @namespace      https://github.com/JuMaH0/lss/raw/master/missionsh.user.js
// ==/UserScript==
(function() {
    const hidden_at = 0; // 0 ≙ Einsätze in Liste und auf Karte ausblenden; 1 ≙ Einsätze nur in Liste ausblenden 2 ≙ Einsätze nur auf Karte ausblenden
    const colors = {
        "green": "rgb(50, 205, 50)",
        "yellow": "rgb(254, 220, 50)",
        "red": "rgb(201, 48, 44)"
    }
    $('head').append('<style>.circle{width: 20px; height: 20px; border: 1px solid black; text-align: center; border-radius: 20px;}</style>');
    $.each(colors, function(color, code) {
        $('head').append('<style>.circle.circle-' + color + '[status="enabled"]{background-color: ' + code + ';}</style>');
        $('head').append('<style>.circle.circle-' + color + '[status="disabled"]{ background: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' version=\'1.1\' preserveAspectRatio=\'none\' viewBox=\'0 0 100 100\' style=\'background-color: ' + code + ';\'><path d=\'M100 0 L0 100\' stroke=\'black\' stroke-width=\'1\'/><path d=\'M0 0 L100 100\' stroke=\'black\' stroke-width=\'2\'/></svg>");\nbackground-repeat:no-repeat;\nbackground-position:center center;\nbackground-size: 100% 100%, auto;}</style>');
        $(".navbar-right").append('<li><a id="' + color + '" class="switchMissionStateView"><div id="' + color + '_circle" class="circle circle-' + color + '" status="enabled" color="' + color + '"></div></a></li>');
    });
	function missionDelete(e){1==mobile_bridge_use&&4==mobile_version&&mobileBridgeAdd("mission_delete",{id:e}),$("#mission_"+e).addClass('finished'),$("#mission_"+e).hide(),missionTimerDelete(e);var t=[];$.each(mission_markers,function(i,n){n.mission_id==e?"undefined"==typeof mapkit?n.remove():map.removeAnnotation(n):t.push(n)}),mission_markers=t,missionSelectionUpdateButtons()}
    setInterval(function(){
        $('.circle').each(function() {
            let color = $(this).attr("color");
            if((hidden_at === 0 || hidden_at === 1) && !$('.mission_panel_' + color).parent().hasClass('finished')){$('#' + color + '_circle').attr('status') === "enabled" ? $('.mission_panel_' + color).parent().show() : $('.mission_panel_' + color).parent().hide();}
            if((hidden_at === 0 || hidden_at === 2) && !$('.mission_panel_' + color).parent().hasClass('finished')){$('#' + color + '_circle').attr('status') === "enabled" ? $(".leaflet-interactive[src*='" + color + "_images']").show() : $(".leaflet-interactive[src*='" + color + "_images']").hide();}
        });
    }, 20000);
    $('.switchMissionStateView').click(function() {
        if((hidden_at === 0 || hidden_at === 1) && !$('.mission_panel_' + color).parent().hasClass('finished')){$(this).children().attr('status') === "enabled" ? $(".mission_panel_" + this.id).parent().hide() : $(".mission_panel_" + this.id).parent().show();}
        if((hidden_at === 0 || hidden_at === 2) && !$('.mission_panel_' + color).parent().hasClass('finished')){$('#' + this.id + '_circle').attr('status') === "enabled" ? $(".leaflet-interactive[src*='" + this.id + "_images']").hide() : $(".leaflet-interactive[src*='" + this.id + "_images']").show();}
        $(this).children().attr('status') === "enabled" ? $(this).children().attr('status', 'disabled') : $(this).children().attr('status', 'enabled');
    });
})();
