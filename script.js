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

let age = prompt("What is your age?");

function whatCanYouDo() {
  if (age > 125 || age < 0) {
    return `You provided incorrect age.`;
  } else if (age > 35) {
    return `You could be a president!`;
  } else if (age > 18) {
    return `At least you can have a beer.`;
  } else {
    return `You cannot be a president and can't even drink beer :(`;
  }
}

console.log(whatCanYouDo());
