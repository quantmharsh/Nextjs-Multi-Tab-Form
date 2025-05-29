"use client";
import Interest from "@/components/Interest";
import Profile from "@/components/Profile";
import Settings from "@/components/Settings";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { z } from "zod";

export default function Home() {

  // Note: In tabs array instead of storing component directly <Profile/> store its  references {component:Profile}
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component:Interest,
    },
    {
      name: "Settings",
      component:Settings,
    },
  ];
  const [activeTab, setActiveTab] = useState<any>(0);
  const [data , setData]=useState({
    name:"Harsh",
    age:23,
    email:"srivas@gmail.com",
    interest:["coding", "dancing", "gaming", "reading", "music"],
    newsLetter:"yes"

  })
const formSchema = z.object({
    name: z.string().min(5, "Min length required  5"),
    age: z.preprocess((val)=>val===""?undefined :Number(val)  ,z.number().min(18 , "Age limit is 18")),
    email:z.string().email("Must be Valid Email Address"),
    interest:z.array(z.string()).min(1,"Min 1 Interest selection is required"),
    newsLetter:z.string()
    
});
const validateField = (field: keyof typeof data, value: any) => {
  try {
    formSchema.pick({ [field]: true } as any).parse({ [field]: value });
    return ""; // No error
  } catch (e: any) {
    return e.errors?.[0]?.message || "Invalid value";
  }
};
const [errors, setErrors] = useState({
  name: "",
  age: "",
  email: "",
  interest:"",
  newsLetter:""
});
const handleSubmit=()=>{
  
  console.log("Form Submitted with data" ,data);
  
}
const isValid =formSchema.safeParse(data).success;
  

  // it makes easier to pass Props to children
  const ActiveTabComponent = tabs[activeTab].component
  return (
    <div>
      <div className="flex flex-row items-center justify-center  ">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="px-4 cursor-pointer "
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center ">
        <ActiveTabComponent    errors={errors}
  setErrors={setErrors}
  validateField={validateField}  data={data} setData={setData} setActiveTab={setActiveTab} />
        {activeTab===2 && 
         <div className="bg-purple-400 w-auto">
       
        <button    className=" text-center disabled:bg-red-800"  disabled={!isValid} onClick={()=>handleSubmit()}>
          Submit </button>
          </div>
          }
      </div>
    </div>
  );
}
