#!/usr/bin/env node

const main = require('../lib')
const path = require('path')

const argv = require('yargs')
	.version()
	.option({
		'd':{
	    alias: 'directory',
			default: './',
			describe: 'the directory you want to watch',
		},
		'p': {
			alias: 'port',
			default: '3000',
			describe: 'the port you want to use',
		}
	}).argv

main({
	port: argv.p,
	directory: path.resolve(argv.d)
})

