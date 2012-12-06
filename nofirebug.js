/**
 * Visit https://github.com/amcsi/nofirebug.js
 *
 * @license     MIT License; http://www.opensource.org/licenses/mit-license.php
 * @author      Attila Szeremi
 * @version     1.0
 **/
(function () {
	var consoleProperties = ['log', 'debug', 'info', 'warn', 'error', 'group', 'count'];
	var i;
	var console;
	var Console;
	if ('undefined' == typeof window.debug) {
		window.debug = 0;
	}
	if ('undefined' == typeof window.console) {
		window.console = {};
	}
	if ('undefined' == typeof window.Console) {
		window.Console = {};
	}
	console = window.console;
	Console = window.Console;
	var prop;
	var emptyFn = function () {};
	for (i = 0; i < consoleProperties.length; i++) {
		prop = consoleProperties[i];
		if ('function' != typeof console[prop]) {
			console[prop] = emptyFn;
		}
		Console[prop] = emptyFn;
		if (window.debug) {
			Console[prop] = console[prop];
		}	
	}
})();
