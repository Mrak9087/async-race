import './winner.css';
import BaseComponent from '../baseComponent/baseComponent';
import { createHTMLElement } from '../helpers/helpers';
import { garage, winners } from '../general/quertyString';
import { TWinner, TCar } from '../general/types';
import { MAX_COUNT_CAR, MIN_COUNT_PAGE } from '../general/constants';
import { EnumSortDir } from '../general/enums';
import IRender from '../general/interfaces';

export default class Winners extends BaseComponent implements IRender {
    private table: HTMLElement;

    private generalCount: number;

    private winDiv: HTMLElement;

    private sortDir: EnumSortDir;

    private sortCell: string;

    private activeSortCell: HTMLElement;

    constructor() {
        super('winners');

        this.pageNum = MIN_COUNT_PAGE;
        this.generalCount = 0;
        this.sortDir = EnumSortDir.asc;
    }

    init() {
        this.table = createHTMLElement('table', 'table_winners');
        this.table.addEventListener('click', (e) => {
            this.handleClickTable(e);
        });
        this.winDiv = createHTMLElement('div', 'win');
        this.node.append(this.winDiv, this.addBottomPanel(this));
    }

    render() {
        this.renderData();
        return this.node;
    }

    async renderData() {
        const order = this.sortCell ? `&_sort=${this.sortCell}&_order=${this.sortDir}` : '';
        const resp = await fetch(`${winners}?_page=${this.pageNum}&_limit=${MAX_COUNT_CAR}${order}`);
        this.table.innerHTML = '';
        if (resp.status === 200) {
            const res = await resp.json();
            const cnt = resp.headers.get('X-Total-Count');
            this.generalCount = parseInt(cnt);
            this.pageCount = Math.floor(this.generalCount / MAX_COUNT_CAR);
            if (this.generalCount % MAX_COUNT_CAR) {
                this.pageCount++;
            }
            this.winDiv.innerHTML = `<span>Winners(${this.generalCount})</span>
                <span>Page #${this.pageNum}</span>`;
            this.winDiv.append(this.table);
            this.addHeadTable();
            res.forEach((item: TWinner, index: number) => {
                this.addRow(item, index);
            });
        }

        this.checkPage();
    }

    addHeadTable() {
        this.table.innerHTML = '';
        this.table.innerHTML = `
            <thead>
                <th>Number</th>
                <th>Name</th>
                <th class='sorted ${this.getSort(this.activeSortCell, 'wins')}'>Wins</th>
                <th class='sorted ${this.getSort(this.activeSortCell, 'time')}'>Best time (seconds)</th>
            </thead>
        `;
    }

    async addRow(winner: TWinner, index: number) {
        const row = createHTMLElement('tr', '');
        const car: TCar = await (await fetch(`${garage}/${winner.id}`)).json();
        row.innerHTML = `<td>${index + 1}</td><td>${car.name}</td><td>${winner.wins}</td><td>${winner.time}</td>`;
        this.table.append(row);
    }

    handleClickTable(e: Event) {
        let target = <HTMLElement>e.target;
        if (!target.classList.contains('sorted')) {
            return;
        }
        if (this.activeSortCell) {
            this.activeSortCell.classList.remove('desc');
            this.activeSortCell.classList.remove('asc');
        }

        if (target.innerHTML.indexOf('Wins') > -1) {
            this.checkedSort('wins');
        } else if (target.innerHTML.indexOf('time') > -1) {
            this.checkedSort('time');
        } else {
            this.sortCell = '';
            target = null;
        }
        this.activeSortCell = target;
        this.renderData();
    }

    checkedSort(sort: string) {
        this.sortCell = sort;
        if (this.sortDir === EnumSortDir.asc) {
            this.sortDir = EnumSortDir.desc;
        } else {
            this.sortDir = EnumSortDir.asc;
        }
    }

    getSort(cell: HTMLElement, checkStr: string): string {
        if (!cell) {
            return '';
        }
        if (this.sortCell === checkStr) {
            return this.sortDir;
        }
        return '';
    }
}
