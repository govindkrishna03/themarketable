'use client';
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect } from "react";
import './globals.css';
import { splitStringUsingRegex } from "@/components/split";
import MeetTheTeam from "@/components/meettheteam";

export default function Home() {
  useEffect(() => {
    let locomotiveScroll;
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
    })();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  // Split the heading text
  const headingText = "OWN YOUR TOMORROW.";
  const [firstLine, secondLine] = headingText.split("TOMORROW.");

  // Join the text with the newline for splitCharacters
  const splitCharacters = [...firstLine, "TOMORROW.", ...secondLine].map((char) => char);

  return (
    <div data-scroll-container>
      <Navbar />

      <div className="container mx-auto flex justify-between h-auto items-center">
        {/* Animated Text */}
        <h1 className="font-bold  text-[10rem] mt-[100px] py-[100px] leading-none flex flex-wrap" style={{ fontFamily: '"Helvetica Neue", Arial, Helvetica, sans-serif' }}>
          {splitCharacters.map((char, index) => (
            <span
              key={index}
              className="inline-block transform transition-transform duration-500 ease-in-out hover:scale-125"
              style={{
                animation: `fade-in 0.5s ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              {char === " " ? "\u00A0" : char} {/* Handle space as non-breaking space */}
            </span>
          ))}
        </h1>

        {/* Uncomment if Logo is needed */}
        {/* <Image src={Logo} alt="Logo" className="h-auto w-auto" /> */}
      </div>

      {/* Other sections */}
      <div className="container mx-auto mt-[250px]">
        <div className="container mx-auto px-4 mt-[100px]">
          {/* Add the rest of your content here, unchanged */}
        </div>
      </div>

      {/* Tailwind Custom Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      <div className="container mx-auto mt-[250px]">
        <div className="container mx-auto px-4 mt-[100px]">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">
              WHAT WOULD YOU LIKE TO LEARN?
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Choose from our free video series or live classes to get started with crypto trading.
            </p>
          </div>

          {/* 1x3 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <Image
                  src="/assets/BannerTest.jpg"
                  alt="Free Crypto Trading Series"
                  className="rounded-lg shadow-lg"
                  width={500}
                  height={300}
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 text-sm rounded-full">
                  Free Crypto Trading Series
                </span>
              </div>
              <div className="flex flex-col items-center mt-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Free Crypto Trading Series
                </h2>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                  FREE VIDEOS
                </button>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <Image
                  src="/assets/BannerTest.jpg"
                  alt="20 Days of Trading"
                  className="rounded-lg shadow-lg"
                  width={500}
                  height={300}
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 text-sm rounded-full">
                  LIVE CLASSES
                </span>
              </div>
              <div className="flex flex-col items-center mt-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Learn Crypto Trading From Scratch in 20 Days
                </h2>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                  Enroll Now. <span className="line-through text-gray-300">₹6,000</span> ₹4,000/-
                </button>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <Image
                  src="/assets/BannerTest.jpg"
                  alt="Additional Content"
                  className="rounded-lg shadow-lg"
                  width={500}
                  height={300}
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 text-sm rounded-full">
                  ADDITIONAL CONTENT
                </span>
              </div>
              <div className="flex flex-col items-center mt-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Additional Info for Users
                </h2>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* WHO IS THIS COURSE FOR */}
          <div className="container mx-auto p-[40px] mt-[100px]">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">WHO IS THIS COURSE FOR?</h2>
              <p className="text-2xl text-gray-600 mb-4 font-extrabold mx-auto">
                Our courses are great for everyone, whether you're just starting out in trading or already have some experience. Join us to learn and enhance your trading abilities across different subjects in a way that's easy to understand and follow.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                Join Now
              </button>
            </div>
          </div>

          <div className="mb-[200px]"><MeetTheTeam /></div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">

            <div class="flex flex-col">
              <h1 class="font-bold text-2xl">Should I Choose a Course if I'm New to Trading?</h1>
              <p>
                Absolutely! If you're looking to grasp the fundamentals of trading and start your trading journey while learning how to analyze your trades, our foundational course is an ideal starting point. Both courses are designed specifically for beginners, ensuring a smooth and comprehensive learning experience without the need for any prior knowledge of trading.
              </p>
            </div>

            <div class="flex flex-col">
              <h1 class="font-bold text-2xl">Are the courses available in English?</h1>
              <p>
                English Trading Batch Starting from January Third Week 2024! Stay tuned for further updates and important information. For more frequent updates, be sure to join our Discord groups. Don't miss out on this exciting opportunity to delve into the world of trading with us!
              </p>
            </div>

            <div class="flex flex-col">
              <h1 class="font-bold text-2xl">I want to learn from basics to advanced concepts about trading. Which course should I choose?</h1>
              <p>
                Our upcoming trading course led by Sreekanth covers a comprehensive spectrum of topics, starting from the fundamentals and progressing to advanced concepts. Stay tuned for this course if you're eager to delve into trading strategies and gain insights from the basics to the more intricate aspects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}