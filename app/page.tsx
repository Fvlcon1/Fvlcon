"use client"
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Rewind, Pause, FastForward, Settings, NotebookText, FolderOpen, SquarePlus , ArrowUpNarrowWide, ArrowUpDown, Layers3, ChevronDown,  Maximize,LayoutDashboard,MonitorPlay,Info  } from 'lucide-react';
import CameraLink from "./component1s/CameraLink"
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'


const page = () => {
  return (
    <div className='w-[100dvw] h-[100dvh] bg-[#1d1e23]'>
    
{/* main content */}
    <div className='w-full h-[98%] flex flex-row '>
{/* left bar */}
<div className="w-[3.6rem] h-full bg-[#2f2f39] flex flex-col gap-y-1 items-center justify-between">

  <div className="flex flex-col items-center">
    <Image src="/fvlcon.jpg" width={50} height={50} className="rounded-[50%]" />

    <div className="items-center flex flex-col mt-5 hover:bg-[#3a3a47] w-full py-2">
      <LayoutDashboard size={20} />
      <h1 className="text-[9px]">Dashboard</h1>
    </div>

    <div className="items-center flex flex-col mt-5 bg-[#2f2f39] w-full py-2 hover:bg-[#3a3a47] relative">
      <MonitorPlay size={20} />
      <h1 className="text-[9px]">Live View</h1>
      <div className="absolute inset-0 border border-[#00aaff] pointer-events-none"></div>
    </div>

    <div className="items-center flex flex-col mt-5 hover:bg-[#3a3a47] py-2 w-full">
      <FolderOpen size={20} />
      <h1 className="text-[9px]">Directory</h1>
    </div>

    <div className="items-center flex flex-col mt-5 w-full py-2 hover:bg-[#3a3a47]">
      <NotebookText size={20} />
      <h1 className="text-[9px]">Report</h1>
    </div>

    <div className="items-center flex flex-col mt-5 w-full py-2 hover:bg-[#3a3a47]">
      <NotebookText size={20} />
      <h1 className="text-[9px]">Live Report</h1>
    </div>
  </div>

  <div className="bottom-0 flex flex-col   w-full">
    <div className='items-center flex flex-col mt-5 w-full py-2 hover:bg-[#3a3a47]'>
    <Info size={16}/>
    <h1 className="text-[9px] text-gray-400">Help</h1>
    </div>
    
    <div className='items-center flex flex-col mt-5 w-full py-2 hover:bg-[#3a3a47]'>
    <Settings size={16}/>
    <h1 className="text-[9px] text-gray-400">Settings</h1>
    </div>

  </div>

</div>


{/* main div */}
<div className='w-[16rem] mx-2 mt-2'>
{/* Profile container */}
<Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Personal Profile" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

<div className='w-full bg-[#4a5964] bg-opacity-70 backdrop-blur-lg h-[16rem]   '>

</div>

<div className='mt-[20px] w-full'>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Personal Profile" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

           {/* Video control */}
           <div className='w-full flex mt-4 flex-row'>
            {/* Control icons */}
            <div className='w-[40%] bg-[#020817] bg-opacity-70 gap-x-2 backdrop-blur-lg h-[1.5rem] justify-center text-gray-400 px-2 flex items-center rounded-[15px]'>
              <Rewind size={18} />
              <Pause size={18} />
              <FastForward size={18} />
            </div>
            {/* Camera number */}
            <div className='w-[40%] flex flex-row justify-evenly text-gray-400'>
              <div className='bg-[#020817] bg-opacity-70 w-6 h-6 backdrop-blur-lg text-xs flex items-center justify-center rounded-full'>1</div>
              <div className='bg-[#020817] bg-opacity-70 w-6 h-6 backdrop-blur-lg text-xs flex items-center justify-center rounded-full'>2</div>
              <div className='bg-[#020817] bg-opacity-70 w-6 h-6 backdrop-blur-lg text-xs flex items-center justify-center rounded-full'>3</div>
            </div>

            {/* REC */}
            <div className='w-[15%] bg-[#020817] bg-opacity-70 gap-x-2 backdrop-blur-lg text-xs text-gray-400 px-2 flex items-center rounded-[15px]'>
              REC
            </div>
          </div>

          {/* Speed */}
          <div className='flex text-xs justify-between w-full mt-4 text-gray-400 items-center'>
            <div>
              Speed
            </div>
            <div>
              x1
            </div>
          </div>
{/* search */}
          <div className='flex flex-row items-center w-full justify-between mt-3'>
          <div className="relative w-[70%]">
    <input type="text" placeholder="Search" className="w-full bg-[#494951] rounded-[7px] py-[4px] pl-10 text-xs border-gray-600 border-[2px] text-white" />
    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
</div>
 <div className='justify-evenly flex flex-row items-center gap-x-2'>
           <SquarePlus size={18} strokeWidth={1} className='' />
            <ArrowUpNarrowWide size={18} strokeWidth={0.8} className='' />
            <ArrowUpDown size={18} strokeWidth={0.8} className='' />
           </div>
          </div>

          <ScrollArea className="h-[19rem] w-full rounded-md mt-4">
      <ul>
        <li className='mb-5'>
          <CameraLink src="/backdrop.jpg" cameraName="Accra City Camera 01" location="Accra" isSpecial/>
        </li>
        <li className='mb-5'>
          <CameraLink src="/backdrop.jpg" cameraName="Accra City Camera 02" location="Accra" isSpecial />
        </li>
        <li className='mb-5'>
          <CameraLink src="/backdrop.jpg" cameraName="Accra City Camera 03" location="Accra" isSpecial/>
        </li>
        <li className='mb-5'>
          <CameraLink src="/backdrop.jpg" cameraName="Accra City Camera 04" location="Accra" isSpecial />
        </li>
        <li className='mb-5'>
          <CameraLink src="/backdrop.jpg" cameraName="Accra City Camera 05" location="Accra" />
        </li>
        <li className='mb-5'>
          <CameraLink src="/backdrop.jpg" cameraName="Accra City Camera 06" location="Accra" />
        </li>
      </ul>
    </ScrollArea>


</div>


<div className='flex flex-col w-[74.5%] mt-2 mx-[4px]'>
<div className='flex flex-row items-center justify-between'>
  <div className='text-xs text-[#6f808a]'>
  FVLCON FACIAL RECOGNITION LIVE STREAM
  </div>
<div className='flex items-center justify-end gap-x-3 py-[2px]'>
      <Layers3 size={14} />
      <ChevronDown size={14} strokeWidth={1.7} />
      <div className='border-gray-600 border-l-2 h-4'></div>
      <Maximize size={14} />
    </div>
</div>

<div className='grid grid-cols-2 grid-rows-2 gap-0 w-full h-[94%] mt-[4px]'>
            <div className='bg-gray-400 border border-black'>
              <div className='h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs'>
                <div>Camera 04 HD</div>
                <div className='flex flex-row space-x-2 items-center'>
                  <div>LIVE</div>
                  <div className='w-2 h-2 rounded-full bg-red-700 blinking ' ></div>
                </div>
              </div>
            </div>
            <div className='bg-gray-400 border border-black'>
  <div className='h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs'>
    <div>Camera 04 HD</div>
    <div className='flex flex-row space-x-2 items-center'>
      <div>LIVE</div>
      <div className='w-2 h-2 rounded-full bg-red-700 blinking'></div>
    </div>
  </div>
</div>
<div className='bg-gray-400 border border-black'>
  <div className='h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs'>
    <div>Camera 04 HD</div>
    <div className='flex flex-row space-x-2 items-center'>
      <div>LIVE</div>
      <div className='w-2 h-2 rounded-full bg-red-700 blinking'></div>
    </div>
  </div>
</div>
<div className='bg-gray-400 border border-black'>
  <div className='h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs'>
    <div>Camera 04 HD</div>
    <div className='flex flex-row space-x-2 items-center'>
      <div>LIVE</div>
      <div className='w-2 h-2 rounded-full bg-red-700 blinking'></div>
    </div>
  </div>
</div>
          </div>
          </div>

{/* right bar */}
          <div className='w-[3.6rem] h-full bg-[#2f2f39]'>
          <div className="flex flex-col items-center">
          <Image src="/popo.png" width={50} height={50} className="rounded-[50%] mt-4" />

          <div className="items-center flex flex-col mt-5 hover:bg-[#3a3a47] py-2 w-full">
      <FolderOpen size={20} />
      <h1 className="text-[9px]">Directory</h1>
    </div>


          </div>
</div>

    </div>
    

    </div>
  )
}

export default page
