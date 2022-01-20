import './garage.css';
import BaseComponent from '../baseComponent/baseComponent';
import Car from '../car/car';
import Road from '../road/road';
import { garage, winners } from '../general/quertyString';
import { MAX_COUNT_CAR, ERROR_TEXT, MAX_COUNT_GENERATE_CAR } from '../general/constants';
import { TCar, TStartDriving, TWinner } from '../general/types';
import { createHTMLElement, getRandomName, getRandomColor } from '../helpers/helpers';
import IRender from '../general/interfaces';

export default class Garage extends BaseComponent implements IRender {
    private roads: Road[];

    private selectedCar: Car;

    private generalCount: number;

    private panel: HTMLElement;

    private inputName: HTMLInputElement;

    private inputColor: HTMLInputElement;

    private btnCreateCar: HTMLButtonElement;

    private inputUpdateName: HTMLInputElement;

    private inputUpdateColor: HTMLInputElement;

    private btnUpdateCar: HTMLButtonElement;

    private btnRace: HTMLButtonElement;

    private btnReset: HTMLButtonElement;

    private carsDiv: HTMLElement;

    private winMessageDiv: HTMLElement;

    private textMessageSpan: HTMLElement;

    constructor() {
        super('garage');
        this.pageNum = 1;
        this.roads = [];
        this.selectedCar = null;
    }

    init() {
        this.carsDiv = createHTMLElement('div', 'cars');
        this.panel = createHTMLElement('div', 'panel');
        this.winMessageDiv = createHTMLElement('div', 'win_message');
        this.textMessageSpan = createHTMLElement('span', 'text_message');
        this.winMessageDiv.append(this.textMessageSpan);
        this.winMessageDiv.addEventListener('click', () => {
            this.winMessageDiv.classList.remove('win_show');
            this.checkPage();
        });

        this.addCreatePanel();
        this.addUpdatePanel();
        this.addButtonsPanel();
        this.node.append(this.panel, this.carsDiv, this.addBottomPanel(this), this.winMessageDiv);
    }

    render(isSaveState: boolean) {
        if (!isSaveState) {
            this.renderData();
        }

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
            await this.renderData();
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
        this.btnRace = <HTMLButtonElement>createHTMLElement('button', 'race', 'race');
        this.btnReset = <HTMLButtonElement>createHTMLElement('button', 'btnGen', 'reset');

        this.btnRace.addEventListener('click', async () => {
            this.btnRace.disabled = true;
            this.btnReset.disabled = false;
            this.btnNext.disabled = true;
            this.btnPrev.disabled = true;
            const winner = await this.race();
            this.textMessageSpan.innerHTML = winner.carParam.name ? `Winner: ${winner.carParam.name}` : 'Все сломались';
            this.winMessageDiv.classList.add('win_show');

            if (winner.success) {
                await this.saveWinner({
                    id: winner.carParam.id,
                    wins: 1,
                    time: winner.time / 100,
                });
            }
        });

        this.btnReset.addEventListener('click', async () => {
            await this.roads.forEach(async (item) => {
                await item.stopDriving();
            });
            this.btnRace.disabled = false;
        });
        const btnGenerateCars = createHTMLElement('button', 'btnGen', 'Generate cars');
        btnGenerateCars.addEventListener('click', async () => {
            await this.createCars();
        });
        btnPanelWrapper.append(this.btnRace, this.btnReset, btnGenerateCars);
        this.panel.append(btnPanelWrapper);
    }

    async renderData() {
        this.roads.splice(0);

        try {
            const resp = await fetch(`${garage}?_page=${this.pageNum}&_limit=${MAX_COUNT_CAR}`);

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
        } catch (e) {
            throw TypeError(ERROR_TEXT);
        }

        this.showRoads();
        this.checkPage();
    }

    addBox = (car: TCar) => {
        const road = new Road();
        road.init(car);
        this.roads.push(road);

        road.selectCarBtn.addEventListener('click', () => {
            this.selectCar(road.car);
        });
        road.deleteCarBtn.addEventListener('click', () => {
            this.sendDataCarForDelete(road.car.carParam.id);
        });
        road.car.starBtn.addEventListener('click', () => {
            this.btnRace.disabled = true;
            road.startDriving();
        });
        road.car.stopBtn.addEventListener('click', async () => {
            await road.stopDriving();
            this.btnRace.disabled = false;
        });
    };

    showRoads() {
        this.roads.forEach((item) => {
            this.carsDiv.append(item.node);
        });
    }

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
        await this.renderData();
    };

    race = async () => {
        const promises = this.roads.map((item) => item.startDriving());
        const winner = await this.raceAll(
            promises,
            this.roads.map((item) => item.car.carParam.id)
        );
        return winner;
    };

    raceAll = async (promises: Promise<TStartDriving>[], ids: number[]): Promise<TStartDriving> => {
        if (!promises.length) {
            return {
                success: false,
                carParam: null,
                time: 0,
            };
        }
        const winner = await Promise.race(promises);

        if (!winner.success) {
            const failedId = ids.findIndex((item) => winner.carParam.id === item);
            const restPromises = [...promises.slice(0, failedId), ...promises.slice(failedId + 1)];
            const restId = [...ids.slice(0, failedId), ...ids.slice(failedId + 1)];
            return this.raceAll(restPromises, restId);
        }
        return winner;
    };

    createCars = async () => {
        for (let i = 0; i < MAX_COUNT_GENERATE_CAR; i++) {
            const name = getRandomName();
            const color = getRandomColor();
            this.sendDataCarForCreate(name, color);
        }

        await this.renderData();
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
