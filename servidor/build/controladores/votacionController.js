"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class VotacionController {
    list_consejos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM vot_consejo', (err, consejos) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log(null, consejos);
                    JSON.stringify(consejos);
                    res.json(consejos);
                    console.log(null, consejos);
                }
            });
        });
    }
    list_representantes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM vot_representantes left join vot_plan on VrepPlan = VplId left join vot_consejo on VplConsejo = VcId', (err, represent) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log(null, represent);
                    JSON.stringify(represent);
                    res.json(represent);
                    console.log(null, represent);
                }
            });
        });
    }
    list_formulasConsejo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { VcId } = req.params;
            yield database_1.default.query('SELECT * FROM vot_formula_consejo left join vot_consejo on VfConsejo=VcId WHERE VfConsejo= ?', [VcId], (err, formulas) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log(null, formulas);
                    JSON.stringify(formulas);
                    res.json(formulas);
                    console.log(null, formulas);
                }
            });
        });
    }
    list_representantesConsejo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { VcId } = req.params;
            yield database_1.default.query('SELECT * FROM vot_representantes left join vot_plan on VrepPlan = VplId WHERE VplConsejo = ?', [VcId], (err, represent) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log(null, represent);
                    JSON.stringify(represent);
                    res.json(represent);
                    console.log(null, represent);
                }
            });
        });
    }
    list_formulas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM vot_formula_consejo left join vot_consejo on VfConsejo=VcId', (err, formulas) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log(null, formulas);
                    JSON.stringify(formulas);
                    res.json(formulas);
                    console.log(null, formulas);
                }
            });
        });
    }
    createVoto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //pool.query('');
            //await pool.query('INSERT INTO SET ?', [req.body]);
            res.json({ text: 'Realiza un voto' });
        });
    }
}
const votacionController = new VotacionController();
exports.default = votacionController;
