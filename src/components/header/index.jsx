import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { VscHeart } from "react-icons/vsc";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { SlHandbag } from "react-icons/sl";
import { LiaBarsSolid } from "react-icons/lia";
import { NavLink } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { useMatchMedia } from '../../hooks/use-match-media';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../../server';
// import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// npm install @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
// npm install @fortawesome/free-solid-svg-icons
// npm install @fortawesome/free-regular-svg-icons
// npm install @fortawesome/free-brands-svg-icons

{/* 
    <FontAwesomeIcon 
    icon={faSearch} 
    fixedWidth
    color='black'
    />
    <FontAwesomeIcon icon={faHeart} fixedWidth color='black'/> 
*/}

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function Header(props) {
    const isLessTnan1025=useMatchMedia('(max-width: 1025px)')
    const [data,setData]=useState([]);

    useEffect(()=>{
      getAllCategories()
      .then(res=>setData(res))
    },[])

    return (
      <>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar position='sticky' elevation={0}>
            <div className='flex flex-col bg-white'>
              <div className='border-b border-[#eee] h-[30.5px] text-[12px] text-[#495c6b] font-[500] flex items-center overflow-x-hidden'>
                  <Marquee>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Hassle-Free Returns on All Orders &amp; Shipping Is Free with $125+ Purchase</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Hassle-Free Returns on All Orders &amp; Shipping Is Free with $125+ Purchase</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Hassle-Free Returns on All Orders &amp; Shipping Is Free with $125+ Purchase</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Hassle-Free Returns on All Orders &amp; Shipping Is Free with $125+ Purchase</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Hassle-Free Returns on All Orders &amp; Shipping Is Free with $125+ Purchase</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Hassle-Free Returns on All Orders &amp; Shipping Is Free with $125+ Purchase</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Hassle-Free Returns on All Orders &amp; Shipping Is Free with $125+ Purchase</div>
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;Hassle-Free Returns on All Orders &amp; Shipping Is Free with $125+ Purchase</div>
                  </Marquee>
              </div>
              <div className='w-[97%] min-[700px]:max-[770px]:w-[86%] m-auto border-b border-[#eee] min-h-[46px] min-[1025px]:h-[54px] flex flex-col items-center justify-between min-[307px]:flex-row max-[307px]:py-[10px]'>
                  <div className='max-[307px]:self-start h-full flex items-center gap-[20px]'>
                      <NavLink to={'/'} className='w-[100px] h-[20px]'><img src="/assets/img/logo-guess-header.svg" className='object-cover size-full' /></NavLink>
                      {
                        !isLessTnan1025 &&
                        <ul className='h-full flex gap-[20px] my-0 items-center text-[12px] text-black'>
                            <li className='h-full grid place-items-center cursor-pointer'><span>Women</span></li>
                            <li className='h-full grid place-items-center cursor-pointer'><span>Handbags</span></li>
                            <li className='h-full grid place-items-center cursor-pointer'><span>Shoes</span></li>
                            <li className='h-full grid place-items-center cursor-pointer'><span>Men</span></li>
                            <li className='h-full grid place-items-center cursor-pointer'><span>Marciano</span></li>
                            <li className='h-full grid place-items-center cursor-pointer'><span>Guess Jeans</span></li>
                            <li className='h-full grid place-items-center cursor-pointer'><span>Sale</span></li>
                        </ul>
                      }
                  </div>
                  <div className='max-[307px]:self-end flex items-center gap-[20px]'>
                      {
                        !isLessTnan1025 &&
                        <NavLink className="text-[12px] font-[400] text-[#000]">
                            <span>Hi,</span>
                            <span className='underline'>Sign in or Register</span>
                        </NavLink>
                      }
                      <div className='flex items-center gap-[15px]'>
                          <PiMagnifyingGlassLight size={26} className='min-[1025px]:w-[18px]' color='black' cursor={'pointer'}/>
                          <VscHeart size={26} className='min-[1025px]:w-[18px]' color='black' cursor={'pointer'}/>   
                          <SlHandbag size={26} className='min-[1025px]:w-[18px]' color='black' cursor={'pointer'}/>  
                          <LiaBarsSolid size={26} className='min-[1025px]:w-[18px]' color='black' cursor={'pointer'}/> 
                      </div>             
                  </div>
              </div>
            </div>
          </AppBar>
        </HideOnScroll>
      </>
    );
}