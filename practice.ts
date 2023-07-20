//You need to double the integer and return it.
export function doubleInteger(i: number): number {
    return i * 2
}
//export const doubleInteger = (i: number): number => i * 2
console.log(doubleInteger(2))

//In this simple assignment you are given a number and have to make it negative. 
//But maybe the number is already negative?
export class Kata {
    static opposite(n: number) {
      return -n
    }
  }
console.log(Kata.opposite(5))

//We need a function that can transform a number (integer) into a string.
export function numberToString(num: number): string {
    let newNum : string = `${num}`
    return newNum
}
console.log(numberToString(5))

//Make a function that will return a greeting statement that uses an input; your program should return,
export function greet(name: string): string {
    return `Hello, ${name} how are you doing today?`
}
//export const greet = (name: string): string => `Hello, ${name} how are you doing today?`
console.log(greet('Liza'))