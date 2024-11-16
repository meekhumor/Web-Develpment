import Card1 from './Card1';
import LottieAnimation from '../Lottie';
import animation1 from './animations/analysis.json';
import animation2 from './animations/choose.json';
import animation3 from './animations/interview.json';
import Card2 from './Card2';

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

const features = [
    {
        title: 'Unlimited practice, from anywhere',
        description: 'Take unlimited online mock interviews whenever you want, wherever you want.',
        image: 'home/icon1.svg'
    },
    {
        title: 'Real interview pressure, real results',
        description: 'We record your responses to create realistic interview pressure.',
        image: 'home/icon2.svg'
    },
    {
        title: 'Self-review for self-improvement',
        description: 'Know exactly how you have performed and refine your approach to nail the interview.',
        image: 'home/icon3.svg'
    },
    {
        title: 'Tailor-made interview questions',
        description: 'Personalize your prep with custom questions tailored to your job roles and industries.',
        image: 'home/icon4.svg'
    },
    {
        title: 'Level up your skills',
        description: 'Access curated resources to continuously improve your interview skills and stay ahead.',
        image: 'home/icon5.svg'
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
            
            <div className='scale-100 mb-12'>
                {/* How it works section */}
                <div className='mt-16 text-center'>
                    <p className='text-gray-500 text-sm'>3 SIMPLE STEPS</p>
                    <h1 className='text-white font-bold text-3xl'>How does it works?</h1>
                </div>
                <div className="flex flex-col items-center bg-black min-h-screen py-10">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} mb-10`}>
                            <div className="md:w-1/2 mx-6">
                                <LottieAnimation animationData={step.animation} />
                            </div>
                            <div className="md:w-1/2 mx-6">
                                <Card1
                                    number={index + 1}
                                    title={step.title}
                                    description={step.description}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Features section */}
                <div className='flex justify-center'>
                    <h1 className='text-white text-center font-bold text-3xl max-w-xl mb-14'>Achieve interview success with our AI-powered <span className='text-blue1'>practice tools</span></h1>
                </div>
                <div className="flex flex-wrap justify-center lg:max-w-5xl m-auto gap-6 md:max-w-3xl sm:max-w-xl">
                    {features.map((step, index) => (
                        <div key={index}>
                        <Card2 
                            title={step.title}
                            description={step.description}
                            image={step.image}
                        />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}



   


