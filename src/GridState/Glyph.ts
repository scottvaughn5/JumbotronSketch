import { ShiftVal } from "../Utilities/TranslationHelpers";
import { CellColor, DefaultCellColor } from "./CellColor";
import { GridCell } from "./GridCell";
import { GridEntity } from "./GridEntity";

class RenderInstruction {
    moveX: number;
    moveY: number;
    color: CellColor;
    constructor(x: number, y: number, color: CellColor) {
        this.moveX = x;
        this.moveY = y;
        this.color = color;
    }
}

class Glyph extends GridEntity {
    constructor(x: number, y: number) {
        super(x, y);
    }
    private _createCell(color: CellColor): GridCell {
        return new GridCell(this.X, this.Y, color);
    }

    private _renderGlyph(state: GridEntity[][], clear: boolean): GridEntity[][] {
        const red = new CellColor(255, 0, 0);
        const green = new CellColor(0, 255, 0);
        const blue = new CellColor(0, 0, 255);
        const yellow = new CellColor(0, 255, 255);
        const purple = new CellColor(255, 255, 0);
        const instructions = [
            new RenderInstruction(0, 0, red),
            new RenderInstruction(1, 0, green),
            new RenderInstruction(-1, 0, blue),
            new RenderInstruction(0, 1, yellow),
            new RenderInstruction(0, -1, purple)]
        instructions.forEach((instruction: RenderInstruction) => {
            let cell = this._createCell(clear ? DefaultCellColor : instruction.color)
            cell.Translate(state, instruction.moveX, instruction.moveY);
            state[cell.Y][cell.X] = cell;
        })

        return state;
    }

    Draw(state: GridEntity[][]): GridEntity[][] {
        this._renderGlyph(state, false);
        return state;
    }
    Clear(state: GridEntity[][]): GridEntity[][] {
        this._renderGlyph(state, true);
        return state;
    }
}

export { Glyph }