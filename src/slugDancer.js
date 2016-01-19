var makeSlugDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node.addClass("slugDancer");

}

makeSlugDancer.prototype = Object.create(makeDancer.prototype);
makeSlugDancer.prototype.constructor = makeSlugDancer;
makeSlugDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);

  this.$node.toggle().animate({
      width: "90%"
    }, {
      queue: false,
      duration: 3000
    })
    .animate({ fontSize: "24px" }, 1500 )
    .animate({ borderRightWidth: "15px" }, 1500 );
};
