import React from 'react';
import heyLogo from "../assets/media/hey.svg";
import sep from "../assets/media/seperator.svg";

function Header() {
    return (
      <div>
      <div className=" sticky w-screen flex flex-row my-auto justify-around  ">
          <h2 className="text-base my-9 font-semibold md:text-2xl ">Rida En-nasry</h2>
              <a href="mailto:ennasry.rida@gmail.com" className="flex flex-row my-9  ">
              <h2 className="text-md font-medium md:my-2 md:text-xl ">Contact</h2>
          <img src={heyLogo} alt="waving hand logo " className="w-7 mx-9.5 md:w-12 md:mx-1.5 animate-bounce " />
          </a>
            </div>
            <img src={sep} alt="seperator for menu bar"  className="w-5/5 mx-auto my-0 md:w-4/5 "/>
      </div>
    )
}

export default Header