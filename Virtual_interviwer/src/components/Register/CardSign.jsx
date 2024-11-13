function CardSign({title , description}) {
  return (
    <div>
        <div className='flex flex-col'>
            <div className='flex gap-4 py-2'>
                <img src="public\check.png" className="w-6 h-6 mt-2" alt="" />
                <div className='flex flex-col'>
                    <h1 className='text-white text-lg'>{title}</h1>
                    <p className='text-gray-400 text-sm py-4 w-80'>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardSign
