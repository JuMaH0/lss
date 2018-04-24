// ==UserScript==
// @name         ShareAlliancePost
// @namespace    Leitstellenspiel
// @version      3.0.0
// @author       jalibu, JuMaHo
// @include      https://www.leitstellenspiel.de/missions/*
// ==/UserScript==

(() => {

    window.onload = function() {
        position = document.getElementsByTagName('small')[1].textContent;

        position_array = new Array(position);
        position_string = position_array.toString();
        var vk = position_string.indexOf("Völklingen");
        var sls = position_string.indexOf("Saarlouis");
        var sb = position_string.indexOf("Saarbrücken");
        var dil = position_string.indexOf("Dillingen");

        if(vk > 0){
            position = 'Völklingen';
        }else if(sls > 0){
            position = 'Saarlouis';
        }else if(sb > 0){
            alert('Saarbrücken');
        }else if(dil > 0){
            alert('Dillingen');
        }

        const jumpNext = false; // Set to 'true', to jump to next mission after submitting an alert.
        const enableKeyboard = true; // Set to 'false', to disable keyboard shortcuts.
        const shortcutKeys = [17, 68]; // 17= ctrl, 68 = d
        const defaultPostToChat = true; // Set to 'false', to disable default post in alliance chat.
        var position = position;
        var messages = [position,
                        'frei zum sammeln', // First entry is default
                        'kein RD senden, rest frei'];

        // Create Button and add event listener
        const initButtons = () => {
            let btnMarkup = '<div class="btn-group" style="margin-left: 5px; margin-right: 5px;">';

            btnMarkup += '<a href="#" class="btn btn-success btn-sm alert_notify_alliance" title="Alarmieren, im Verband freigeben und Nachricht in Verbands-Chat">';
            btnMarkup += '<img class="icon icons8-Phone-Filled" src="/images/icons8-phone_filled.svg" width="18" height="18">';
            btnMarkup += '<img class="icon icons8-Share" src="/images/icons8-share.svg" width="20" height="20">';
            btnMarkup += '<span class="glyphicon glyphicon-bullhorn" style="font-size: 13px;"></span>';
            btnMarkup += '</a></div>';

            let optionsBtnMarkup = '<a href="#" id="openAllianceShareOptions" class="btn btn-sm btn-default" title="Einstellungen" style="padding-top: 7px;">';
            optionsBtnMarkup += '<span class="glyphicon glyphicon-option-horizontal"></span></a>';

            optionsBtnMarkup += '<div class="btn btn-sm btn-default" style="margin:0; padding: 1px; display: none;" id="allianceShareOptions"><input type="text" id="allianceShareText" value="' + messages[0] + '">';
            optionsBtnMarkup += '<label style="margin-left: 2px; margin-right: 2px;"><input type="checkbox" ' + (defaultPostToChat ? 'checked' : '') + ' id="postToChat" name="postToChat" value="true">An VB Chat?</label>';

            optionsBtnMarkup += '<div style="text-align: left;"><ul id="ShareText">';
            $.each(messages, (index, msg) => {
                optionsBtnMarkup += '<li class="customAllianceShareText">' + msg + '</li>';
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
                        console.log('jo');
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


        initButtons();
        initKeys();


    };})();
