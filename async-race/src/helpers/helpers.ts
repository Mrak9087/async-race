import { TCenter } from '../general/types';
export function createHTMLElement(tagName: keyof HTMLElementTagNameMap, className: string, inner = ''): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = inner;
    return element;
}

function getCenterElement(element:HTMLElement): TCenter{
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
        x: left + width / 2,
        y: top + height / 2
    }
}

export function getDistanceBetweenElements(a:HTMLElement, b:HTMLElement):number {
    const aCenter = getCenterElement(a);
    const bCenter = getCenterElement(b);
    return Math.hypot(aCenter.x - bCenter.x, aCenter.y - bCenter.y);
}

export function getRandomName():string{
    const models = ['BMW','Mersedes', 'Toyota','Moskvich','Reno','Tesla','Opel','Porshe'];
    const names = ['Logan', '7', 'CLK', 'Camry', 'Combi','9','Corsa','D89','Cayene'];
    const model = models[Math.floor(Math.random() * models.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    return `${model} ${name}`;
}

export function getRandomColor():string{
    const letters = '0123456789ABCDEF';
    let result = '#';
    for (let i = 0; i < 6; i++){
        result += letters[Math.floor(Math.random() * letters.length)];
    }
    return result;
}