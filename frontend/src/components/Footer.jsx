import React from 'react'
import github from "../assets/media/github.svg";
import linkedin from "../assets/media/linkedin.svg";
import twitter from "../assets/media/twitter.svg"

function Footer() {
  return (
      <div className="mt-64 w-6/3  gap-5 flex flex-col mx-10 items-center text-center">
          <h3 className="text-xl font-medium md:text-3xl ">Get in touch with me.</h3>
          <h1 className="text-2xl font-medium md:text-4xl" >ennasry.rida@gmail.com</h1>
          <p className="md:w-1/2 text-base text-slate-400 md:text-xl">Say hey i would to hear from you.</p>
          <ul className="flex flex-row">
              <li className="">
                  <a href="https://github.com/RidaEn-nasry">
                    <img src={github} alt="github logo" />Github
                  </a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/rida-ennasry-3143041a7/">
                      <img src={linkedin} alt="linkedin logo" />LinkedIn
                  </a>
              </li>
              <li>
                  <a href="https://twitter.com/EnnasryRida">
                      <img src={twitter} alt="twitter logo" />Twitter
                  </a>
              </li>
          </ul>
    </div>
  )
}

export default Footer