// Получаем элементы
const form = document.getElementById('contactForm');
const submitButton = document.querySelector('.modal-button');

// Обработчик нажатия на кнопку "Замовити дзвінок"
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Получаем данные из формы
    const formData = new FormData(form);
    const formValues = {};

    // Заполняем объект formValues данными из формы
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    // Проверяем, есть ли данные в объекте
    if (Object.keys(formValues).some(key => formValues[key] !== '')) {
        // Выводим данные в консоль, если хотя бы одно поле не пустое
        console.log(formValues);

        // Очищаем форму
        form.reset();
    } else {
        // Если форма пустая, можно вывести сообщение или обработать иначе
        console.log('Форма пуста. Пожалуйста, заполните все поля.');
    }
});
