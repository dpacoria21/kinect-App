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


export interface Sessions {
    success:  boolean;
    sessions: Session[];
}

export interface Session {
    id:           number;
    startingTime: Date;
    endingTime:   Date;
    type:         string;
    gameScore:    number;
    idUser:       number;
    trackings:    any[];
}