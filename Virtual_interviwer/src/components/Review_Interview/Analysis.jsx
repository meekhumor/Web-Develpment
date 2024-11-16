import AnalysisCard from "./AnalysisCard";

export default function Analysis() {

  const analysis = [
    {
      title:"Pace",
      label:"words/min",
      image:"analysis/pace.svg",
      number: 246,
      check: "good"
    },
    {
      title:"Filler Words",
      label:"total",
      image:"analysis/filler-words.svg",
      number: 15,
      check: "bad"
    },
    {
      title:"Pause",
      label:"total",
      image:"analysis/pause.svg",
      number: 0,
      check: "good"
    },
    {
      title:"Power Words",
      label:"total",
      image:"analysis/power-words.svg",
      number: 0,
      check: "bad"
    },

  ]
  return (
    <div className="mx-auto w-full max-w-3xl my-44">
      <div className="flex flex-col bg-darkblue bg-opacity-40 rounded-2xl pb-8">
        <div className="flex justify-between  py-8 px-8">
          <h1 className="text-white text-lg">AI Feedback</h1>
          <p className="text-blue1 text-xs">VIEW DETAIL</p>
        </div>

        <div className="flex flex-wrap justify-evenly">
          {analysis.map((step, index) => (
              <div key={index}>
              <AnalysisCard 
                  title={step.title}
                  image={step.image}
                  number={step.number}
                  check={step.check}
                  label={step.label}
              />
              </div>
          ))}
        </div>

      </div>

    </div>
  );
}
