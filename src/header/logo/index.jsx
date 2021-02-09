import { useContext } from 'react'
import GitHubLogo from './image/GitHub-logo.png'
import './style/style.scss'
import ModeContext from '../../context/modeContext'

const Logo = () => {
   const { mode } = useContext(ModeContext);


   const toggleDisplay = (mode) => {
      if(mode === "day"){
         return(
            <a href="https://github.com/DanBertrand">
                  <img className="logo-day" src={GitHubLogo} alt="GitHub Logo Link" ></img>
            </a>            
         )
      }
      return(
         <a href="https://github.com/DanBertrand">
               <img className="logo-night" src={GitHubLogo} alt="GitHub Logo Link" ></img>
         </a>            
      )
   }
  return (
      <>
         {toggleDisplay(mode)}
      </>
 
  )
}
 
export default Logo
 