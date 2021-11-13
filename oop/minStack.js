
var MinStack = function() {
    this.storage = [];
    
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  MinStack.prototype.push = function(val) {
    this.storage.push({
      value: val,
      min: !this.storage.length ? val : Math.min(val, this.getMin())
    })
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function() {
    this.storage.pop();
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function() {
    return this.storage[this.storage.length - 1].value;
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.getMin = function() {
    return this.storage[this.storage.length - 1].min;
  };
  
  /** 
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(val)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */