"use strict";

// ハンバーガーメニューの開閉処理
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
        // スクロール制御：nav が表示中はスクロール禁止
        if (nav.classList.contains("is_active")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    });
});

//ローディング画面を取得
const loading = document.querySelector(".loading");

// ページ開始直後はスクロール禁止
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("no-scroll");
});

//ページの読み込み完了時に処理を実行
window.addEventListener("load", () => {
    //3秒後にローディング画面を非表示にする
    setTimeout(() => {
        loading.classList.add("loaded");
        document.body.classList.remove("no-scroll");
    }, 300);
});

const options = {
    threshold: 0.5
};

const fadeInCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(fadeInCallback, options);

// フェード対象を監視
document.querySelectorAll('.fade-in-l').forEach(el => observer.observe(el));
document.querySelectorAll('.fade-in-r').forEach(el => observer.observe(el));
