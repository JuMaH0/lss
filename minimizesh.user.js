// ==UserScript==
// @name         MinimizeSH
// @version      0.0.6
// @description  Einsatzliste anhand der vorgabe von MissionSH minimalisieren
// @author       JuMaHo
// @include      *://www.leitstellenspiel.de/
// @grant        https://github.com/JuMaH0/lss/raw/master/minimizesh.user.js
// @namespace
// ==/UserScript==
(function(){if(localStorage.getItem('missionshshowmap')==='true'){var showmapchecked='checked'};if(localStorage.getItem('missionshinvolved')==='true'){var involvedchecked='checked'};if(localStorage.getItem('missionshuninvolved')==='true'){var uninvolvedchecked='checked'};if(localStorage.getItem('missionshpatients')==='true'){var patientschecked='checked'};if(localStorage.getItem('missionshparamedic')==='true'){var paramedicchecked='checked'};if(localStorage.getItem('missionshrecruitment')==='true'){var recruitmentchecked='checked'};if(localStorage.getItem('missionshradio')==='true'){var radiochecked='checked'};if(localStorage.getItem('missionshminimize')==='true'){var minimize='checked'};if(minimize==='checked'){var tid=setInterval(mycode,5000);function mycode(){var mission=$('[id^=mission_panel_heading_]');var x;var mission_count=mission.length;for(x=0;x<mission_count;x++){var mission_id=$(mission[x]).attr('id').match(/[0-9]+/);var allpatients=document.querySelector('#mission_patients_'+mission_id+'');var needrd=allpatients.querySelectorAll("div.alert-danger");let menu=document.getElementById('mission_panel_'+mission_id+'');let firstChild=menu.children;if($('#mission_panel_'+mission_id+'').html()){firstChild[1].style.display='none'}
if($("#mission_participant_new_"+mission_id+"").hasClass("glyphicon-asterisk hidden")&&recruitmentchecked==='checked'&&$('#mission_missing_'+mission_id+'').html()){firstChild[1].style.display='block'}
if($(radiochecked==='checked'&&"#mission_missing_short_"+mission_id+"").html()){firstChild[1].style.display='block'}
if(paramedicchecked==='checked'&&needrd[0]!=undefined){firstChild[1].style.display='block'}
if(patientschecked==='checked'&&allpatients[0]!=undefined){firstChild[1].style.display='block'}}}}})();
