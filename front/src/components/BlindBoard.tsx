import React, { useState, useEffect } from 'react'
import { Board, ButtonSet } from '../emotion/BlindBoard'
import { Link } from 'react-router-dom'
import TimeToString from './Common'
 

const PORT = process.env.NODE_ENV === 'development' ? 3000 : 80
let listMax = 10

const BlindBoard = () => { 
  let [list, setList]: any = useState([])  
  let [total, setTotal]: any = useState([])

  useEffect(() => { 
    listMax = 10
    const GetList = async () => {
      const response = await fetch('http://localhost:3000/init')
      let json = await response.json()
      setTotal(json)
      setList(json.filter((v: string | number, i: number) => i < listMax))
    }
    GetList()
  }, [])

  const Prev = () => {
    if(listMax > 10) {
      listMax -= 10
      setList(total.filter((v: string | number, i: number) => i < listMax)
      .filter((v2: string | number, i2: number) => i2 >= listMax - 10))
    }
  }

  const Next = () => {
    if(listMax < total.length) {
      setList(total.filter((v: string | number, i: number) => i >= listMax)
      .filter((v2: string | number, i2: number) => i2 < 10))
      listMax += 10
    }
  }

  return (  
    <div id="BlindBoard" css={Board}>
      <div id="BoardHeader">
        <h1>익명의 사내게시판📄</h1>
      </div>
      <div id="Board">
        {list.map((v: any, i:any) => (
          <ul key={v.id} data-id={v.id}>
            <Link to={`/read/${v.id}`}>
              <li>{v.title.length > 26 ? v.title.substr(0, 20) + '...' : v.title}</li>
              <li>{v.author}</li>
              <li>{TimeToString(v.time)}</li>
            </Link>
          </ul>
        ))}
      </div>
      <div id="BoardFooter">
        <div css={ButtonSet}>
          <span className="material-icons" onClick={Prev}>chevron_left</span>
          <Link to='/write'>
            <span className="material-icons">edit</span>
          </Link>
          <span className="material-icons" onClick={Next}>chevron_right</span>
        </div>
      </div>
    </div>
  )
  
}

export default BlindBoard