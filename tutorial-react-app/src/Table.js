import React, { Component } from 'react';

// Simple components
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    // Passing props array to component
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

// No point in having Table as a class component as it does not possess a state
const Table = (props) => {
    const { characterData, removeCharacter } = props

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

// Custom Class component
// class Table extends Component {
//     render() {
//         const { characterData } = this.props

//         return (
//             <table>
//                 <TableHeader />
//                 <TableBody characterData={characterData} />
//             </table>
//         )
//     }
// }

export default Table