import { Request, Response} from 'express';

import pool from '../database';

class VotacionController {
    
    public async list_consejos (req: Request, res: Response) {
        await pool.query(
            'SELECT * FROM vot_consejo',
            (err, consejos) => {
                if (err) {
                    throw err;
                } else {                    
                    console.log(null, consejos);
                    JSON.stringify(consejos);
                    res.json(consejos);
                    console.log(null, consejos);
                }
            }
        );
    }

    public async list_representantes (req: Request, res: Response) {
        await pool.query(
            'SELECT * FROM vot_representantes left join vot_plan on VrepPlan = VplId left join vot_consejo on VplConsejo = VcId',
            (err, represent) => {
                if (err) {
                    throw err;
                } else {                    
                    console.log(null, represent);
                    JSON.stringify(represent);
                    res.json(represent);
                    console.log(null, represent);
                }
            }
        );
    }

    public async list_formulasConsejo (req: Request, res: Response) {
        const { VcId } = req.params;
        await pool.query(
            'SELECT * FROM vot_formula_consejo left join vot_consejo on VfConsejo=VcId WHERE VfConsejo= ?', [VcId],
            (err, formulas) => {
                if (err) {
                    throw err;
                } else {                    
                    console.log(null, formulas);
                    JSON.stringify(formulas);
                    res.json(formulas);
                    console.log(null, formulas);
                }
            }
        );
    }

    public async list_representantesConsejo (req: Request, res: Response) {
        const { VcId } = req.params;
        await pool.query(
            'SELECT * FROM vot_representantes left join vot_plan on VrepPlan = VplId WHERE VplConsejo = ?', [VcId],
            (err, represent) => {
                if (err) {
                    throw err;
                } else {                    
                    console.log(null, represent);
                    JSON.stringify(represent);
                    res.json(represent);
                    console.log(null, represent);
                }
            }
        );
    }

    public async list_formulas (req: Request, res: Response) {
        
        await pool.query(
            'SELECT * FROM vot_formula_consejo left join vot_consejo on VfConsejo=VcId',
            (err, formulas) => {
                if (err) {
                    throw err;
                } else {                    
                    console.log(null, formulas);
                    JSON.stringify(formulas);
                    res.json(formulas);
                    console.log(null, formulas);
                }
            }
        );
    }

    public async createVoto (req: Request, res: Response): Promise<void> {
        //pool.query('');
        //await pool.query('INSERT INTO SET ?', [req.body]);
        res.json({text: 'Realiza un voto'});
    }
}

const votacionController = new VotacionController();
export default votacionController;