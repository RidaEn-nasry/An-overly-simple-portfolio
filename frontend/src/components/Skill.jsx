import React from 'react'
import sep from "../assets/media/seperator.svg"
function Skill() {
  return (
      <div className="relative flex flex-col gap-5 w-full p-10 items-center justify-center mt-36">
          <h1 >My Skills</h1>
          <div className="flex basis-1/2 gap-10">
          <div className="flex flex-col gap-4">
              <img src={sep} alt="seperator svg" />
              <h3>Low level programming (C)</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam omnis, ipsa quaerat quibusdam doloribus perferendis. Nulla dolor illum doloremque placeat explicabo minima recusandae dignissimos. Aut tenetur dolore quis similique.</p>
          </div>
          <div className="flex flex-col gap-4">
              <img src={sep} alt="seperator svg" />
              <h3>Frontend programming (React.JS) </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ad quam. Neque aut blanditiis sequi quas quidem. Numquam, eos? Praesentium reprehenderit delectus veniam molestiae, tempore cupiditate quasi facere optio nesciunt!</p>
          </div>
          </div>
          <div className="flex basis-1/2 gap-10">
          <div className="flex flex-col gap-4">
              <img src={sep} alt="seperator svg" />
                  <h3>System adminstration (Debian/Ubuntu)</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt similique praesentium, ipsam repellat accusantium officiis? Quidem minus ipsa ad enim, nihil quaerat iste alias, mollitia numquam ducimus architecto repellat delectus!</p>
          </div>
          <div className="flex flex-col gap-4">
              <img src={sep} alt="seperator svg" />
              <h3>CLI/Git proficiency</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium iusto aperiam iste facere inventore quis! Odio neque similique beatae qui, adipisci sapiente sunt ipsam numquam, natus voluptatum corporis aperiam ullam.</p>
          </div>
          </div>
    </div>
  )
}

export default Skill