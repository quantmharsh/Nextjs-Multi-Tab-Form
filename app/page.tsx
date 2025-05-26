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
    age:z.number().min(18 , "Age limit is 18"),
    email:z.string().email("Must be Valid Email Affess"),
    interest:z.array(z.string()).min(1,"Min 1 Interest selection is required"),
    newsLetter:z.string()
    
});
  

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
        <ActiveTabComponent   data={data} setData={setData} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
