"use client"


import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  endTime: string; // ISO string representing the deal's end time
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const targetTime = new Date(endTime).getTime();
    const timeLeft = targetTime - now;

    if (timeLeft > 0) {
      return {
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      };
    }
    return null; // Deal has ended
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [endTime]);

  if (!timeLeft) {
    return (
      <div className="text-center bg-gray-200 border border-gray-300 rounded-lg p-4 w-80 mx-auto">
        <h2 className="text-xl font-semibold">Deal has ended!</h2>
      </div>
    );
  }

  return (
    <div className="text-center bg-gray-200 border border-gray-300 rounded-lg p-5  mx-auto">
      <div className="flex justify-center gap-2 text-lg font-bold text-gray-800">
      <h2 className="text-xl text-black font-semibold ">Latest Deal Ends In:</h2>
        <div >
          <span className=" text-orange-500">{timeLeft.days}</span> Days
        </div>
        <div>
          <span className="text-orange-500">{timeLeft.hours}</span> Hours
        </div>
        <div>
          <span className="text-orange-500">{timeLeft.minutes}</span> Minutes
        </div>
        <div>
          <span className="text-orange-500">{timeLeft.seconds}</span> Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
