var Animal = function (legs) {
  this.legs = legs || 4
}
Animal.prototype.category = '动物'
var Cat = new Animal(4)

console.log(Object.getPrototypeOf(Cat) === Animal.prototype)
console.log(typeof Animal.prototype)
console.log(Function.prototype)
console.log(Cat.legs)
