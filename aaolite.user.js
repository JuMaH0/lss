// ==UserScript==
// @name         AAO Config Lite
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  AAO Config Lite
// @author       You
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/*
// @include      *://www.leitstellenspiel.de/leitstellenansicht
// @include      *://www.leitstellenspiel.de/leitstellenansicht*
// @exclude      *://www.leitstellenspiel.de/alliance_threads*
// @exclude      *://www.leitstellenspiel.de/alliance_messages*
// @grant        none
// ==/UserScript==

(function() {


    // 0 = Fahrzeuge werden in der Liste ausgeblendet 1 = Fahrzeuge werden eingeblendet

    const lf_tlf = 1; //Löschfahrzeuge oder Tanklöschfahrzeuge
    const lf_only = 0; //Löschfahrzeuge
    const tlf_only = 0; //Tanklöschfahrzeuge
    const elw = 1; //Einsatzleitfahrzeuge 1
    const elw2 = 0; //Einsatzleitfahrzeuge 2

    const elw1_or_elw2 = 0; //ELW 1, ELW 2 oder AB-Einsatzleitung
    const ab_einsatzleitung_only = 0; //AB-Einsatzleitung
    const elw2_or_ab_elw = 1; //ELW 2 oder AB-Einsatzleitung
    const dlk = 1; //Drehleitern
    const dlk_or_tm50 = 0; //DLK oder TM 50

    const hlf_only = 0; //HLF
    const hlf_or_rw_and_lf = 0; //HLF oder RW und LF
    const rw = 0; //Rüstwagen oder HLF
    const rw_only = 0; //Rüstwagen
    const ab_ruest = 0; //AB Rüst

    const ab_ruest_rw = 1; //AB Rüst oder Rüstwagen oder HLF
    const gwa = 1; //GW-A oder AB-Atemschutz
    const ab_atemschutz_only = 0; //AB-Atemschutz
    const gw_atemschutz_only = 0; //GW-A
    const gwoel = 1; //GW-Öl oder AB-Öl

    const ab_oel_only = 0; //AB-Öl
    const gw_oel_only = 0; //GW-Öl
    const gwl2wasser = 1; //Schlauchwagen oder AB-Schlauch
    const gwl2wasser_only = 0; //Schlauchwagen
    const abl2wasser_only = 0; //AB-Schlauch

    const gwmesstechnik = 1; //GW-Messtechnik
    const gwgefahrgut = 1; //GW-Gefahrgut oder AB-Gefahrgut
    const gw_gefahrgut_only = 0; //GW-Gefahrgut
    const ab_gefahrgut_only = 0; //AB-Gefahrgut
    const gwhoehenrettung = 1; //GW-Höhenrettung

    const dekon_p = 1; //Dekon-P oder AB-Dekon-P
    const only_dekon_p = 0; //Dekon-P
    const only_ab_dekon_p = 0; //AB-Dekon-P
    const mtw = 1; //MTW
    const fwk = 1; //Feuerwehrkran

    const arff = 1; //Flugfeldlöschfahrzeug
    const rettungstreppe = 1; //Rettungstreppe
    const turboloescher = 1; //Turbolöscher
    const tm50 = 1; //TM 50
    const ulf = 1; //ULF mit Löscharm
    const gw_werkfeuerwehr = 1; //GW-Werkfeuerwehr


    if(lf_tlf === 0){document.getElementsByClassName('aao_fire')[0].style.display = 'none';}
    if(lf_only === 0){document.getElementsByClassName('aao_lf_only')[0].style.display = 'none';}
    if(tlf_only === 0){document.getElementsByClassName('aao_tlf_only')[0].style.display = 'none';}
    if(elw === 0){document.getElementsByClassName('aao_elw')[0].style.display = 'none';}
    if(elw2 === 0){document.getElementsByClassName('aao_elw2')[0].style.display = 'none';}

    if(elw1_or_elw2 === 0){document.getElementsByClassName('aao_elw1_or_elw2')[0].style.display = 'none';}
    if(ab_einsatzleitung_only === 0){document.getElementsByClassName('aao_ab_einsatzleitung_only')[0].style.display = 'none';}
    if(elw2_or_ab_elw === 0){document.getElementsByClassName('aao_elw2_or_ab_elw')[0].style.display = 'none';}
    if(dlk === 0){document.getElementsByClassName('aao_dlk')[0].style.display = 'none';}
    if(dlk_or_tm50 === 0){document.getElementsByClassName('aao_dlk_or_tm50')[0].style.display = 'none';}

    if(hlf_only === 0){document.getElementsByClassName('aao_hlf_only')[0].style.display = 'none';}
    if(hlf_or_rw_and_lf === 0){document.getElementsByClassName('aao_hlf_or_rw_and_lf')[0].style.display = 'none';}
    if(rw === 0){document.getElementsByClassName('aao_rw')[0].style.display = 'none';}
    if(rw_only === 0){document.getElementsByClassName('aao_rw_only')[0].style.display = 'none';}
    if(ab_ruest === 0){document.getElementsByClassName('aao_ab_ruest')[0].style.display = 'none';}

    if(ab_ruest_rw === 0){document.getElementsByClassName('aao_ab_ruest_rw')[0].style.display = 'none';}
    if(gwa === 0){document.getElementsByClassName('aao_gwa')[0].style.display = 'none';}
    if(ab_atemschutz_only === 0){document.getElementsByClassName('aao_ab_atemschutz_only')[0].style.display = 'none';}
    if(gw_atemschutz_only === 0){document.getElementsByClassName('aao_gw_atemschutz_only')[0].style.display = 'none';}
    if(gwoel === 0){document.getElementsByClassName('aao_gwoel')[0].style.display = 'none';}

    if(ab_oel_only === 0){document.getElementsByClassName('aao_ab_oel_only')[0].style.display = 'none';}
    if(gw_oel_only === 0){document.getElementsByClassName('aao_gw_oel_only')[0].style.display = 'none';}
    if(gwl2wasser === 0){document.getElementsByClassName('aao_gwl2wasser')[0].style.display = 'none';}
    if(gwl2wasser_only === 0){document.getElementsByClassName('aao_gwl2wasser_only')[0].style.display = 'none';}
    if(abl2wasser_only === 0){document.getElementsByClassName('aao_abl2wasser_only')[0].style.display = 'none';}

    if(gwmesstechnik === 0){document.getElementsByClassName('aao_gwmesstechnik')[0].style.display = 'none';}
    if(gwgefahrgut === 0){document.getElementsByClassName('aao_gwgefahrgut')[0].style.display = 'none';}
    if(gw_gefahrgut_only === 0){document.getElementsByClassName('aao_gw_gefahrgut_only')[0].style.display = 'none';}
    if(ab_gefahrgut_only === 0){document.getElementsByClassName('aao_ab_gefahrgut_only')[0].style.display = 'none';}
    if(gwhoehenrettung === 0){document.getElementsByClassName('aao_gwhoehenrettung')[0].style.display = 'none';}

    if(dekon_p === 0){document.getElementsByClassName('aao_dekon_p')[0].style.display = 'none';}
    if(only_dekon_p === 0){document.getElementsByClassName('aao_only_dekon_p')[0].style.display = 'none';}
    if(only_ab_dekon_p === 0){document.getElementsByClassName('aao_only_ab_dekon_p')[0].style.display = 'none';}
    if(mtw === 0){document.getElementsByClassName('aao_mtw')[0].style.display = 'none';}
    if(fwk === 0){document.getElementsByClassName('aao_fwk')[0].style.display = 'none';}

    if(arff === 0){document.getElementsByClassName('aao_arff')[0].style.display = 'none';}
    if(rettungstreppe === 0){document.getElementsByClassName('aao_rettungstreppe')[0].style.display = 'none';}
    if(turboloescher === 0){document.getElementsByClassName('aao_turboloescher')[0].style.display = 'none';}
    if(tm50 === 0){document.getElementsByClassName('aao_tm50')[0].style.display = 'none';}
    if(ulf === 0){document.getElementsByClassName('aao_ulf')[0].style.display = 'none';}

    if(gw_werkfeuerwehr === 0){document.getElementsByClassName('aao_gw_werkfeuerwehr')[0].style.display = 'none';}


})();