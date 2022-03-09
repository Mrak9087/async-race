import { createHTMLElement } from '../helpers/helpers';
import IRender from '../general/interfaces';
import { MIN_COUNT_PAGE, MAX_COUNT_CAR } from '../general/constants';

export default class BaseComponent {
    readonly node: HTMLElement;

    protected pageNum: number;

    protected pageCount: number;

    protected generalCount: number;

    protected btnPrev: HTMLButtonElement;

    protected btnNext: HTMLButtonElement;

    constructor(className: string, tagName: keyof HTMLElementTagNameMap = 'div') {
        this.node = createHTMLElement(tagName, className);
    }

    addBottomPanel(object: IRender): HTMLElement {
        const bottomPanel = createHTMLElement('div', 'bottom_panel');
        this.btnPrev = createHTMLElement('button', 'btn_bottom', 'prev') as HTMLButtonElement;
        this.btnPrev.addEventListener('click', () => {
            this.handlePrev(object);
        });
        this.btnNext = createHTMLElement('button', 'btn_bottom', 'next') as HTMLButtonElement;
        this.btnNext.addEventListener('click', () => {
            this.handleNext(object);
        });
        bottomPanel.append(this.btnPrev, this.btnNext);
        return bottomPanel;
    }

    checkPage() {
        this.btnPrev.disabled = true;
        this.btnNext.disabled = true;
        if (this.pageNum === MIN_COUNT_PAGE) {
            this.btnPrev.disabled = true;
            this.btnNext.disabled = false;
        } else if (this.pageNum === this.pageCount) {
            this.btnPrev.disabled = false;
            this.btnNext.disabled = true;
        } else if (this.pageCount === MIN_COUNT_PAGE) {
            this.btnPrev.disabled = true;
            this.btnNext.disabled = true;
        } 
    }

    getCountPage(itemCount: number) {
        this.generalCount = itemCount;
        this.pageCount = Math.floor(this.generalCount / MAX_COUNT_CAR);

        if (this.generalCount % MAX_COUNT_CAR) {
            this.pageCount++;
        }

        if (!this.generalCount) this.pageCount = 1;
    }

    handlePrev = (object: IRender) => {
        this.pageNum--;
        if (!this.pageNum) {
            this.pageNum = 1;
        }
        object.renderData();
    };

    handleNext = (object: IRender) => {
        this.pageNum++;
        if (this.pageNum === this.pageCount) {
            this.pageNum = this.pageCount;
        }
        object.renderData();
    };
}
