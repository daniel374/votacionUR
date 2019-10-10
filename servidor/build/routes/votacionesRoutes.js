"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const votacionController_1 = __importDefault(require("../controladores/votacionController"));
class VotacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/TimeFech', votacionController_1.default.time_zone_act);
        this.router.get('/Consejos', votacionController_1.default.list_consejos);
        this.router.get('/Consejos/Formulas', votacionController_1.default.list_formulas);
        this.router.get('/Consejos/Formulas/:VcId', votacionController_1.default.list_formulasConsejo);
        this.router.get('/Consejos/Representantes', votacionController_1.default.list_representantes);
        this.router.get('/Consejos/Representantes/:VcId', votacionController_1.default.list_representantesConsejo);
        this.router.post('/', votacionController_1.default.createVoto);
    }
}
const votacionesRoutes = new VotacionesRoutes();
exports.default = votacionesRoutes.router;
