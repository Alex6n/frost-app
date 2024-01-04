// TODO: find a way to internationlaize this component
"use client";

import { MutableRefObject, useEffect, useState } from "react";
import CountUp from "react-countup";

interface StatisticsProps {
  appData: {
    serversJoined: number;
    botUsers: number;
    appCommands: number;
    eliteUsers: number;
    websiteVisits: number;
  };
  footerRef: MutableRefObject<HTMLElement | null>;
}

const Statistics = ({ appData, footerRef }: StatisticsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, [footerRef]);

  return (
    <div className="bg-muted-foreground/5 p-10 rounded-lg border-zinc-400/20 border max-w-[500px] hidden xl:flex flex-wrap flex-rows-5 justify-center items-center space-between gap-10 my-auto mx-10">
      {Object.keys(appData).map((key, index) => {
        const value = appData[key as keyof typeof appData];

        return (
          <div key={key + index} className="justify-center content-center">
            <h2 className="text-white/75 capitalize">
              {key.replace(/([a-z](?=[A-Z]))/g, "$1 ")}
            </h2>
            {isVisible && (
              <div className="text-center font-bold text-xl">
                <CountUp start={0} end={value} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Statistics;
