import * as R from 'ramda'

/**
 * Write the same function from exercise 1, but this time use Ramda.
 */

export const getShortNamedAnimals = R.filter(R.pipe(R.prop('name'), R.prop('length'), R.gt(5)));
