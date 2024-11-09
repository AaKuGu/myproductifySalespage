import React from "react";

const features = [
  {
    title: "Create your own product",
    desc: "With 'My Productify,' you’re not just building a course—you’re creating a complete, professional product that you can launch and scale.",
  },
  {
    title: "Drag-and-drop simplicity",
    desc: "Build custom course pages without any coding knowledge, making it easy for anyone to launch their own product in minutes.",
  },
  {
    title: "Email integration",
    desc: "Connect with your subscribers directly from your course pages and keep them engaged through automated email sequences.",
  },
  {
    title: "QR code builder",
    desc: "Generate QR codes for easy sharing and promotion of your product on social media, websites, and more.",
  },
  {
    title: "Short links",
    desc: "Track and promote your course product with branded, easy-to-share links, perfect for affiliate marketing or direct sales.",
  },
  {
    title: "Custom domain support",
    desc: "Make your course page part of your personal brand by launching it on your own custom domain, giving it a fully branded look and feel.",
  },
];

const Features = () => {
  return (
    <div
      className={`${""} h-auto w-full lg:w-[70%] flex items-center justify-start flex-col`}
    >
      <header
        className={`${""} italic underline text-[6vw] lg:text-[1.5vw] mb-[3vw] lg:mb-[1.2vw]  w-full text-start`}
      >
        <span className={`${"font-bold "} text-[inherit]`}>
          Features
        </span>
      </header>
      <main className={`${""} font-normal text-[5vw] lg:text-[1.5vw]`}>
        <ul className="list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index} className="mb-[5vw] lg:mb-[3vw]">
              <strong>{feature.title}:</strong> {feature.desc}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Features;
