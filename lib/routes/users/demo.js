'use strict';

const Helpers = require('../helpers');
const Joi = require('joi');

module.exports = Helpers.withDefaults({
    method: 'get',
    path: '/demo',
    options: {
        auth: false,
        response: {
            schema: Joi.object({
                id: Joi.number().integer().default(1),
                name: Joi.string().default('Audi')
            })
        },
        handler: (request, h) => {
            return {
                id: 1,
                name: 'test',
                test: 'test'
            };
        }
    }
});
