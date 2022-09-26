import React, {useState} from 'react'
import axios from 'axios'
import * as S from './dogstyle'
import {Link} from 'react-router-dom'


export default function Dogpage() {

  const [dog, setDog] = useState()
  const [status, setStatus] = useState(false)

  const getDog = () =>{
    axios.get('https://dog.ceo/api/breeds/image/random').then( res => {
      console.log(res)
      setDog(res.data.message)
      setStatus(true)
    })
  }
  return (
    <S.Dogs>
    <Link to="/">Home</Link>
    <button onClick={() => {getDog()}}>Click</button>
    { status && <img src={dog} alt='doguinho' />}

    </S.Dogs>

  )
}