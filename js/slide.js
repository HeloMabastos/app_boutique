new Swiper(".swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (_, className) {
        return '<span class="' + className + '"></span>';
      },
  },
  loop: true,
  autoplay: {
    delay: 1000,
  },
});