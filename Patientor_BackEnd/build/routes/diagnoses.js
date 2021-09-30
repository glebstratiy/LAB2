"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diagnoses_1 = require("../services/diagnoses");
const diagnosesRouter = express_1.default.Router();
diagnosesRouter.get('/', (_request, response) => {
    response.send(diagnoses_1.getDiagnoses());
});
exports.default = diagnosesRouter;
