// ==UserScript==
// @name         CustomVehicles
// @namespace    http://tampermonkey.net/
// @version      1.0.6
// @description  Fahrzeug neue Klasse zuweisen + eigene AAO
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/*
// ==/UserScript==

(function() {

    jQuery.extend( jQuery.fn, {
    hasParent: function(p) {
       return this.filter(function(){
           return $(p).find(this).length;
        });
    }
});


    function fz_edit(fz_id,fz_type,custom_id){
       $('#vehicle_checkbox_' + fz_id + '').attr('custom_id', '' + custom_id + '');
       $( "a[href$='/vehicles/" + fz_id + "']" ).hasParent(".tablesorter").next().text('(' + fz_type +')');
       if($( "a[href$='/vehicles/" + fz_id + "/edit']" ).length > 0){
       $( "a[href*='fahrzeugfarbe']" ).text('' + fz_type + '');
           return false;
    }
}

    function aao(aao_id,custom_id,hex){
        $( "input[custom_id='" + custom_id + "']" ).parent("td").css( "background-color", "" + hex + "" );
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

<<<<<<< HEAD
   
  /*************************************************Fahrzeuge hinzufügen u. anpassen***************************************************/
=======
   /*****************************************************Fahrzeug Klasse****************************************************************/
>>>>>>> 7b19b3cbb34ea2d73dba417815ad854424d77019

    fz_edit(15091922,'CBRN-ErkKw',77); //Fahrzeug umbennen und Klasse zuweisen

<<<<<<< HEAD
 /*****************************************************Fahrzeug Klasse****************************************************************/

    aao(2591612,77,'#FA58F4'); //Optional, Fahrzeugklasse einer AAO-Button zuweisen und Farbe mittels HEX Wert anpassen
=======
   /*************************************************Fahrzeuge hinzufügen u. anpassen***************************************************/

    fz_edit(15091922,'CBRN-ErkKw',77); //Fahrzeug umbennen und Klasse zuweisen
>>>>>>> 7b19b3cbb34ea2d73dba417815ad854424d77019

})();