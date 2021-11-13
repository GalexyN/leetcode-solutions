class cls {
  constructor(name) {
    this.name = name;
  }
}
cls.prototype.price = function(amt) {
  this.price = amt;
}

var cl = new cls('toy');
console.log(typeof cl.prototype.price === 'function');