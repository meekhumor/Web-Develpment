import LottieAnimation from '../Lottie';
import animation from './file-upload.json';

export default function Resume() {
  return (
    <div className="mx-auto w-full max-w-10xl">
      <div className="flex flex-col gap-4 py-10 px-6 items-center">
        <h1 className="text-white text-3xl max-w-md text-center scale">
          Select a resume to improve your interview
        </h1>
        <p className="text-gray-400  max-w-md text-center scale-95">
          We&apos;ll use it to generate better questions, relevant to your
          unique skills and experience.
        </p>
        <div className="flex justify-center items-center overflow-hidden w-56 h-44"> 
          <LottieAnimation animationData={animation} loop={true} />
        </div>

        <div className="flex gap-3 bg-darkblue bg-opacity-40 items-center py-4 px-4 rounded-xl mb-14">
          <img src="/file-upload.png" className="w-8 h-8 mr-2 " alt="" />
          <p className="text-gray-400 w-52 text-sm">
            Drag and drop files or click Upload PDF or DOCX
          </p>
          <button className="px-6 text-sm py-2 bg-blue1 rounded-xl text-white">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
