var PurpleGuy = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("purpleGuy");
};
PurpleGuy.prototype = Object.create(Dancer.prototype);
PurpleGuy.prototype.constructor = PurpleGuy;

PurpleGuy.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle()
};

