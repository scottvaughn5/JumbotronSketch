import { CellColor, DefaultCellColor } from "../GridState/CellColor";
import { GridCell } from "../GridState/GridCell";
import { GridEntity } from "../GridState/GridEntity";
import ICoordinate from "../Interface/ICoordinate";



const ShiftVal = (min:number, max:number, num:number) =>{
    // if it goes outside the minimum range then go to the max
    if(num < min ){
        return max - (1 + (max - num));
    }else if(num >= max){
        return min + (num - max);
    }else{
        return num;
    }
}



const TranslateCell = (state: GridEntity[][], glyph: GridEntity, x: number, y: number) => {
    glyph.Clear(state);
    glyph.Translate(state, x, y)
    glyph.Draw(state);
    return { glyph: glyph, matrix: state };
}


export {ShiftVal, TranslateCell }