import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds} GMT`;
  };

  return (
    <div className='flex items-center justify-center bg-black w-full text-gray-400 text-[9.7px]'>
      {formatTime(time)}
    </div>
  );
};

export default Clock;
