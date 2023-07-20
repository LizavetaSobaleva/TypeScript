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

//Now you have to write a function that takes an argument and returns the square of it.
export const square = (num: number) : number => num ** 2
console.log(square(12))

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, 
//and the negatives become positives.
export function invert(array: number[]): number[] {
    return array.map((n) => -n)
}
console.log(invert([-1, -2, 3]))

//Implement a function which convert the given boolean value into its string representation.
export const booleanToString = (b:boolean):string => String(b)
console.log(typeof(booleanToString(true)))

//Given a non-empty array of integers, return the result of multiplying the values together in order. 
export const grow = (arr: number[]): number => arr.reduce((a, b) => a * b)
console.log(grow([4, 1, 1, 1, 4]))

//Create a method to see whether the string is ALL CAPS.
export const isUpperCase = (str: string) => str === str.toUpperCase()
console.log(isUpperCase('HELLO I AM DONALD'))