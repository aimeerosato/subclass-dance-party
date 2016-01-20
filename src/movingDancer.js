var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("movingDancer");
  // debugger; 
};
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
// MovingDancer.prototype.step = function(){
//     Dancer.prototype.step.call(this);  
//     // this.$node.
// };

MovingDancer.prototype.step= function(){
  console.log(this.x, this.y);
  this.x = this.x + 50;
  this.y = this.y + 50;
  this.setPosition(this.x, this.y);
  Dancer.prototype.step.call(this);  
};

