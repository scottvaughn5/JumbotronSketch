import ICoordinate from "../Interface/ICoordinate";

interface IGridEntity{
    Clear(state:GridEntity[][]): GridEntity[][];
    Draw(state:GridEntity[][]): GridEntity[][];
    Translate(coordinate: ICoordinate)
}

class GridEntity implements IGridEntity {
    X: number;
    Y: number;
    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }
    Translate(coordinate: ICoordinate) {
        throw new Error("Translate Method not implemented.");
    }
    Clear(state: GridEntity[][]): GridEntity[][] {
        throw new Error("Clear Method not implemented.");
    }
    Draw(state: GridEntity[][]): GridEntity[][] {
        throw new Error("Draw Method not implemented.");
    }
}

export { GridEntity }