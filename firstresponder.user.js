// ==UserScript==
// @name         FirstResponder
// @namespace    http://tampermonkey.net/
// @version      1.0.6
// @description  Script zur Alamierung des nächstliegendes FR Fahrzeugs
// @author       JuMaHo
// @include      *://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {

    const ids = {
        '5703617': [
            2,
            5,
            10,
            11,
            12,
            13,
            14,
        ],
        '5703974': [
            32,
            33,
            35,
            36,
            39,
            40,
            41,
            43,
            44,
            45,
            47,
            48,
            49,
            80,
            81,
            82,
        ],
    };

    for (let aao in ids) {
        let trgt = document.querySelector(`#aao_${aao}`);
        trgt && trgt.addEventListener('click', () => {
            Array.from(document.querySelectorAll(".vehicle_checkbox:enabled")).some(el => {
                let vehicle_type_id = parseInt(el.getAttribute('vehicle_type_id')) || 0;
                let vehicle_id = el.getAttribute('value');

                if(!document.querySelector(`#vehicle_checkbox_${vehicle_id}:checked`) && ids[aao].indexOf(vehicle_type_id) !== -1) {
                    document.querySelector(`#vehicle_checkbox_${vehicle_id}`).click();
                    return true;
                }
            });
        });
    }
})();
