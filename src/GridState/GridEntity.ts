import ICoordinate from "../Interface/ICoordinate";
import { ShiftVal } from "../Utilities/TranslationHelpers";

interface IGridEntity {
    Clear(state: GridEntity[][]): GridEntity[][];
    Draw(state: GridEntity[][]): GridEntity[][];
    Translate(state: GridEntity[][], byX:number, byY: number): GridEntity;
}

class GridEntity implements IGridEntity {
    X: number;
    Y: number;
    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }
    Draw(state: GridEntity[][]): GridEntity[][] {
        throw new Error("Draw Method not implemented.");
    }
    Clear(state: GridEntity[][]): GridEntity[][] {
        throw new Error("Clear Method not implemented.");
    }
    Translate(state: GridEntity[][], byX: number, byY: number): GridEntity {
        this.X = ShiftVal(0, state[0].length, this.X + byX);
        this.Y = ShiftVal(0, state.length, this.Y + byY);
        return this;
    }
}

export { GridEntity }