import { CellColor, DefaultCellColor } from "../GridState/CellColor";
import { GridCell } from "../GridState/GridCell";
import ICoordinate from "../Interface/ICoordinate";



const ShiftVal = (min:number, max:number, num:number) =>{
    // if it goes outside the minimum range then go to the max
    if(num < min ){
        return max - 1;
    }else if(num >= max){
        return min;
    }else{
        return num;
    }
}


const ModifyGridState = (state: any, glyph: GridCell) => {
    state[glyph.Y][glyph.X] = glyph;
    return state;
}



const NewPoint = (state: any, x: number, y: number, cellX: number, cellY: number): ICoordinate  => {
    let newX = ShiftVal(0, state[0].length, cellX + x);
    let newY = ShiftVal(0, state.length, cellY + y);
    return { x: newX, y: newY }
}

const TranslateCell = (state: any, glyph: GridCell, x: number, y: number) => {
    glyph.Clear(state);
    const point = NewPoint(state, x, y, glyph.X, glyph.Y);
    let newCell = new GridCell(point.x, point.y, glyph.Color);
    newCell.Draw(state);
    return { glyph: newCell, matrix: state };
}


export {ShiftVal, ModifyGridState, NewPoint, TranslateCell }