import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {
  pageInfo: PageInfo;
}

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({
    name, subject, message, email
  }) => {
    const body = `Hi, my name is ${name}. ${message} (${email})`;
    window.location.href = `mailto:baymurat.orazov@mail.ru?subject=${subject}&body=${body}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
  mx-auto items-center short:pt-5">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl short:top-8">
      Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center short:text-3xl">
        I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10 short:space-y-5">
          <IconWrapper
            Component={PhoneIcon}
            text={pageInfo?.phoneNumber} />
          <IconWrapper
            Component={MapPinIcon}
            text={pageInfo?.address} />
          <IconWrapper
            Component={EnvelopeIcon}
            text={pageInfo.email} />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register("message")} placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-[#F7AB0A] py-5 short:py-2 px-10 rounded-md
           text-black font-bold">Submit</button>
        </form>
      </div>
    </div>
  );};

const IconWrapper: React.FC<{Component: React.FC<any>, text: string}> = ({ Component, text }) => (
  <div>
    <div className="flex items-center space-x-5 justify-center">
      <Component className="text-[#F7AB0A] h-7 w-7 animate-pulse short:w-5 short:h-5" />
      <p className="text-2xl short:text-base">{text}</p>
    </div>
  </div>
);

export default ContactMe;