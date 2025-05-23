"use client";
import Interest from "@/components/Interest";
import Profile from "@/components/Profile";
import Settings from "@/components/Settings";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Home() {
  const tabs = [
    {
      name: "Profile",
      component: <Profile />,
    },
    {
      name: "Interest",
      component: <Interest />,
    },
    {
      name: "Settings",
      component: <Settings />,
    },
  ];
  const [activeComponent, setActiveComponent] = useState<any>(<Profile />);
  return (
    <div>
      <div className="flex flex-row items-center justify-center   ">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="px-4"
            onClick={() => setActiveComponent(t.component)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center ">
        {activeComponent}
      </div>
    </div>
  );
}
