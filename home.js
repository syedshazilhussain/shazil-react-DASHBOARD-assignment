import React from 'react'

export default function Home(props) {
    const { Heading, dataSource, colums } = props
    return (
        <>
            <h2>{Heading}</h2>
            <table>
                <thead>
                    <tr>
                        {colums && Array.isArray(colums) && colums.length > 0 ?
                            colums.map((a, f) => (
                                <th key={f}>{a.displyName}</th>
                            ))
                            : null}
                    </tr>
                </thead>
                <tbody>
                    {dataSource && Array.isArray(dataSource) && dataSource.length > 0 ?
                        dataSource.map((d, k) => (
                            <tr key={k}>
                                {
                                    colums.map((s, l) => (

                                        <td key={l}>
                                            {s.displayField ? s.displayField(d) : d[s.key]}

                                        </td>
                                    ))
                                }
                            </tr>

                        ))
                        : null}
                </tbody>
            </table>
        </>
    )
}
