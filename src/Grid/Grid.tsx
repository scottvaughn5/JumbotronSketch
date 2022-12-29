import React from "react"
import { CellColor, DefaultCellColor } from "../GridState/CellColor";
import { GridCell } from "../GridState/GridCell";
import { GridEntity } from "../GridState/GridEntity";
import { MatrixFactory } from "../GridState/MatrixFactory"
import { useInterval } from "../Hooks/useInterval";
import { ShiftVal, TranslateCell } from "../Utilities/TranslationHelpers";
import { GridRows } from "./GridRows";



interface IGridState {
    matrix: GridEntity[][];
    glyph: GridCell;
}

const Grid = () => {
    const [getGridState, setGridState] = React.useState<IGridState>({ matrix: MatrixFactory(30, 60), glyph: new GridCell(30, 15, new CellColor(0, 191, 255)) });
    useInterval(() => {
        setGridState(TranslateCell([...getGridState.matrix], getGridState.glyph, 1, 0))
    }, 100)
    return (
        <table>
            <GridRows matrix={getGridState.matrix} />
        </table >
    )
}

export { Grid }