import Image from "next/image";
import React from "react";

const AboutMe = ({ hideText = false }) => {
  return (
    <section className="w-screen h-auto sm:min-h-screen flex items-center justify-center">
      <div
        className={`${""} w-[90%] sm:w-[95%] md:w-[80%] flex items-center justify-center flex-col gap-10 my-[10vw] lg:my-[5vw]`}
      >
        <div
          className={`${""} flex flex-col sm:flex-row items-center justify-center gap-5 w-full`}
        >
          <header className="flex flex-col items-center justify-center gap-5 lg:gap-10 text-center">
            <span className="text-[5vw] lg:text-[3vw] font-bold font-ubuntu">
              Thanks For Checking Out
            </span>
            <div className="header-text mb-[2vw] lg:mb-[0.2vw]">
              <Image
                src="/logo/darkLogo.png"
                height={100}
                width={400}
                alt="website logo"
                className="w-[50vw] lg:w-[25vw] "
              />
            </div>
            <span>
              <Image
                src="/logo/myName.png"
                width={300}
                height={100}
                alt="My Name"
                className="w-[50vw] lg:w-[25vw] "
              />
            </span>
          </header>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/logo/me.png"
              width={400}
              height={400}
              alt="Me"
              className="rounded-full lg:w-[30vw] w-[80vw]"
            />
          </div>
        </div>

        {!hideText && (
          <div className="flex flex-col items-center justify-center gap-5 text-[4vw] lg:text-[1.5vw] font-roboto font-bold text-justify">
            <span>
              Within minutes of buying this software, you’ll realize you’ve just{" "}
              <strong className={`${""}  text-red-700`}>
                saved hundreds, even thousands of dollars
              </strong>{" "}
              that you would have spent on freelancers. You’re no longer feeling
              anxious or overwhelmed—you’re now equipped to create and launch
              your own course, stepping into your true potential!
            </span>
            <span>
              If you haven’t grabbed My Productify yet, hit “BUY NOW” before
              your competition does. This incredible value won’t last long, and
              you don’t want to miss out on{" "}
              <strong className={`${""}  text-red-700`}>
                saving big
              </strong>
              !
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMe;
