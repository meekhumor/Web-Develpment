export default function Camera_Preview1() {

  return (
    <div className="mx-auto w-full max-w-10xl">
      <div className='flex flex-col gap-3 py-10 px-6 items-center'>
        <h1 className='text-white text-2xl'>Let&apos;s get you set up.</h1>
        <p className='text-gray-400 text-sm'>We&apos;re testing your connection...</p>

        <div className='flex justify-center items-center gap-6 px-10 py-3 bg-darkblue bg-opacity-40 rounded-xl my-8 scale'>
          <img src="/public/microphone.svg" className='w-5' alt="" />
          <p className='text-gray-200 text-sm'>Please speak into the microphone to complete setup.</p>
        </div>

        <div className='flex gap-14'>
          <div className='flex flex-col items-center gap-3'>
            <p className='items-center text-white '>Video</p>
            <img src="/public/check.png" className='w-16' alt="" />
          </div>

          <div className='flex flex-col items-center gap-3'>
            <p className='items-center text-white'>Audio</p>
            <img src="/public/check.png" className='w-16' alt="" />
          </div>

          <div className='flex flex-col items-center gap-3 mb-36'>
            <p className='items-center text-white'>Network</p>
            <img src="/public/check.png" className='w-16' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
