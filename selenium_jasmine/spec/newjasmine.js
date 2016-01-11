describe("This is a test suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("can do a sum", function() {
    expect(5*5).toBe(25);
  });
  var expectedValue = "this is me";
  it("Can say something", function() {
    expect("this is me").toEqual(expectedValue)
  })
});
