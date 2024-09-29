import Formui from "../ui/Formui"

interface IProps{

}
const Form= ({}: IProps) => {
    return (

        <div className="container mx-auto p-4 flex justify-between">
             <h1 className="text-2xl font-bold mb-4">Get Your Demo</h1>
            <Formui />
        </div>
    )
}

export default Form