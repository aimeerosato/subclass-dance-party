var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("movingDancer");
  
};
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;
// MovingDancer.prototype.step = function(){
//     Dancer.prototype.step.call(this);  
//     // this.$node.
// };

MovingDancer.prototype.step= function(){



// this.x & this.y on obj prototype
// increment x & y - 
// initial: position, direction
// setPosition
// props: vector/speed




// var boxWidth = 57, delta = 2;
//   setInterval(function(){
//     var left = parseInt(this.$node.style.left);
//     if(left >= parseInt(viewDim.width - boxWidth)){
//       delta = -2;
//     }
//     if (left <= 0) {
//       delta = 2;
//     }
//     box.style.left = left + delta + 'px';
//   }, 20);
//   var zz={
//     left : maxX/2 + (gridSize * x) + "px",
//     bottom : maxY/2 + (gridSize * y) + "px"
//   }
//   $(this.$node).css(zz);


//   debugger;
//   var timestamp = Math.round(new Date()/1000);
//   var maxX = $("body").width();
//   var maxY = $("body").height();
//   var duration = 4; // seconds
//   var gridSize = 100; // pixels
//   var stretchFactor;
//   var progress, x, y;
  
//   if(this.start === null) {
//     this.start = timestamp;
//     stretchFactor = 1 + (Math.random() * 3);
//   }
  
//   stretchFactor = 1 + (Math.random() * 3);
//   progress = (timestamp - this.start) / duration /1000; // percent
  
//   x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
//   y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)

//   var zz={
//     left : maxX/2 + (gridSize * x) + "px",
//     bottom : maxY/2 + (gridSize * y) + "px"
//   }
  
//   $(this.$node).css(zz);
//   debugger;
// //progress is never greater than 1
//   if(progress >= 1){
//     start = null; // reset to start position
//   }

};
