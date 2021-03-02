// ==UserScript==
// @name         MissionSH
// @version      2.0.8
// @description  Einsätze anzeigen oder ausblenden anhand der Labelfarben grün, gelb, rot
// @author       JuMaHo
// @include      *://www.leitstellenspiel.de/
// @grant        none
// @namespace    https://github.com/JuMaH0/lss/raw/master/missionsh.user.js
// ==/UserScript==
(function(){if(localStorage.getItem('missionshshowmap')==='true'){var showmapchecked='checked'};if(localStorage.getItem('missionshinvolved')==='true'){var involvedchecked='checked'};if(localStorage.getItem('missionshuninvolved')==='true'){var uninvolvedchecked='checked'};if(localStorage.getItem('missionshpatients')==='true'){var patientschecked='checked'};if(localStorage.getItem('missionshparamedic')==='true'){var paramedicchecked='checked'};if(localStorage.getItem('missionshrecruitment')==='true'){var recruitmentchecked='checked'};if(localStorage.getItem('missionshradio')==='true'){var radiochecked='checked'};if(localStorage.getItem('missionshminimize')==='true'){var minimizechecked='checked'};$("body").prepend(`



<div class="modal fade" id="missionshModal" tabindex="-1" role="dialog" aria-labelledby="missionshModalLabel" aria-hidden="true" style="z-index: 9999;">



  <div class="modal-dialog modal-dialog-centered" role="document">



   <div class="modal-content" style="margin-top: 80px;">



    <form id="role-form"  method="get">



        <div class="modal-header" style="border-bottom: 0px;">



            <button type="button" class="close" data-dismiss="modal">&times;</button>







            <h4 class="modal-title"></h4>



        </div>



        <div class="modal-body" style="height: auto;">







            <div class="form-group col-md-12">







                <input class="form-check-input" type="checkbox" value="" id="cbxshowmap" ${showmapchecked}>



                     <label class="form-check-label" for="cbxshowmap"> Einsätze auf Karte ausblenden



            </div>







   <div class="form-group col-md-12">







                <input class="form-check-input" type="checkbox" value="" id="cbxinvolved" ${involvedchecked}>



                     <label class="form-check-label" for="cbxinvolved"> Einsätze <b>MIT</b> eigener Beteiligung anzeigen



            </div>











   <div class="form-group col-md-12">







                <input class="form-check-input" type="checkbox" value="" id="cbxuninvolved" ${uninvolvedchecked}>



                <label class="form-check-label" for="cbxuninvolved"> Einsätze <b>OHNE</b> eigener Beteiligung anzeigen



            </div>











   <div class="form-group col-md-12">







                <input class="form-check-input" type="checkbox" value="" id="cbxpatients" ${patientschecked}>



                <label class="form-check-label" for="cbxpatients"> Einsätze mit Patienten anzeigen



            </div>











           <div class="form-group col-md-12">







                <input class="form-check-input" type="checkbox" value="" id="cbxparamedic" ${paramedicchecked}>



                <label class="form-check-label" for="cbxparamedic"> Einsätze anzeigen wenn RD benötigt



            </div>







           <div class="form-group col-md-12">







                <input class="form-check-input" type="checkbox" value="" id="cbxrecruitment" ${recruitmentchecked}>



                <label class="form-check-label" for="cbxrecruitment"> Einsätze anzeigen wenn Verstärkung benötigt



            </div>











           <div class="form-group col-md-12">







                <input class="form-check-input" type="checkbox" value="" id="cbxradio" ${radiochecked}>



                <label class="form-check-label" for="cbxradio"> Einsätze mit Sprechwunsch anzeigen



            </div>











<div class="form-group col-md-12">







                <input class="form-check-input" type="checkbox" value="" id="cbxminimize" ${minimizechecked}>



                <label class="form-check-label" for="ccbxminimize"> Einsatzliste  minimalisieren ( <a href="https://github.com/JuMaH0/lss/raw/master/minimizesh.user.js">Script MinimizeSH benötigt</a> )



            </div>















            <div class="clearfix"></div>



        </div>



        <div class="modal-footer">







            <button type="submit" id="savemissionsh" class="btn btn-success" >Speichern</button>



            <button type="button" class="btn btn-danger" data-dismiss="modal">Abbrechen</button>







        </div>



    </form>



</div>`);$("#navbar_profile_link").parent().after(`<li role="presentation"><a style="cursor:pointer" id="MissionSh" data-toggle="modal" data-target="#missionshModal"><img class="icon icons8-Share" src="https://imagizer.imageshack.com/img922/730/GRFYDq.png" width="24" height="24"> MissionSH</a></li>`);$("body").on("click","#savemissionsh",function(){var save={};save.showmap=$('#cbxshowmap')[0].checked;save.involved=$('#cbxinvolved')[0].checked;save.uninvolved=$('#cbxuninvolved')[0].checked;save.patients=$('#cbxpatients')[0].checked;save.paramedic=$('#cbxparamedic')[0].checked;save.recruitment=$('#cbxrecruitment')[0].checked;save.radio=$('#cbxradio')[0].checked;save.minimize=$('#cbxminimize')[0].checked;localStorage.missionshshowmap=save.showmap;localStorage.missionshinvolved=save.involved;localStorage.missionshuninvolved=save.uninvolved;localStorage.missionshpatients=save.patients;localStorage.missionshparamedic=save.paramedic;localStorage.missionshrecruitment=save.recruitment;localStorage.missionshradio=save.radio;localStorage.missionshminimize=save.minimize;alert('Gespeichert, Seite wird nun neu geladen!');window.location.reload(true);});var circle='width: 20px; height: 20px; border: 1px solid black; text-align: center; border-radius: 20px;';$("#search_input_field_missions").before('<div style="float: right; margin-left: 10px;"><a id="red"><div id="red_circle" style="background-color: #c9302c; cursor: pointer;'+circle+' color: black; display:inline-block; text-decoration: none;"></div></a>');$("#search_input_field_missions").before('<div style="float: right; margin-left: 10px;"><a id="yellow"><div id="yellow_circle" style="background-color: #fedc32; cursor: pointer;'+circle+' color: black; display:inline-block; text-decoration: none;"></div></a>');$("#search_input_field_missions").before('<div style="float: right;"><a id="green"><div id="green_circle" style="background-color: #32cd32; cursor: pointer;'+circle+' color: black; display:inline-block; text-decoration: none;"></div></a>');$(".mission_panel_green").css({'display':"block",'animation':'fadeIn 1s linear forwards'});$(".mission_panel_yellow").css({'display':"block",'animation':'fadeIn 1s linear forwards'});$(".mission_panel_red").css({'display':"block",'animation':'fadeIn 1s linear forwards'});var tid=setInterval(mycode,5000);function mycode(){let missionDeleteOrigin=missionDelete;missionDelete=function(e){missionDeleteOrigin(e),$("#mission_"+e).addClass("finished")};var status_green=document.getElementById('green_circle').style.backgroundColor;var status_yellow=document.getElementById('yellow_circle').style.backgroundColor;var status_red=document.getElementById('red_circle').style.backgroundColor;if(status_green==='rgb(211, 211, 211)'){$(".mission_panel_green").css({'display':"none"});if(showmapchecked==='checked'){$(".leaflet-interactive[src*='green_images']").css({'display':'none'})
$(".leaflet-interactive[src*='gruen']").css({'display':'none'})
localStorage.greenleaflet='none';}}else{$(".mission_panel_green").css({'display':"block"});$(".leaflet-interactive[src*='green_images']").css({'display':'block'});$(".leaflet-interactive[src*='gruen']").css({'display':'block'});localStorage.greenleaflet='block';}
if(status_yellow==='rgb(211, 211, 211)'){$(".mission_panel_yellow").css({'display':'none'})
if(showmapchecked==='checked'){$(".leaflet-interactive[src*='yellow_images']").css({'display':'none'});$(".leaflet-interactive[src*='gelb']").css({'display':'none'});localStorage.yellowleaflet='none';}}else{$(".mission_panel_yellow").css({'display':'block'});$(".leaflet-interactive[src*='yellow_images']").css({'display':'block'});$(".leaflet-interactive[src*='gelb']").css({'display':'block'});localStorage.yellowleaflet='block';}
if(status_red==='rgb(211, 211, 211)'){$(".mission_panel_red").css({'display':'none'})
if(showmapchecked==='checked'){$(".leaflet-interactive[src*='red_images']").css({'display':'none'})
$(".leaflet-interactive[src*='rot']").css({'display':'none'})
localStorage.redleaflet='none';}}else{$(".mission_panel_red").css({'display':'block'})
$(".leaflet-interactive[src*='red_images']").css({'display':'block'});$(".leaflet-interactive[src*='rot']").css({'display':'block'});localStorage.redleaflet='block';}
var mission=$('[id^=mission_panel_heading_]');var x;var mission_count=mission.length;for(x=0;x<mission_count;x++){var count_red=document.getElementById("mission_list").getElementsByClassName("mission_panel_red").length;var count_yellow=document.getElementById("mission_list").getElementsByClassName("mission_panel_yellow").length;var count_green=document.getElementById("mission_list").getElementsByClassName("mission_panel_green").length;if(count_red>99){document.getElementById('red_circle').innerHTML='∞';}else{document.getElementById('red_circle').innerHTML=''+count_red+'';}
if(count_yellow>99){document.getElementById('yellow_circle').innerHTML='∞';}else{document.getElementById('yellow_circle').innerHTML=''+count_yellow+'';}
if(count_green>99){document.getElementById('green_circle').innerHTML='∞';}else{document.getElementById('green_circle').innerHTML=''+count_green+'';}
var mission_id=$(mission[x]).attr('id').match(/[0-9]+/);var allpatients=document.querySelector('#mission_patients_'+mission_id+'');var needrd=allpatients.querySelectorAll("div.alert-danger");if(paramedicchecked==='checked'&&needrd[0]!=undefined){$("#mission_panel_"+mission_id+".mission_panel_red").css({'display':'block'});}
if(patientschecked==='checked'&&$('#mission_patients_'+mission_id+'').html()){$("#mission_panel_"+mission_id+".mission_panel_red").css({'display':'block'});}
if(recruitmentchecked==='checked'&&$('#mission_missing_'+mission_id+'').html()){$("#mission_panel_"+mission_id+".mission_panel_red").css({'display':'block'});}
if($(radiochecked==='checked'&&"#mission_missing_short_"+mission_id+"").html()){$("#mission_panel_"+mission_id+".mission_panel_red").css({'display':'block'});$("#mission_panel_"+mission_id+".mission_panel_yellow").css({'display':'block'});$("#mission_panel_"+mission_id+".mission_panel_green").css({'display':'block'});}
if($(uninvolvedchecked==='checked'&&"#mission_participant_"+mission_id+"").hasClass("glyphicon-user hidden")){$("#mission_panel_"+mission_id+".mission_panel_red").css({'display':'block'});$("#mission_panel_"+mission_id+".mission_panel_yellow").css({'display':'block'});$("#mission_panel_"+mission_id+".mission_panel_green").css({'display':'block'});}
if($(involvedchecked==='checked'&&"#mission_participant_new_"+mission_id+"").hasClass("glyphicon-asterisk hidden")){$("#mission_panel_"+mission_id+".mission_panel_red").css({'display':'block'});$("#mission_panel_"+mission_id+".mission_panel_yellow").css({'display':'block'});$("#mission_panel_"+mission_id+".mission_panel_green").css({'display':'block'});}}}
$("#green").click(function(){if($('.mission_panel_green').css('display')==='block'){$(".mission_panel_green").css({'display':'none'})
$("#green_circle").css({'background-color':'#D3D3D3'});if(showmapchecked==='checked'){$(".leaflet-interactive[src*='green_images']").css({'display':'none'})
$(".leaflet-interactive[src*='gruen']").css({'display':'none'})
localStorage.greenleaflet='none';}}else{$(".mission_panel_green").css({'display':'block'});$("#green_circle").css({'background-color':'#32cd32'});$(".leaflet-interactive[src*='green_images']").css({'display':'block'});$(".leaflet-interactive[src*='gruen']").css({'display':'block'});localStorage.redleaflet='block';}});$("#yellow").click(function(){if($('.mission_panel_yellow').css('display')==='block'){$(".mission_panel_yellow").css({'display':'none'})
$("#yellow_circle").css({'background-color':'#D3D3D3'});if(showmapchecked==='checked'){$(".leaflet-interactive[src*='yellow_images']").css({'display':'none'})
$(".leaflet-interactive[src*='gelb']").css({'display':'none'})
localStorage.yellowleaflet='none';}}else{$(".mission_panel_yellow").css({'display':'block'});$("#yellow_circle").css({'background-color':'#fedc32'});$(".leaflet-interactive[src*='yellow_images']").css({'display':'block'});$(".leaflet-interactive[src*='gelb']").css({'display':'block'});localStorage.yellowleaflet='block';}});$("#red").click(function(){if($('.mission_panel_red').css('display')==='block'){$('.mission_panel_red').css({'display':'none'}).fadeOut()
$("#red_circle").css({'background-color':'#D3D3D3'});if(showmapchecked==='checked'){$(".leaflet-interactive[src*='red_images']").css({'display':'none'})
$(".leaflet-interactive[src*='rot']").css({'display':'none'})
localStorage.redleaflet='none';}}else{$(".mission_panel_red").css({'display':'block'});$("#red_circle").css({'background-color':'#c9302c'});$(".leaflet-interactive[src*='red_images']").css({'display':'block'})
$(".leaflet-interactive[src*='rot']").css({'display':'block'})
localStorage.redleaflet='block';}});})();







