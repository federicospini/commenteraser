// commenteraser.js
// JavaScript CSS comments eraser library
//
// Copyright 2011 Federico Spini
// MIT license


function commenteraser_css (str) {
	return str.replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\//g, '');
}

