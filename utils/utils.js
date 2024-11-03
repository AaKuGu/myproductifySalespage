export const leadingH =
  "leading-[30px] sm:leading-[38px] md:leading-[45px] lg:leading-[53px] xl:leading-[60px] 2xl:leading-[70px]";

export const textH =
  "text-[22px] sm:text-[26px] md:text-[34px] lg:text-[38px] xl:text-[44px] 2xl:text-[49px]";

export const textS =
  "text-[13px] sm:text-[16px] md:text-[19px] lg:text-[26px] xl:text-[30px] 2xl:text-[35px]";

export const twoBlocks =
  "w-full sm:w-[280px] md:w-[500px] lg:w-[700px] xl:w-[500px] ";

export const bigDiv =
  "w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px]";

export const pSmall = "p-2 sm:p-[6px] md:p-[8px] lg:p-[10px] xl:p-[12px]";

export const pyBig = "py-3 sm:py-4 md:py-5";

export const pxBig = "px-5";

export const gapScreen = "gap-5 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 ";

export const sectionWidth =
  "350:max-w-[335px] 400:max-w-[385px] 450:max-w-[435px] 500:max-w-[485px] 550:max-w-[535px] 600:max-w-[585px] 650:max-w-[635px] 700:max-w-[685px] 750:max-w-[735px] 800:max-w-[885px] lg:max-w-[1000px] max-w-7xl flex flex-col items-center justify-center ";

export const handleSmoothScroll = (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
      block: "start", // Align to the start of the target element
    });
  }
};
