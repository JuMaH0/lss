// ==UserScript==
// @name         CustomVehicles
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Fahrzeug neue Klasse zuweisen + eigene AAO
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/*
// ==/UserScript==

(function() {

     function add_custom_id(vehicle_id,custom_id){
         $('#vehicle_checkbox_' + vehicle_id + '').attr('custom_id', '' + custom_id + '');
    }

    function fz_edit(fz_id,fz_type,fz_color){
        $( "a[href$='/vehicles/" + fz_id + "']" ).next().text('(' + fz_type +')');
    if($( "a[href$='/vehicles/" + fz_id + "/edit']" ).length > 0){
        $( "a[href$='/fahrzeugfarbe/" + fz_color + "']" ).text('' + fz_type + '');
    }
}

    function aao(aao_id,custom_id){
        $("#aao_" + aao_id + "").click(function(){
    $(".vehicle_checkbox").each(function(){
        var vehicle_checkid = $(this).attr("custom_id");
        var vehicle_id = $(this).attr("value");

        if($("#vehicle_checkbox_" + vehicle_id + "").prop('checked') === false) {
        if(vehicle_checkid === '' + custom_id + ''){
            $("#vehicle_checkbox_" + vehicle_id + "").click();
            return false;
         }
       }
    });
 });
}
    /************************************************************************************************************************************/
    aao(2582256,54321); //Fahrzeugkategorie einem AAO Button zuweisen --> pro Kategorien nur 1 AAO anlegen
    add_custom_id(12645389,54321); //Fahrzeug eine neuen Unterkategorie zuweisen
    fz_edit(12645389,'GW-Tier',30); //Fahrzeugkennung in Einsatzliste und Wache anpassen
   /************************************************************************************************************************************/
  
})();