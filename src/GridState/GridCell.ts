import { CellColor } from "./CellColor";

interface IGridCell {

}

class GridCell {
    X: number;
    Y: number;
    Color: CellColor;
    constructor(x: number, y: number, color: CellColor) {
        this.X = x;
        this.Y = y;
        this.Color = color;
    }
}


export { GridCell }