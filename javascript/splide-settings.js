const slider_options = {
    type: "loop",
    pagination: true,
    drag: "true",
    autoplay: true,
    interval: 5000,
    gap: 10,
    perPage: 2,
    perMove: 1,
    padding: "5%",
    breakpoints: {
        768: {
            perPage: 1, 
            padding: 0,
        }
    },
    outView: { autoplay: false }
};
    const splide = new Splide(".splide", slider_options);
    splide.mount(window.splide.Extensions);