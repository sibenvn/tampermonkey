// ==UserScript==
// @name         Animevietsub
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       siben.vn
// @match        https://animevietsub.cx/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function remove(selector)
    {
        const elments = document.querySelectorAll(selector);
        elments.forEach((elment) => {
            elment.remove();
        });
    }
    function markPopupAsOpened() {
        const expirationTime = new Date();
        expirationTime.setTime(expirationTime.getTime() + 30 * 60 * 1000); // 30min
        document.cookie = `popupOpened=true; expires=${expirationTime.toUTCString()}; path=/`;
    }
    remove('.Adv');
    remove('.Ads');
    remove('#pc-catfixx');
    remove('.notif-300');
    remove('#mobile-catfixx');
    remove('#mobile-catfish-top');
    setInterval(() => {
        markPopupAsOpened();
        remove('#invideo_wrapper');
    }, 1000);
})();