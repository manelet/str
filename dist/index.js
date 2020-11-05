'use strict';

var trim = require('./trim.js');
var capitalize = require('./capitalize.js');
var camelcase = require('./camelcase.js');
var slugify = require('./slugify.js');
var count = require('./count.js');
var endsWith = require('./endsWith.js');
var startsWith = require('./startsWith.js');
var lower = require('./lower.js');
var upper = require('./upper.js');

var index = {
    slugify,
    camelcase,
    capitalize,
    count,
    endsWith,
    startsWith,
    lower,
    upper,
    trim
};

module.exports = index;
