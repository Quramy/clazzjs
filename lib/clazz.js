(function(define){
	define([], function(){

		'use strict';

		var IGNORED_DIRECTIVE = [
			'fn',
			'_dl',
			'mixin',
			'prototype',
			'constructor',
			'staticin',
			'extend'
		];

		// flag for safe execution init method.
		var creating = false;

		var checkInit = function(func){
			if(typeof func !== 'function'){
				throw new Error('Illegal argument. "init" must be a function.');
			}
			return true;
		};

		var mixin = function(proto, module, option){
			var opt = option ? option : {};
			var include = opt.include ? new RegExp(opt.include) : new RegExp('.*');
			var exclude = opt.exclude ? new RegExp(opt.exclude) : null;
			for(var key in module){
				if(key.match(include) && !key.match(exclude)){
					if(IGNORED_DIRECTIVE.indexOf(key) === -1){
						if(key !== 'init' || checkInit(module[key])){
							proto[key] = module[key];
						}
					}else{
						throw new Error('Cannot use key "' + key + '". This is reserved derective.');
					}
				}
			}
			return proto;
		};

		var create = function(mod, staticMod, proto){
			var extendable = function(){};

			extendable.extend = function(mod, staticMod, proto){

				var delegate;
				var cnst;
				var clazz = function(){
					if(!creating){
						this.init.apply(this, arguments);
					}
				};

				if(proto && typeof proto !== 'function'){
					throw new Error('invalid constructor.');
				};

				cnst = proto ? proto : this;

				creating = true;
				clazz.fn = clazz.prototype = new cnst();
				delegate = cnst.prototype;
				clazz.fn._dl = function(name){
					var self = this;
					if(delegate[name] && typeof delegate[name] === 'function'){
						return function(){
							return delegate[name].apply(self, arguments);
						};
					}else{
						return function(){};
					}
				};

				creating = false;

				clazz.extend = this.extend;

				clazz.mixin = function(module, option){
					mixin(clazz.fn, module, option);
					return clazz;
				};
				clazz.staticin = function(module, option){
					return mixin(clazz, module, option);
				};

				if(mod){
					clazz.mixin(mod);
				}
				if(staticMod){
					clazz.staticin(staticMod);
				}

				if(!clazz.fn.init){
					clazz.fn.init = function(){};
				}else{
					checkInit(clazz.fn.init);
				}

				return clazz;
			};

			return extendable.extend(mod, staticMod, proto);
		};

		var Clazz = function(mod, staticMod){
			return create(mod, staticMod);
		};

		Clazz.wrap = function(proto){
			return create(null, null, proto);
		};

		return Clazz;
	});
})(typeof define !== 'undefined' ? define : typeof module !== 'undefined' ? function(deps, factory){
	module.exports = factory();
}: function(deps, factory){
	this.Clazz = factory();
});

