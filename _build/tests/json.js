describe("A suite", function() {
  var area,
  myJSONArea;
  beforeEach(function () {
    try {
      area.remove();
    } catch (e) {}
    area = document.createElement('textarea');
    document.body.appendChild(area);
    area.setAttribute('id','json');
    myJSONArea = JSONArea(area);
  });

  it("validates valid JSON", function() {
    area.innerHTML = JSON.stringify({
      foo:'bar'
    });
    var isJSON = myJSONArea.isJSON(area.innerHTML);

    expect(isJSON).toBe(true);
  });

  it("does not validate invalid JSON", function() {
    area.innerHTML = 'foobar';
    var isJSON = myJSONArea.isJSON(area.innerHTML);

    expect(isJSON).toBe(false);
  });
});
