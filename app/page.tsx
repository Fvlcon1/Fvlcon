import React from 'react'


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const page = () => {
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
      {/* main content */}
      <div className='px-4 pb-1 pt-3 h-[95.3%]  w-full flex gap-3 flex-row '>
        {/* left side */}
        <div className='w-[17%]  h-full'>
          {/* dropdown */}
          <div className='w-full h-[14px] bg-[#242b35] '>
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
  {/* image / data container */}
  {/* image */}
  <div className='w-full h-[80%]'>
    <img src='https://via.placeholder.com/150' alt='Dummy' className='h-full w-full object-cover rounded-[5px]' />
  </div>
  {/* user info */}
  <div className='mt-2'>
    <ul className='flex flex-wrap text-[9px] gap-x-5 justify-start text-gray-400'>
      <li>Name:</li>
      <li>Age:</li>
      <li>Email:</li>
      <li>Location:</li>
      <li>Location:</li>
      <li>Location:</li>
      <li>Location:</li>
      <li>Location:</li>
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


        </div>
        <div className='w-[76%] h-full'>
          hell
        </div>
      </div>
    </div>
  )
}

export default page
