"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/', function (req, res) {
    console.log('Starting the main route');
    res.send("<h2>Please write the name of selected image in the URL</h2> <p><h3>The selected options: SadFace, SmileFace, or ShyFace</h3></p>");
});
module.exports = router;
