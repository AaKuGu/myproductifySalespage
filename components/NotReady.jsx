// "use client";

// import React, { useEffect, useState } from "react";

// const NotReady = () => {
//   const [countdown, setCountdown] = useState(5); // Start at 5 seconds
//   const [show, setShow] = useState(true); // State to control visibility
//   const [timer, setTimer] = useState(null);

//   // Handle countdown and auto-close
//   useEffect(() => {
//     if (show && countdown > 0) {
//       const timerInterval = setInterval(() => {
//         setCountdown((prev) => prev - 1);
//       }, 1000);
//       setTimer(timerInterval);

//       return () => clearInterval(timerInterval); // Cleanup timer on unmount
//     } else if (countdown === 0) {
//       setShow(false); // Close the NotReady component when countdown reaches 0
//     }
//   }, [show, countdown]);

//   // Handle close button click
//   const handleClose = () => {
//     setShow(false);
//     if (timer) {
//       clearInterval(timer); // Clear the countdown timer when closed manually
//     }
//   };

//   return (
//     show && (
//       <div className="w-[80vw] max-w-[600px] p-6 bg-gradient-to-r from-blue-400 to-blue-200 text-black rounded-lg shadow-xl flex flex-col items-center justify-center text-center absolute top-0 left-0 right-0 z-[500]">
//         <div className="relative w-full">
//           <button
//             onClick={handleClose}
//             className="absolute top-2 right-2 text-2xl font-bold text-white hover:text-gray-300"
//           >
//             ×
//           </button>
//         </div>
//         <div className="text-[4.5vw] lg:text-[3vw] font-bold">
//           <p>
//             The JV Page, JV Docs, JV Prizes, and Sales Page are not yet 100%
//             finalized.
//           </p>
//         </div>
//         <p className="mt-4 font-medium text-[3vw] lg:text-[1.5vw] text-gray-600">
//           Please keep an eye on them for updates!
//         </p>
//         <div className="mt-6 italic text-[2.5vw] lg:text-[1.7vw]">
//           <p>Check back soon for the latest details!</p>
//         </div>
//         <div className="mt-4 text-xl font-bold text-gray-800">
//           Closing in: {countdown} seconds
//         </div>
//       </div>
//     )
//   );
// };

// export default NotReady;

"use client";

import React, { useEffect, useState } from "react";
import "./NotReady.css";

const NotReady = () => {
  const [countdown, setCountdown] = useState(15); // Start at 30 seconds
  const [show, setShow] = useState(true); // State to control visibility
  const [timer, setTimer] = useState(null);

  // Handle countdown and auto-close
  useEffect(() => {
    if (show && countdown > 0) {
      const timerInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      setTimer(timerInterval);

      return () => clearInterval(timerInterval); // Cleanup timer on unmount
    } else if (countdown === 0) {
      setShow(false); // Close the NotReady component when countdown reaches 0
    }
  }, [show, countdown]);

  // Handle close button click
  const handleClose = () => {
    setShow(false);
    if (timer) {
      clearInterval(timer); // Clear the countdown timer when closed manually
    }
  };

  return (
    show && (
      <div className="fixed inset-0 flex items-center justify-center z-[500]">
        <div className="w-[80vw] p-[5vw] lg:p-[3vw] bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white rounded-xl shadow-2xl transform transition-transform duration-500 ease-in-out scale-105 flex flex-col items-center justify-center text-center animate-bounce-slow relative">
          <button
            onClick={handleClose}
            className="absolute top-1 right-1 text-[4vw] lg:text-[2.5vw] font-extrabold bg-white rounded-full px-[2vw] lg:px-[1.5vw] py-[0.5vw] text-black hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 ease-in-out shadow-md"
            aria-label="Close"
          >
            ×
          </button>

          <div className="text-[4.5vw] lg:text-[3vw] font-extrabold tracking-wide leading-[7.5vw] lg:leading-[5vw]">
            <p>
              The JV Page, JV Docs, JV Prizes, and Sales Page are not yet 100%
              finalized.
            </p>
          </div>
          <p className="mt-4 font-medium text-[3vw] lg:text-[1.5vw] tracking-wide text-opacity-90">
            Please keep an eye on them for updates!
          </p>
          <div className="mt-6 italic text-[4vw] lg:text-[2.3vw] text-gray-200">
            <p>Check back soon for the latest details!</p>
          </div>
          <div className="mt-6 text-[6vw] lg:text-[3vw] font-semibold text-gray-100">
            <p>Closing in: </p>
            <div className=" font-extrabold text-yellow-400 animate-pulse">
              {countdown} seconds
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default NotReady;
