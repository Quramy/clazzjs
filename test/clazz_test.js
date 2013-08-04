'use strict';

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var Clazz = require('../lib/clazz.js');

exports['Clazz'] = {
	setUp: function(done){
		done();
	},

	init10: function(test) {
		//test.expect(1);

		var SomeClass = new Clazz({
			count: 0,
			init: function(){
				this.count = this.count + 1;
			}
		});

		test.equal(1, new SomeClass().count);
		test.done();
	},

	wrap10: function(test){
		var MyArray = Clazz.wrap(Array).mixin({
			init: function(arr){
				var self = this;
				arr.forEach(function(it){
					self.push(it);
				});
			},
			join: function(s){
				if(!s){
					return this._dl('join')('');
				}else{
					return this._dl('join')(s);
				}
			}
		});

		var myArr = new MyArray([4, 5, 6]);
		test.equal(3, myArr.length);
		test.equal('456', myArr.join());

		test.done();
	}
};




