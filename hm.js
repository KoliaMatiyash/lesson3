//1. Підрахунок кількості повторень кожного елемента (метод reduce)
// Опис: Дано масив рядків, де можуть бути повторювані елементи.
// Підрахуйте кількість кожного елемента і поверніть об'єкт, де ключі —
// це елементи масиву, а значення — кількість їх повторень.
// const calculate = (arr) => {
//   return arr.reduce((acum, element) => {
//     if (acum[element] === undefined) {
//       acum[element] = 1;
//     } else {
//       acum[element]++;
//     }
//     return acum;
//   }, {});
// };
// const arr = ["телефон", "яблуко", "дім", "яблуко", "електроніка"];
// console.log(calculate(arr));
// 2. Пошук найдовшого слова в масиві рядків (метод reduce)
// Опис: Дано масив рядків. Знайдіть найдовше слово в масиві.
// const findWord = (arr) => {
//   return arr.reduce((acum, word) => {
//     let longest;
//     if (word.length > acum.length) {
//       longest = word;
//     } else {
//       longest = acum;
//     }
//     return longest;
//   }, "");
// };
// console.log(findWord(arr));
// 3. Глибоке копіювання об'єкта
// Опис: Дано вкладений об'єкт, що містить інформацію про користувача і його вподобання.
// Створіть глибоку копію цього об'єкта так, щоб зміни в копії не зачіпали оригінал.
// Перевірте, що зміни в копії не впливають на оригінал.
// const user = {
//   name: "John",
//   age: 30,
//   preferences: {
//     favoriteColor: "blue",
//     hobbies: ["reading", "gaming"],
//   },
// };
// const mainUser = JSON.stringify(user);
// const copyUser = JSON.parse(mainUser);
// copyUser.name = "Микола";
// console.log(user);
// console.log(copyUser);
// 4. Поверхневе копіювання з додаванням властивостей
// Опис: Дано об'єкт, що представляє книгу.
// Створіть нову копію цього об'єкта і додайте до нього нову властивість — рейтинг книги.
// При цьому зміни в новій копії не повинні впливати на оригінальний об'єкт.
// const book = {
//   title: "JavaScript: The Good Parts",
//   author: "Douglas Crockford",
//   year: 2008,
// };
// const copyBook = { ...book, rating: 3.2 };
// console.log(book);
// console.log(copyBook);
// 5. Підрахунок частоти елементів
// Опис: Дано масив чисел. Використовуйте об'єкт Map для підрахунку частоти кожного числа в масиві.
// Поверніть об'єкт Map, де ключами будуть числа з масиву, а значеннями — їх частота.
// const findNumber = (arr) => {
//   const findedNumber = new Map();
//   arr.forEach((number) => {
//     if (findedNumber.has(number)) {
//       findedNumber.set(number, findedNumber.get(number) + 1);
//     } else {
//       findedNumber.set(number, 1);
//     }
//   });
//   return findedNumber;
// };
// const numbers = [1, 2, 3, 2, 4, 3, 3, 5, 1, 4];
// console.log(Object.fromEntries(findNumber(numbers)));
