"use client"
import React, { useState, useEffect } from 'react';
import { Rewind, Pause, FastForward, Video, Rows3 } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import userProfiles from '../constants';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Clock from "../component1s/Clock"

const App = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % userProfiles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentProfile = userProfiles[currentProfileIndex];

  return (
    <div className='w-[100dvw] h-[100dvh] bg-[#2f3c4b]'>
      <div className='w-full h-[12px] bg-[#1d2e38] flex justify-center items-center text-xs text-[#6f808a]'>
        FVLCON FACIAL RECOGNITION LIVE STREAM
      </div>
      {/* Navigation */}
      <div className='w-full h-[19px] flex items-center bg-[#4c5f6c]'>
        <div>
          <ul className='flex flex-row items-center text-xs text-[#899297] space-x-3 pl-4 cursor-pointer'>
            <li>File</li>
            <li>Edit</li>
            <li>Configure</li>
            <li>History</li>
            <li>View</li>
            <li>Settings</li>
            <li>Camera</li>
            <li>Help</li>
          </ul>
        </div>
        <div className='ml-auto items-center text-xs text-[#899297] pr-4'>
          Account / Logout
        </div>
      </div>
      {/* Main content */}
      <div className='px-4 pb-1 pt-3 h-[95.3%] w-full flex gap-3 flex-row'>
        {/* Left side */}
        <div className='w-[17%] h-full'>
          {/* Dropdown */}
          <div className='w-full h-[14px] bg-[#242b35]'>
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
          </div>
          <div className='w-full mt-[9px] bg-[#4a5964] bg-opacity-70 backdrop-blur-lg h-[15rem] rounded-[5px] px-4 pt-[13px]'>
            {/* Image / data container */}
            {/* Image */}
            <div className='w-full h-[80%]'>
              <img src={currentProfile.profilePicture} alt={currentProfile.name} className='h-full w-full object-cover rounded-[5px]' />
            </div>
            {/* User info */}
            <div className='mt-2'>
              <ul className='flex flex-wrap text-[9px] gap-x-5 justify-start text-gray-400'>
                <li>Name: {currentProfile.name}</li>
                <li>Age: {currentProfile.age}</li>
                <li>phone: {currentProfile.phone}</li>
                <li>jobTitle: {currentProfile.jobTitle}</li>
              </ul>
            </div>
          </div>
          <div className='mt-[30px] w-full'>
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

          <div className='mt-[10px] w-full'>
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
          <div className='flex text-xs justify-between w-full mt-6 text-gray-400 items-center'>
            <div>
              Speed
            </div>
            <div>
              x1
            </div>
          </div>

          <div className='w-full bg-[#020817] h-[1.4rem] mt-4 text-xs text-gray-400 py-1 items-center justify-center rounded-[7px] px-3'>
            <p>Camera Links </p>
          </div>
          <ScrollArea className='bg-[#6a777e] w-full h-[15rem] mt-[0.5]'>
            {/* Title */}
            <div className='flex flex-row items-center'>
              <Rows3 color="#1d1a26" size={17} />
              <div className='text-gray-300 text-xs'>Camera list</div>
            </div>
            {/* First */}
            <div className='font-thin text-gray-400 flex flex-row items-center text-[10px]'>├──
              <Video size={17} className='mr-1' />
              <h1 className='text-white text-[11px]'>35 Remote Monitoring Capabilities</h1>
            </div>
            {/* Second */}
            <div className='font-thin text-gray-400 flex flex-row items-center text-[10px]'>├──
              <Video size={17} className='mr-1' />
              <h1 className='text-white text-[11px]'>35 Remote Monitoring Capabilities</h1>
            </div>
            {/* Third */}
            <div className='font-thin text-gray-400 flex flex-row items-center text-[10px]'>├──
              <Video size={17} className='mr-1' />
              <h1 className='text-white text-[11px]'>35 Remote Monitoring Capabilities</h1>
            </div>
          </ScrollArea>
        </div>
        <div className='w-[80vw] h-full'>
          {/* Title */}
          <div className='w-full h-[20px] bg-[#020817] text-gray-300 text-[11px] flex items-center px-3 rounded-[4px]'>
            <h1>Fvlcon face detection</h1>
          </div>

          <div className='grid grid-cols-2 grid-rows-2 gap-0 w-full h-[91%] mt-[6px]'>
            <div className='bg-gray-400 border border-black'>
              <div className='h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs'>
                <div>Camera 04 HD</div>
                <div className='flex flex-row space-x-2 items-center'>
                  <div>LIVE</div>
                  <div className='w-2 h-2 rounded-full bg-red-700  ' ></div>
                </div>
              </div>
            </div>
            <div className='bg-gray-400 border border-black'>
              <div className='h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs'>
                <div>Camera 04 HD</div>
                <div className='flex flex-row space-x-2 items-center'>
                  <div>LIVE</div>
                  <div className='w-2 h-2 rounded-full bg-red-700  ' ></div>
                </div>
              </div>
            </div>
            <div className='bg-gray-400 border border-black'>
              <div className='h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs'>
                <div>Camera 04 HD</div>
                <div className='flex flex-row space-x-2 items-center'>
                  <div>LIVE</div>
                  <div className='w-2 h-2 rounded-full bg-red-700  ' ></div>
                </div>
              </div>
            </div>
            <div className='bg-gray-400 border border-black'>
              <div className='h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs'>
                <div>Camera 04 HD</div>
                <div className='flex flex-row space-x-2 items-center'>
                  <div>LIVE</div>
                  <div className='w-2 h-2 rounded-full bg-red-700  ' ></div>
                </div>
              </div>
            </div>
          </div>


          <div className='w-full h-[14px] bg-black mt-[10px]  flex justify-center items-center'>
          <Clock />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
