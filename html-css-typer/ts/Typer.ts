class Typer {
    private element: HTMLElement;
    private typeTime: number = 0.35;

    constructor(id: string) {
        this.element = <HTMLElement>document.getElementById(id).getElementsByClassName('text')[0];
        let lenght = this.element.textContent.length;
        this.element.style.animationDuration = `${this.typeTime * lenght}s`;
        this.element.style.animationTimingFunction = `steps(${lenght}, end)`
    }
}