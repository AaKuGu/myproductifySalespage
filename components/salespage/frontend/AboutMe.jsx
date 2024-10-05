import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="w-screen h-auto sm:min-h-screen flex items-center justify-center">
      <div
        className={`${""} w-[90%] sm:w-[95%] md:w-[80%] flex items-center justify-center flex-col gap-10`}
      >
        <div
          className={`${""} flex flex-col sm:flex-row items-center justify-center gap-5 w-full`}
        >
          <header className="flex flex-col items-center justify-center gap-5 lg:gap-10 text-center">
            <span className="text-[22px] md:text-[26px] font-bold font-ubuntu">
              Thanks For Checking Out
            </span>
            <span>
              <Image
                src="/logo/lightTransLogo.png"
                width={400}
                height={100}
                alt="Logo"
                className={`${""} w-full`}
              />
            </span>
            <span>
              <Image
                src="/logo/myName.png"
                width={200}
                height={100}
                alt="My Name"
                className={`${""} w-full`}
              />
            </span>
          </header>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/logo/me.png"
              width={400}
              height={400}
              alt="Me"
              className="rounded-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 text-[18px] md:text-[22px] font-roboto font-bold text-justify">
          <span>
            Within minutes of buying this software, you’ll realize you’ve just{" "}
            <strong className={`${""} text-xl text-red-700`}>
              saved hundreds, even thousands of dollars
            </strong>{" "}
            that you would have spent on freelancers. You’re no longer feeling
            anxious or overwhelmed—you’re now equipped to create and launch your
            own course, stepping into your true potential!
          </span>
          <span>
            If you haven’t grabbed My Productify yet, hit “BUY NOW” before your
            competition does. This incredible value won’t last long, and you
            don’t want to miss out on{" "}
            <strong className={`${""} text-xl text-red-700`}>saving big</strong>
            !
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
