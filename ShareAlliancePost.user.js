// ==UserScript==
// @name         ShareAlliancePost
// @namespace    Leitstellenspiel
// @version      3.2.2
// @author       jalibu, JuMaHo
// @include      https://www.leitstellenspiel.de/missions/*
// ==/UserScript==

(() => {
    'use strict';

    const jumpNext = false; // Set to 'true', to jump to next mission after submitting an alert.
    const enableKeyboard = true; // Set to 'false', to disable keyboard shortcuts.
    const shortcutKeys = [17, 68]; // 17= ctrl, 68 = d
    const defaultPostToChat = true; // Set to 'false', to disable default post in alliance chat.
    const messages = ['frei zum sammeln', // First entry is default
                      'Rettungsdienst für %PATIENTS_LEFT% Patienten benötigt',
                      '%ADDRESS%',
                      '%ADDRESS% kein RD, rest frei',
                      'Offen bis %MY_CUSTOM_TIME%.',
                      '%UNITS_REQUIRED%'];

    // Create Button and add event listener
    const initButtons = () => {
        let btnMarkup = '<div class="btn-group" style="margin-left: 5px; margin-right: 5px;">';

        btnMarkup += '<a href="#" class="btn btn-success btn-sm alert_notify_alliance" title="Alarmieren, im Verband freigeben und Nachricht in Verbands-Chat">';
        btnMarkup += '<img class="icon icons8-Phone-Filled" src="/images/icons8-phone_filled.svg" width="18" height="18">';
        btnMarkup += '<img class="icon icons8-Share" src="/images/icons8-share.svg" width="20" height="20">';
        btnMarkup += '<span class="glyphicon glyphicon-bullhorn" style="font-size: 13px;"></span>';
        btnMarkup += '</a></div>';

        let optionsBtnMarkup = '<a href="#" id="openAllianceShareOptions" class="btn btn-sm btn-default" title="Einstellungen" style="margin: 0">';
        optionsBtnMarkup += '<span class="glyphicon glyphicon-option-horizontal"></span></a>';

        optionsBtnMarkup += '<div class="btn btn-sm btn-default" style="margin:0; max-width: 300px; display: none; " id="allianceShareOptions"><input type="text" id="allianceShareText" value="' + messages[0] + '">';
        optionsBtnMarkup += '<label style="margin-left: 2px; margin-right: 2px;"><input type="checkbox" ' + (defaultPostToChat ? 'checked' : '') + ' id="postToChat" name="postToChat" value="true">An VB Chat?</label>';

        optionsBtnMarkup += '<div style="text-align: left;"><ul>';
        $.each(messages, (index, msg) => {
            optionsBtnMarkup += '<li class="customAllianceShareText" style="overflow: hidden; -moz-text-overflow: ellipsis; text-overflow: ellipsis;white-space: nowrap;">' + msg + '</li>';
        });
        optionsBtnMarkup += '</ul></div>';
        optionsBtnMarkup += '</div>';

        $('.alert_next_alliance').parent().append(btnMarkup);

        $('.alert_notify_alliance').first().parent().prepend(optionsBtnMarkup);


        $('#openAllianceShareOptions').click(() => {
            $('#allianceShareOptions').show();
            $('#openAllianceShareOptions').hide();
        });


        $('.customAllianceShareText').click(function() {
            $('#allianceShareText').val($(this).text());
        });


        if(jumpNext){
            $('.alert_notify_alliance').append('<span style="margin-left: 5px;" class="glyphicon glyphicon-arrow-right"></span>');
        }

        $('.alert_notify_alliance').click(processAllianceShare);

    };

    // Add Keylisteners
    const initKeys = () => {
        if(enableKeyboard){
            let keys = [];

            $(document).keydown((e) => {
                keys.push(e.which);
                if(keys.length === shortcutKeys.length){
                    let pressedAll = true;
                    $.each(shortcutKeys, (index, value) =>{
                        if(keys.indexOf(value) < 0){
                            pressedAll = false;
                            return;
                        }
                    });
                    if(pressedAll){
                        processAllianceShare();
                    }
                }
            });

            $(document).keyup((e) => {
                keys.splice(keys.indexOf(e.which));
            });
        }
    };

    const processAllianceShare = () => {

        $('#allianceShareOptions').hide();
        $('#openAllianceShareOptions').show();

        const sendToAlliance = $('#postToChat').is(':checked') ? 1 : 0;
        const missionShareLink = $('#mission_alliance_share_btn').attr('href');
        const missionId = missionShareLink.replace('/missions/','').replace('/alliance', '');
        const csrfToken = $('meta[name="csrf-token"]').attr('content');
        const message = $('#allianceShareText').val();

        $('.alert_notify_alliance').html('Teilen..');
        $.get('/missions/' + missionId + '/alliance' , () => {
            $('.alert_notify_alliance').html('Chatten..');
            $.post( "/mission_replies", {authenticity_token: csrfToken, mission_reply: {alliance_chat: sendToAlliance, content: message, mission_id: missionId}}, (data, status, xhr) => {
                $('.alert_notify_alliance').html('Alarmieren..');
                if(jumpNext){
                    $('.alert_next').first().click();
                } else {
                    $('#mission_alarm_btn').click();
                }
            } );
        });

    };

    const transformMessages = () => {
        try {
            // Prepare values for %ADDRESS% and %PATIENTS_LEFT%
            // Possible inputs 'xy street, 1234 city', '1234 city', '123 city | 2' (where 2 is number of patients)
            let addressAndPatrientRow = $('.mission_header_info >> small').first().text().trim().split(',');
            addressAndPatrientRow = addressAndPatrientRow[addressAndPatrientRow.length-1].split('|');
            const address = addressAndPatrientRow[0];
            const patientsLeft = addressAndPatrientRow.length === 2 ? addressAndPatrientRow[1] : 0;


            // Adds needed vehicles to selection
            var unitsRequired = 'Keine weiteren Einheiten benötigt';
            if ( $(".alert-danger").length > 0 ) {
                var unitsRequiredRow = document.getElementsByClassName('alert-danger')[0].innerHTML;
                unitsRequired = unitsRequiredRow.substr(7, unitsRequiredRow.length-1);
            } 


            // Prepare values for %MY_CUSTOM_TIME%
            let customTime = new Date().getHours()+3;
            customTime = customTime > 24 ? customTime -24 : customTime;

            for(let i = 0; i<messages.length; i++){
                messages[i] = messages[i].replace('%ADDRESS%', address);
                messages[i] = messages[i].replace('%MY_CUSTOM_TIME%', customTime + ':00 Uhr');
                messages[i] = messages[i].replace('%PATIENTS_LEFT%', patientsLeft);
                messages[i] = messages[i].replace('%UNITS_REQUIRED%', unitsRequired);
            }
        } catch (e){
            console.log('Error transforming messages: ' + e);
        }
    };

    transformMessages();
    initButtons();
    initKeys();
})();
