# Clazz.js 

Clazz.js is a simple JavaScript class providing liblary.

## Getting Started
### using in webapp
Download js file from [here](https://raw.github.com/Quramy/clazzjs/master/clazz.min.js).
```html
<script type="text/javascript" src="clazz.min.js"></script>
```
```javascript
var MyClass = new Clazz({
	init: function(message){
		this.message = message;
	},
	say: function(){
		console.log(this.message);
	}
});

var myClass = new MyClass('I am an instance of MyClass.');
myClass.say();
```
### using in node.js app
Install the module with: `npm install clazzjs`

```javascript
var Clazz = require('clazzjs');

var MyClass = new Clazz({
	init: function(message){
		this.message = message;
	},
	say: function(){
		console.log(this.message);
	}
});

var myClass = new MyClass('I am an instance of MyClass.');
myClass.say();
```

## Documentation
### Create a Class
Using "Clazz" constructor, you can define new class.
```javascript
var MyClass = new Clazz({
	// The first argument is a instance method module.
	init: function(){
		// The "init" is a special method which is executed in the constructor.
	},
	someMethod: function(){
		// You can define methods.
	},
	someAttribute: '' // You can also define some attributes.
},
{
	// The second argument is a static method module.
	someStaticMethod: function(){
	}
});

new MyClass().someMethod(); // calling a instance method.
MyClass.someStaticMethod(); // calling a static method.
```
### Inheritance
Clazz.js supports Inheritance. Use "extend" method to create a sub class.
In subclass method, you can use access super method by "_dl" property.
The "_dl" property returns a function to delegate super method.
```javascript
var SubClass = MyClass.extend({
	someMethod: function(){
		this._dl('someMethod')(); // call "someMethod" which is deifined by the super class.
	}
});
```

### Mix in
Using "mixin" method, you can import an external module to your class.
```javascript
var module = {
	action: function(){
		console.log(this.message);
	};
};

var MyClass = new Clazz({
	init:function(message){
		this.message = message;
	}
}).mixin(module);
new MyClass('Hello!').action(); // -> 'Hello!'
```


## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2013/08/05 ver 1.0.1
 * First release.

## License
Copyright (c) 2013 quramy. Licensed under the MIT license.
