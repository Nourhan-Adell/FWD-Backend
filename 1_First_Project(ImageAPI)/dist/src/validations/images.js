"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResize = void 0;
var joi_1 = __importDefault(require("joi"));
var validateResize = function (req, res, next) {
    console.log('req.query', req.query);
    var schema = joi_1.default.object({
        width: joi_1.default.string().pattern(new RegExp('^[0-9]+$')).required(),
        height: joi_1.default.string().pattern(new RegExp('^[0-9]+$')).required(),
        name: joi_1.default.string().required()
    });
    var result = schema.validate(req.query);
    if (result.error) {
        res.status(400).json({ message: result.error.message });
        return;
    }
    return next();
};
exports.validateResize = validateResize;
