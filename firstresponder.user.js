// ==UserScript==
// ==UserScript==
// @name         FirstResponder
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Script zur Alamierung des nächstliegendes FR Fahrzeugs
// @author       JuMaHO
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @grant        none
// ==/UserScript==

(function() {


    var aao_button = '#aao_2520519'; //Hier ID des Buttons einfügen
    
  $(aao_button).click(function(){

    $(".vehicle_checkbox").each(function(){
        var vehicle_type_id = $(this).attr("vehicle_type_id");
        var vehicle_id = $(this).attr("value");

        if($("#vehicle_checkbox_" + vehicle_id + "").prop('checked') === false) {
        //Es können beliebig viele IDs hinzugefügt werden -->> || vehicle_type_id === 'HIER ID'
        if(vehicle_type_id ===  '32' || vehicle_type_id === '39'){
            $("#vehicle_checkbox_" + vehicle_id + "").click();
        return false;
        }
      }
    });
  });
})();