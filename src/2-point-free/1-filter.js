/**
 * Write a point-free function that returns all animals which names are shorter
 * than 5. Each animal is an object with the following shape:
 * ```
 * {
 *   name: string,
 *   kind: string,
 *   age: number,
 * }
 * ```
 * Example:
 * ```
 * Input = [
 *   { name: 'Fifi', kind: 'dog', age: 4 },
 *   { name: 'Pancake', kind: 'cat', age: 2 },
 *   { name: 'Lo', kind: 'parrot', age: 5 },
 * ]
 * Output = [
 *   { name: 'Fifi', kind: 'dog', age: 4 },
 *   { name: 'Lo', kind: 'parrot', age: 5 },
 * ]
 * ```
 */
 
const prop = property => x => x[property];
const filter = fn => array => array.filter(fn);
const pipe = (...fs) => x => fs.reduce((x,f) => f(x), x);

const shorterThan = value => elem => elem < value;

export const getShortNamedAnimals = filter(pipe(prop('name'), prop('length'), shorterThan(5)));
