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