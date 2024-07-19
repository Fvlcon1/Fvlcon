"use client"
import React from 'react';

const CameraLink = ({ src, cameraName, location, isSpecial, onClick, isRecording, isRecognizing }) => {
  const containerClass = isSpecial ? 'bg-blue-400 border-l-blue-500 border-l-2' : '';

  const handleClick = () => {
    console.log('Clicked:', cameraName); // Verify if the click event is triggered
    onClick(cameraName); // Call the onClick handler passed from parent
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer ${containerClass}`}>
      <div className='bg-[#2f2f39] rounded-sm flex flex-row text-sm items-center gap-3 px-2 py-1 relative'>
        <div className='mr-4'> </div>
        <div className='flex-col flex items-start gap-1 text-xs'>
          <p>{cameraName}</p>
          <p className='font-thin text-gray-400'>{location}</p>
        </div>
        {isRecording && (
          <div className="absolute right-2 w-2 h-2 rounded-full bg-red-500"></div>
        )}
        {isRecognizing && (
          <div className="absolute right-2 w-2 h-2 rounded-full bg-green-500"></div>
        )}
      </div>
    </div>
  );
};


export default CameraLink;
