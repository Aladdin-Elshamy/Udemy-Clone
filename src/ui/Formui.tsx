// import React from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// واجهة البيانات
interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  companySize: string;
  numberOfPeople: string;
  jobTitle: string;
  jobLevel: string;
  trainingNeeds?: string;
}

// مخطط التحقق باستخدام Yup
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  companyName: Yup.string().required('Company Name is required'),
  companySize: Yup.string().required('Company Size is required'),
  numberOfPeople: Yup.string().required('Number of people is required'),
  jobTitle: Yup.string().required('Job Title is required'),
  jobLevel: Yup.string().required('Job Level is required'),
});

const Formui = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(validationSchema),
      });
    const onSubmit = (data: IFormInputs) => {
        console.log('Form Data: ', data);
      };
    return (

        <> 
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              {...register('firstName')}
              placeholder="First Name"
              className="border p-2 w-full"
            />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
          </div>
  
          <div>
            <input
              type="text"
              {...register('lastName')}
              placeholder="Last Name"
              className="border p-2 w-full"
            />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
          </div>
        </div>
  
        <input
          type="email"
          {...register('email')}
          placeholder="Work Email"
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
  
        <input
          type="text"
          {...register('phone')}
          placeholder="Phone Number"
          className="border p-2 w-full"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
  
        <input
          type="text"
          {...register('companyName')}
          placeholder="Company Name"
          className="border p-2 w-full"
        />
        {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <select {...register('companySize')} className="border p-2 w-full">
              <option value="">Select Company Size</option>
              <option value="small">1-50</option>
              <option value="medium">51-200</option>
              <option value="large">200+</option>
            </select>
            {errors.companySize && <p className="text-red-500">{errors.companySize.message}</p>}
          </div>
  
          <div>
            <select {...register('numberOfPeople')} className="border p-2 w-full">
              <option value="">Select Number of People</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="50+">50+</option>
            </select>
            {errors.numberOfPeople && <p className="text-red-500">{errors.numberOfPeople.message}</p>}
          </div>
        </div>
  
        <input
          type="text"
          {...register('jobTitle')}
          placeholder="Job Title"
          className="border p-2 w-full"
        />
        {errors.jobTitle && <p className="text-red-500">{errors.jobTitle.message}</p>}
  
        <select {...register('jobLevel')} className="border p-2 w-full">
          <option value="">Select Job Level</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
        {errors.jobLevel && <p className="text-red-500">{errors.jobLevel.message}</p>}
  
        <textarea
          {...register('trainingNeeds')}
          placeholder="What are your organization's training needs? (Optional)"
          className="border p-2 w-full"
        />
  
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Submit</button>
      </form>
    
  </>
    )
}

export default Formui