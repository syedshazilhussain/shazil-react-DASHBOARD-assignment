import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetIdBy, Post } from './mainApi'

export default function Param() {
  let [paramList, setParamList] = useState({})
  let params = useParams()
  GetIdBy('users', params.id).then(res => {
    console.log("Done", res)
  }).catch(err => {
    console.log("Not Done", err)
  })

  Post('users', paramList).then(res => {
    console.log(res)
    setParamList([...res.data])
  }).catch(eee => {
    console.log(eee)
  })
  return (
    <>
      <h1>Param</h1>
      <button>
        button
      </button>
    </>
  )
}
