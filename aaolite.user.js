// ==UserScript==
// @name         AAO Config Lite
// @version      1.2
// @description  AAO Config Lite
// @author       JuMaHo & Jan (KBOE2)
// @include      *://www.leitstellenspiel.de/aaos/*
// @grant        none
// ==/UserScript==
(function() {
    // 0 = Fahrzeuge werden in der Liste ausgeblendet 1 = Fahrzeuge werden eingeblendet
    const aaos = {
        // FW
        fire: 1, // Löschfahrzeuge oder Tanklöschfahrzeuge
        lf_only : 0, // Löschfahrzeuge
        tlf_only : 0, // Tanklöschfahrzeuge
        wasser_amount : 1, // Liter Wasser
        wasser_amount_tlf : 1, // Liter Wasser - Nur TLF
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
        rescue_dogs_thw: 1, // Anhänger Hundetransport
        // SEG
        ktw_b: 1, // KTW Typ B
        seg_elw: 1, // ELW 1 (SEG)
        seg_gw_san: 1, // GW-San
        rescue_dogs_seg: 1, // Rettungshundefahrzeug
        // Wasserrettung
        gw_taucher: 1, // GW-Taucher
        gw_wasserrettung: 1, // GW-Wasserrettung
        boot: 1, // Boote (Allgemein)
        mzb: 1, // Mehrzweckboot
        // Rettungshundestaffel
        rescue_dogs: 1 // Anhänger Hundetransport oder Rettungshundefahrzeug
    }

    $.each(aaos, function(key, value) {
        return value === 0 ? $('.aao_' + key).hide() : null;
    });
})();
