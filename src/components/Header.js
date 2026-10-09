import {Bars4Icon} from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header()
{  
   const [toggleMenu, setToggleMenu] = useState(false);
   return <header className="flex justify-between px-5 py-2 bg-secondary">
    <a className="font-bold text-black" href="#">Sopika M</a>
    <nav className="hidden md:block">
        <ul className="flex text-white">
          <li><a href="/">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href='#Resume'>Resume</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
    </nav>
    {toggleMenu && <nav className="block md:hidden">
        <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Resume">Resume</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
    </nav>}
    <button onClick={() => setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars4Icon className='text-white h-5'/></button>
   </header>
}