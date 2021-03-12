'use strict';

const axios = require('axios');
const factory = require('./factory');

const dependencies = {
    axios,
};

module.exports = factory(dependencies);