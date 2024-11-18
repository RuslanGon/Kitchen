const swiper = new Swiper('.swiper', {
    // Горизонтальное направление
    direction: 'horizontal',
    loop: true,

    // Отображение 3 слайдов одновременно
    slidesPerView: 3,
    spaceBetween: 20, // Одинаковое расстояние между слайдами (20px)
  
    // Пагинация
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Навигационные стрелки
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },
});
