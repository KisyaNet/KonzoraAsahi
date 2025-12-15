const fade_in_options = { threshold: 0.5 };



document.addEventListener("DOMContentLoaded", () => {

    // ページ開始直後のスクロール禁止
    document.body.classList.add("no-scroll");

    // ハンバーガーメニュー
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const links = document.querySelectorAll(".nav-link");


    const toggleMenu = () => {
        hamburger.querySelectorAll(".hamburger-bar")
            .forEach(el => el.classList.toggle("is-active"));

        nav.classList.toggle("is-active");

        if (nav.classList.contains("is-active")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    };

    hamburger.addEventListener("click", toggleMenu);

    // ページ内リンクがクリックされたときの処理
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            if (nav.classList.contains("is-active")) {
                toggleMenu(); 
            }
        });
    });
});

// IntersectionObserver（フェードイン）
const fadeInCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(fadeInCallback, fade_in_options);
document.querySelectorAll('.fade-in-l, .fade-in-r, .fade-in-zoom, .fade-in-up')
    .forEach(el => observer.observe(el));


// ローディング画面
window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");
    const mainVisual = document.querySelector(".main-visual");
    const mainVisualL = document.querySelector(".main-visual-l");
    const logo = document.querySelector(".konzora-logo");

    setTimeout(() => {
        loading.classList.add("loaded");
        document.body.classList.remove("no-scroll");

        loading.addEventListener("transitionend", () => {
            mainVisual.classList.add("show");
            mainVisualL.classList.add("show");
            logo.classList.add("show");
        }, { once: true }); 

    }, 2000);
});