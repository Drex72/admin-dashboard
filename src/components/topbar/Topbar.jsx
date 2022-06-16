import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">drexadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
            alt="Top Avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  )
}

export default Topbar
