import { stringify } from "querystring";
import { CellColor } from "../GridState/CellColor";
import { GridEntity } from "../GridState/GridEntity";
import { NameGlyph } from "./NameGlyph";

export class RenderInstruction {
    moveX: number;
    moveY: number;
    color: CellColor;
    constructor(x: number, y: number, color: CellColor) {
        this.moveX = x;
        this.moveY = y;
        this.color = color;
    }
}
// start of performance optimizations
// function RenderingStep(instruction: RenderInstruction){
//     let cell = this._createCell(instruction.color)
//     cell.Translate(state, instruction.moveX, instruction.moveY);
//     state[cell.Y][cell.X] = cell;
// }

// export function CompileRenderPlan(instructions: RenderInstruction[]): (state: GridEntity[][]) => GridEntity[][]{
//     return (state: GridEntity[][]) => state; 
// }

const colorMap = {
     "r" :new CellColor(255, 0, 0),
     "g" : new CellColor(0, 255, 0),
     "b" : new CellColor(0, 0, 255),
     "y" : new CellColor(0, 255, 255),
     "p" : new CellColor(255, 255, 0),
     "w" : new CellColor(255, 255, 255),
}

function GenerateInstructionsFromCSV(){
    let csv_rows = NameGlyph.toLocaleLowerCase().split("\n")
    const instructions = [];
    csv_rows.forEach((row_str:string, from_y: number) => {
        row_str.split(",").forEach((cell:string, from_x:number) => {
            if(cell in colorMap){
                instructions.push(new RenderInstruction(from_x, from_y, colorMap[cell]))
            }
        });
    })
    return instructions;
}

export {GenerateInstructionsFromCSV}