<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>JavaScript и DOM - 7 заданий</title>
</head>
<body>
    <h1 id="toggle-heading">Этот текст можно скрыть/показать</h1>
    <button id="toggle-btn">Скрыть текст</button>
    
    <p id="color-text">Этот текст изменит цвет при нажатии кнопки.</p>
    <button id="color-btn">Изменить цвет</button>
    
    <h1 id="changeable-heading">Исходный текст заголовка</h1>
    <button id="change-text-btn">Изменить текст</button>
    
    <p class="description">Первый элемент с классом description</p>
    <p class="description">Второй элемент с классом description</p>
    <p>Элемент без класса description</p>
    <p class="description">Третий элемент с классом description</p>
    <button id="change-all-btn">Изменить все элементы</button>
    
    <p class="description">Первый элемент с классом description</p>
    <p>Обычный абзац без класса</p>
    <p class="description">Второй элемент с классом description</p>
    <p class="other-class">Элемент с другим классом</p>
    <p class="description">Третий элемент с классом description</p>
    <button id="update-text-btn">Обновить текст</button>
    
    <div id="new-elements-container">
        <p>Существующий элемент</p>
    </div>
    <button id="add-element-btn">Добавить элемент</button>

    <p class="description">Первый элемент с классом description (будет удален)</p>
    <p class="description">Второй элемент с классом description</p>
    <p>Элемент без класса description</p>
    <p class="description">Третий элемент с классом description</p>
    <button id="delete-element-btn">Удалить первый элемент</button>

    <script>
        
        // Задание 1: Скрытие и показ текста
        const heading = document.querySelector('#toggle-heading');
        const button = document.querySelector('#toggle-btn');

        button.addEventListener('click', function() {
            if (heading.style.display === 'none') {
                heading.style.display = 'block';
                button.textContent = 'Скрыть текст';
            } else {
                heading.style.display = 'none';
                button.textContent = 'Показать текст';
            }
        });

        // Задание 2: Изменение стиля элемента
        const textElement = document.querySelector('#color-text');
        const colorButton = document.querySelector('#color-btn');

        colorButton.addEventListener('click', function() {
            textElement.style.color = 'blue';
        });

        // Задание 3: Динамическое изменение текста
        const changeableHeading = document.querySelector('#changeable-heading');
        const changeTextButton = document.querySelector('#change-text-btn');

        changeTextButton.addEventListener('click', function() {
            changeableHeading.textContent = 'Привет, мир!';
        });

        // Задание 4: Изменение элементов по классу
        const changeAllButton = document.querySelector('#change-all-btn');

        changeAllButton.addEventListener('click', function() {
            const descriptionElements = document.querySelectorAll('.description');
            
            descriptionElements.forEach(function(element) {
                element.textContent = 'Измененный текст';
            });
        });

        // Задание 5: Работа с querySelectorAll
        const updateTextButton = document.querySelector('#update-text-btn');

        updateTextButton.addEventListener('click', function() {
            const descriptionElements = document.querySelectorAll('.description');
            
            descriptionElements.forEach(function(element) {
                element.textContent = 'Новый текст';
            });
        });

        // Задание 6: Добавление нового элемента
        const addElementButton = document.querySelector('#add-element-btn');
        const container = document.querySelector('#new-elements-container');

        addElementButton.addEventListener('click', function() {
            const newElement = document.createElement('p');
            newElement.textContent = 'Новый абзац';
            container.appendChild(newElement);
        });

        // Задание 7: Удаление элемента
        const deleteElementButton = document.querySelector('#delete-element-btn');

        deleteElementButton.addEventListener('click', function() {
            const firstDescription = document.querySelector('.description');
            
            if (firstDescription) {
                firstDescription.remove();
            }
        });
    </script>
</body>
</html>