import React, { useState } from 'react'

export default function Input(props) {
    let {arr , onSearch} = props
    let [changeList , setChangeList] = useState("")
    let SecondValue = (p) => {
        onSearch(changeList , p)
    }
  return (
    <>
    <input placeholder='Enter Value' type='text' onChange={(p) => SecondValue(p.target.value)} />
    <select onChange={(p) => setChangeList(p.target.value)}>
        <option value=''>select Value</option>
        {arr.map((f , j)=> (
            <option key={j} value={f.key}>{f.displyName}</option>
        ))}
    </select>
    </>
)
}
