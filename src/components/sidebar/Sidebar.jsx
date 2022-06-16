import React from 'react'
import './sidebar.css'
import { sidebarMenu } from '../../data/data'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
  const [clickedElement, setClickedElement] = useState('null')

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {sidebarMenu.map((data) => (
          <div key={data.id} className="sidebarMenu">
            <h3 className="sidebarTitle">{data.title}</h3>
            <ul className="sidebarList">
              <Link to={`/${data.outleta}`} className="link">
                <li
                  onClick={(e) => {
                    let newClick = e.target.innerText.toLowerCase()
                    setClickedElement(newClick)
                  }}
                  className={`sidebarListItem ${data.outleta == clickedElement ? data.class : ''} `}
                >
                  {data.icon1a}
                  {data.item1}
                </li>
              </Link>
              <Link to={`/${data.outletb}`} className="link">
                <li
                  onClick={(e) => {
                    let newClick = e.target.innerText.toLowerCase()
                    setClickedElement(newClick)
                  }}
                  className={`sidebarListItem ${data.outleta == clickedElement ? data.class : ''} `}
                >
                  {data.icon1b}
                  {data.item2}
                </li>
              </Link>
              <Link to={`/${data.outletc}`} className="link">
                <li
                  onClick={(e) => {
                    let newClick = e.target.innerText.toLowerCase()
                    setClickedElement(newClick)
                  }}
                  className={`sidebarListItem ${data.outleta == clickedElement ? data.class : ''} `}
                >
                  {data.icon1c}
                  {data.item3}
                </li>
              </Link>
              <Link to={`/${data.outletd}`} className="link">
                <li
                  onClick={(e) => {
                    let newClick = e.target.innerText.toLowerCase()
                    setClickedElement(newClick)
                  }}
                  className={`sidebarListItem ${data.outleta == clickedElement ? data.class : ''}`}
                >
                  {data.icon1d}
                  {data.item4}
                </li>
              </Link>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
