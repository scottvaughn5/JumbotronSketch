import React from 'react'
import { GridCell } from '../GridState/GridCell'
import { GridEntity } from '../GridState/GridEntity'


const GridRows = ({ matrix }: { matrix: GridEntity[][] }) => {
    return (
        <tbody>{
            matrix.map((row: GridCell[], row_num: number) => {
                const cols = row.map((col: GridCell, col_num: number) => {
                    return <td key={col_num} style={{ backgroundColor: col.Color.RGB }}></td>
                })
                return <tr key={row_num}>{cols}</tr>
            })
        }
        </tbody>
    )
}


export { GridRows }