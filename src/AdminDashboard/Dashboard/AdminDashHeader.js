import React from 'react'

import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

import adminImage from '../../assets/adminprofile.jpg'

export const AdminDashHeader = () => {
  return (
    <div>
        <div className='admin-dashboard-top-menu'>
            <h1>Welcome Admin</h1>
            <NotificationsIcon fontSize='large' className='notifications_icon'/>
            <MailOutlineRoundedIcon fontSize='large' className='mail_icon'/>
            <img src={adminImage} alt="" />
        </div>
    </div>
  )
}
