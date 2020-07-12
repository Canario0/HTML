"use strict";
class Typer {
    constructor(id) {
        this._typeTime = 0.35;
        this._element = document.getElementById(id).getElementsByClassName('text')[0];
        this.updateOnChange();
    }
    get element() {
        return this._element;
    }
    set content(content) {
        this._element.textContent = content;
        this.updateOnChange();
    }
    updateOnChange() {
        console.log(this._element);
        let lenght = this._element.textContent.length;
        console.log(this._element.textContent);
        this._element.style.animationDuration = `${this._typeTime * lenght}s`;
        this._element.style.animationTimingFunction = `steps(${lenght}, end)`;
    }
}
//# sourceMappingURL=Typer.js.map