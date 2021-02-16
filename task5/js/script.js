'use strict';

let menu = document.querySelectorAll('.menu')[0],
    menuItem = document.querySelectorAll('.menu-item'),
    title = document.getElementById('title'),
    adv = document.querySelectorAll('.adv')[0],
    promtApple = document.getElementById('prompt'),
    menuLi = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(menuLi);
menuLi.classList.add('menu-item');
menuLi.textContent = 'Пятый пункт';

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let yourOpinion = prompt('Какое ваше мнение о продукции Apple?', '');
promtApple.textContent = yourOpinion;











