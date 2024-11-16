import CardDash1 from "./CardDash1";

const interview = [
    {
        title: 'General Interviews',
        description: 'Covers the questions you are most likely to get while interviewing.',
        tagline: 'Start Interview',
        image: '/dashboard/icon1.svg'
    },
    {
        title: 'Interview by Job Position',
        description: 'Our AI selects the most relevant questions based on your job position',
        tagline: 'Choose Job Position',
        image: '/dashboard/icon2.svg'
    },
    {
        title: 'Custom-Built Interviews',
        description: 'Interview with your own questions, or take assigned interviews.',
        tagline: 'Start Interview',
        image: '/dashboard/icon3.svg'
    }
]

export default function Dashboard() {
    return (
        <div className="mx-auto w-full max-w-10xl mb-36">
            <div className='flex justify-center items-center'>
                <div className='flex flex-col mt-12 mb-5' id="hero">
                    <h1 className='text-white text-2xl text-center'>Simulate an Interview</h1>
                </div>
            </div> 

            <div className="flex justify-center items-center gap-6">
                {interview.map((step, index) => (
                    <div key={index} >
                        <div>
                            <CardDash1
                                title={step.title}
                                description={step.description}
                                tagline={step.tagline}
                                image={step.image}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-8 mt-16 mb-8">
                <div className="bg-darkblue bg-opacity-60 w-80 flex items-center justify-center text-white">VIDEO</div>
                <div className="flex flex-col pt-4">
                    <p className='text-gray-500 text-sm'>VIDEO COURSE</p>
                    <h1 className='text-white text-lg mt-4 '>Master the Interview</h1>
                    <p className='text-gray-400 text-sm mt-4 mb-6 w-52'>Take our online course and learn everything you need to know to ace the interview.</p>
                    <button className="bg-blue1 text-white rounded-3xl py-3 mb-6 w-44 text-md">Take the Class</button>

                </div>
            </div>
        </div>
    );
}



   


