import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="nav">
        <ul className="nav-list">
            <li className="nav-item">Giới thiệu</li>
            <li className="nav-item">Home</li>
            <li className="nav-item">Tải ứng dụng</li>
            <li className='nav-item'><Link to="/game">Game Snake</Link></li>
        </ul>
        <ul className="nav-list">
            <li className="nav-item"><Link to="/login">Đăng nhập</Link></li>
            <li className="nav-item">Đăng kí</li>
        </ul>
    </div>
    <div>
    </div>
  
      </div>
    )
  }
}
