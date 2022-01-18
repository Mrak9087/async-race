export default interface IRender {
    render(isSaveState?:boolean): HTMLElement;
    renderData(): void;
}
