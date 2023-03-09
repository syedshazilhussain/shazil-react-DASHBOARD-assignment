import React, { useDeferredValue, useEffect, useState } from 'react'
import Home from './home'
import { Get } from './mainApi'

export default function Contact() {
    let [columsList, setColumsList] = useState({})

    let colums = [
        {
            key: 'name',
            searchAble: true,
            displyName: 'Name'
        },
        {
            key: 'email',
            searchAble: true,
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

    let GetData = () => {
        Get('users').then(res => {
            setColumsList([...res.data])
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        GetData()
    }, [])
    return (
        <>
            <h1>
                CONTACT
            </h1>
            <Home colums={colums} dataSource={columsList} Heading='Table' />
        </>
    )
}
