const Joi = require("joi");

const createAuthorsSchema = {
    payload: Joi.object({

        name: Joi
                .string()
                .min(10)
                .max(80)
                .required(),

        biography: Joi
                .string()
                .required(),
                
        birthDate: Joi
                .string()
                .min(8)
                .max(8)
                .required()
    })
};

const getById = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};

const deleteById = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};

module.exports = {
    createAuthorsSchema, 
    getById,
    deleteById
};