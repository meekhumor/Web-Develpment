function Card2({title , description, image}) {
  return (
    <div>
        <div className='bg-darkblue bg-opacity-40 rounded-3xl flex flex-col px-8 w-68 '>
          <div className="pt-8 pb-2 w-20 h-32 overflow-hidden">
            <img src={image} className='w-full h-full '/>
          </div>
          <h1 className='text-white text-md py-2'>{title}</h1>
          <p className='text-gray-400 text-xs py-4 w-52 pb-12'>{description}</p>
        </div>
    </div>
  )
}

export default Card2
