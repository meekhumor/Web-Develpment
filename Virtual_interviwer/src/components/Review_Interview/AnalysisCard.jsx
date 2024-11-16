function AnalysisCard({title, image, number, check, label}) {
    return (
      <div>
        <div className="px-6 py-4 bg-black1 w-56 my-3 rounded-xl">
          <div className="flex flex-col gap-4">
            <p className="text-white">{title}</p>
            <div className="flex gap-4">
              <img src={image} className="w-8" alt="" />
              <div className="flex items-center gap-2">
                <span className= {`text-2xl ${check === "good"? "text-green-500": "text-red-500"}`}>{number}</span>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AnalysisCard;
  