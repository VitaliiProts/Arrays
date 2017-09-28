var dinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр"];

dinosaurs[0] = "Another dinosaur"; // Заміна значення індексу;
console.log(dinosaurs);

var dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];
console.log(dinosaursAndNumbers[2][1]);

// Длина массива
var maniacs = ["Якко", "Вакко", "Дот"];
console.log(maniacs[maniacs.length -1]);

// Добавление элементов в массив

/*-------------------------------------------------------------------------
    Чтобы добавить элемент к концу массива, можно воспользоваться мето-
    дом push.
   < ------------------------------------------------------------------- >
    Чтобы добавить элемент в начало массива, используйте
    метод .unshift(элемент):
-------------------------------------------------------------------------*/
var animals = [];
animals.push("Кот");
animals.push("Пес");
animals.push("Лама");

animals.unshift("Мавпа");
animals.unshift("Белый медведь");
console.log(animals.length);

// Объединение массивов
var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var featheredAnimals = ["Ара", "Додо"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);

// Поиск индекса элемента в массиве
var colors = ["красный", "зеленый", "синий"];
console.log(colors.indexOf("синий"));

// Превращаем массив в строку

/*-------------------------------------------------------------------------
    Воспользовавшись методом .join(), можно соединить все элементы
    массива в одну большую строку.
-------------------------------------------------------------------------*/
var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
console.log(boringAnimals.join(" * "));


var landmarks = [];
landmarks.push("Мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гидрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя бывшая школа");
landmarks.push("Дом подруги");

landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();

// Случайный выбор, использование Math.random()

/*-------------------------------------------------------------------
    Случайные числа можно генерировать с помощью специального метода
    Math.random(),
--------------------------------------------------------------------*/
console.log(Math.random() * 10);

// Округление с помощью Math.floor()
console.log(Math.floor(3.7463463));
console.log(Math.floor(Math.random() * 10)); // Використання 2-х методів

var randomWords1 = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
console.log(randomWords1[Math.floor(Math.random() * 4)]);

// Программа случайного выбора вариантов
var phrases = [
    "Звучит неплохо",
    "Да, это определенно надо сделать",
    "Не думаю, что это хорошая идея",
    "Может, не сегодня?",
    "Компьютер говорит нет"
];

// "Мне выпить еще молочного коктейля?"
console.log(phrases[Math.floor(Math.random() * phrases.length)]);

// Генератор случайных дразнилок
var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";

console.log(randomInsult);

/*--------------------------------------------------------------------
    #4. Соединение чисел
    Как с помощью метода join превратить массив [3, 2, 1] в строку
    "3 больше, чем 2 больше, чем 1"?
---------------------------------------------------------------------*/
var randomArr = [3,2,1];
console.log(randomArr.join(" більше, ніж "));












