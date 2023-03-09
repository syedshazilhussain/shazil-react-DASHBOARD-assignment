import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './home'
import { Get } from './mainApi'


export default function About() {
    let [dataList, setdataList] = useState({})
    const Navigate = useNavigate()
    let push = (id) => {
        Navigate(`param/${id}`)
    }
    let colums = [
        {
            key: '',
            displayField: (r) => (<button onClick={() => push(r.id)}>view</button>),
            displyName: 'Name'
        },
        {
            key: 'email',
            displayField: (r) => (<a href={`mailto:${r.email}`}>{r.email}</a>),
            displyName: 'Email'
        },
        {
            key: 'contact',
            displyName: 'Contact'
        },
        {
            key: 'website',
            displyName: 'Website'
        },
    ]

    let getList = () => {
        Get('comments').then(res => {
            console.log(res);
            setdataList([...res.data])
        }).catch(rrr => {
            console.log(rrr)
        })
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <>
            <h1>About</h1>
            <Home colums={colums} dataSource={dataList} />
        </>
    )
}
