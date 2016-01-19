var X = function(top, left, timeBetweenSteps){
  x.call(this, top, left, timeBetweenSteps);
};
x.prototype = Object.create(makeDancer.prototype);
x.prototype.constructor = x;
x.prototype.call(this);  
    this.$node.    makeDancer.prototype.step.call(this);  
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};
