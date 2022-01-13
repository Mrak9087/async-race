import { TCar } from '../general/types';
import { BaseComponent } from '../baseComponent/baseComponent';
import { garage } from '../general/quertyString';
import { createHTMLElement } from '../helpers/helpers';

export class Car extends BaseComponent {
    public carParam: TCar;
    public spanName: HTMLElement;
    constructor(carObj: TCar) {
        super('car');
        this.carParam = carObj;
        this.spanName = createHTMLElement('span', 'name_car', this.carParam.name);
    }

    render() {
        this.node.style.cssText = `background-color:${this.carParam.color};width:50px;height:25px`;
        this.spanName.innerHTML = this.carParam.name;
    }

    async update() {
        const resp = await fetch(`${garage}/${this.carParam.id}`);
        if (resp.status === 200) {
            const res = await resp.json();
            this.carParam.color = res.color;
            this.carParam.name = res.name;
        }
        this.render();
    }

    // innerHTML = `
    //     <?xml version="1.0" encoding="UTF-8"?>
    //     <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    //     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    //     version="1.1" id="mdi-car-sports">
    //     <path fill=${this.carParam.color} d="M12,8.5H7L4,11H3C1.89,11 1,11.89 1,13V16H3.17C3.6,17.2 4.73,18 6,18C7.27,18 8.4,
    //     17.2 8.82,16H15.17C15.6,17.2 16.73,18 18,18C19.27,18 20.4,17.2 20.82,16H23V15C23,13.89 21.97,13.53 21,13L12,
    //     8.5M5.25,12L7.5,10H11.5L15.5,12H5.25M6,13.5A1.5,1.5 0 0,1 7.5,15A1.5,1.5 0 0,1 6,16.5A1.5,1.5 0 0,1 4.5,
    //     15A1.5,1.5 0 0,1 6,13.5M18,13.5A1.5,1.5 0 0,1 19.5,15A1.5,1.5 0 0,1 18,16.5A1.5,1.5 0 0,1 16.5,15A1.5,
    //     1.5 0 0,1 18,13.5Z" /></svg>
    //     `
}
