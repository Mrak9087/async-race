import './app.css';
import BaseComponent from '../baseComponent/baseComponent';
import { createHTMLElement } from '../helpers/helpers';
import Garage from '../garage/garage';
import Winners from '../winners/winners';
import IRender from '../general/interfaces';

export default class App extends BaseComponent {
    private btnPanel: HTMLElement;

    private viewPanel: HTMLElement;

    private garageBtn: HTMLElement;

    private winnersBtn: HTMLElement;

    private garage: Garage;

    private winners: Winners;

    constructor() {
        super('app');
    }

    init() {
        this.btnPanel = createHTMLElement('div', 'app_panel');
        this.viewPanel = createHTMLElement('div', 'view_panel');
        this.garageBtn = createHTMLElement('button', 'btn_app', 'garage');
        this.winnersBtn = createHTMLElement('button', 'btn_app', 'winners');
        this.btnPanel.append(this.garageBtn, this.winnersBtn);
        this.garage = new Garage();
        this.garage.init();
        this.winners = new Winners();
        this.winners.init();
        this.viewPanel.append(this.garage.render(false));
        this.garageBtn.addEventListener('click', () => {
            this.renderElement(this.garage,true);
        });
        this.winnersBtn.addEventListener('click', () => {
            this.renderElement(this.winners);
        });
        this.node.append(this.btnPanel, this.viewPanel);
    }

    renderElement(element: IRender, isSaveState?:boolean) {
        this.viewPanel.innerHTML = '';
        this.viewPanel.append(element.render(isSaveState));
    }
}
