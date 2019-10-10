export interface ResponseWs {
    success     : boolean;
    error       : boolean;
    message     : string;
    token       : any;
}
export class User {
    displayName: string;
    userPrincipalName: string;
    mobilePhone: string;
}