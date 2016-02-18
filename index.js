'use strict'

var Promise = require('pinkie-promise')
var exec = require('child_process').exec

module.exports = function (cmd, opts) {
	if (typeof cmd !== 'string') {
		throw new TypeError('Expected a string')
	}

	return new Promise(function (resolve) {
		exec(cmd, opts, function (error, stdout, stderr) {
			resolve({
				error: error,
				stdout: stdout,
				stderr: stderr
			})
		})
	})
}
