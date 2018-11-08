// ==UserScript==
// @name         OneKey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Alamieren mit einer Taste
// @author       JuMaHo
// @match        https://www.leitstellenspiel.de/missions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var aao_id = '2652383';
    var key = 16;

  $(document).keyup(function(e) {
  if (e.keyCode === key){
      $('#aao_' + aao_id + '')[0].click();
      $( "input[name^='commit']" )[0].click();
     }
});
})();