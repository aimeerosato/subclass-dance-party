describe("dancer3", function() {

  var dancer3;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer3 = new dancer3(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(dancer3.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(dancer3.$node, 'toggle');
    dancer3.step();
    expect(dancer3.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(dancer3, "step");
      expect(dancer3.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); 
      clock.tick(timeBetweenSteps);

      expect(dancer3.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer3.step.callCount).to.be.equal(2);
    });
  });
});