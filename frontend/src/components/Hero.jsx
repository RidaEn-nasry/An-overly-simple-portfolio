import React from 'react'
import me from "../assets/media/ren-nasr.jpeg"
import TypeAnimation from "react-type-animation";

function Hero() {
  return (
      <div className=" static flex flex-col gap-10 items-center  text-center my-10">
          <img src={me} alt="avatar" className="w-40 rounded-full" />
          <TypeAnimation className="w-4/5 text-2xl font-medium md:text-5xl md:w-3/6 "
              sequence={["Hey, I'm Rida",2000, "i turn coffe into dynamic computations", 2000, 'AKA \'Code\'', 2000]}
              wrapper="h1"
              repeat={2}
              cursor={true}
          />
          <p className="w-4/5 text-base font-medium text-slate-400  md:text-xl md:w-3/6">I'm currently a computer science alumni at <a href="https://1337.ma" className="font-semibold">1337</a> School. I'm using <strong>C</strong> mostly these days for my curriculum sake but learning <strong>React.JS</strong> on my own. I'm immaculately intrested in <strong> Web3 </strong>, <strong> Software Architecture</strong> and yeah <strong> CyberSecurity (the latter i couldn't help not to).</strong> </p>
    </div>
  )
}

export default Hero

