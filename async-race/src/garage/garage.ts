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

    init() {
        this.carsDiv = createHTMLElement('div', 'cars');
        this.panel = createHTMLElement('div', 'panel');
        this.addCreatePanel();
        this.addUpdatePanel();
        this.node.append(this.panel);
    }

    addCreatePanel() {
        const createPanelWrapper = createHTMLElement('div', 'wrapper');
        this.inputName = <HTMLInputElement>createHTMLElement('input', 'carName');
        this.inputName.type = 'text';
        this.inputColor = <HTMLInputElement>createHTMLElement('input', 'carColor');
        this.inputColor.type = 'Color';
        this.btnCreateCar = <HTMLButtonElement>createHTMLElement('button', 'carName', 'create');
        this.btnCreateCar.type = 'button';
        this.btnCreateCar.addEventListener('click', async () => {
            await this.sendDataCarForCreate();
            await this.renderCars();
            this.inputName.value = '';
        });
        createPanelWrapper.append(this.inputName, this.inputColor, this.btnCreateCar);
        this.panel.append(createPanelWrapper);
    }

    addUpdatePanel() {
        const createPanelWrapper = createHTMLElement('div', 'wrapper');
        this.inputUpdateName = <HTMLInputElement>createHTMLElement('input', 'carName');
        this.inputUpdateName.type = 'text';
        this.inputUpdateColor = <HTMLInputElement>createHTMLElement('input', 'carColor');
        this.inputUpdateColor.type = 'Color';
        this.btnUpdateCar = <HTMLButtonElement>createHTMLElement('button', 'carName', 'update');
        this.btnUpdateCar.type = 'button';
        this.btnUpdateCar.addEventListener('click', async () => {
            if (this.selectedCar) {
                await this.sendDataCarForUpdate(this.selectedCar.carParam.id);
            }
            this.selectedCar = null;
        });
        createPanelWrapper.append(this.inputUpdateName, this.inputUpdateColor, this.btnUpdateCar);
        this.panel.append(createPanelWrapper);
    }

    async renderCars() {
        this.cars.splice(0);
        try {
            const resp = await fetch(`${garage}?_page=${this.compartmentNum}&_limit=${MAX_COUNT_CAR}`);
            if (resp.status === 200) {
                const res = await resp.json();
                res.forEach((item: TCar) => {
                    this.createCar(item);
                });
                this.carsDiv.innerHTML = '';
                this.cars.forEach((item) => {
                    this.addBox(item);
                });
            }
        } catch (e) {
            throw TypeError(ERROR_TEXT);
        }
        this.node.append(this.carsDiv);
    }

    addBox = (car:Car) => {
        const box = createHTMLElement('div', 'box');
        const wrapBox =  createHTMLElement('div', 'wrapper');
        const selectCarBtn = <HTMLButtonElement>createHTMLElement('button', 'btn', 'select');
        const deleteCarBtn = <HTMLButtonElement>createHTMLElement('button', 'btn', 'delete');
        wrapBox.append(selectCarBtn, deleteCarBtn, car.spanName);
        selectCarBtn.addEventListener('click', () => {
            this.selectCar(car);
        })
        deleteCarBtn.addEventListener('click', () => {
            this.sendDataCarForDelete(car.carParam.id);
        })
        box.append(wrapBox,car.node);
        this.carsDiv.append(box);
    }

    selectCar = (car:Car) => {
        this.selectedCar = car;
        this.inputUpdateName.value = this.selectedCar.carParam.name;
        this.inputUpdateColor.value = this.selectedCar.carParam.color;
    }

    sendDataCarForCreate = async () => {
        if (this.inputName.value && this.inputColor.value) {
            const dataCar = {
                name: this.inputName.value,
                color: this.inputColor.value,
            };
            await fetch(garage, {
                method: 'POST',
                body: JSON.stringify(dataCar),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    };

    sendDataCarForUpdate = async (idCar: number) => {
        if (this.inputUpdateName.value && this.inputUpdateColor.value) {
            const dataCar = {
                name: this.inputUpdateName.value,
                color: this.inputUpdateColor.value,
            };
            const resp = await fetch(`${garage}/${idCar}`, {
                method: 'PUT',
                body: JSON.stringify(dataCar),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (resp.status === 200) {
                await this.selectedCar.update();
            }
        }
    };

    sendDataCarForDelete = async (idCar: number) => {
        const resp = await fetch(`${garage}/${idCar}`, { method: 'DELETE' });
        await this.renderCars();
    };

    createCar(carParam: TCar) {
        const car = new Car(carParam);
        car.render();
        this.cars.push(car);
    }
}
