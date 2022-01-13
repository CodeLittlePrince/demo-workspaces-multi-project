class Fish {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  swim() {
    console.log('swim~')
  }

  print() {
    return '🐟 '
  }
}

module.exports = Fish