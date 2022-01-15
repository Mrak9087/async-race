import './garage.css';
import BaseComponent from '../baseComponent/baseComponent';
import Car from '../car/car';
import Road from '../road/road';
import { garage } from '../general/quertyString';
import { MAX_COUNT_CAR, ERROR_TEXT } from '../general/constants';
import { TCar, TStartDriving } from '../general/types';
import { createHTMLElement } from '../helpers/helpers';

export class Garage extends BaseComponent {
    private roads: Road[];

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
        this.roads = [];
        this.selectedCar = null;
    }

    init() {
        this.carsDiv = createHTMLElement('div', 'cars');
        this.panel = createHTMLElement('div', 'panel');
        this.addCreatePanel();
        this.addUpdatePanel();
        this.addButtonsPanel()
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

    addButtonsPanel() {
        const btnPanelWrapper = createHTMLElement('div', 'wrapper');
        const btnRace = <HTMLButtonElement>createHTMLElement('button', 'race', 'race');
        btnRace.addEventListener('click', () => {
            this.race();
        })
        btnPanelWrapper.append(btnRace);
        this.panel.append(btnPanelWrapper);
    }

    async renderCars() {
        this.roads.splice(0);
        try {
            const resp = await fetch(`${garage}?_page=${this.compartmentNum}&_limit=${MAX_COUNT_CAR}`);
            if (resp.status === 200) {
                const res = await resp.json();
                this.carsDiv.innerHTML = '';
                res.forEach((item: TCar) => {
                    this.addBox(item);
                });
            }
        } catch (e) {
            throw TypeError(ERROR_TEXT);
        }
        this.node.append(this.carsDiv);
    }

    addBox = (car: TCar) => {
        const box = createHTMLElement('div', 'box');
        const wrapBox = createHTMLElement('div', 'wrapper');
        const road = new Road();
        road.init(car)
        this.roads.push(road);
        const selectCarBtn = <HTMLButtonElement>createHTMLElement('button', 'btn', 'select');
        const deleteCarBtn = <HTMLButtonElement>createHTMLElement('button', 'btn', 'delete');
        wrapBox.append(selectCarBtn, deleteCarBtn, road.car.starBtn, road.car.stopBtn,road.car.spanName);
        selectCarBtn.addEventListener('click', () => {
            this.selectCar(road.car);
        });
        deleteCarBtn.addEventListener('click', () => {
            this.sendDataCarForDelete(road.car.carParam.id);
        });
        box.append(wrapBox, road.node);
        this.carsDiv.append(box);
    };

    selectCar = (car: Car) => {
        this.selectedCar = car;
        this.inputUpdateName.value = this.selectedCar.carParam.name;
        this.inputUpdateColor.value = this.selectedCar.carParam.color;
    };

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
        this.inputName.value = '';
        this.inputColor.value = '';
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
        this.inputUpdateName.value = '';
        this.inputUpdateColor.value = '';
    };

    sendDataCarForDelete = async (idCar: number) => {
        const resp = await fetch(`${garage}/${idCar}`, { method: 'DELETE' });
        await this.renderCars();
    };

    race = async () => {
        const promises = this.roads.map((item) => item.startDriving())
        const winner = await this.raceAll(promises);
        console.log(winner);
    }

    raceAll = async (promises:Promise<TStartDriving>[]) => {
        const winner = await Promise.race(promises);
        if (!winner.success){
            const failedId = this.roads.findIndex((item) => winner.carParam.id === item.car.carParam.id);
            const restPromises = [...promises.slice(0,failedId), ...promises.slice(failedId+1)]
            this.raceAll(restPromises);
        } else console.log(winner);
    }

    // createCar(carParam: TCar) {
    //     const car = new Car(carParam);
    //     car.render();
    //     this.cars.push(car);
    // }
}
