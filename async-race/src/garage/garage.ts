import './garage.css';
import BaseComponent from '../baseComponent/baseComponent';
import Car from '../car/car';
import Road from '../road/road';
import { garage, winners } from '../general/quertyString';
import { MAX_COUNT_CAR, ERROR_TEXT, MAX_COUNT_GENERATE_CAR, MIN_COUNT_PAGE } from '../general/constants';
import { TCar, TStartDriving, TWinner } from '../general/types';
import { createHTMLElement, getRandomName, getRandomColor } from '../helpers/helpers';
import IRender from '../general/inerfaces';

export default class Garage extends BaseComponent implements IRender {
    private roads: Road[];

    private selectedCar: Car;

    private pageNum: number;

    private generalCount: number;

    private pageCount: number;

    private panel: HTMLElement;

    private inputName: HTMLInputElement;

    private inputColor: HTMLInputElement;

    private btnCreateCar: HTMLButtonElement;

    private inputUpdateName: HTMLInputElement;

    private inputUpdateColor: HTMLInputElement;

    private btnUpdateCar: HTMLButtonElement;

    private btnNext: HTMLButtonElement;

    private btnPrev: HTMLButtonElement;

    public carsDiv: HTMLElement;

    constructor() {
        super('garage');
        this.pageNum = 1;
        this.roads = [];
        this.selectedCar = null;
    }

    init() {
        this.carsDiv = createHTMLElement('div', 'cars');
        this.panel = createHTMLElement('div', 'panel');
        this.addCreatePanel();
        this.addUpdatePanel();
        this.addButtonsPanel();
        this.node.append(this.panel, this.carsDiv, this.addBottomPanel());
    }

    render() {
        this.renderCars();
        return this.node;
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
            await this.sendDataCarForCreate(this.inputName.value, this.inputColor.value);
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
        const btnRace = createHTMLElement('button', 'race', 'race');
        btnRace.addEventListener('click', () => {
            this.race();
        });
        const btnReset = createHTMLElement('button', 'btnGen', 'reset');
        btnReset.addEventListener('click', async () => {
            this.roads.forEach(async (item) => {
                await item.stopDriving();
            });
        });
        const btnGenerateCars = createHTMLElement('button', 'btnGen', 'Generate cars');
        btnGenerateCars.addEventListener('click', async () => {
            await this.createCars();
        });
        btnPanelWrapper.append(btnRace, btnReset, btnGenerateCars);
        this.panel.append(btnPanelWrapper);
    }

    addBottomPanel(): HTMLElement {
        const bottomPanel = createHTMLElement('div', 'bottom_panel');
        this.btnPrev = <HTMLButtonElement>createHTMLElement('button', 'btn_bottom', 'prev');
        this.btnPrev.addEventListener('click', async () => {
            this.pageNum--;
            if (!this.pageNum) {
                this.pageNum = 1;
            }
            await this.renderCars();
        });
        this.btnNext = <HTMLButtonElement>createHTMLElement('button', 'btn_bottom', 'next');
        this.btnNext.addEventListener('click', async () => {
            this.pageNum++;
            if (this.pageNum === this.pageCount) {
                this.pageNum = this.pageCount;
            }
            await this.renderCars();
        });
        bottomPanel.append(this.btnPrev, this.btnNext);
        return bottomPanel;
    }

    checkPage() {
        if (this.pageNum === MIN_COUNT_PAGE) {
            this.btnPrev.disabled = true;
            this.btnNext.disabled = false;
        } else if (this.pageNum === this.pageCount) {
            this.btnPrev.disabled = false;
            this.btnNext.disabled = true;
        } else if (this.pageCount === MIN_COUNT_PAGE) {
            this.btnPrev.disabled = true;
            this.btnNext.disabled = true;
        } else {
            this.btnPrev.disabled = false;
            this.btnNext.disabled = false;
        }
    }

    async renderCars() {
        this.roads.splice(0);
        try {
            const resp = await fetch(`${garage}?_page=${this.pageNum}&_limit=${MAX_COUNT_CAR}`);
            if (resp.status === 200) {
                const res = await resp.json();
                const cnt = resp.headers.get('X-Total-Count');
                this.generalCount = parseInt(cnt);
                this.pageCount = Math.floor(this.generalCount / MAX_COUNT_CAR);
                if (this.generalCount % MAX_COUNT_CAR) {
                    this.pageCount++;
                }
                this.carsDiv.innerHTML = `<span>Garage(${this.generalCount})</span>
                    <span>Page #${this.pageNum}</span>`;

                res.forEach((item: TCar) => {
                    this.addBox(item);
                });
            }
        } catch (e) {
            throw TypeError(ERROR_TEXT);
        }

        this.checkPage();
    }

    addBox = (car: TCar) => {
        const box = createHTMLElement('div', 'box');
        const wrapBox = createHTMLElement('div', 'wrapper');
        const road = new Road();
        road.init(car);
        this.roads.push(road);
        const selectCarBtn = <HTMLButtonElement>createHTMLElement('button', 'btn', 'select');
        const deleteCarBtn = <HTMLButtonElement>createHTMLElement('button', 'btn', 'delete');
        wrapBox.append(selectCarBtn, deleteCarBtn, road.car.starBtn, road.car.stopBtn, road.car.spanName);
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

    sendDataCarForCreate = async (name: string, color: string) => {
        if (name && color) {
            const dataCar = {
                name,
                color,
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
        await fetch(`${garage}/${idCar}`, { method: 'DELETE' });
        await this.renderCars();
    };

    race = async () => {
        const promises = this.roads.map((item) => item.startDriving());
        await this.raceAll(promises);
    };

    raceAll = async (promises: Promise<TStartDriving>[]) => {
        const winner = await Promise.race(promises);
        if (!winner.success) {
            const failedId = this.roads.findIndex((item) => winner.carParam.id === item.car.carParam.id);
            const restPromises = [...promises.slice(0, failedId), ...promises.slice(failedId + 1)];
            this.raceAll(restPromises);
        } else {
            await this.saveWinner({
                id: winner.carParam.id,
                wins: 1,
                time: winner.time / 100,
            });
        }
    };

    createCars = async () => {
        for (let i = 0; i < MAX_COUNT_GENERATE_CAR; i++) {
            const name = getRandomName();
            const color = getRandomColor();
            this.sendDataCarForCreate(name, color);
        }
        await this.renderCars();
    };

    createWinner = async (winner: TWinner) => {
        await fetch(winners, {
            method: 'POST',
            body: JSON.stringify(winner),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    updateWinner = async (winner: TWinner) => {
        await fetch(`${winners}/${winner.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                wins: winner.wins,
                time: winner.time,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    getWinner = async (id: number) => {
        return fetch(`${winners}/${id}`);
    };

    saveWinner = async (body: TWinner) => {
        const winner = await this.getWinner(body.id);

        if (winner.status === 404) {
            await this.createWinner(body);
        } else {
            const res: TWinner = await winner.json();
            res.wins++;
            res.time = res.time < body.time ? res.time : body.time;
            await this.updateWinner(res);
        }
    };
}
