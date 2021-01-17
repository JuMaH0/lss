// ==UserScript==
// @name         FullsizeSH
// @version      0.1
// @description  Ausblenden der Einsätze im Fullsize Modus (Script MissionSH wird benötigt)
// @author       JuMaHo
// @include      *://www.leitstellenspiel.de/?mapview=true
// @grant        none
// @namespace      
// ==/UserScript==

(function() {
    var tid = setInterval(mycode, 5000);

    function mycode() {

    if (localStorage.getItem('yellowleaflet') === 'none') {
      $(".leaflet-interactive[src*='yellow_images']").css({'display': 'none'})
      $(".leaflet-interactive[src*='gelb']").css({'display': 'none'})
       }else{
      $(".leaflet-interactive[src*='yellow_images']").css({'display': 'block'})
      $(".leaflet-interactive[src*='gelb']").css({'display': 'block'})
       }


    if (localStorage.getItem('greenleaflet') === 'none') {
      $(".leaflet-interactive[src*='green_images']").css({'display': 'none'})
      $(".leaflet-interactive[src*='gruen']").css({'display': 'none'})
       }else{
      $(".leaflet-interactive[src*='green_images']").css({'display': 'block'})
      $(".leaflet-interactive[src*='gruen']").css({'display': 'block'})
       }


      if (localStorage.getItem('redleaflet') === 'none') {
      $(".leaflet-interactive[src*='red_images']").css({'display': 'none'})
      $(".leaflet-interactive[src*='rot']").css({'display': 'none'})
       }else{
      $(".leaflet-interactive[src*='red_images']").css({'display': 'block'})
      $(".leaflet-interactive[src*='rot']").css({'display': 'block'})
       }
    }

})();
