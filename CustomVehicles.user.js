// ==UserScript==
// @name         CustomVehicles
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  Fahrzeug neue Klasse zuweisen + eigene AAO
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/*
// ==/UserScript==

(function() {

   function fz_edit(fz_id,fz_type,custom_id){
        $('#vehicle_checkbox_' + fz_id + '').attr('custom_id', '' + custom_id + '');
        $( "a[href$='/vehicles/" + fz_id + "']" ).next().text('(' + fz_type +')');
    if($( "a[href$='/vehicles/" + fz_id + "/edit']" ).length > 0){
        $( "a[href*='fahrzeugfarbe']" ).text('' + fz_type + '');
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

    /*****************************************************Fahrzeug Kategorien*************************************************************/

    aao(2591612,77); //Fahrzeugkategorie einem AAO Button zuweisen

    /*************************************************Fahrzeuge hinzufügen u. anpassen***************************************************/

    fz_edit(15091922,'CBRN-ErkKw',77); //Fahrzeug umbennen und kategorie zuweisen
    

})();