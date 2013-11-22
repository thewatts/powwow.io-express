Idea = require('../../lib/idea.js');

describe("Idea", function() {

  it("should exist", function() {
    idea = new Idea();
    expect(idea.constructor.name).toBe('model');
  });

  describe("Idea Attributes", function() {
    it("should have a title", function() {
      idea = new Idea({title: "Yes!"});
      expect(idea.title).toBeDefined();
    });
    it("should have a description", function() {
      idea = new Idea({description: "This is a description"});
      expect(idea.description).toBeDefined();
    });
    it("should have a rank", function() {
      idea = new Idea({rank: 0});
      expect(idea.rank).toBeDefined();
    });
    it("should have tags", function() {
      idea = new Idea({tags: "sweet, cheddar"});
      expect(idea.tags).toBeDefined();
      expect(idea.tags).toEqual("sweet, cheddar");
    });
  });

  describe("Idea Tags", function(){
    it("should return an array of tags", function(){
      idea = new Idea({});
      expect(idea.id).toBeDefined();
    });
  });

});

