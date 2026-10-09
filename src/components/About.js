import AboutImg from '../assets/about.png';
export default function About() {
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='About'>
        <div className='py-5 md:w-1/2'>
           <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
               <h1 className='text-4xl text-white mb-5 w-[170px] border-b-2 border-primary font-bold'>About Me</h1>
               <p className='text-white'>I’m <strong>Sopika</strong>, a passionate <strong>MERN-Stack Developer</strong> skilled in <strong>React, JavaScript, MongoDB, and Tailwind CSS.</strong> I enjoy building complete web applications — from designing clean, responsive user interfaces with Tailwind CSS to developing efficient back-end solutions and managing databases. As a fresher, I bring fresh energy, a fast-learning mindset, and a strong drive to grow while contributing to impactful projects.</p>
            </div>
        </div>
    </section>
}