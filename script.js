// # JavaScript - Basics

// ## Podstawowe operacje na typach prostych

// ### Zadanie 1.

// Sprawdź czy "123" jest równe 123, wykorzystaj oba sposoby na porównanie (== vs ===)

// let a = 123;
// let b = "123";
// console.log(a == b);
// console.log(a === b);

// ### Zadanie 2.

// Sprawdź czy 0 jest równe wartości false przy użyciu obu sposobów porównania (== vs ===)

// console.log(0 == false);
// console.log(0 === false);

// ### Zadanie 3.

// 1. Stwórz zmienną o nazwie userName i przypisz jej swoje imie.
// 2. Stwórz zmienną o nazwie age i przypisz jej dowolną wartość numeryczną
// 3. Stwórz zmienna o nazwie city i przypisz jej nazwę dowolnej miejscowości
// 4. Wydrukuj w konsoli taka informacje:
//    `Our user's name is: '' and is '' years old and lives in ''`

// Luki w powyższym zdaniu wypełnij wartościami ze zmiennych.

// let userName = "Paulina";
// let age = 31;
// let city = "Poznań";
// console.log(
//   `Our user's name is: ${userName} and is ${age} years old and lives in ${city}`
// );

// ### Zadanie 4.

// 1. Stwórz funkcję `sum` dodającą dwie liczby.
// 2. Przypisz wywołanie funkcji `sum(5, 5)` do zmiennej `ten`
// 3. Przypisz wywołanie funkcji `sum(2, 2)` do zmiennej `four`
// 4. Wykorzystaj funkcję `sum`, aby dodać wartości zmiennych `ten` i `four`.
// 5. Wynik przypisz do zmiennej `myAddedNumbers` i wydrukuj wartość tej zmiennej w konsoli. -->

// function sum(a, b) {
//   return a + b;
// }
// const ten = sum(5, 5);
// const four = sum(2, 2);
// const myAddedNumbers = sum(ten, four);
// console.log(myAddedNumbers);

// ### Zadanie 5.

// Wydrukuj w konsoli taką informacje:
// `Username: x have length: y.`

// Gdzie `x` to wartość zmiennej userName, a `y` to długość tej wartości

// let userName = "Paulina";
// console.log(`Username: ${userName} have length: ${userName.length}.`);

// ### Zadanie 6.

// 1. Stwórz dwie zmienna `firstUser` i `secondUser`. Przypisz im dowolne imiona.
// 2. Napisz instrukcje warunkową `if`, która sprawdzi czy imiona są takie same:
//    1. Jesli Tak - wydrukuj w konsoli wiadomość: "O! The names are the same!"
//    2. Jesli Nie - wydrukuj w konsoli wiadomość: "Unfortunately the names are different :("

// const firstUser = "Hela";
// const secondUser = "Hela";

// let ifTheSame =
//   firstUser === secondUser
//     ? "O! The names are the same!"
//     : "Unfortunately the names are different :(";

// console.log(ifTheSame);

// ### Zadanie 7.

// 1. Stwórz zmienną o nazwie `age`. I przypisz jej dowolną wartość liczbową.
// 2. Napisz instrukcję warunkową, która sprawdzi czy wartość zmiennej `age` jest większa lub równa 18.
//    1. Jeśli Tak - wydrukuj w konsoli wiadomość: "User is adult"
//    2. W każdym innym przypadku - wydrukuj w konsoli wiadomość: "User is underage"
// 3. Zapisz tę funkcję na dwa sposoby
//    1. Za pomocą `if`
//    2. Za pomocą ternary operatora (trójargumentowego)

// const age = 33;

// if (age >= 18) {
//   console.log("User is adult");
// } else {
//   ("User is underage");
// }

// age >= 18 ? console.log("User is adult") : "User is underage";

// console.log(age >= 18 ? "User is adult" : "User is underage");

// ### Zadanie 9.

// Napisz funkcję `itemsInCart()`, która zwróci odpowiednią gramatycznie liczbę przedmiotów w koszyku (item vs items).

// ```js
// itemsInCart(3); // You have 3 items in your cart.
// itemsInCart(1); // You have 1 item in your cart.
// ```

// function itemsInCart(items) {
//   let info = `You have ${items} item${items === 1 ? "" : "s"} in your cart. `;
//   return info;
// }
// console.log(itemsInCart(1));

// ### Zadanie 10.

// Ćwiczenie na operatory logiczne.

// Pobierz wiek użytkownika za pomocą `prompt()`.

// 1. Jeśli użytkownik wpisał powyżej 125 lat lub poniżej 0, wyświetl w konsoli `You provided incorrect age.`
// 2. Jeśli użytkownik wpisał wiek powyżej 35 lat, wyświetl w konsoli `You could be a president!`
// 3. Jeśli użytkownik wpisał wiek powyżej 18 lat, wyświetl w konsoli `At least you can have a beer.`
// 4. W innym wypadku wyświetl w konsoli `You cannot be a president and can't even drink beer :(`

// Kolejność warunków ma znaczenie!

// let age = prompt("What is your age?");

// function whatCanYouDo() {
//   if (age > 125 || age < 0) {
//     return `You provided incorrect age.`;
//   } else if (age > 35) {
//     return `You could be a president!`;
//   } else if (age > 18) {
//     return `At least you can have a beer.`;
//   } else {
//     return `You cannot be a president and can't even drink beer :(`;
//   }
// }

