import BaseComponent from '../baseComponent/baseComponent';
import Car from '../car/car';
import { TCar } from '../general/types';
import { enumEngineState } from '../general/enums';
import { createHTMLElement, getDistanceBetweenElements } from '../helpers/helpers';

export default class Road extends BaseComponent{
    public flag: HTMLElement;
    public car: Car
    public starBtn: HTMLElement;
    public stopBtn: HTMLElement;
    private idAnim:number;
    constructor() {
        super('road');
    }

    init(carParam:TCar){
        this.car = new Car(carParam);
        this.car.render();
        this.flag = createHTMLElement('div', 'flag');
        this.starBtn = createHTMLElement('button', '', 'A');
        this.stopBtn = createHTMLElement('button', '', 'B');
        this.starBtn.addEventListener('click', () =>{
            this.startDriving();
        });
        this.stopBtn.addEventListener('click', () =>{
            this.stopDriving();
        });
        this.node.append(this.car.node, this.flag);

    }

    startDriving = async () => {
        const {velocity, distance} = await this.car.startStopEngine(enumEngineState.start);
        const time = Math.round(distance/velocity);
        const objDistance = Math.floor(getDistanceBetweenElements(this.car.node, this.flag))+50;
        await this.animation(this.car, objDistance, time); 
        const success = await this.car.drive();
        if (!success) {
            window.cancelAnimationFrame(this.idAnim);
        }
    }

    stopDriving = async () => {
        await this.car.startStopEngine(enumEngineState.stop);
        window.cancelAnimationFrame(this.idAnim);
        this.car.node.style.transform = 'translateX(0)';
    }

    animation(car:Car, distance:number, animationTime:number){
        let start = 0;

        const step = (timestamp:number)=>{
            if (!start) start = timestamp;
            const time = timestamp - start;
            const passed = Math.round(time * (distance / animationTime));
            car.node.style.transform = `translateX(${Math.min(passed, distance)}px)`;

            if (passed < distance){
                this.idAnim = window.requestAnimationFrame(step);
            }
        }
        this.idAnim = window.requestAnimationFrame(step);
    }
}