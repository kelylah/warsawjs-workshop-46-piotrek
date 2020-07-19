import isA from './1-types';
/**
 * Write a function that returns a function that checks if the argument matches
 * the provided schema
 *
 * Examples:
 * ```
 * const isPerson = isObjectOf({
 *   name: isA('string'),
 *   age: isA('number'),
 *   address: isObjectOf({
 *     street: isA('string'),
 *     country: isA('string')
 *   })
 * })
 *
 * isPerson({ foo: 'bar' }) // false
 * isPerson({
 *   name: 'Joe',
 *   age: 42,
 *   address: { street: 'Sunny St. 13 A', country: 'US' }
 * }) // true
 * ```
 */
export const isObjectOf = schema => value =>
    typeof value === 'object' && value !== null &&
    Object.keys(schema).every(key => schema[key](value[key]));

/*
* W tym przykladzie mamy tak jakby 2 obiekty. Pierwszym jest schema ==> schema[key],
* a drugim sam sprawdzany obiekt ==> value[key] i na nim robimy tą funkcję, która jest pod schema[key]
* Czyli value[key] jest argumentem ze schema[key]
*/