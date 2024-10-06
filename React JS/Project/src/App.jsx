import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {

  const data = [
    {image: "https://images.unsplash.com/photo-1726725935085-fbc079dc5557?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8", name: "Challenger", artist: "Harsh", added: false},
    {image: "https://plus.unsplash.com/premium_photo-1675277734312-5719ea51e471?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", name: "Debacle", artist: "Krish", added: false},
    {image: "https://images.unsplash.com/photo-1727373631848-e6da2d85c872?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", name: "See You Soon", artist: "Raghav", added: false},
    {image: "https://images.unsplash.com/photo-1728046321877-f76888663fd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", name: "Lavenger", artist: "Pritam", added: false},
  ]

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev)=>{
      return prev.map((item, itemindex) =>{
        if(itemindex === index) return {...item, added: !item.added}
        return item
      })
    })
  }

  return (
    <div className="w-full h-sccreen">
      <Navbar data={songData} />
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {songData.map((obj, index)=>(
          <Card data={obj} handleClick={handleClick} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
