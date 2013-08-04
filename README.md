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
var Clazz = require('clazz');

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
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 quramy. Licensed under the MIT license.
