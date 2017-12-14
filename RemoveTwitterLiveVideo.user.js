// ==UserScript==
// @name         RemoveTwitterLiveVideo
// @namespace    http://twitter.com/
// @version      0.1
// @description  Remove the Live Video box from Twitter.com
// @author       forrest321
// @include      http://*twitter.com/*
// @include      https://*twitter.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var liveVid = document.querySelector(".LiveVideoHomePageModuleContainer");
    if (liveVid){
        liveVid.remove();
    }
})();