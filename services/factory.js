'use strict';

const viaCepService = require('./viaCep');

module.exports = dependencies => ({
    viaCepService: viaCepService(dependencies),
})