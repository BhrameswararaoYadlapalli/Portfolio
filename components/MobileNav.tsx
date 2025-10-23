import React from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface Props {
    nav: boolean;
    closeNav: ()=>void;
}

const MobileNav: React.FC<Props> = ({nav,closeNav}) => {

    const navAnimation = nav ? "translate-x-0":"translate-x-[-100%]";

  return (
    <div className={`fixed ${navAnimation} transform transition-all top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center shadow-md'>
            <div className='nav-link-mobile'>HOME</div>
            <div className='nav-link-mobile '>SERVICES</div>
            <div className='nav-link-mobile '>ABOUT</div>
            <div className='nav-link-mobile '>PROJECTS</div>
            <div className='nav-link-mobile '>CONTACT</div>   
        </div>
        <div onClick={closeNav} className="absolute top-5 right-5 w-[3rem] h-[3rem] text-yellow-400 cursor-pointer">
            <XMarkIcon/>
        </div>
    </div>
    );
};

export default MobileNav;