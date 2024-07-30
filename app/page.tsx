"use client";
import React from "react";
import Image from "next/image";
import { 
  LayoutDashboard, 
  MonitorPlay, 
  FolderOpen, 
  Info, 
  Settings 
} from "lucide-react";
import Dashboard from "./Dashboard"; 

const Page = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] bg-[#000000] relative flex">
      {/* left bar */}
      <div className="w-[3.6rem] h-full bg-[#2f2f39] flex flex-col gap-y-1 items-center justify-between">
        <div className="flex flex-col items-center">
          <Image
            src="/fvlcon.jpg"
            width={50}
            height={50}
            className="rounded-[50%]"
          />
          <div className="items-center flex flex-col mt-5 bg-[#2f2f39] w-full py-2 hover:bg-[#3a3a47] relative">
            <LayoutDashboard size={20} />
            <h1 className="text-[9px]">Dashboard</h1>
            <div className="absolute inset-0 border border-[#00aaff] pointer-events-none"></div>
          </div>
          <div className="items-center flex flex-col mt-5 hover:bg-[#3a3a47] w-full py-2">
            <MonitorPlay size={20} />
            <h1 className="text-[9px]">Live View</h1>
          </div>
          
        </div>
        <div className="bottom-0 flex flex-col w-full">
          <div className="items-center flex flex-col mt-5 w-full py-2 hover:bg-[#3a3a47]">
            <Info size={16} />
            <h1 className="text-[9px] text-gray-400">Help</h1>
          </div>
          <div className="items-center flex flex-col mt-5 w-full py-2 hover:bg-[#3a3a47]">
            <Settings size={16} />
            <h1 className="text-[9px] text-gray-400">Settings</h1>
          </div>
        </div>
      </div>

      <Dashboard />

      {/* right bar */}
      <div className="fixed right-0 top-0 w-[3.6rem] h-full bg-[#2f2f39] flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <Image
            src="/popo.png"
            width={50}
            height={50}
            className="rounded-[50%] mt-4"
          />
          <div className="items-center flex flex-col mt-5 hover:bg-[#3a3a47] py-2 w-full">
            <FolderOpen size={20} />
            <h1 className="text-[9px]">Directory</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
