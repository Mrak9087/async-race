import BaseComponent from '../baseComponent/baseComponent';
import Car from '../car/car';
import { EnumEngineState } from '../general/enums';
import { TCar, TStartDriving } from '../general/types';

import { createHTMLElement, getDistanceBetweenElements } from '../helpers/helpers';

export default class Road extends BaseComponent {
    public flag: HTMLElement;

    public selectCarBtn: HTMLButtonElement;

    public deleteCarBtn: HTMLButtonElement;

    public car: Car;

    private idAnim: number;

    private road: HTMLElement;

    constructor() {
        super('box');
    }

    init(carParam: TCar) {
        this.car = new Car(carParam);
        this.car.render();
        this.flag = createHTMLElement('div', 'flag');

        this.car.starBtn.addEventListener('click', () => {
            this.startDriving();
        });
        this.car.stopBtn.addEventListener('click', () => {
            this.stopDriving();
        });
        this.road = createHTMLElement('div', 'road');
        this.selectCarBtn = <HTMLButtonElement>createHTMLElement('button', 'btn', 'select');
        this.deleteCarBtn = <HTMLButtonElement>createHTMLElement('button', 'btn', 'delete');
        const wrapBox = createHTMLElement('div', 'wrapper');
        wrapBox.append(this.selectCarBtn, this.deleteCarBtn, this.car.starBtn, this.car.stopBtn, this.car.spanName);
        this.road.append(this.car.node, this.flag);
        this.node.append(wrapBox, this.road);
    }

    startDriving = async (): Promise<TStartDriving> => {
        const { velocity, distance } = await this.car.startStopEngine(EnumEngineState.start);
        const time = Math.round(distance / velocity);
        const objDistance = Math.floor(getDistanceBetweenElements(this.car.node, this.flag)) + 50;
        this.animation(objDistance, time);
        const success = await this.car.drive();
        if (!success) {
            window.cancelAnimationFrame(this.idAnim);
        }
        const { carParam } = this.car;
        return { success, carParam, time };
    };

    stopDriving = async () => {
        await this.car.startStopEngine(EnumEngineState.stop);
        window.cancelAnimationFrame(this.idAnim);
        this.car.node.style.transform = 'translateX(0)';
    };

    animation(distance: number, animationTime: number) {
        let start = 0;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const time = timestamp - start;
            const passed = Math.round(time * (distance / animationTime));
            this.car.node.style.transform = `translateX(${Math.min(passed, distance)}px)`;

            if (passed < distance) {
                this.idAnim = window.requestAnimationFrame(step);
            }
        };
        this.idAnim = window.requestAnimationFrame(step);
    }
}
