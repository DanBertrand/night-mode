/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react'
import Logo from './logo/index';
import SwitchButton from './switchButton/index'
import './style/style.scss'
import ModeContext from '../context/modeContext';

const Header = ( ) => {
    const { mode } = useContext(ModeContext)
  const toggleDisplay = mode => {
      if(mode === "day"){
          return(
            <div className="header-day">
                <h1>Portfolio of Dan Bertrand</h1>
                <SwitchButton />
                <Logo />
            </div>
          );
      }
      return(
        <div className="header-night">
            <h1>Portfolio of Dan Bertrand</h1>
            <SwitchButton />
            <Logo />
        </div>
      )
  }
  return (
    toggleDisplay(mode)
  )
}
 
export default Header
 