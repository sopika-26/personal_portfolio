import Hero from '../assets/hero.png';
import { CiLinkedin } from "react-icons/ci";
export default function Content()
{
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div>
           <h1 className='md:w-1/2 text-white text-6xl font-hero-font'>Hi,<br/>I'm Sopika 
             <p className='text-2xl py-2'>I'm a MERN-stack developer</p>
           </h1>
           <div className='flex'>
             <a href='#'><CiLinkedin size={40} /></a>
             {/* <a href='#'className='pr-5 py-2 hover:text-white-400'><CiFacebook size={40} /></a>
             <a href='#'className='py-2 hover:text-white-400'><CiTwitter size={40}/></a>  */}
           </div>
        </div>
        <img className='md:w-1/3' src={Hero}></img>
    </section>
}