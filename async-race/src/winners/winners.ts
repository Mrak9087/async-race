import './winner.css';
import BaseComponent from '../baseComponent/baseComponent';
import { createHTMLElement } from '../helpers/helpers';
import { garage, winners } from '../general/quertyString';
import { TWinner, TCar } from '../general/types';
import { MAX_COUNT_CAR } from '../general/constants';
import { EnumSortDir } from '../general/enums';

export default class Winners extends BaseComponent {
    private table: HTMLElement;

    private pageNum: number;

    private generalCount: number;

    private winDiv: HTMLElement;

    private sortDir: EnumSortDir;

    private sortCell: string;

    private activeSortCell: HTMLElement;

    constructor() {
        super('winners');
        this.table = createHTMLElement('table', 'table_winners');
        this.table.addEventListener('click', (e) => {
            this.handleClickTable(e);
        });
        this.winDiv = createHTMLElement('div', 'win');
        this.pageNum = 1;
        this.generalCount = 0;
        this.sortDir = EnumSortDir.asc;
    }

    render() {
        this.renderWinners();
        return this.node;
    }

    async renderWinners() {
        const order = this.sortCell ? `&_sort=${this.sortCell}&_order=${this.sortDir}` : '';
        const resp = await fetch(`${winners}?_page=${this.pageNum}&_limit=${MAX_COUNT_CAR}${order}`);
        this.table.innerHTML = '';
        if (resp.status === 200) {
            const res = await resp.json();
            this.generalCount = parseInt(resp.headers.get('X-Total-Count'));
            this.winDiv.innerHTML = `<span>Winners(${this.generalCount})</span>
                <span>Page #${this.pageNum}</span>`;
            this.addHeadTable();
            res.forEach((item: TWinner, index: number) => {
                this.addRow(item, index);
            });
            this.winDiv.append(this.table);
            this.node.append(this.winDiv);
        }
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
        const target = <HTMLElement>e.target;
        if (this.activeSortCell) {
            this.activeSortCell.classList.remove('desc');
            this.activeSortCell.classList.remove('asc');
        }
        this.activeSortCell = target;
        if (target.innerHTML.indexOf('Wins') > -1) {
            this.checkedSort('wins')
        }
        if (target.innerHTML.indexOf('time') > -1) {
            this.checkedSort('time')
        }
        this.renderWinners();
    }

    checkedSort(sort:string){
        this.sortCell = sort;
        if (this.sortDir === EnumSortDir.asc) {
            this.sortDir = EnumSortDir.desc;
        } else {
            this.sortDir = EnumSortDir.asc;
        }
    }

    getSort(cell:HTMLElement,checkStr:string):string{
        if (!cell){
            return '';
        }
        if (this.sortCell === checkStr){
            return this.sortDir;
        }
        return '';
    }
}
