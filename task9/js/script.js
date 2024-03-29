window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = new Date(Date.parse(new Date()) + 18 * 60 * 60 * 1000);


    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = ('0' + t.hours).slice(-2);
            minutes.textContent = ('0' + t.minutes).slice(-2);
            seconds.textContent = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        info = document.querySelector('.info'),
        descrBtn = document.getElementsByClassName('.description-btn')[0],
        close = document.querySelector('.popup-close');


    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });

    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        formBottom = document.getElementById('form'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //form method
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            let formData = new FormData(elem);

            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request.send(json);
            // request.send(formData); //form method

            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                }

                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            });
        });
    }
    sendForm(form);
    sendForm(formBottom);
});