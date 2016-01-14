var chai = require('chai');
var expect = chai.expect;

var Leaf = require('./../src/leaf');
var tag = require('./../src/constants');

var testLeafNil = new Leaf(0, tag.Nil, 0);
var testLeafWithVal = new Leaf(0, tag.ATOM, 5);
var testLeafArr = [testLeafNil, testLeafNil, testLeafNil];

expect(testLeafNil.getChildren().length).to.equal(3);
expect(testLeafNil.getChildren().map(
    function(e,i) {
        return e.id
    })).to.eql([1,2,3]);

expect(testLeafNil.containsInnerPointer()).to.be.false;

testLeafNil.addChild(testLeafWithVal);
expect(testLeafWithVal.containsInnerPointer()).to.be.false;
