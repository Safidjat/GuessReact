import { FaArrowRightLong } from "react-icons/fa6";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import AccordionFooter from "./AccordionFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FaMapMarkerAlt } from "react-icons/fa";


function EmptyCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#4f5359" strokeWidth="1.5"/>
    </svg>
  );
}

function CheckedCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#4f5359" strokeWidth="1.5"/>
      <path d="M7 12.5L10.5 16L17 9.5" stroke="#4f5359" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function Footer() {
    const [checked, setChecked] =useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <>
            <div className="text-black m-auto w-full min-[545px]:w-[60%] min-[1020px]:w-full min-[1020px]:bg-[#f5f5f5] min-[1020px]:py-[50px]">
                <div className="min-[1020px]:w-[97%] min-[1020px]:m-auto min-[1020px]:flex min-[1020px]:items-start min-[1020px]:gap-[200px]">
                    <div className="max-[1020px]:hidden min-[1020px]:w-[calc((100%-100px)/2)] flex justify-between items-start">
                        <ul>
                            <li className="pb-[20px] text-[14px] font-[600]">Account</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Register</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Sign in</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Orders</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Returns</li>
                            <li className="text-[12px] font-[400] pb-[10px]">GUESS List</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Sign up for text</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Recycle with GUESS</li>
                        </ul>
                        <ul>
                            <li className="pb-[20px] text-[14px] font-[600]">Assistance</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Customer care</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Promotions and Offers</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Size charts</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Store locator</li>
                            <li className="text-[12px] font-[400] pb-[10px]">GUESS services</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Apple Pay</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Klarna</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Gift cards</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Feedback</li>
                        </ul>
                        <ul>
                            <li className="pb-[20px] text-[14px] font-[600]">Company</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Careers</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Sustainability</li>
                            <li className="text-[12px] font-[400] pb-[10px]">About GUESS List</li>
                            <li className="text-[12px] font-[400] pb-[10px]">GUESS 81 app</li>
                            <li className="text-[12px] font-[400] pb-[10px]">Investor relations</li>
                            <li className="text-[12px] font-[400] pb-[10px]">GUESS Foundation</li>
                        </ul>
                        <ul className='text-[12px] '>
                            <li className="pb-[20px] text-[14px] font-[600]">Brands</li>
                            <li className="text-[12px] font-[400] pb-[10px]">MARCIANO</li>
                            <li className="text-[12px] font-[400] pb-[10px]">GUESS USA</li>
                            <li className="text-[12px] font-[400] pb-[10px]">GUESS Jeans</li>
                            <li className="text-[12px] font-[400] pb-[10px]">GUESS Originals</li>
                            <li className="text-[12px] font-[400] pb-[10px]">GUESS Kids</li>
                        </ul>
                    </div>
                    <div className="min-[1020px]:w-[calc((100%-100px)/2)] bg-[#f5f5f5] px-[clamp(10px,1.5vw,20px)] min-[1020px]:py-0 py-[50px] flex flex-col gap-[16px]">
                        <h1 className="text-[24px] font-[500]">Join the List & Get 15% Off</h1>
                        <p className="text-[16px]">
                            + free shipping on your first order
                            and even more <a className="underline">perks</a> when you create an
                            account.
                        </p>
                        <div className="flex flex-col gap-[5px]">
                            <div className="relative py-[9px] pl-[15px] pr-[45px] bg-white border-b border-[#71767f]">
                                <button className="absolute right-0 top-1/2 -translate-y-1/2 px-[15px]"><FaArrowRightLong width={18}/></button>
                                <input type="text" placeholder="Email Address" className="w-full h-[28px] outline-none text-[12px] text-[#71767f] font-[500]"/>
                            </div>
                            <div className="flex items-start gap-[5px] ">
                                <Checkbox
                                onChange={handleChange}
                                checked={checked}
                                disableRipple={true}
                                icon={<EmptyCircleIcon />}
                                checkedIcon={<CheckedCircleIcon />}
                                sx={{
                                    padding: 0, 
                                }}
                                />
                                <p className="text-[#4f5359] text-[10px]">By joining, you agree to GUESS List Terms & Conditions. You can unsubscribe fron
    marketing emails at any time. See our Privacy Policy for additional details.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto w-full min-[545px]:w-[60%] min-[1020px]:w-[97%] min-[1020px]:hidden"><AccordionFooter /></div> 
            <div className="flex min-[1020px]:flex-row min-[1020px]:justify-between flex-col gap-[30px] items-center text-black m-auto w-full min-[545px]:w-[80%]  min-[1020px]:w-[97%] py-[15px]">
                <div className="w-full flex flex-col gap-[30px] items-center min-[770px]:flex-row min-[770px]:justify-between">
                    <div className="min-[770px]:order-2 flex items-center gap-[20px]">
                        <FontAwesomeIcon icon={faInstagram} fixedWidth fontSize={26} color='black'/>
                        <FontAwesomeIcon icon={faFacebookF} fixedWidth fontSize={26} color='black'/>
                        <FontAwesomeIcon icon={faTiktok} fixedWidth fontSize={26} color='black'/>
                        <FontAwesomeIcon icon={faXTwitter} fixedWidth fontSize={26} color='black'/>
                    </div>
                    <div
                    className="country-selector__dropdown-container text-[#71767f] text-[12px]"
                    data-cookie-version={1}
                    data-countrylandingurl="https://www.guess.com/us/en/countries/"
                    >
                        <FontAwesomeIcon icon={FaMapMarkerAlt} fixedWidth fontSize={16} color='black'/>
                        <select
                            className="country-selector__dropdown js-country-selector"
                            id="site-country-selector"
                            title="Select"
                        >
                            <option
                            data-locale="en_US"
                            value="https://www.guess.com/us/en/home/"
                            selected=""
                            >
                            United States
                            </option>
                            <option data-locale="en_CA" value="https://www.guess.com/ca/en/home/">
                            Canada (EN)
                            </option>
                            <option data-locale="fr_CA" value="https://www.guess.com/ca/fr/home/">
                            Canada (FR)
                            </option>
                        </select>
                        <label
                            htmlFor="site-country-selector"
                            className="position-absolute invisible"
                        >
                            Select
                        </label>
                    </div>
                </div>
                <div className="w-full text-nowrap text-[#71767f] text-[13px] flex flex-col min-[770px]:flex-row min-[1020px]:flex-col  items-center">
                    <p>&copy; GUESS? Inc. 2025 All rights reserved.</p>
                    <ul className="flex items-center gap-[15px]">
                        <li className="underline">Terms & Conditions</li>
                        <li className="underline">Privacy Policy</li>
                        <li className="underline flex items-center"><span>Your Privacy Choices</span> <img src="/assets/img/privacyoptions_gry.svg" className="h-[13px]"/></li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}

export default Footer
