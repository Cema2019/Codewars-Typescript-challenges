/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.*/

export function sumMix(x: any[]): number {
    return x.map(x => Number(x)).reduce((a, b) => a + b, 0);
}
