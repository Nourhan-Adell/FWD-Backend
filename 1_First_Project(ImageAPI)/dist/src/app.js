"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 7000;
var routes = require('./routes');
app.use(function (req, res, next) {
    console.log('Start working..');
    next();
});
app.use(routes);
var server = app.listen(port, function () {
    console.log("listening on port ".concat(port));
});
module.exports = server;
