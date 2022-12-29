import { CellColor, DefaultCellColor } from "./CellColor";
import { GridCell } from "./GridCell";

// method to create an nxn matrix
const MatrixFactory = (n: number, m: number) => {
    const matrix = [];
    for (let x = 0; x < n; x++) {
        const row = [];
        for (let y = 0; y < m; y++) {
            row.push(new GridCell(x, y, DefaultCellColor));
        }
        matrix.push(row);
    }
    return matrix;
}

export { MatrixFactory }