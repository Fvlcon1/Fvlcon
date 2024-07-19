"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Rewind,
  Pause,
  FastForward,
  Settings,
  NotebookText,
  FolderOpen,
  SquarePlus,
  ArrowUpNarrowWide,
  ArrowUpDown,
  Layers3,
  ChevronDown,
  Maximize,
  LayoutDashboard,
  MonitorPlay,
  Info,
  LayoutGrid,
  BriefcaseBusiness,
} from "lucide-react";
import CameraLink from "./component1s/CameraLink";
import Clock from "./component1s/Clock";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Page = () => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeCameras, setActiveCameras] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [recordingCameras, setRecordingCameras] = useState([]);
  const [recognizingCameras, setRecognizingCameras] = useState([]);

  const handleMaximizeClick = () => {
    setIsMaximized(!isMaximized);
  };


  const [isRecording, setIsRecording] = useState(false);
  const [isRecognizing, setIsRecognizing] = useState(false);

 
  const toggleRecording = (cameraName) => {
    setRecordingCameras((prev) =>
      prev.includes(cameraName)
        ? prev.filter((name) => name !== cameraName)
        : [...prev, cameraName]
    );
  };

  const toggleRecognition = (cameraName) => {
    setRecognizingCameras((prev) =>
      prev.includes(cameraName)
        ? prev.filter((name) => name !== cameraName)
        : [...prev, cameraName]
    );
  };

  const handleCameraClick = (cameraName) => {
    setActiveCameras((prevCameras) =>
      prevCameras.includes(cameraName)
        ? prevCameras
        : [...prevCameras, cameraName]
    );
  };

  const getGridClass = () => {
    const totalCameras = activeCameras.length;
    if (totalCameras <= 4) return "grid-cols-2 grid-rows-2";
    if (totalCameras <= 6) return "grid-cols-2 grid-rows-3";
    if (totalCameras <= 9) return "grid-cols-3 grid-rows-3";
    if (totalCameras <= 12) return "grid-cols-4 grid-rows-3";
    
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    cameraName: "",
  });

  const handleContextMenu = (event, cameraName) => {
    event.preventDefault(); // Prevent default right-click behavior (context menu)
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      cameraName: cameraName,
    });
  };

  const handleContextMenuOption = (option) => {
    if (option === "Record") {
      toggleRecording(contextMenu.cameraName);
    } else if (option === "Recognize") {
      toggleRecognition(contextMenu.cameraName);
    }
    setContextMenu({ visible: false, x: 0, y: 0, cameraName: "" });
  };

  const filteredCameras = [
    "Accra City Camera 01",
    "Accra City Camera 02",
    "Accra City Camera 03",
    "Accra City Camera 04",
    "Accra City Camera 05",
    "Accra City Camera 06",
    "Accra City Camera 07",
    "Accra City Camera 08",
    "Accra City Camera 09",
    "Accra City Camera 10",
    "Accra City Camera 11",
  ].filter((camera) =>
    camera.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const PopupMenu = ({ x, y, cameraName }) => (
    <div
      className="absolute bg-[#2f2f39] rounded-sm flex flex-row text-xs z-50 items-center gap-y-3 px-2 py-1"
      style={{ top: y, left: x }}
    >
      <ul>
        <li
          className='rounded-sm flex flex-row text-xs items-center gap-3 px-2 py-1 cursor-pointer'
          onClick={() => handleContextMenuOption("Record")}
        >
          Record 
        </li>
        <li
          className='rounded-sm flex flex-row text-xs items-center gap-3 px-2 py-1 cursor-pointer'
          onClick={() => handleContextMenuOption("Recognize")}
        >
          Recognize 
        </li>
        <li className='rounded-sm flex flex-row text-xs items-center gap-3 px-2 py-1 cursor-pointe'>Disconnect</li>
      </ul>
    </div>
  );
  return (
    <div className="w-[100dvw] h-[100dvh] bg-[#1d1e23]">
      {contextMenu.visible && (
        <PopupMenu x={contextMenu.x} y={contextMenu.y} cameraName={contextMenu.cameraName} />
      )}
      {/* main content */}
      <div className="w-full h-[98%] flex flex-row ">
        {/* left bar */}
        <div className="w-[3.6rem] h-full bg-[#2f2f39] flex flex-col gap-y-1 items-center justify-between">
          <Image
            src="/fvlcon.png"
            alt="home"
            width={250}
            height={250}
            className=""
          />
          <div className="flex w-full h-full flex-col items-center">
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
              <h1 className="text-[9px]">Activity log</h1>
            </div>
            <div className="items-center flex flex-col mt-5 w-full py-2 hover:bg-[#3a3a47]">
              <NotebookText size={20} />
              <h1 className="text-[9px]">Report</h1>
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

        {/* main div */}
        <div className="w-[16rem] mx-2 mt-2">
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
          <div className="w-full bg-[#4a5964] bg-opacity-70 backdrop-blur-lg h-[16rem]"></div>
          <div className="mt-[20px] w-full">
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
          <div className="w-full flex mt-4 flex-row">
            {/* Control icons */}
            <div className="w-[40%] bg-[#020817] bg-opacity-70 gap-x-2 backdrop-blur-lg h-[1.5rem] justify-center text-gray-400 px-2 flex items-center rounded-[15px]">
              <Rewind size={18} />
              <Pause size={18} />
              <FastForward size={18} />
            </div>
            {/* Camera number */}
            <div className="w-[40%] flex flex-row justify-evenly text-gray-400">
              <div className="bg-[#020817] bg-opacity-70 w-6 h-6 backdrop-blur-lg text-xs flex items-center justify-center rounded-full">
                1
              </div>
              <div className="bg-[#020817] bg-opacity-70 w-6 h-6 backdrop-blur-lg text-xs flex items-center justify-center rounded-full">
                2
              </div>
              <div className="bg-[#020817] bg-opacity-70 w-6 h-6 backdrop-blur-lg text-xs flex items-center justify-center rounded-full">
                3
              </div>
            </div>

            {/* REC */}
            <div className="w-[15%] bg-[#020817] bg-opacity-70 gap-x-2 backdrop-blur-lg text-xs text-gray-400 px-2 flex items-center rounded-[15px]">
              REC
            </div>
          </div>

          {/* Speed */}
          <Separator className="w-full bg-gray-600 my-2" />

         <h1>Camera Links</h1>

          {/* search */}
          <div className="flex flex-row items-center w-full justify-between mt-3">
            <div className="relative w-[70%]">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#494951] rounded-[7px] py-[4px] pl-10 text-xs border-gray-600 border-[2px] text-white"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={16}
                height={16}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="justify-evenly flex flex-row w-[28%]">
              <ArrowUpNarrowWide size={16} />
              <ArrowUpDown size={16} />
            </div>
          </div>

          {/* horizontal line */}
          

          {/* camera list */}
          <ScrollArea className="h-[4rem] w-full ">
            <ul className="h-full p-3">
              {filteredCameras.map((camera, index) => (
                <li key={index}   onContextMenu={(event) => handleContextMenu(event, camera)} className="mb-5">
            <CameraLink
  key={camera}
  src={`/${camera}.png`}
  cameraName={camera}
  location="Accra City"
  isSpecial={camera.includes("04")}
  onClick={handleCameraClick}
  onContextMenu={(e) => handleContextMenu(e, camera)}
  isRecording={recordingCameras.includes(camera)}
  isRecognizing={recognizingCameras.includes(camera)}
/>

                </li>
              ))}
            </ul>
          </ScrollArea>

{/* Databases */}

<div  className="mt-6 w-full">
<Tabs defaultValue="Imported" className="w-[100%]">
  <TabsList>
    <TabsTrigger value="Imported">Imported Databases</TabsTrigger>
    <TabsTrigger value="Custom">Custom Databases</TabsTrigger>
  </TabsList>
  <TabsContent value="Imported">
    <ScrollArea className="h-[9rem] w-full pt-2 ">
    <ul className="flex flex-col gap-y-4">
  <li className="flex flex-row items-center gap-x-2 text-xs py-2 px-1 bg-[#2f2f39] rounded-md hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
    <Image src="/popo.png" alt="popo" width={25} height={25} />
    <h1>Ghana police</h1>
  </li>
  <li className="flex flex-row items-center gap-x-2 text-xs py-2 px-1 bg-[#2f2f39] rounded-md hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
  <Image src="/Nhis.jpg" alt="popo" width={25} height={25} />
    <h1>National health insurance scheme</h1>
  </li>
 
</ul>

    </ScrollArea>
  </TabsContent>
  <TabsContent value="Custom">Empty! create a custom database.</TabsContent>
</Tabs>
</div>

        </div>

        <div className="flex flex-col w-[74.5%] mt-2 mx-[4px]">
          <div className="flex flex-row items-center justify-between">
            <div className="text-xs text-[#6f808a]">
              FVLCON FACIAL RECOGNITION LIVE STREAM
            </div>

<div>
  <ul className="flex items-center justify-end gap-x-3 py-[2px] text-xs">
              <li>Configure</li>
              <li>Live Reports</li>
              <li>Edit</li>
  </ul>
</div>

            <div className="flex items-center justify-end gap-x-3 py-[2px]">
              <Layers3 size={14} />
              <Popover>
                <PopoverTrigger>  <ChevronDown size={14} strokeWidth={1.7} /></PopoverTrigger>
                <PopoverContent>1</PopoverContent>
              </Popover>
              <div className="border-gray-600 border-l-2 h-4"></div>
              <div className="iconContainer" onClick={handleMaximizeClick}>
                {isMaximized ? (
                  <LayoutGrid size={14} className={`icon ${isMaximized ? 'icon-enter icon-enter-active' : 'icon-exit icon-exit-active'} cursor-pointer`} />
                ) : (
                  <Maximize size={14} className={`icon ${!isMaximized ? 'icon-enter icon-enter-active' : 'icon-exit icon-exit-active'} cursor-pointer`} />
                )}
              </div>
            </div>
          </div>

          <div className={`grid ${isMaximized ? "grid-cols-1" : getGridClass()} gap-0 w-full h-[94%] mt-[4px]`}>
            {isMaximized ? (
              <div className="bg-gray-400 border border-black">
                <div className="h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs">
                  <div className="text-white" >{activeCameras[0]}</div>
                  <div className="flex flex-row space-x-2 items-center">
                    <div>LIVE</div>
                    <div className="w-2 h-2 rounded-full bg-red-700 blinking"></div>
                  </div>
                </div>
              </div>
            ) : (
              activeCameras.map((cameraName, index) => (
                <div key={index} className="bg-gray-400 border border-black">
                  <div className="h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs">
                    <div>{cameraName}</div>
                    <div className="flex flex-row space-x-2 items-center">
                      <div>LIVE</div>
                      <div className="w-2 h-2 rounded-full bg-red-700 blinking"></div>
                    </div>
                  </div>
                </div>
              ))
            )}
            {!isMaximized && activeCameras.length < 6 && (
              Array(6 - activeCameras.length).fill().map((_, index) => (
                <div key={`empty-${index}`} className="bg-gray-400 border border-black">
                  <div className="h-5 w-full bg-[#4a5b67] opacity-30 flex items-center px-2 justify-between text-xs">
                    <div>Empty Slot</div>
                  </div>
                </div>
              ))
            )}
          </div>
          <Clock />
        </div>

        {/* right bar */}
        <div className="w-[3.6rem] h-full bg-[#2f2f39]">
          <div className="flex flex-col items-center">
            <Image
              alt="hey"
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
      
    </div>
  );
};

export default Page;
