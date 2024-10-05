import Image from "next/image";
import React from "react";

const SectionEighteen = () => {
  return (
    <section className="flex w-screen h-auto lg:min-h-screen items-center justify-center bg-gradient-to-r from-[#100073] to-[#570144]">
      <div className="w-[90%] flex flex-col items-center justify-center my-10 md:my-20 text-white  gap-10 lg:gap-10">
        <header className="font-bold font-dmSans text-[22px] md:text-[26px]">
          My Productify Works For Everyone
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center w-full">
          {data?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center sm:justify-between gap-0 rounded-xl  md:justify-start w-full  sm:gap-5"
            >
              <div className="flex items-center justify-center relative w-full rounded-xl  px-2">
                <Image
                  src={d?.image}
                  height={200}
                  width={300}
                  className={`${""} w-full sm:min-w-[300px] sm:min-h-[175px] sm:max-w-[300px] sm:max-h-[175px] lg:min-w-[300px] lg:min-h-[175px] lg:max-w-[300px] lg:max-h-[175px] rounded-xl border-orange-500 border-[2px]`}
                />
              </div>
              <div className="bg-gradient-to-tr from-purple-900 to-blue-950 rounded-full font-bold text-center px-4 py-2">
                {d.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionEighteen;

export const data = [
  {
    id: 1,
    title: "Affiliate Marketers",
    image:
      "https://cdn.pixabay.com/photo/2016/11/06/09/54/internet-marketing-1802610_1280.png",
  },
  {
    id: 2,
    title: "Coaches & Consultants",
    image:
      "https://cdn.pixabay.com/photo/2024/09/22/07/45/ai-generated-9065310_1280.jpg",
  },
  {
    id: 3,
    title: "Online Educators",
    image:
      "https://cdn.pixabay.com/photo/2020/05/31/09/30/online-course-5241968_1280.jpg",
  },
  {
    id: 4,
    title: "Small Business Owners",
    image:
      "https://cdn.pixabay.com/photo/2024/08/30/14/02/ai-generated-9009342_640.jpg",
  },
  {
    id: 5,
    title: "Content Creators",
    image:
      "https://cdn.pixabay.com/photo/2015/01/05/17/19/filmstrip-589491_640.jpg",
  },
  {
    id: 6,
    title: "Freelancers",
    image:
      "https://cdn.pixabay.com/photo/2023/10/16/15/52/business-8319519_640.png",
  },
  {
    id: 7,
    title: "Digital Marketers",
    image: "https://cdn.pixabay.com/photo/2016/04/13/22/42/seo-1327870_640.png",
  },
  {
    id: 8,
    title: "Authors & Writers",
    image:
      "https://cdn.pixabay.com/photo/2024/03/03/23/53/ai-generated-8611493_640.png",
  },
  {
    id: 9,
    title: "E-commerce Entrepreneurs",
    image:
      "https://cdn.pixabay.com/photo/2024/03/26/11/57/woman-8656653_1280.jpg",
  },
  {
    id: 10,
    title: "Non-Profit Organizations",
    image:
      "https://cdn.pixabay.com/photo/2014/09/08/12/48/silhouettes-439150_640.jpg",
  },
  {
    id: 11,
    title: "Event Planners",
    image:
      "https://cdn.pixabay.com/photo/2014/01/22/22/28/planning-250091_640.jpg",
  },
  {
    id: 12,
    title: "Fitness Trainers",
    image:
      "https://cdn.pixabay.com/photo/2022/09/13/07/32/personal-trainer-7451170_640.jpg",
  },
];
