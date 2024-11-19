// Получаем элементы модального окна и кнопки
const modalButton = document.querySelector('.button'); // Кнопка для открытия модального окна
const modalContactButton = document.querySelector('.button-contact'); // Новая кнопка для открытия модального окна
const backdrop = document.querySelector('.backdrop'); // Блок с модальным окном
const closeModalButton = document.querySelector('.close'); // Кнопка закрытия

// Открыть модальное окно при нажатии на кнопку "Замовити дзвінок"
modalContactButton.addEventListener('click', () => {
  backdrop.style.display = 'flex'; // Показываем модальное окно
});

// Открыть модальное окно при нажатии на кнопку "button"
modalButton.addEventListener('click', () => {
  backdrop.style.display = 'flex'; // Показываем модальное окно
});

// Закрыть модальное окно при нажатии на кнопку закрытия
closeModalButton.addEventListener('click', (e) => {
  e.preventDefault(); // Предотвращаем переход по ссылке
  backdrop.style.display = 'none'; // Скрываем модальное окно
});

// Закрытие модального окна при клике на задний фон
backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) {
    backdrop.style.display = 'none'; // Скрываем модальное окно
  }
});

// Закрытие модального окна при нажатии на клавишу "Esc"
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { // Проверяем, была ли нажата клавиша "Esc"
      backdrop.style.display = 'none'; // Скрываем модальное окно
    }
  });
