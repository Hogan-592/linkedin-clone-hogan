import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import me from './Hogan Luo.jpg'
import { useDispatch } from 'react-redux';
import { logout } from './features/counter/userSlice';
import { auth } from './firebase';

function Header() {
  
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className = 'header'>

        <div className="header__left">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt='linkedin'
            />
            <div className='header__search'>
                {/* Search Icon */}
                <SearchIcon />
                <input placeholder="search" type='text'/>
            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notification"/>
            <HeaderOption avatar={me} title="me" onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header;