import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResWsBD } from '../interfaces/ResWsBD';

@Injectable({
  providedIn: 'root'
})
export class RepresentantesService {
  
  xmlBody: any;

  /* Servicos AWS */
  project: string = "casaur";
  enviroment: string = "dev";
  Data_Est = `https://serveless.proximateapps-services.com.mx/${this.project}/${this.enviroment}/webadmin/generic/gettable`;

  constructor(private http: HttpClient) { }

  /* service AWS */
  representConse(vcId: any,vfSemestre: any, codPlan: any){
    let newToken = localStorage.getItem('newToken');
    console.log("token new "+newToken);
    if (newToken === ''){

    }
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': newToken
    });
    console.log("headers:");
    console.log(headers);
    if (vcId < 5) {
      this.xmlBody = {
        "fields": "*",
        "table": "vot_representantes",
        "joins": [
          {
            "table": "vot_plan",
            "on": "vot_representantes.VrepPlan = vot_plan.VplId",
            "type": "left"
          }
        ],
        "wheres": [
          {
            "type": "where",
            "conditions": {"VplConsejo": `${vcId}`}
          },
          {
            "type" : "where",
            "conditions" : {"VrepPeriodo !=" : null}
          },
          {  
            "type": "whereOR", 
            "key": "VrepSemestre", 
            "value": `${vfSemestre}`
          },
          {
            "type" : "where",
            "conditions" : {"VplConsejo" : `${vcId}`}
          },
          {
            "type" : "where",
            "conditions" : {"VrepPeriodo" : null}
          }
        ]
      };
    } else if (vcId > 4 && vcId < 8) {
      if (vfSemestre < 5) {
        this.xmlBody = {
          "fields": "*",
          "table": "vot_representantes",
          "joins": [
            {
              "table": "vot_plan",
              "on": "vot_representantes.VrepPlan = vot_plan.VplId",
              "type": "left"
            }
          ],
          "wheres": [
            {
              "type": "where",
              "conditions": {
                "VplConsejo": `${vcId}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepSemestre": `${vfSemestre}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepPeriodo !=": null
              }
            },
            {
              "type": "whereOR",
              "key": "VrepSemestre",
              "value": `${vfSemestre}`
            },
            {
              "type": "where",
              "conditions": {
                "VplConsejo": `${vcId}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepPeriodo": null
              }
            }
          ]
        }
      } else {
        this.xmlBody = {
          "fields": "*",
          "table": "vista_vot_repre_codigo",
          "wheres": [
            {
              "type": "where",
              "conditions": {
                "VplConsejo": `${vcId}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepPeriodo !=": null
              }
            },
            {
              "type": "where",
              "conditions": {
                "VplCodigo": `${codPlan}`
              }
            },
            {
              "type": "whereOR",
              "key": "VrepSemestre",
              "value": null
            },
            {
              "type": "where",
              "conditions": {
                "VplConsejo": `${vcId}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepPeriodo": null
              }
            },
            {
              "type": "where",
              "conditions": {
                "VplCodigo": `${codPlan}`
              }
            }
          ]
        };
      }
    } else if (vcId == 8) {
      if (vfSemestre < 4) {
        this.xmlBody = {
          "fields": "*",
          "table": "vot_representantes",
          "joins": [
            {
              "table": "vot_plan",
              "on": "vot_representantes.VrepPlan = vot_plan.VplId",
              "type": "left"
            }
          ],
          "wheres": [
            {
              "type": "where",
              "conditions": {
                "VplConsejo": `${vcId}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepSemestre": `${vfSemestre}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepPeriodo !=": null
              }
            },
            {
              "type": "whereOR",
              "key": "VrepSemestre",
              "value": `${vfSemestre}`
            },
            {
              "type": "where",
              "conditions": {
                "VplConsejo": `${vcId}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepPeriodo": null
              }
            }
          ]
        };
      } else {
        this.xmlBody = {
          "fields": "*",
          "table": "vista_vot_repre_codigo",
          "wheres": [
            {
              "type": "where",
              "conditions": {
                "VplConsejo": `${vcId}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepPeriodo !=": null
              }
            },
            {
              "type": "where",
              "conditions": {
                "VplCodigo": `${codPlan}`
              }
            },
            {
              "type": "whereOR",
              "key": "VrepSemestre",
              "value": null
            },
            {
              "type": "where",
              "conditions": {
                "VplConsejo": `${vcId}`
              }
            },
            {
              "type": "where",
              "conditions": {
                "VrepPeriodo": null
              }
            },
            {
              "type": "where",
              "conditions": {
                "VplCodigo": `${codPlan}`
              }
            }
          ]
        };
      }
    } else {
      this.xmlBody = {
        "fields": "*",
        "table": "vot_representantes",
        "joins": [
          {
            "table": "vot_plan",
            "on": "vot_representantes.VrepPlan = vot_plan.VplId",
            "type": "left"
          }
        ],
        "wheres": [
          {
            "type": "where",
            "conditions": {
              "VplConsejo": `${vcId}`
            }
          },
          {
            "type": "where",
            "conditions": {
              "VrepSemestre": `${vfSemestre}`
            }
          },
          {
            "type": "where",
            "conditions": {
              "VrepPeriodo !=": null
            }
          },
          {
            "type": "whereOR",
            "key": "VrepSemestre",
            "value": `${vfSemestre}`
          },
          {
            "type": "where",
            "conditions": {
              "VplConsejo": `${vcId}`
            }
          },
          {
            "type": "where",
            "conditions": {
              "VrepPeriodo": null
            }
          }
        ]
      };
    } 
    
    console.log("body serviceRepresentantes: ");
    
    console.log(JSON.stringify(this.xmlBody));
    return this.http.post<ResWsBD>(this.Data_Est, this.xmlBody, {headers: headers});
  }

}


