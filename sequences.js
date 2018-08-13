"use strict";

var sequences = ({
	fibonacci: (param) => {
		var f = 0;
		var g = 1;

		for (var i = 0; i < param; i++) {
			console.log(f)
			f = f + g;
			g = f - g;
		}
	}
});

module.exports = sequences;