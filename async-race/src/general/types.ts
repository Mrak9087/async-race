export type TCar = {
    name: string;
    color: string;
    id: number;
};

export type TWinner = {
    id: number;
    wins: number;
    time: number;
};

export type TCenter = {
    x: number;
    y: number;
};

export type TEngine = {
    velocity: number;
    distance: number;
};

export type TStartDriving = {
    success: boolean;
    carParam: TCar;
    time: number;
};

export type TWinnerDataFull = {
    car: TCar
    winner: TWinner;
};
