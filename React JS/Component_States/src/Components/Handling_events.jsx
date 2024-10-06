import React, { PureComponent } from 'react'

export class Handling_events extends PureComponent {
  render() {

    const data = [
        {name: "Mahiya Ve", description: "This is the song dedicated to web development"},
        {name: "Junoon", description: "This is the also a song"},

    ]

    const handleClickDownload = () => {
        alert("Download")
    }

    return (
      <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center'>
        {data.map((item,index)=>(
            <div key={index} className='w-90 px-3 py-2 bg-zinc-100 rounded'>
            <h3 className='font-semibold text-xl'>{item.name}</h3>
            <p className='text-xs mt-2'>{item.description}</p>
            {/* Handling Events */}
            <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3 '>Download</button> 
        </div>
        ))} 
      </div>
    )
  }
}

export default Handling_events
