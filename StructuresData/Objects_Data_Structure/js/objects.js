"use strict";/*// Объекты как ассоциативные массивы / Первый объектuser = {};    user.name = 'Вася';    user.surname = 'Петров';    user.name = 'Сергей';    delete user.name;//  Массивы с числовыми индексами / Получить последний элемент массиваlet goods = ["Ананас", "Лимон", "Яблоко", "Апельсин", "Персик"];console.log(goods.pop());//  Массивы с числовыми индексами / Создание массиваlet styles = ['Джаз','Блюз'];console.log(styles);styles.push = ('Рок-н-Ролл');console.log(styles);let lastItem = styles.length -2;styles[lastItem] = '«Классика»';console.log(styles);alert (styles.shift() );console.log(styles);alert (styles.shift() );console.log(styles);styles.unshift('Рэп"', 'Регги');console.log(styles);//  Массивы с числовыми индексами / Получить случайное значение из массиваvar arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];var min = 0;var max = arr.length - 1;var random =  min + Math.floor(Math.random() * (max + 1 - min));var i;for (i = random; i < arr.length; ) {    console.log(arr[i]);    break;}//  Массивы с числовыми индексами / Создайте калькулятор для введённых значенийvar numberMassive = [];var summNum = 0;while (true) {    var enterNum = prompt('Введите число', 0);    if (enterNum === '' ||        enterNum === null ||        isNaN(enterNum)) break;    numberMassive.push(+enterNum);}for (var i = 0; i < numberMassive.length; i ++ ) {    summNum += numberMassive[i];}console.log(summNum);// не разобралься совсем ) Массивы с числовыми индексами / Поиск в массивеvar arr = ["test", 2, 1.5, false];function arrFind(el, arr) {    if (arr.indexOf(el) != -1) {        return true;    } else {        return false;    }}find(arr, "test"); // 0find(arr, 2);find(arr, 1.5);find(arr, 0);// Массивы с числовыми индексами / Фильтр диапазонаvar arr = [1, 2, 5, 7, 9, 6];var i;function filterRange(arr, a, b) {    let resultArray = [];    for (i=0; i < arr.length; i++) {        if ( arr[i] >= a && arr[i] <=b ) {            resultArray.push(arr[i]);        }    }    return resultArray;}console.log(filterRange(arr, 6, 8));// Массивы с числовыми индексами / Подмассив наибольшей суммыfunction getMaxSubSub (arr) {    var maxSum = 0,        partialSum = 0;    for ( var i =0; i < arr.length; i++) {        partialSum += arr[i];        maxSum = Math.max(maxSum, partialSum);        if (partialSum < 0) partialSum = 0;    }    return maxSum;}console.log(getMaxSubSum([-1, 2, 3, -9]) = 5);console.log(getMaxSubSum([2, -1, 2, 3, -9]) = 6) ;console.log(getMaxSubSum([-1, 2, 3, -9, 11]) = 11) ;console.log(getMaxSubSum([-2, -1, 1, 2]) = 3) ;console.log(getMaxSubSum([100, -9, 2, -3, 5]) = 100) ;console.log(getMaxSubSum([1, 2, 3]) = 6) ;// // Массивы: методы / Добавить класс в строкуvar obj = {    className: 'open menu'}function addClass(obj ,cls) {    let newClas = obj.className ? obj.className.split(' ') : [];    for ( var i = 0; i < newClas.length; i++) {        if (newClas[i]= cls) return;    }    newClas,push(cls) ;    obj.className = newClas.join(' ');}addClass(obj, 'new');addClass(obj, 'open');addClass(obj, 'me');alert( obj.className );*/// // Массивы: методы / Функция removeClassvar obj = {    className: 'open menu'};function removeClass (obj, cls) {    var re = new RegExp('(\\s|^)' + cls + '(\\s|$)')    obj.className = obj.className.replace(re, ' ');}removeClass (obj, "open");console.log (obj);// // Массивы: методы / Сортировать в обратном порядке