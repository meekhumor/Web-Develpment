import React from 'react'

function Card({name = "text"}) {
  return (
    <div className='mt-4'>
        <div>
          <div className="w-full h-32 bg-zinc-300 ">
            <img
              className="w-full h-full object-cover"
              src={"https://images.pexels.com/photos/27245453/pexels-photo-27245453/free-photo-of-a-car-driving-down-a-road-in-the-middle-of-a-field.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-xs mt-3">{200}</p>
          </div>
        </div>
    </div>
  )
}

export default Card
