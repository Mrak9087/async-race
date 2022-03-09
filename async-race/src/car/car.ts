import './car.css';
import { TCar, TEngine } from '../general/types';
import BaseComponent from '../baseComponent/baseComponent';
import { garage, engine } from '../general/quertyString';
import { EnumEngineState } from '../general/enums';
import { createHTMLElement, getCarSvg } from '../helpers/helpers';

export default class Car extends BaseComponent {
    public carParam: TCar;

    public spanName: HTMLElement;

    public starBtn: HTMLButtonElement;

    public stopBtn: HTMLButtonElement;

    constructor(carObj: TCar) {
        super('car');
        this.carParam = carObj;
        this.spanName = createHTMLElement('span', 'name_car', this.carParam.name);
        this.starBtn = <HTMLButtonElement>createHTMLElement('button', 'btn_car', 'A');
        this.stopBtn = <HTMLButtonElement>createHTMLElement('button', 'btn_car', 'B');
    }

    render() {
        this.node.innerHTML = getCarSvg(this.carParam.color);
        this.spanName.innerHTML = this.carParam.name;
    }

    async update() {
        try{
            const resp = await fetch(`${garage}/${this.carParam.id}`);
            if (resp.status === 200) {
                const res = await resp.json();
                this.carParam.color = res.color;
                this.carParam.name = res.name;
            }
        } catch (e){
            console.error(e)
        }
        this.render();
    }

    startStopEngine = async (stateEngin: EnumEngineState) => {
        let resp:Response;
        try{
            resp = await fetch(`${engine}?id=${this.carParam.id}&status=${stateEngin}`, {
                method: 'PATCH',
            });
        } catch (e){
            console.error(e);
        }
        const res: TEngine = await resp.json();
        switch (stateEngin) {
            case EnumEngineState.start:
                this.starBtn.disabled = true;
                break;
            case EnumEngineState.stop:
                this.starBtn.disabled = false;
                break;
            default:
                break;
        }
        return res;
    };

    drive = async () => {
        let resp: Response;
        try {
            resp = await fetch(`${engine}?id=${this.carParam.id}&status=drive`, {
                method: 'PATCH',
            });
        } catch (e){
            console.error(e)
        }
        return resp.status === 200;
    };
}
