import Formui from "../ui/Formui"
import Section from "../ui/Section"

interface IProps{

}
const Form= ({}: IProps) => {
    return (

        <div className=" m-auto p-4  flex md:flex-row justify-between md:w-9/12  w-full flex-col  ">
           <Section  />
            <Formui />
        </div>
    )
}

export default Form