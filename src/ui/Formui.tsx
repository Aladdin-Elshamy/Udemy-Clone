import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { db } from "../firebaseconfig"; // تأكد من المسار الصحيح للملف
import { collection, addDoc } from "firebase/firestore";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  companyName: string;
  companySize: string;
  numberOfPeople: string;
  jobTitle: string;
  jobLevel: string;
  trainingNeeds?: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  // email: Yup.string().email('Invalid email format').required('Email is required'),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format")
    .matches(
      /^[a-zA-Z0-9._%+-]+@(company.com|business.com)$/,
      "Email must be a business email (e.g. name@company.com)"
    ),
  phone: Yup.string().required("Phone number is required"),
  location: Yup.string().required("Location is required"),
  companyName: Yup.string().required("Company Name is required"),
  companySize: Yup.string().required("Company Size is required"),
  numberOfPeople: Yup.string().required("Number of people is required"),
  jobTitle: Yup.string().required("Job Title is required"),
  jobLevel: Yup.string().required("Job Level is required"),
});

const Formui = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: IFormInputs) => {
    try {
      await addDoc(collection(db, "Users"), data);
      console.log("Form Data stored: ", data);
      reset();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:w-6/12 w-full h-full selection:bg-yellow-200 selection:text-gray-700 order-2"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              {...register("firstName")}
              placeholder="First Name *"
              className="border p-2 w-full border-black placeholder-black font-medium h-14"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("lastName")}
              placeholder="Last Name *"
              className="border p-2 w-full border-black placeholder-black font-medium h-14"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <input
          type="email"
          {...register("email")}
          placeholder="Work Email *"
          className="border p-2 w-full border-black placeholder-black font-medium h-14"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="text"
          {...register("phone")}
          placeholder="Phone Number *"
          className="border p-2 w-full border-black placeholder-black font-medium h-14"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <div>
          <select
            {...register("location")}
            className="border p-2 w-full border-black placeholder-black font-medium h-14"
          >
            <option value="">Where are you located? *</option>
            <option value="US">United States</option>
            <option value="IN">India</option>
            <option value="BR">Brazil</option>
            <option value="GB">United Kingdom</option>
            <option value="DE">Germany</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BY">Belarus</option>
            <option value="BM">Bermuda</option>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="BV">Bouvet Island</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="KH">Cambodia</option>
            <option value="CA">Canada</option>
            <option value="CF">Central African Republic</option>
            <option value="CC">Cocos (Keeling) Islands</option>
            <option value="CY">Cyprus</option>
            <option value="DM">Dominica</option>
            <option value="EG">Egypt</option>
            <option value="SZ">Eswatini</option>
            <option value="FK">Falkland Islands (Malvinas)</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GE">Georgia</option>
            <option value="GR">Greece</option>
            <option value="GP">Guadeloupe</option>
            <option value="HM">Heard Island and McDonald Islands</option>
            <option value="HU">Hungary</option>
            <option value="HK">Hong Kong</option>
            <option value="IR">Iran, Islamic Republic of</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="JO">Jordan</option>
            <option value="LY">Libya</option>
            <option value="LU">Luxembourg</option>
            <option value="MY">Malaysia</option>
            <option value="MX">Mexico</option>
            <option value="MA">Morocco</option>
            <option value="MA">Morocco</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PS">Palestine, State of</option>
            <option value="QA">Qatar</option>
            <option value="RO">Romania</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SS">South Sudan</option>
            <option value="ES">Spain</option>
            <option value="SD">Sudan</option>
            <option value="TW">Taiwan</option>
            <option value="TR">Turkey</option>
            <option value="UG">Uganda</option>
            <option value="AE">United Arab Emirates</option>
            <option value="VG">Virgin Islands, British</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
          </select>
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>

        <input
          type="text"
          {...register("companyName")}
          placeholder="Company Name *"
          className="border p-2 w-full border-black placeholder-black font-medium h-14"
        />
        {errors.companyName && (
          <p className="text-red-500">{errors.companyName.message}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <select
              {...register("companySize")}
              className="border p-2 w-full border-black placeholder-black font-medium h-14"
            >
              <option value="">Select Company Size</option>
              <option value="small">1-50</option>
              <option value="medium">51-200</option>
              <option value="large">200+</option>
            </select>
            {errors.companySize && (
              <p className="text-red-500">{errors.companySize.message}</p>
            )}
          </div>

          <div>
            <select
              {...register("numberOfPeople")}
              className="border p-2 w-full border-black placeholder-black font-medium h-14"
            >
              <option value="">Select Number of People</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="50+">50+</option>
            </select>
            {errors.numberOfPeople && (
              <p className="text-red-500">{errors.numberOfPeople.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            {...register("jobTitle")}
            placeholder="Job Title *"
            className="border p-2 w-full border-black placeholder-black font-medium"
          />
          {errors.jobTitle && (
            <p className="text-red-500">{errors.jobTitle.message}</p>
          )}

          <select
            {...register("jobLevel")}
            className="border p-2 w-full border-black placeholder-black font-medium h-14"
          >
            <option value="">Select Job Level</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
          {errors.jobLevel && (
            <p className="text-red-500">{errors.jobLevel.message}</p>
          )}
        </div>
        <textarea
          {...register("trainingNeeds")}
          placeholder="What are your organization's training needs? (Optional)"
          className="border p-2 w-full border-black placeholder-black font-medium row-span-2"
        />

        <button
          type="submit"
          className="text-white p-2 w-full h-14"
          style={{ background: "black" }}
        >
          Submit
        </button>

        <p className="text-xs">
          By signing up, you agree to our terms and privacy policy. You agree
          that we can contact you about Udemy and use data from third parties to
          personalize your experience.
        </p>
      </form>
    </>
  );
};

export default Formui;
