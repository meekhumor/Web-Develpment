import ReviewCard from "./ReviewCard";

const review = [
  {
    label: "Cognitive Skills",
    title: "Analytical Skills",
    level: "Mid",
    time: "30",
    mode: "Real",
    day: "20",
  },
  {
    label: "Cognitive Skills",
    title: "Creativity",
    level: "Entry",
    time: "25",
    mode: "Practical",
    day: "18",
  },
  {
    label: "Cognitive Skills",
    title: "Critical Thinking",
    level: "Mid",
    time: "25",
    mode: "Real",
    day: "15",
  },
  {
    label: "Cognitive Skills",
    title: "Decision-Making",
    level: "Mid",
    time: "30",
    mode: "Practical",
    day: "11",
  },
  {
    label: "Leadership Skills",
    title: "Financial Management",
    level: "Mid",
    time: "30",
    mode: "Real",
    day: "8",
  },
  {
    label: "Leadership Skills",
    title: "Leadership / Leading Others",
    level: "Management",
    time: "30",
    mode: "Real",
    day: "4",
  },
];

export default function Review_Interview() {

  return (
    <div className="mx-auto w-full max-w-2xl mb-44">
      <h1 className="text-white px-4 text-center text-2xl mt-14 mb-8 ">Review Interviews</h1>
      <div>
        {review.map((step, index) => (
            <div key={index}>
            <ReviewCard 
                title={step.title}
                level={step.level}
                mode={step.mode}
                time={step.time}
                day={step.day}
            />
            </div>
        ))}
      </div>
    </div>
  );
}
