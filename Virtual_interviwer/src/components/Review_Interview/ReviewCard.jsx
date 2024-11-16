function ReviewCard({title, level, mode, time, day}) {
  return (
    <div>
      <div className="flex flex-wrap justify-between py-4 px-4 items-center hover:bg-darkblue hover:bg-opacity-40 rounded-2xl">
        <div className="flex flex-col">
          <p className="text-gray-400 text-xs">{day} Days Ago</p>
          <h1 className="text-white text-lg">{title}</h1>
          <div className="flex gap-2.5 items-center text-gray-400 text-xs">
            <p>{level} Level</p>
            <p>{mode} Mode</p>
            <p>{time} min</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src="/share.svg" className="w-8 h-6" alt="" />
          <img src="/delete.svg" className="w-8 h-6" alt="" />
          <button className='rounded-2xl  text-gray-700 bg-white px-4 py-2 text-sm'>View</button>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
