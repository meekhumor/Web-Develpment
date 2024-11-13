import React, { useState } from 'react';

function CardCat({ label, title, level, time, questions, image }) {

  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <div className="bg-darkblue bg-opacity-40 rounded-3xl flex flex-col w-72">
        <div className="flex justify-center items-center gap-4 mb-5 py-4 h-36">
          <img src={image} className="w-14 mt-6" alt="" />
          <div className="flex flex-col gap-3 ml-2">
            <p className="text-blue-200 text-center py-1 rounded-full bg-darkblue text-xxs w-28">
              {label}
            </p>
            <h1 className="text-white text-lg w-40">{title}</h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center ml-11">
          <div className="flex flex-row gap-4">
            <img src="/category/Shape1.svg" className="w-6" alt="" />
            <p className="text-gray-400 text-sm">{level}-level</p>
          </div>
          <div className="flex flex-row gap-4">
            <img src="/category/Shape2.svg" className="w-6" alt="" />
            <p className="text-gray-400 text-sm">{time} Minutes</p>
          </div>
          <div className="flex flex-row gap-4">
            <img src="/category/Shape3.svg" className="w-6" alt="" />
            <p className="text-gray-400 text-sm">{questions} Questions</p>
          </div>
        </div>

        <div className='flex gap-10 justify-center items-center mt-2'>
          <h1 className='text-gray-400 text-sm'>Real Mode</h1>
          <div className="flex justify-center items-center mt-4">
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only"
                  checked={isToggled}
                  onChange={handleToggle}
                />
                <div
                  className={`w-12 h-6 ${
                    isToggled ? "bg-blue-500" : "bg-darkblue"
                  } rounded-full shadow-inner`}
                ></div>

                <div
                  className={`dot relative w-4 h-4 bg-white rounded-full shadow left-[0.2rem] top-[-1.3rem] transition-transform 
                  ${isToggled ? "transform translate-x-6" : ""}`}
                ></div>
              </div>
            </label>
          </div>
        </div>
        
        <button className="bg-blue1 text-white rounded-3xl w-44 py-3  mb-12 mt-6 m-auto text-sm">
          Take Interview
        </button>
      </div>

    </div>
  );
}

export default CardCat;
