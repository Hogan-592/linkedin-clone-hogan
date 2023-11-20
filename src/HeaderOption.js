import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';

function HeaderOption({avatar, Icon, title, onClick}) {


  return (
    <div onClick={onClick} className='headerOption'>
        {/* We could deconstruct the props with {}, so instead to write props.title, we can just say {title} */}
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && <Avatar className='headerOption__icon' src={avatar}/>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption