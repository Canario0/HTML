"use strict";
class Typer {
    constructor(id) {
        this.typeTime = 0.35;
        this.element = document.getElementById(id).getElementsByClassName('text')[0];
        let lenght = this.element.textContent.length;
        this.element.style.animationDuration = `${this.typeTime * lenght}s`;
        this.element.style.animationTimingFunction = `steps(${lenght}, end)`;
    }
}
//# sourceMappingURL=Typer.js.map