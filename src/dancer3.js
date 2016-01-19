var X = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("xDancer");
};
X.prototype = Object.create(makeDancer.prototype);
X.prototype.constructor = X;

X.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle()
};

