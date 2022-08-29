import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import{FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft} from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'; 
import {Cart ,Chat,Notification,UserProfile} from '.';
import {useStateContext} from '../context/ContextProvider';

const NavButton = ( {title,customfunc ,icon,color,dotcolor}) =>(
  <TooltipComponent content= {title} position = "BottomCenter">
  <button type='button' onClick={customfunc}
  style={{ color : color}}
  className = "relative text-xl rounded-full p-3 hover:bg-light-gray">
    <span style={{background: dotcolor}}
    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
      {icon}
    </span>
  </button>
  </TooltipComponent>
)
const Navbar = () => {
  const {activeMenu,setactiveMenu} = useStateContext();
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customfunc={() => setactiveMenu(
        (prevactiveMenu) => !prevactiveMenu
      )} icon={<AiOutlineMenu/>} color='blue'/>
    </div>
  )
}

export default Navbar