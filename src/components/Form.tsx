import Formui from "../ui/Formui"
import Section from "../ui/Section"

interface IProps{

}
const Form= ({}: IProps) => {
    return (

        <div className=" m-auto p-4 flex justify-between w-9/12">
           <Section />
            <Formui />
        </div>
    )
}

export default Form