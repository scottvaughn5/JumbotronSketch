import { CellColor } from "./CellColor";
import { GridEntity } from "./GridEntity";



class Glyph extends GridEntity{
    constructor(x: number, y: number){
        super(x,y);
    }
    Draw(state: GridEntity[][]): GridEntity[][] {
        
        return state;
    }
}