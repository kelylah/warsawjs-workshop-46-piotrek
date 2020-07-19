const Maybe = {
  just (value) {
    return {
      value,
      bind (fn) {
        return fn(value)
      }
    }
  },
  nothing () {
    return {
      bind: () => Maybe.nothing()
    }
  }
}

const result = Maybe.nothing()
  .bind(value => Maybe.just(value + 1))

console.log(result)

const result2 = Promise.resolve(1)
  .then(value => Promise.resolve(value + 1))

result2.then(console.log)