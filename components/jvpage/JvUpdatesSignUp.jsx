import { buildList } from "@/utils/fac";
import React, { useEffect, useRef, useState } from "react";

const JvUpdatesSignUp = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null); // Create a ref for the modal

  const buildListHandler = async () => {
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    setLoading(true);

    const res = await buildList(email, "affiliate");
    if (res.status) {
      alert(res.msg);
      setEmail(""); // Clear the email input on success
      setLoading(false);
      onClose();
    } else {
      onClose();
      alert(JSON.stringify(res));
    }
  };

  useEffect(() => {
    // Scroll the modal into view when the component mounts
    if (modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <div
      className="relative bg-white text-black p-6 rounded-lg shadow-md text-center w-[90vw] lg:w-[50vw] py-[6vw] lg:py-[3vw] px-[5vw] lg:px-[3vw]"
      ref={modalRef} // Attach the ref here
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-[5vw] lg:text-[2vw]"
        aria-label="Close signup modal"
      >
        &times;
      </button>
      <h2 className="mb-[3vw] lg:mb-[2vw] text-[4vw] lg:text-[2vw] font-semibold">
        <div>Enter Your Email Address Below</div>
        <div>To Signup For Important JV Updates</div>
      </h2>
      <input
        type="email"
        placeholder="Your email"
        className="w-full px-[1.5vw] py-[1vw] lg:px-[0.8vw] lg:py-[0.5vw] border border-gray-300 rounded mb-[3vw] lg:mb-[2vw] text-[4vw] lg:text-[2vw]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-[4vw] lg:text-[1.5vw]"
        onClick={buildListHandler}
        disabled={loading} // Disable button while loading
      >
        {loading ? "Signing Up..." : "Click To SignUp For VIP JV Updates"}
      </button>
    </div>
  );
};

export default JvUpdatesSignUp;
