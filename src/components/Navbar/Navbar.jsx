import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

import { styles } from "../../style";

export function Navbar() {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(true);

    return (
        <section id="navbar" className={`${styles.paddingX} w-full flex items-center py-8  top-0 z-20 fixed bg-transparent`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto' >
                <Link
                    to='/'
                    className="flex items-center gap-2"
                    onClick={() =>{
                        setActive("");
                        window.scrollTo(0,0)
                    }}>
                    <img className="h-7 pl-2 object-contain" src="./src/assets/logo-no-background.png" alt="" />
                </Link>
                <div id="desk-menu">
                    <ul className="flex w-full justify-items-end gap-12 text-gray-300 sm:hidden">
                        <li className='hover:text-white'>Acerca de mí</li>
                        <li className='hover:text-white'><a href="http://www.github.com/EmeRamirez" target="blank">Github</a></li>
                        <li className='hover:text-white'><a href="https://www.linkedin.com/in/eme-ramirez-s" target="blank">LinkedIn</a></li>
                        <li className='hover:text-white'>Contacto</li>
                    </ul>
                </div>
                <div id="mob-menu" className="hidden flex-1 flex-row justify-end items-center sm:flex">
                    <img 
                        src={toggle  
                            ? "./src/assets/menu.svg"
                            : "./src/assets/close.svg"} 
                        alt="menu" 
                        onClick={()=>{setToggle(!toggle)}}/>

                    <div id="dropmenu-mob" className={toggle 
                        ? 'hidden justify-items-end gap-12' 
                        : 'flex flex-col gap-3 p-6 mr-10 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl list-none bg-black'}>
                        <li className="text-right"><a href="http://www.github.com/EmeRamirez" target="blank">Github</a></li>
                        <li className="text-right"><a href="https://www.linkedin.com/in/eme-ramirez-s" target="blank">LinkedIn</a></li>
                        <li className="text-right">Contacto</li>
                    </div>
                </div>
                
            </div>           
        </section>
    )
}

        // <section className='bg-transparent flex justify-between sm:px-16 px-6 pt-5 pl-8'>
        //     <img className="h-7 pl-2" src="./src/assets/logo-no-background.png" alt="" />
        //     <ul className="flex gap-12">
        //         <li>Acerca de mí</li>
        //         <li>Github</li>
        //         <li>Contacto</li>
        //     </ul>
        // </section>