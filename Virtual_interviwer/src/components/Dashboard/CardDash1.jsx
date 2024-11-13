function CardDash1({title , description, tagline, image}) {
  return (
    <div>
        <div className='bg-darkblue bg-opacity-40 rounded-3xl flex flex-col items-center w-64 h-96'>
          <img src={image} className="w-44 mt-6" alt="" />
          <h1 className='text-white text-md mt-4 w-32 text-center'>{title}</h1>
          <p className='text-gray-400 text-xs mt-4 mb-6 w-52 text-center'>{description} </p>
          <button className="bg-blue1 text-white rounded-3xl px-4 py-3 mb-8 text-sm">{tagline}</button>
        </div>
    </div>
  )
}

export default CardDash1
