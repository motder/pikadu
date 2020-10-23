//создаем переменнуюб в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// создаем прееменную в которую положим кнопку меню
let menu = document.querySelector('.sidebar');
//отслежіваеьм клик по кнопке меню
menuToggle.addEventListener('click', function (event) {
 //отменяем стандрартніе поведение ссілки
    event.preventDefault();
    // вешаем класс на меню когда кликунл по кнопке меню
    menu.classList.toggle('visible');
})

