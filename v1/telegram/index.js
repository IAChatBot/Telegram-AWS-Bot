'use strict';

const Telegram = require('node-telegram-bot-api');
const { telegram: { token } } = require('../../config');

const bot = new Telegram(token, { polling: true });