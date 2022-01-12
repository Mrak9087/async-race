import { BaseComponent } from '../baseComponent/baseComponent';
import { Car } from '../car/car';
import { garage } from '../general/quertyString';
import { MAX_COUNT_CAR, ERROR_TEXT } from '../general/constants';
import { TCar } from '../general/types';
import { createHTMLElement } from '../helpers/helpers';

export class Garage extends BaseComponent {
    private cars: Car[];
    private selectedCar: Car;
    private compartmentNum: number;
    private panel: HTMLElement;
    private inputName: HTMLInputElement;
    private inputColor: HTMLInputElement;
    private btnCreateCar: HTMLButtonElement;
    private inputUpdateName: HTMLInputElement;
    private inputUpdateColor: HTMLInputElement;
    private btnUpdateCar: HTMLButtonElement;
    public carsDiv: HTMLElement;
    constructor() {
        super('garage');
        this.compartmentNum = 1;
        this.cars = [];
        this.selectedCar = null;
    }

    init(){
        this.carsDiv = createHTMLElement('div', 'cars');
        this.addCreatePanel();
    }

    addCreatePanel(){
        const createPanelWrapper = createHTMLElement('div', 'wrapper');
        this.inputName = <HTMLInputElement>createHTMLElement('input', 'carName');
        this.inputName.type = 'text';
        this.inputColor = <HTMLInputElement>createHTMLElement('input', 'carColor');
        this.inputColor.type = 'Color';
        this.btnCreateCar = <HTMLButtonElement>createHTMLElement('button', 'carName', 'create');
        this.btnCreateCar.type = 'button';
        this.btnCreateCar.addEventListener('click', async () => {
            await this.sendDataCarForCreate();
            await this.render();
        });
        createPanelWrapper.append(this.inputName,this.inputColor,this.btnCreateCar);
        this.node.append(createPanelWrapper);
    }

    addUpdatePanel(){
        const createPanelWrapper = createHTMLElement('div', 'wrapper');
        this.inputUpdateName = <HTMLInputElement>createHTMLElement('input', 'carName');
        this.inputUpdateName.type = 'text';
        this.inputUpdateColor = <HTMLInputElement>createHTMLElement('input', 'carColor');
        this.inputUpdateColor.type = 'Color';
        this.btnUpdateCar = <HTMLButtonElement>createHTMLElement('button', 'carName', 'create');
        this.btnUpdateCar.type = 'button';
        this.btnUpdateCar.addEventListener('click', async () => {
            if (this.selectedCar){
                await this.sendDataCarForUpdate(this.selectedCar.carParam.id);
            }
            this.selectedCar = null;
        });
        createPanelWrapper.append(this.inputName,this.inputColor,this.btnCreateCar);
        this.node.append(createPanelWrapper);
    }

    async render(){
        this.cars.splice(0);
        try {
            const resp = await fetch(`${garage}?_page=${this.compartmentNum}&_limit=${MAX_COUNT_CAR}`);
            if (resp.status == 200) {
                const res = await resp.json();
                res.forEach((item: TCar) => {
                    this.createCar(item);
                });
                this.carsDiv.innerHTML = '';
                this.cars.forEach((item) => {
                    this.carsDiv.append(item.node);
                })
            }
        } catch(e){
            throw TypeError(ERROR_TEXT); 
        }
        this.node.append(this.carsDiv);
    }

    sendDataCarForCreate = async () => {
        if (this.inputName.value && this.inputColor.value){
            const dataCar = {
                name: this.inputName.value,
                color: this.inputColor.value
            }
            await fetch(garage, {
                method: 'POST',
                body: JSON.stringify(dataCar),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }
    }

    sendDataCarForUpdate = async (idCar: number) => {
        if (this.inputName.value && this.inputColor.value){
            const dataCar = {
                name: this.inputName.value,
                color: this.inputColor.value
            }
            const resp = await fetch(`${garage}/${idCar}`, {
                method: 'PUT',
                body: JSON.stringify(dataCar),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (resp.status === 200){
                this.selectedCar.update();
            }
        }
    }

    createCar(carParam: TCar) {
        const car = new Car(carParam);
        car.render()
        this.cars.push(car);
    }
}
