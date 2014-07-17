'use strict';

function Calc() {}
  
Calc.add = function ( x,y){
  return x + y;
};
Calc.subtract = function (x,y){
  return x - y;
};
Calc.dif = function(p1, p2){
  var x = Math.pow((p2.x - p1.x), 2);
  var y = Math.pow((p2.y - p1.y), 2);
  return Math.sqrt(x + y);
};
Calc.line = function(m1, m2){
  var x = m2.x - m1.x;
  var y = m2.y - m1.y;
  var m = y/x;
  var b = m1.y - (m*m1.x);

  var sign = b < 0 ? '-' : '+';
  b = Math.abs(b);

  return m.toFixed(1) + 'x' + sign + b.toFixed(1);
};
Calc.trip = function(a){
  var tripTotal = 0;
  for(var i = 0; (i+1) < a.length; i++){
    var step = Calc.dif(a[i], a[i + 1]);
        tripTotal += step;
   }
  return tripTotal;
};

Calc.mean = function(a){
  var sum = 0;
  for(var i = 0; i < a.length; i++){
    sum += a[i];
  }
  return sum / a.length;
};


module.exports = Calc;
