'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = +prompt('Во сколько обойдется?', '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюждет: ' + appData.moneyPerDay + ' тенге.');
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 1000) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 7000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 7000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накопления?'),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome + ' тенге.');
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt('Статья необязательных расходов?', '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
                console.log('done');
                appData.optionalExpenses[i] = a;
                console.log(appData.optionalExpenses);
            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

        if (typeof(items) != 'string' || items == '' || typeof(items) == null) {
            console.log("Не верно!");   
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
        }

        appData.income.forEach(function(item, i) {
            alert('Способы доп. зароботка: ' + (i+1) + ' - ' + item );
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}