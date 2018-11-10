// ==UserScript==
// @name         AAO Overlap
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Dieses Script hebt beim überfahren mit der Maus die entsprechende Spalte hervor
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

$(".col-xs-4").mouseover(function(){$(this).css("z-index","1000")}),$(".col-xs-4").mouseout(function(){$(this).css("z-index","0")});