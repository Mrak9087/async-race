export type TCar = {
    name: string;
    color: string;
    id: number;
};

export type TCenter = {
    x: number,
    y: number
}

export type TEngine = {
    velocity: number,
    distance: number
}

export type TStartDriving = {
    success: boolean,
    carParam: TCar,
    time:number
}
