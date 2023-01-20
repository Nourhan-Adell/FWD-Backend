"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var mainControllers = require('../controllers/main');
var imageControllers = require('../controllers/images');
router.use('/', mainControllers);
router.use('/images', imageControllers);
module.exports = router;
