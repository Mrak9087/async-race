import BaseComponent from '../baseComponent/baseComponent';
import Car from '../car/car';
import { TCar } from '../general/types';
import { createHTMLElement, getDistanceBetweenElements } from '../helpers/helpers';

export default class Road extends BaseComponent{
    public flag: HTMLElement;
    public car: Car
    public starBtn: HTMLElement;
    public stopBtn: HTMLElement;
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
        const {velocity, distance} = await this.car.startEngine();
        const time = Math.round(distance/velocity);
        const objDistance = Math.floor(getDistanceBetweenElements(this.car.node, this.flag))+50;
        const id = this.animation(this.car, objDistance, time); //animationObj[this.car.carParam.id] = 
        const { success } = await this.car.drive();//drive(this.car.carParam.id);
        if (!success) window.cancelAnimationFrame(id);//animationObj[this.car.carParam.id].id
        //return {success, time, this.car.carParam.id};
    }

    stopDriving = async () => {
        await this.car.stopEngine();
        this.car.node.style.transform = 'translateX(0)';
    }

    animation(car:Car, distance:number, animationTime:number):number {
        let start = 0;
        let id = 0;

        function step(timestamp:number){
            if (!start) start = timestamp;
            const time = timestamp - start;
            const passed = Math.round(time * (distance / animationTime));
            car.node.style.transform = `translateX(${Math.min(passed, distance)}px)`;//translateX(124px)

            if (passed < distance){
                id = window.requestAnimationFrame(step);
            }
        }
        id = window.requestAnimationFrame(step);
        return id;
    }
}