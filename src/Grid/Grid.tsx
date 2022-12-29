import React from "react"
import { CellColor, DefaultCellColor } from "../GridState/CellColor";
import { Glyph } from "../GridState/Glyph";
import { GridEntity } from "../GridState/GridEntity";
import { MatrixFactory } from "../GridState/MatrixFactory"
import { useInterval } from "../Hooks/useInterval";
import { ShiftVal, TranslateCell } from "../Utilities/TranslationHelpers";
import { GridRows } from "./GridRows";



interface IGridState {
    matrix: GridEntity[][];
    glyph: GridEntity;
}

const Grid = () => {
    const [getGridState, setGridState] = React.useState<IGridState>({ matrix: MatrixFactory(50, 80), glyph: new Glyph(30, 10) });
    useInterval(() => {
        setGridState(TranslateCell([...getGridState.matrix], getGridState.glyph, -1, 1))
    }, 1)
    return (
        <table>
            <GridRows matrix={getGridState.matrix} />
        </table >
    )
}

export { Grid }