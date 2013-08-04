# clazzjs [![Build Status](https://secure.travis-ci.org/quramy/clazzjs.png?branch=master)](http://travis-ci.org/quramy/clazzjs)

Clazz.js is a simple JavaScript class providing liblary.

## Getting Started
### using node.js
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
