import CardCat from "./CardCat.jsx";

const category = [
  {
    label: "Cognitive Skills",
    title: "Analytical Skills",
    level: "Mid",
    time: "30",
    questions: "9",
    image: "/category/icon1.svg",
  },
  {
    label: "Cognitive Skills",
    title: "Creativity",
    level: "Entry",
    time: "25",
    questions: "10",
    image: "/category/icon2.svg",
  },
  {
    label: "Cognitive Skills",
    title: "Critical Thinking",
    level: "Mid",
    time: "25",
    questions: "9",
    image: "/category/icon3.svg",
  },
  {
    label: "Cognitive Skills",
    title: "Decision-Making",
    level: "Mid",
    time: "30",
    questions: "10",
    image: "/category/icon4.svg",
  },
  {
    label: "Leadership Skills",
    title: "Financial Management",
    level: "Mid",
    time: "30",
    questions: "10",
    image: "/category/icon5.svg",
  },
  {
    label: "Leadership Skills",
    title: "Leadership / Leading Others",
    level: "Management",
    time: "30",
    questions: "10",
    image: "/category/icon6.svg",
  },
];

export default function Category() {

  return (
    <div className="mx-auto w-full max-w-10xl">
      <div className="flex justify-center flex-row items-center mb-8">
        <div className="flex flex-col mt-12 mb-5 gap-2 items-center">
          <p className="text-gray-400 text-xs">GENERAL INTERVIEW</p>
          <h1 className="text-white text-2xl text-center">
            Select an interview
          </h1>
        </div>
      </div>

    
     

      <div className="flex flex-wrap justify-center items-center gap-6">
        {category.map((step, index) => (
          <div key={index}>
            <div>
              <CardCat
                label={step.label}
                level={step.level}
                time={step.time}
                questions={step.questions}
                title={step.title}
                image={step.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
