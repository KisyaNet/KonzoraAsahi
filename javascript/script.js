"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    if (!hamburger || !nav) return;

    hamburger.addEventListener("click", function () {
        // toggle hamburger bars
        this.querySelectorAll(".hamburger_bar").forEach(function (el) {
            el.classList.toggle("is_active");
        });
        // toggle nav visibility
        nav.classList.toggle("is_active");
    });
});


//ローディング画面を取得
const loading = document.querySelector(".loading");

//ページの読み込み完了時に処理を実行
window.addEventListener("load", () => {
    //3秒後にローディング画面を非表示にする
    setTimeout(() => {
        loading.classList.add("loaded");
    }, 3000);
});