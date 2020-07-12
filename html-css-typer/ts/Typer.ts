class Typer {
    private _element: HTMLElement;
    private _typeTime: number = 0.35;

    constructor(id: string) {
        this._element = <HTMLElement>document.getElementById(id).getElementsByClassName('text')[0];
        this.updateOnChange();
    }

    get element(){
        return this._element;
    }

    set content(content:string){
        this._element.textContent = content;
        this.updateOnChange();
    }

    public updateOnChange(){
        console.log(this._element)
        let lenght = this._element.textContent.length;
        console.log(this._element.textContent);
        this._element.style.animationDuration = `${this._typeTime * lenght}s`;
        this._element.style.animationTimingFunction = `steps(${lenght}, end)`
    }
}