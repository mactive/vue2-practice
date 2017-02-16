var Car = function () {
  // 内部变量
  var name = 'Tesla'
  this.getName = function () {
    return name
  }
  this.setName = function (newName) {
    name = newName
  }
}

/**
 * prototype can change instance's property
 * even after instance is inited
 * because instance.property is a process of finding
 * find first itself, then it's prototype
 */

// Car.prototype.name = 'ProtoCar' // method A

var myCar = new Car()
// Car.prototype.name = 'ProtoCar' // method B
console.log(myCar.name) // a or B => ProtoCar

myCar.setName('Corvette')
console.log(myCar.getName())
