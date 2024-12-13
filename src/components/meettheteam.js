import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const MeetTheTeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 mx-auto px-4 mt-[100px]"
      ref={sectionRef}
    >
      <div className="text-left">
        <h2 className="text-[10em] font-semibold mt-[100px] leading-none">
          MEET <br />THE <br />TEAM
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-y-[200px]">
        {[
          "/assets/download.png",
          "/assets/BJxv9img20231215170348604.png",
          "/assets/OI8T4img20231215170346571.png",
          "/assets/okzMIimg20231215170352742.png",
        ].map((src, index) => (
          <div
            key={index}
            className={`w-[7cm] h-[5cm] bg-gray-200 flex items-center justify-center grayscale hover:grayscale-0 ${
              isVisible ? "animate-pop-in" : "opacity-0"
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationFillMode: "both",
            }}
          >
            <Image
              src={src}
              alt="Team Member"
              className="rounded-lg shadow-lg"
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;