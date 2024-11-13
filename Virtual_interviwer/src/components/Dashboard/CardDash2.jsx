function CardDash2({number, title , description}) {
  return (
    <div>
        <div className='bg-darkblue bg-opacity-40 rounded-3xl flex flex-col px-4 w-68 '>
          <span className='text-gray-500 pt-8 text-lg'>{"0" + number}</span>
          <h1 className='text-white text-md py-2'>{title}</h1>
          <p className='text-gray-400 text-xs py-8 w-52 pb-16'>{description}</p>
        </div>
    </div>
  )
}

export default CardDash2
