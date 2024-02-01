import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

// let total: number = 100;
// let name: string = "Bob";
// let isActive: boolean = false;
// name = 5; // помилка
// name = "5";

// let empty: null = null;
// let undf: undefined = undefined;
// let undf: undefined = 0; // помилка

// let age = 10;
// let age: number = 10
// age = "10"; // помилка

// const numbers: number[] = [1, 2, 4, 5, 6, 3, 0];
// numbers.push('12'); // помилка

// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 12,
// };

// type User = {
//   name: string;
//   age: number | string; // такий варіант не дуже добрий
// }; // типізація виноситься нагору, або в окремий файл
// const user: User = {
//   name: "Bob",
//   age: 12,
//   isActive: false, // помилка
// };

// user.age = "15";
// user.name = 1; // помилка

// let age: any = 10; // any - повне відключення типізації - не дуже добре, хоча помилки й нема
// age = "Bob";
// age = false;

// let name: unknown = 12; // unknown - часткове відключення типізації
// name = "Bob";
// name.toFixed(); // помилка - специф. метод для роботи з даними

// type size = "small" | "medium" | "large";
// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// const button: size = "large"; // type - більша вірогідність помилки
// const button: Sizes = Sizes.large; // enum - менша вірогідність помилки

// function add(num1: number, num2: number): string {
//   return num1 + num2; // помилка - не працює
// }
// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`; // працює
// }
// console.log(add(2, 3));

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2); // void - нічого не повертає
// };
// add(2, 3);

// type User = {
//   name: string;
// };
// function great(user: User): void {
//   console.log(`Hello ${user.name}`);
// }

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };
// function userConstructor(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: (color: string) => {};
// };
// const Car = {
//   color: "red",
//   price: 1000,
//   currency: "UAH",
//   start(color) {
//     console.log("Start" + this.color);
//   },
// };

// type User = {
//   name: string;
//   age: number;
//   role?: string; // ? - поле не обов'язкове
// };

// const user: User = {
//   name: "bob",
//   age: 12,
// };

// const admin: User = {
//   name: "John",
//   age: 23,
//   role: "Admin",
// };