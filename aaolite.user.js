// ==UserScript==
// @name         AAO Config Lite
<<<<<<< HEAD
// @version      1.1
// @description  AAO Config Lite
// @author       JuMaHo & Jan (KBOE2)
=======
// @version      1.0
// @description  AAO Config Lite
// @author       JuMaHo
>>>>>>> 2ba0273af949ed1bdafdc76b07b9f2292fe80911
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
<<<<<<< HEAD
    const aaos = {
        // FW
        fire: 1, // Löschfahrzeuge oder Tanklöschfahrzeuge
        lf_only : 0, // Löschfahrzeuge
        tlf_only : 0, // Tanklöschfahrzeuge
        elw : 1, // Einsatzleitfahrzeuge 1
        elw2 : 0, // Einsatzleitfahrzeuge 2
        elw1_or_elw2 : 0, // ELW 1, ELW 2 oder AB-Einsatzleitung
        ab_einsatzleitung_only : 0, // AB-Einsatzleitung
        elw2_or_ab_elw : 1, // ELW 2 oder AB-Einsatzleitung
        dlk : 1, // Drehleitern
        dlk_or_tm50 : 0, // DLK oder TM 50
        hlf_only : 0, // HLF
        hlf_or_rw_and_lf : 0, // HLF oder RW und LF
        rw : 0, // Rüstwagen oder HLF
        rw_only : 0, // Rüstwagen
        ab_ruest : 0, // AB Rüst
        ab_ruest_rw : 1, // AB Rüst oder Rüstwagen oder HLF
        gwa : 1, // GW-A oder AB-Atemschutz
        ab_atemschutz_only : 0, // AB-Atemschutz
        gw_atemschutz_only : 0, // GW-A
        gwoel : 1, // GW-Öl oder AB-Öl
        ab_oel_only : 0, // AB-Öl
        gw_oel_only : 0, // GW-Öl
        gwl2wasser : 1, // Schlauchwagen oder AB-Schlauch
        gwl2wasser_only : 0, // Schlauchwagen
        abl2wasser_only : 0, // AB-Schlauch
        gwmesstechnik : 1, // GW-Messtechnik
        gwgefahrgut : 1, // GW-Gefahrgut oder AB-Gefahrgut
        gw_gefahrgut_only : 0, // GW-Gefahrgut
        ab_gefahrgut_only : 0, // AB-Gefahrgut
        gwhoehenrettung : 1, // GW-Höhenrettung
        dekon_p : 1, // Dekon-P oder AB-Dekon-P
        only_dekon_p : 0, // Dekon-P
        only_ab_dekon_p : 0, // AB-Dekon-P
        mtw : 1, // MTW
        fwk : 1, // Feuerwehrkran
        arff : 1, // Flugfeldlöschfahrzeug
        rettungstreppe : 1, // Rettungstreppe
        turboloescher : 1, // Turbolöscher
        tm50 : 1, // TM 50
        ulf : 1, // ULF mit Löscharm
        gw_werkfeuerwehr : 1, // GW-Werkfeuerwehr
        // RD
        rtw: 1, // RTW
        ktw: 1, // KTW
        ktw_or_rtw: 1, // KTW oder RTW
        nef: 1, // NEF oder RTH
        rth_only: 1, // RTH
        nef_only: 1, // NEF
        naw: 1, // NAW
        naw_or_rtw_and_nef: 1, // NAW oder NEF+RTW
        naw_or_rtw_and_nef_or_rth: 1, // NAW oder NEF/RTH+RTW
        kdow_lna: 1, // KdoW-LNA
        kdow_orgl: 1, // KdoW-OrgL
        grtw: 1, // GRTW
        grtw0: 1, // GRTW (7 Patienten - ohne Notarzt)
        grtw1: 1, // GRTW (3 Patienten - inkl. Notarzt)
        // Pol
        fustw: 1, // FustW
        lebefkw: 1, // leBefKw
        fukw: 1, // FüKw
        grukw: 1, // GruKw
        gefkw: 1, // GefKw
        polizeihubschrauber: 1, // Polizeihubschrauber
        wasserwerfer: 1, // Wasserwerfer
        sek_zf: 1, // SEK-Zivil
        sek_mtf: 1, // SEK-Mannschaft
        mek_zf: 1, // MEK-Zivil
        mek_mtf: 1, // MEK-Mannschaft
        // THW
        gkw: 1, // GKW
        thw_mtw: 1, // MTW-TZ
        thw_mzkw: 1, // MzKW
        thw_lkw: 1, // LKW K 9
        thw_brmg_r: 1, // BRmG R
        thw_dle: 1, // Anh DLE
        thw_mlw5: 1, // MLW 5
        thw_tauchkraftwagen: 1, // Tauchkraftwagen
        thw_tauchkraftwagen_or_gw_taucher: 1, // Tauchkraftwagen oder GW-Taucher
        thw_anh_mzab: 1, // Anh MzAB
        thw_anh_schlb: 1, // Anh SchlB
        thw_anh_mzb: 1, // Anh MzB
        thw_lkw_7_lkr_19_tm: 1, // LKW 7 Lkr 19 tm
        // SEG
        ktw_b: 1, // KTW Typ B
        seg_elw: 1, // ELW 1 (SEG)
        seg_gw_san: 1, // GW-San
        // Wasserrettung
        gw_taucher: 1, // GW-Taucher
        gw_wasserrettung: 1, // GW-Wasserrettung
        boot: 1, // Boote (Allgemein)
        mzb: 1 // Mehrzweckboot
    }

    $.each(aaos, function(key, value) {
        return value === 0 ? $('.aao_' + key).hide() : null;
    });
})();
=======

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
>>>>>>> 2ba0273af949ed1bdafdc76b07b9f2292fe80911
