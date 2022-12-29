import { timeStamp } from "console";

class CellColor {
    r: number;
    g: number;
    b: number;

    public get RGB(): string {
        return `rgb(${this.r},${this.g},${this.b})`
    }

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
const defaultNum = 70;
const DefaultCellColor = new CellColor(defaultNum, defaultNum, defaultNum)


export { CellColor, DefaultCellColor }