// console.log(whatCanYouDo());

// 1. Napisz funkcję `shouldTakeUmbrella`, ktore odpowie na pytanie czy wziąć ze sobą parasol.
// 2. Funkcja ma przyjąc kilka argumentów, które będą oznaczały
//    - isRaining: true/false
//    - hasJacket: true/false
//    - longTrip: true/false
//    - isSummer: true/false
// 3. Ustal swoje własne warunki, od jakich funkcja powinna nakazać wzięcie parasolki, a kiedy nie.

// const isRaining = true;
// const hasJacket = true;
// const longTrip = false;
// const isSummer = false;

// function shouldTakeUmbrella(isRaining, hasJacket, longTrip, isSummer) {
//   if (isRaining && !isSummer) {
//     return true;
//   }
//   if (isRaining && hasJacket) {
//     return false;
//   }
//   if (isRaining && longTrip) {
//     return true;
//   }
//   return false;
// }

// console.log(shouldTakeUmbrella(true, true, true, true));

// ### Zadanie 12.

// Ćwiczenie na operatory logiczne.

// 1. Napisz funkcję `isEqual`, która sprawdza czy przekazane liczby są równe:

// Dla wywołania isEqual(2, 2) zwraca true
// Dla wywołania isEqual(2, 10) zwraca false
// Dla wywołania isEqual(2000, 100) zwraca liczbę false
// Dla wywołania isEqual(100, '100') zwraca liczbę false

// function isEqual(a, b) {
//   if (a === b) {
//     return true;
//   }
//   return false;
// }

// console.log(isEqual(2, 2));

// ### Zadanie 13.

// 1. Napisz funkcję `canRideRollerCoaster(age, height)`:
//    1. Jeśli ma więcej niż 18 lat oraz więcej niż 175 cm wzrostu wypisz w konsoli "Can ride!" i zwróć `true`
//    2. W przeciwnym razie wypisz "Sorry kiddo, no can do." i zwróć `false`
// 2. Napisz tę samą funkcję za pomocą `switch` statement

// ```js
// canRideRollerCoaster(17, 180); // false
// canRideRollerCoaster(19, 150); // false
// canRideRollerCoaster(13, 150); // false
// canRideRollerCoaster(19, 190); // true
// ```

// function canRideRollerCoaster(age, height) {
//   if (age > 18 && height > 175) {
//     console.log("Can ride!");
//     return true;
//   }
//   console.log("Sorry kiddo, no can do.");
//   return false;
// }

// canRideRollerCoaster(17, 180);

// function canRideRollerCoaster(age, height) {
//   switch (age) {
//     case age > 18 && height > 175:
//       console.log("Can ride!");
//       return true;

//     case age < 18 || height < 175:
//       console.log("Sorry kiddo, no can do.");
//       return false;
//   }
// }

// canRideRollerCoaster(17, 180);

// ### Zadanie 14.

// Napisz funkcję `alphabeticalOrder`, która ustawia litery w podanym wyrazie w kolejności alfabetycznej.

// ```js
// alphabeticalOrder("javascript"); // 'aacijprstv'
// ```

// function alphabeticalOrder(name) {
//   let arraySorted = name.toLowerCase().split("").sort();
//   return arraySorted.join("");
// }

// console.log(alphabeticalOrder("javascript"));

// ### Zadanie 15.

// Napisz funkcję `reverseText`, która odwraca kolejność liter w podanym wyrazie.

// ```js
// reverseText("javascript"); // 'tpircsavaj'
// ```
// let text = "javascript";
// function reverseText(text) {
//   let array = text.split("");
//   let reversedArray = array.reverse();
//   return reversedArray.join("");
// }

// console.log(reverseText("Hello World!"));

// ### Zadanie 16.

// Napisz funkcję `getInitials`, która zwróci inicjały z podanego imienia i nazwiska.

// ```js
// getInitials("Harry Potter"); // 'H.P.'
// ```

// function getInitials(fullName) {
//   let arrayName = fullName.split(" ");
//   let initials = "";
//   for (let i = 0; i < arrayName.length; i++) {
//     initials += `${arrayName[i].charAt(0)}.`;
//   }
//   return initials;
// }

// console.log(getInitials("Paulina Słodzińska Filipiak"));

// ### Zadanie 17.

// Napisz funkcję `slugify`, która zwróci podany ciąg znaków w formie tzw. "slug'a" (czyli wszystkie wyrazy z małej litery, połączone myślnikiem `-`)

// ```js
// slugify("Top 10 my favourite songs"); // top-10-my-favourite-songs
// slugify("Name of my blog article"); // name-of-my-blog-article

// let sentence;
// function slugify(sentence) {
//   let array = sentence.toLowerCase().split(" ");
//   return array.join("-");
// }

// console.log(slugify("Name of my blog article"));

// ### Zadanie 18.

// Napisz funkcję `toUpperCase()`, która zwróci każdy z wyrazów w tym ciągu znaków z powiększoną pierwszą literą.

// ```js
// toUpperCase("top 10 my favourite songs"); // Top 10 My Favourite Songs
// toUpperCase("Name of my Blog article"); // Name Of My Blog Article

let sentence;
function toUpperCase(sentence) {
  let array = sentence.split(" ");
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let wordCapitalized = word[0].toUpperCase() + word.slice(1);
    newArray.push(wordCapitalized);
  }
  return newArray.join(" ");
}
console.log(toUpperCase("Name of my Blog article"));
