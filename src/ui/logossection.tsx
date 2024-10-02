interface IProps{

}

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
const Logossection = ({}: IProps) => {
    return (

        <div className=" md:w-3/12 w-full   ml-10  md:-mt-44  md:ml-48 mt-10  ">
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

export default Logossection 