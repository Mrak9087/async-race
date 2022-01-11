import {BaseComponent} from '../baseComponent/baseComponent';
import { Car } from '../car/car';
import {base, garage} from '../general/quertyString';
import {MAX_COUNT_CAR} from '../general/constants';
import {TCar} from '../general/types';

export class Garage extends BaseComponent{
    private cars: Car[];
    private compartmentNum:number;
    constructor(){
        super('garage');
        this.compartmentNum = 1;
        this.cars = [];
    }

    async render(){
        const resp = await fetch(`${garage}?_page=${this.compartmentNum}&_limit=${MAX_COUNT_CAR}`);
        if (resp.status == 200){
            const res = await resp.json();
            res.forEach((item:TCar)=>{
                this.createCars(item);
            })
            console.log(this.cars);
        }
    }

    createCars(carParam:TCar){
        const car = new Car(carParam);
        this.cars.push(car);
    }
}