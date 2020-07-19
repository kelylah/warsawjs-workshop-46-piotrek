// parser: input -> [parse, rest]

const char = character => input => {
  if (input.startsWith(character)) {
    return [character, input.substring(1)]
  } else {
    throw new Error('Parse failed!')
  }
}

const then2 = (first, last) => input => {
  const [firstParsed, firstRest] = first(input)
  const [lastParsed, lastRest] = last(firstRest)
  return [firstParsed + lastParsed, lastRest]
}

const then = (...parsers) =>
  parsers.reduceRight((prev, current) => then2(current, prev))

const any = (...parsers) => input => {
  for (const parser of parsers) {
    try {
      return parser(input)
    } catch {}
  }
  throw new Error('Parse failed!')
}

const chars = characters => any(...[...characters].map(char))
const many = parser => input => {
  let result = ''
  let rest = input
  while (true) {
    try {
      const [parsed, restParsed] = parser(rest)
      result += parsed
      rest = restParsed
    } catch {
      break
    }
  }
  return [result, rest]
}

const many1 = parser => then(parser, many(parser))
const optional = parser => input => {
  try {
    return parser(input)
  } catch {
    return ['', input]
  }
}

const end = input => {
  if (input === '') {
    return ['', '']
  } else {
    throw new Error('Parse failed!')
  }
}

const number = then(
  many1(chars('1234567890')),
  optional(
    then(
      char('.'),
      many1(chars('1234567890')),
    )
  ),
  end
)
console.log(number('9234.456'))
console.log(number('1234'))

const capitalLetter = chars('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const smallLetter = chars('abcdefghijklmnopqrstuvwxyz')
const capitalizedWord = then(
  capitalLetter,
  many(smallLetter),
)

const name = then(
  capitalizedWord,
  char(' '),
  capitalizedWord,
  end
)

console.log(name('John Snow'))
console.log(name('1234'))