const randString = () =>
  Math.random()
    .toString(36)
    .substring(3, 9)

const themes = [
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'orange',
  'yellow',
  'grey',
  'red',
  'pink'
]

export default {
  counters: [...new Array(10)].map((item, index) => ({ id: randString(), count: 0, theme: themes[index % 10] }))
}
