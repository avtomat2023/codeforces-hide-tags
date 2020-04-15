// ==UserScript==
// @name         codeforces-hide-tags
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide "Problem tags" on Codeforces, a serious spoiler.
// @author       yoshrc
// @match        https://codeforces.com/contest/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    for (const div of document.querySelectorAll('div.caption.titled')) {
        if (div.innerHTML.includes('Problem tags')) {
            div.parentElement.setAttribute('style', 'display: none');
        }
    }
})();
