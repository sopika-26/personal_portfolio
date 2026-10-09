import websiteImg1 from '../assets/SmartOnlineQuiz.png'
import websiteImg2 from '../assets/StudentPerformanceAnalytics.png'
import websiteImg3 from '../assets/DeepfakeAudioDetection.png'
export default function Projects(){
    return <section className="flex flex-col py-20 px-5 justify-centre bg-primary text-white"id='Projects'>
        <div className="w-full">
           <div className="flex flex-col px-10 py-5">
              <h1 className='text-4xl text-white mb-5 w-[140px] border-b-2 border-bg-secondary font-bold'>Projects</h1>
              <p>These are some of best projects.I have built these with React,TailwindCSS,JavaScript</p>
           </div>
        </div>
        <div className="w-full">
          <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
               <img className='h-[200px] w-[500px]' src={websiteImg1}/>
               <div className='project-desc'>
                    <p className='text-centre px-5 py-5'>A Java-based online quiz application with MySQL integration for managing questions, answers, and quiz results.</p>
                    <div className='flex justify-center'>
                       <a target='_blank' className='btn' href='#'>View Project</a>
                    </div>
               </div>
            </div>
            <div className='relative'>
               <img className='h-[200px] w-[500px]' src={websiteImg2}/>
               <div className='project-desc'>
                   <p className='text-centre px-5 py-5'>Exploratory data analysis of student performance data to identify patterns, relationships, and key factors influencing academic results.</p>
                   <div className='flex justify-center'>
                       <a target='_blank' className='btn' href='#'>View Project</a>
                   </div>
               </div>
            </div>
            <div className='relative'>
               <img className='h-[200px] w-[500px]' src={websiteImg3}/>
               <div className='project-desc'>
                   <p className='text-centre px-5 py-5'>An AI/ML-based system that detects manipulated and deepfake audio using MFCC feature extraction and machine learning classification.</p>
                   <div className='flex justify-center'>
                      <a target='_blank' className='btn' href='#'>View Project</a>
                   </div>
               </div>
            </div>
          </div>
        </div>
    </section>
}