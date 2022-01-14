// import { INodeElement } from '../generalTypes/general';
import { createHTMLElement } from '../helpers/helpers';

export default class BaseComponent {
    // implements INodeElement
    readonly node: HTMLElement;

    constructor(className: string, tagName: keyof HTMLElementTagNameMap = 'div') {
        this.node = createHTMLElement(tagName, className);
    }
}
