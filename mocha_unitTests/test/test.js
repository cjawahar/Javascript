describe("pow", function() {

  describe("raises x to the power 4", function() {

    it("2 raised to power 4 is 16", function() {
      assert.equal(pow(2, 4), 16);
    });
  
    it("3 raised to power 4 is 81", function() {
      assert.equal(pow(3, 4), 81);
    });
  });

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} to the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
});