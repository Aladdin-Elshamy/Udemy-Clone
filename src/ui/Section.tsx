interface IProps{

}
const Section = ({}: IProps) => {

    const logos = [
        "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
        "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
        "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
        "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
        "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
        "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
        "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
        "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
      ];
    return (

        <div className="pr-5  w-5/12 selection:bg-yellow-200 selection:text-gray-700">
        <h1 className="text-5xl mb-6 leading-10 font-black"  style={{fontFamily:"SuisseWorks-Bold"}}>Get your demo</h1>
         <p className="text-xl mb-8 mt-8 " style={{color:"#6A6F73"}}>Tell us your needs and we’ll start on a custom plan to drive results.</p>
          <h2 className="text-xl  mt-8 font-bold">With Udemy as your learning partner, you can:</h2>
      <div className="w-auto">
        <ul className="flex flex-col items-center">
           <div className="flex justify-start w-full"><span className="my-2 pt-2 mr-3">#$</span>
           <li className="my-4 ">Train your entire workforce with over 27,000+ courses in 16 languages</li>
           </div> 
           <div className="flex justify-start w-full"><span className="my-2 pt-2 mr-3">#$</span>
            <li className="my-4 ">Prep employees for over 200 industry-recognized certification exams</li>
           </div>
           <div className="flex justify-start w-full"><span className="my-2 pt-2 mr-3">#$</span>
            <li className="my-4 ">Develop highly skilled tech teams in risk-free practice environments</li>
            </div>
            <div className="flex justify-start w-full"><span className="my-2 pt-2 mr-3">#$</span>
            <li className="my-4 ">Identify emerging skills gaps, learning trends, and industry benchmarks</li>
            </div>
            <div className="flex justify-start w-full"><span className="my-2 pt-2 mr-3">#$</span>
            <li className="my-4 ">Integrate content with your existing learning management system</li>
            </div>
        </ul>
      </div>

      <h2 className="text-xl  mt-8 font-bold mb-11">Trusted by</h2>
      <ul className="grid grid-rows-2 grid-cols-4 gap-4 ">
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </li>
          ))}
        </ul>
        </div>
    )
}

export default Section