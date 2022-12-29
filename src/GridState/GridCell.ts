import { CellColor, DefaultCellColor } from "./CellColor";
import { GridEntity } from "./GridEntity";

interface IGridCell {

}

class GridCell extends GridEntity{
    Color: CellColor;
    constructor(x: number, y: number, color: CellColor) {
        super(x,y);
        this.Color = color;
    }
    Clear(state: GridEntity[][]): GridEntity[][] {
        state[this.Y][this.X] = new GridCell(this.X, this.Y, DefaultCellColor);
        return state;
    }
    Draw(state: GridEntity[][]): GridEntity[][] {
        state[this.Y][this.X] = this;
        return state;
    }
}


export { GridCell }