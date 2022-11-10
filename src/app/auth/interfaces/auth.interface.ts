export interface Auth {
    success: boolean;
    user: {
        id       : number;
        fullname : string;
        dni      : string;
        role     : string;
    }
}

export interface User {
    dni: string;
    password: string;
}