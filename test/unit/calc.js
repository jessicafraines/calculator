/*global describe, it*/

'use strict';

var expect = require('chai').expect;
var Calc = require('../../app/models/calc');

describe('Calc', function(){
 describe('.add', function(){
    it('should add two numbers', function(){
      var sum =Calc.add(2,3);
      expect(sum).to.equal(5);
    });
  });
  describe('.subtract', function(){
    it('should subtract two numbers', function(){
      var sub = Calc.subtract(5,3);
      expect(sub).to.equal(2);
    });
  });
  describe('.dif', function(){
    it('should give the distance between x and y', function(){
      var distance = Calc.dif({x:3 ,y:4 }, {x:10, y:12});
      expect(distance).to.be.closeTo(10.63, 0.01);
    });
  });
  describe('.line', function(){
    it('should find the equation of a line', function(){
      expect(Calc.line({x:3,y:4}, {x:7,y:12 })).to.be.equal('2.0x-2.0');
      expect(Calc.line({x:3,y:14}, {x:7,y:12 })).to.be.equal('-0.5x+15.5');
    });
  });
  describe('.trip', function(){
    it('should find the total of the trip', function(){
      var total = Calc.trip([{x:1 ,y:1 }, {x:5, y:-2}, {x:10, y:-2}]);
      expect(total).to.be.equal(10);
    });
  });
  describe('.mean', function(){
    it('Should give the average of the array of numbers', function(){
      var average = Calc.mean([2,7,8,9,10,12]);
        expect(average).to.be.equal(8);
   });
  });
  describe('.stdev', function(){
    it('Should give the stdev of the numbers in the array', function(){
      var numbs = Calc.stdev([2,4,4,4,5,5,7,9]);
        expect(numbs).to.be.equal(2);
    });
  });
});


