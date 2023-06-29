import React, { useRef, useState } from 'react';
import {CgMenuRound} from 'react-icons/cg';
import logo from '../logo (1).svg';
import { links, social } from './Data';


const Navbar = () => {

   const [toggle, setToggle] =  useState(false)
   const refContainer = useRef(null)
   const linksRef = useRef(null);

   const toggleBtn = () => {
    setToggle(!toggle)
   }


   const linkStyles = {
    height: toggle
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };
  return (
    <nav className=' shadow-md'>
        <div className="nav-center container mx-auto max-w-[1140px] p-3 flex flex-col justify-between  space-y-2 md:flex-row md:justify-between md:items-center md: space-x-0 md:space-y-0">
            <div className="nav-header flex justify-between items-center">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>

                <button className=' cursor-pointer md:hidden' onClick={toggleBtn}>
                <CgMenuRound size={25} />
                </button>
            </div>

            
            <div className='link-container overflow-hidden transition-all md:overflow-visible' style={linkStyles} ref={refContainer}>
                <ul className="'links flex flex-col list-none space-y-2 md:space-y-0 md:flex-row  md:space-x-4 md:justify-center md:items-center  " ref={linksRef}>
                    {links.map(link => {
                        const {id, url, text} = link

                        return (
                            <li key={id} className=' hover:ps-1 md:hover:ps-0 transition-all'>
                                <a href={url} className='  capitalize text-slate-700 font-medium block hover:text-cyan-500 transition-all'>{text}</a>
                            </li>
                        )
                        
                    })}
                </ul>
            </div>
        
            <ul className="social-links  hidden md:flex  md:space-x-4 md:items-center ">
                {social.map(link => {

                    const {id, icon, url} = link 

                    return (
                        <li key={id} className='transition-all hover:text-cyan-400 hover:ps-1 md:hover:ps-0'>
                            <a href={url} className=' text-lg'>{icon}</a>
                        </li>
                    )
                })}
            </ul> 
        </div>
    </nav>
  )
}

export default Navbar