// ==UserScript==
// @name         Legendar Udemy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Legendar cursos da udemy atraves da transcricao traduzida pelo google
// @author       Joao Victor Mundel
// @match        https://**.udemy.com/course/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @grant        none
// ==/UserScript==

(function() {

    window.onload = function () {

        var captionsArea = document.querySelector(".captions-display--captions-cue-text--ECkJu");
        var player = document.querySelector(".vjs-tech");

        var transcriptSelected = document.querySelector(".transcript--highlight-cue--1bEgq");

        setInterval(function () {
            transcriptSelected = document.querySelector(".transcript--highlight-cue--1bEgq");
            captionsArea = document.querySelector(".captions-display--captions-cue-text--ECkJu");
            player = document.querySelector(".vjs-tech");
            if(!player.paused){
                const regex = /Descanso/i;

                captionsArea.textContent = transcriptSelected.textContent.replace(regex, "Rest");

            }
        }, 80);
            console.log("Página carregada");


    }

})();
