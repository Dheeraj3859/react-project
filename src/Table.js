import React from 'react'

class Table extends React.Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>Charlie</td>
                        <td>Gardener</td>
                    </tr>
                    <tr>
                        <td>Sunny</td>
                        <td>Engineer</td>
                    </tr>
                    <tr>
                        <td>Pamela</td>
                        <td>Doctoor</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table