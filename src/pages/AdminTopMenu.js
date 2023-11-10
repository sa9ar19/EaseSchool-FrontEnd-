import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import SettingsIcon from '@mui/icons-material/Settings';



export const AdminTopMenu = () => {
  return (
    <div>
        <div className='admin-dashboard-top-menu'>
            <h1>Welcome Admin</h1>
            <NotificationsIcon fontSize='large' className='notifications_icon'/>
            <MailOutlineRoundedIcon fontSize='large' className='mail_icon'/>
            <img src="" alt="" />
        </div>
    </div>
  )
}
