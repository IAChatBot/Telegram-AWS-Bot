'use strict';

require('dotenv').config();

module.exports = {
    telegram: {
        token: process.env.TELEGRAM_WEBHOOK_TOKEN,
    }
}