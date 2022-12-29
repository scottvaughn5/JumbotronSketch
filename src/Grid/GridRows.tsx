import React from 'react'
import { GridCell } from '../GridState/GridCell'


const GridRows = ({ matrix }: { matrix: any }) => {
    return matrix.map((row: GridCell[], row_num: number) => {
        const cols = row.map((col: GridCell, col_num: number) => {
            return <td key={col_num} style={{backgroundColor: col.Color.RGB}}></td>
        })
        return <tr key={row_num}>{cols}</tr>
    })
}


export { GridRows }