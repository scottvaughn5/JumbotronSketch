import React from "react"
import { CellColor, DefaultCellColor } from "../GridState/CellColor";
import { GridCell } from "../GridState/GridCell";
import { MatrixFactory } from "../GridState/MatrixFactory"
import { useInterval } from "../Hooks/useInterval";
import { GridRows } from "./GridRows";

const modifyGridState = (state: any, glyph: GridCell) => {
    state[glyph.Y][glyph.X] = glyph;
    return state;
}
const shiftVal = (min:number, max:number, num:number) =>{
    // if it goes outside the minimum range then go to the max
    if(num < min ){
        return max - 1;
    }else if(num >= max){
        return min;
    }else{
        return num;
    }
}
const newPoint = (state: any, x: number, y: number, cellX: number, cellY: number): { x: number, y: number } => {
    let newX = shiftVal(0, state[0].length, cellX + x);
    let newY = shiftVal(0, state.length, cellY + y);
    return { x: newX, y: newY }
}
const translateCell = (state: any, x: number, y: number, cellX: number, cellY: number, cellColor: CellColor) => {
    const blankCell = new GridCell(cellX, cellY, DefaultCellColor);
    const clearedState = modifyGridState(state, blankCell);
    const point = newPoint(state, x, y, cellX, cellY);
    let newCell = new GridCell(point.x, point.y, cellColor);
    return { glyph: newCell, matrix: modifyGridState(clearedState, newCell) };
}

interface IGridState {
    matrix: any;
    glyph: GridCell;
}

const Grid = () => {
    const [getGridState, setGridState] = React.useState<IGridState>({ matrix: MatrixFactory(30, 60), glyph: new GridCell(5, 10, new CellColor(255, 255, 100)) });
    useInterval(() => {
        setGridState(translateCell([...getGridState.matrix], -1, -1, getGridState.glyph.X, getGridState.glyph.Y, getGridState.glyph.Color))
    }, 100)
    return (
        <table>
            <tbody>
                <GridRows matrix={getGridState.matrix} />
            </tbody>
        </table >
    )
}

export { Grid }