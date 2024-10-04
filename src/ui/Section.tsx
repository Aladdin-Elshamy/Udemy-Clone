import { CheckIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react/jsx-runtime";
const Section = ({}: IProps) => {
  return (
    <div className="pr-5  md:w-5/12 w-full selection:bg-yellow-200 selection:text-gray-700 mb-10">
      <h1
        className="text-5xl mb-6 leading-10 font-black"
        style={{ fontFamily: "SuisseWorks-Bold" }}
      >
        Get your demo
      </h1>
      <p className="text-xl mb-8 mt-8 " style={{ color: "#6A6F73" }}>
        Tell us your needs and we’ll start on a custom plan to drive results.
      </p>
      <h2 className="text-xl  mt-8 font-bold">
        With Udemy as your learning partner, you can:
      </h2>
      <div className="w-auto">
        <ul className="flex flex-col items-center">
          <div className="flex justify-start  w-full -mb-8">
            <span className="my-2 pt-4 w-8">
              <CheckIcon className="h-5 w-5 text-customColor" />
            </span>
            <li className="my-6">
              Train your entire workforce with over 27,000+ courses in 16
              languages
            </li>
          </div>
          <div className="flex justify-start items-start w-full -mb-8">
            <span className="my-2 pt-4 w-8">
              <CheckIcon className="h-5 w-5 text-customColor" />
            </span>
            <li className="my-6 ">
              Prep employees for over 200 industry-recognized certification
              exams
            </li>
          </div>
          <div className="flex justify-start items-start w-full -mb-8">
            <span className="my-2 pt-4 w-8">
              <CheckIcon className="h-5 w-5 text-customColor" />
            </span>
            <li className="my-6 ">
              Develop highly skilled tech teams in risk-free practice
              environments
            </li>
          </div>
          <div className="flex justify-start items-start w-full -mb-8">
            <span className="my-2 pt-4 w-8">
              <CheckIcon className="h-5 w-5 text-customColor" />
            </span>
            <li className="my-6 ">
              Identify emerging skills gaps, learning trends, and industry
              benchmarks
            </li>
          </div>
          <div className="flex justify-start items-start w-full -mb-8">
            <span className="my-2 pt-4 w-8">
              <CheckIcon className="h-5 w-5 text-customColor" />
            </span>
            <li className="my-6">
              Integrate content with your existing learning management system
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Section;
