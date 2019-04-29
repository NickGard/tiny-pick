const { pick } = require("./index");
const { expect } = require("chai");

describe("tiny-pick", () => {
  it("should pick an array of keys", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(pick(source, ['a', 'c'])).to.deep.equal({ a: 1, c: 3});
  });
  it("should pick a list of keys", () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(pick(source, 'a', 'c')).to.deep.equal({ a: 1, c: 3});
  });
  it("should pick a falsy value", () => {
    const source = {
      'false': false,
      '""': "",
      0: 0,
      'null': null,
      'undefined': undefined,
      'NaN': NaN,
    };
    expect(pick(source, 'false')).to.deep.equal({ 'false': false });
    expect(pick(source, '""')).to.deep.equal({ '""': "" });
    expect(pick(source, 0)).to.deep.equal({ 0: 0 });
    expect(pick(source, 'null')).to.deep.equal({ 'null': null });
    expect(pick(source, 'undefined')).to.deep.equal({ 'undefined': undefined });
    expect(pick(source, 'NaN')).to.deep.equal({ 'NaN': NaN });
  });
  it('should pick indexes of an array', () => {
    const source = [1, 2, 3];
    expect(pick(source, 0, 2)).to.deep.equal({ 0: 1, 2: 3 });
  });
  it('should return an empty object if no source is provided', () => {
    expect(pick(undefined, ['a', 'b'])).to.deep.equal({});
  });
  it('should return an empty object if the passed keys do not exist in the source', () => {
    const source = { a: 1, b: 2, c: 3 };
    expect(pick(source, ['x', 'y'])).to.deep.equal({});
  });
  it('should return an empty object if the source is not an object', () => {
    expect(pick(null, ['a', 'b'])).to.deep.equal({});
    expect(pick('{}', ['a', 'b'])).to.deep.equal({});
    expect(pick(3, ['a', 'b'])).to.deep.equal({});
    expect(pick(false, ['a', 'b'])).to.deep.equal({});
  });
});
