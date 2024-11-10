import Card1 from './Card1';
import LottieAnimation from '../Lottie';
import animation1 from './animations/choose.json';
import animation2 from './animations/interview.json';
import animation3 from './animations/analysis.json';

const steps = [
    {
        title: 'Select Your Field or Role',
        description: 'This ensures that the interview questions and scenarios are tailored to your needs.',
        animation: animation1,
    },
    {
        title: 'Engage with AI Interviewer',
        description: 'Log in at your scheduled time and start the interview. The bot will ask questions relevant to your chosen field.',
        animation: animation2,
    },
    {
        title: 'Receive Detailed Feedback',
        description: 'After the interview, receive a detailed analysis of your overall performance and feedback based on it',
        animation: animation3,
    }

]
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-8xl">
            <div className='flex justify-center items-center'>
                <div className='flex flex-col mt-16 mb-5' id="hero">
                    <h1 className='text-white font-bold text-5xl text-center'>Your <span className='text-blue1'>Dream Job</span> is Just an <br /> Interview Away!</h1>
                    <p className='text-gray-400 text-center mt-4 '>Transform your interview skills from preparation to practice,<br /> and all the way to sucess</p>
                    <div className='flex flex-row gap-6 justify-center mt-8'>
                        <button className='rounded-full  text-white bg-blue1 px-7 py-4 '>Start for Free</button>
                        <button className='rounded-full  text-gray-700 bg-white px-7 py-4'>Learn More</button>
                    </div>
                </div>
            </div>  

            <div className="flex flex-col items-center bg-black min-h-screen py-10">
                {steps.map((step, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-10`}>
                        <div className="md:w-1/2">
                            <LottieAnimation animationData={step.animation} />
                        </div>
                        <div className="md:w-1/2">
                            <Card1
                                number={index + 1}
                                title={step.title}
                                description={step.description}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



   


