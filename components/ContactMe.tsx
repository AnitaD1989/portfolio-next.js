import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string;
  email: string;
  subject:string;
  message:string;
};

type Props = {}

function ContactMe({}: Props) {
    const { 
      register, 
      handleSubmit, 
    } = useForm<Inputs>();
    
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href =`mailto:anitadeszczynska@gmail?subject=${formData.subject}&body=Hi, ma name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  
  return (
    <div className="top-56 h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl justify-evenly mx-auto items-center overflow-y-auto overflow-x-hidden z-0">
      <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-2xl top-24">
        Contact
      </h3>

      <div className="flex flex-col mt-24">
        
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">+41 76 259 86 85</p>
          </div>

          <div className="flex items-center space-x-5 justify-center"> 
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">Zurich, Switzerland</p>
          </div>

          <div className="flex items-center space-x-5 justify-center"> 
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">anitadeszczynska@gmail.com</p>
          </div>
        </div>

        <form 
          onSubmit= {handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 mx-20 my-10">  
          <div className="flex space-x-2" > 
            <input {...register('name')} placeholder="Name"  className="contactInput"  type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
          
          <input {...register('subject')} placeholder="Subject"  className="contactInput"  type="text" />
           
          <textarea {...register('message')}  placeholder="Message" className="contactInput"/>
          <div className="lg:flex-center">
          <div className="text-center">
          <button 
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold 
            text-lg">
            Submit
          </button>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactMe;