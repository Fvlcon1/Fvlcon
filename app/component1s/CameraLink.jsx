import React from 'react';
import Image from 'next/image';

const CameraLink = ({ src, cameraName, location, isSpecial }) => {
  const containerClass = isSpecial ? 'bg-blue-400 border-l-blue-500 border-l-2' : '';

  return (
    <div className={containerClass}>
      <div className='bg-[#2f2f39] rounded-sm flex flex-row text-sm items-center gap-3 px-2 py-1'>
        <Image src={src} width={50} height={20} className='mr-4' alt={cameraName} />
        <div className='flex-col flex items-start gap-1 text-xs'>
          <p>{cameraName}</p>
          <p className='font-thin text-gray-400'>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default CameraLink;
