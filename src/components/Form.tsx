import Formui from "../ui/Formui"
import Logossection from "../ui/logossection"
import Section from "../ui/Section"

interface IProps{

}
const Form= ({}: IProps) => {
    return (

        <div>
            <div className=" m-auto p-4  flex flex-col md:flex-row justify-between md:w-9/12  w-full">
            <Section  /> 
            <Formui />
            </div>
          
            <Logossection  />
        </div>
    )
}

export default Form