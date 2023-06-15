import { styles } from "../../style"
import './Hero.css'

export function Hero() {
    return(
        <section id="section-hero" className='grid grid-cols-2 mx-auto place-items-center pl-28 pr-28 justify-center pt-[170px] pb-28 sm:px-16 sm:pt-28 sm:grid-rows-2'>
            <div id='cont-ext-txt-hero' className="grid">
                <div className="flex flex-col items-center mt-6 sm:pr-6 sm: mt-8">
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div id="cont-txt-hero" className="sm:mt-12">
                    <h1 className={`${styles.heroHeadText} pr-32 sm:pr-2 sm:mb-4`}>Hola! Soy <span className='highlight-text'>Emerson</span></h1>
                    <p className={`${styles.heroSubText} pr-36 sm:pr-10 sm:text-left`}>Desarrollo aplicaciones y sitios web como Full Stack Javascript.</p>
                </div>
            </div> 
            <div><img className='h-72 opacity-90' src="./src/assets/foto2-blu.png"/></div>
        </section>
    )
} 
