import { Router } from 'express';

import VotacionController from '../controladores/votacionController';

class VotacionesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
		this.router.get('/TimeFech', VotacionController.time_zone_act);
        this.router.get('/Consejos', VotacionController.list_consejos);
        this.router.get('/Consejos/Formulas', VotacionController.list_formulas);
        this.router.get('/Consejos/Formulas/:VcId', VotacionController.list_formulasConsejo);
        this.router.get('/Consejos/Representantes', VotacionController.list_representantes);
        this.router.get('/Consejos/Representantes/:VcId', VotacionController.list_representantesConsejo);
        this.router.post('/', VotacionController.createVoto);
    }

}

const votacionesRoutes = new VotacionesRoutes();
export default votacionesRoutes.router;