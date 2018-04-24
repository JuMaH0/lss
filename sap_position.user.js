// ==UserScript==
// @name         New Userscript
// @namespace    SAP-addon
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.leitstellenspiel.de/*
// @grant        none
// ==/UserScript==

(function() {


    function test(){

        document.getElementsByClassName("clearfix").innerHTML = "whatever";

        position = document.getElementsByTagName('small')[1].textContent;
        position_array = new Array(position);
        position_string = position_array.toString();
        var vk = position_string.indexOf("Völklingen");
        var sls = position_string.indexOf("Saarlouis");
        var sb = position_string.indexOf("Saarbrücken");
        var dil = position_string.indexOf("Dillingen");


        if(vk > 0){
            alert('Völklingen');
            position = 'Völklingen';
        }else if(sls > 0){
            alert('Saarlouis');
        }else if(sb > 0){
            alert('Saarbrücken');
        }else if(dil > 0){
            alert('Dillingen');
        }

    }
    setTimeout(test, 500);


})();