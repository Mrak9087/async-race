import { TCenter } from '../general/types';

export function createHTMLElement(tagName: keyof HTMLElementTagNameMap, className: string, inner = ''): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = inner;
    return element;
}

function getCenterElement(element: HTMLElement): TCenter {
    const { top, left, width, height } = element.getBoundingClientRect();
    return {
        x: left + width / 2,
        y: top + height / 2,
    };
}

export function getDistanceBetweenElements(a: HTMLElement, b: HTMLElement): number {
    const aCenter = getCenterElement(a);
    const bCenter = getCenterElement(b);
    return Math.hypot(aCenter.x - bCenter.x, aCenter.y - bCenter.y);
}

export function getRandomName(): string {
    const models = ['BMW', 'Mersedes', 'Toyota', 'Moskvich', 'Reno', 'Tesla', 'Opel', 'Porshe'];
    const names = ['Logan', '7', 'CLK', 'Camry', 'Combi', '9', 'Corsa', 'D89', 'Cayene'];
    const model = models[Math.floor(Math.random() * models.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    return `${model} ${name}`;
}

export function getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result += letters[Math.floor(Math.random() * letters.length)];
    }
    return result;
}

export function getCarSvg(color: string): string {
    return `<?xml version="1.0"?>
    <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 167.83 55.332" version="1.0">
      <g id="layer1" transform="translate(-227.51 -167.55)">
        <path id="path2220" fill="${color}" stroke="#FFFFFF" fill-rule="evenodd" d="m229.52 196.33c-0.09-8.41 0.63-14.12 2.92-14.62l11.85-1.54c8.38-3.87 17.11-8.68 24.77-10.62 5.88-1.17 12.1-1.88 18.77-2 13.43 0.22 28.36-0.7 37.85 2.47 9.04 4.17 17.95 8.62 26.46 13.84 11.48 0.79 34.91 3.98 38.32 7.7 1.69 2.28 3.05 4.73 3.69 7.54 1.49 0.61 1.38 2.82 0.77 5.53l-0.16 5.54-5.69 2.31-11.23 1.39-2.92 0.77c-4.24 9.94-19.98 8.71-24.31-0.47l-3.54 0.62-63.09-0.62-0.77 1.08-4.92-0.15c-3.3 10.15-22.17 11.08-25.08-1.39h-2.46l-7.39-1.07-11.23-1.54c-3.06-1.82-4.34-3.19-4.62-4.31l0.77-1.08-0.61-6.15c0.41-2.09 0.79-2.76 1.85-3.23zm68.16-26.37c-6.77 0.01-13.39 0.26-19.34 1.57l1.39 11.78 20.9 0.72c0.86-0.18 1.76-0.32 1.59-1.79l-2.18-12.28c-0.79-0.01-1.57 0-2.36 0zm-20.34 1.8c-4.01 0.97-7.7 2.47-10.9 4.74-1.27 0.85-1.73 1.85-1.68 2.97 0.59 2.54 2.09 3.57 4.26 3.47l9.71 0.33-1.39-11.51zm27.26-1.7l4.46 12.68c0.56 0.92 1.38 1.61 2.88 1.69l21.7 0.89c-3.09-2.11-0.55-6 2.58-5.15-5.87-4.89-12.24-7.99-19.13-9.22-4.05-0.65-8.26-0.79-12.49-0.89zm-71.88 12.58c-1.78 0.64-2.21 5.18-2.29 10.75l5.83-0.05c0.22-1.95 0.26-3.9 0.02-5.85-0.57-3.41-2.17-3.83-3.56-4.85zm38.65 5.22h5.51c0.43 0 0.79 0.36 0.79 0.79 0 0.44-0.36 0.79-0.79 0.79h-5.51c-0.44 0-0.79-0.35-0.79-0.79 0-0.43 0.35-0.79 0.79-0.79zm38 0.91h5.51c0.44 0 0.79 0.35 0.79 0.79s-0.35 0.79-0.79 0.79h-5.51c-0.44 0-0.79-0.35-0.79-0.79s0.35-0.79 0.79-0.79zm-34.25 21.22c0 5.04-4.09 9.13-9.13 9.13s-9.13-4.09-9.13-9.13 4.09-9.13 9.13-9.13 9.13 4.09 9.13 9.13zm97.44-1.16c0 5.04-4.09 9.13-9.13 9.13s-9.13-4.09-9.13-9.13 4.09-9.13 9.13-9.13 9.13 4.09 9.13 9.13zm7.63-11.03l11.79 0.08c-0.91-1.96-2.08-3.7-3.91-5.12l-4.56 0.35c-0.84 0.13-1.19 0.5-1.5 0.89l-1.82 3.8z"/>
      </g>
    </svg>`;
}

export function getFlagSvg(): string {
    return `<?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
     "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="806.000000pt" height="1280.000000pt" viewBox="0 0 806.000000 1280.000000"
     preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
    fill="#ff0000" stroke="none">
    <path d="M144 12768 c-214 -144 -179 -464 62 -563 l59 -25 -85 0 c-89 -1 -108
    -8 -129 -48 -30 -56 24 -122 99 -122 l35 0 -3 -6005 -2 -6005 140 0 140 0 0
    3789 0 3790 93 -44 c471 -220 1042 -329 1627 -311 522 15 1027 99 1918 317
    1034 253 1379 322 1847 369 766 77 1411 -13 2008 -280 l107 -48 0 2217 0 2218
    -95 42 c-344 151 -670 242 -1035 286 -180 22 -603 30 -805 16 -364 -26 -733
    -85 -1210 -191 -202 -45 -343 -79 -855 -204 -749 -182 -1207 -264 -1647 -297
    -211 -15 -675 -7 -841 15 -379 50 -740 153 -1052 300 -49 23 -52 26 -25 26 71
    0 123 68 94 122 -21 40 -40 47 -129 48 l-85 0 59 25 c117 48 191 146 203 269
    11 118 -41 226 -141 294 -48 32 -48 32 -176 32 -128 0 -128 0 -176 -32z"/>
    </g>
    </svg>`;
}
