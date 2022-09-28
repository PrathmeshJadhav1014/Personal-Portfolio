import React from 'react'
import { NavLink } from 'react-router-dom'
import Particals from '../../Particals'
import Cards from './Cards'
import "./work.css"

function Work() {
  return (
    <>
      <Particals/>
      <div className="work">
    <div className='topbar-a' >
        <div className="logo-a">
        <img src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjoyNSwidyI6MTI1MCwiZnMiOjIwLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UHJhdGhtZXNo/madrigal.png" alt="" />
        </div>
            <ul>
            <NavLink to="/">
                <li>Home</li>
                </NavLink>
            <NavLink to="/skill">                
            <li>Skills</li>
            </NavLink>

                <NavLink to="/work">
                <li>Work</li>
                </NavLink>
            <NavLink to="/contact">
                <li>Contact</li>
                </NavLink>

            </ul>
    </div>
    <div className="text2">
      <img src="https://see.fontimg.com/api/renderfont4/mLJ92/eyJyIjoiZnMiLCJoIjo0OSwidyI6MTI1MCwiZnMiOjM5LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TXkgV29yaw/madrigal.png" alt="" />
    </div>
    <Cards/>
    <div className="go-to">
      {">"}
    </div>
    </div>
    </>
  )
}

export default Work
