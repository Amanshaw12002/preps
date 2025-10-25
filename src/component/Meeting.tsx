import SectionLayout from "@/layout/sectionLayout";
import { useEffect } from "react";

export default function CustomCalendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SectionLayout>
      <div className="bg-white rounded-2xl flex  w-full max-w-5xl mx-auto pt-8 sm: sm:pt-0 sm:p-8">
        {/* Heading */}
        <div>

        <h2 className="text-xl sm:text-3xl pt-12 font-inter text-gray-900 text-left mb-2">
          Schedule an Onboarding Meeting
        </h2>
        <p className="text-left text-xs sm:text-sm text-gray-800 ">
          Pick a time that works best for you. Our{" "}
          <span className="font-bold block">one-to-one call</span> or{" "}
          <span className="font-bold">video conference</span> will help you get started smoothly.
        </p>
        </div>

        {/* Calendly widget */}
        <div
          className="calendly-inline-widget scale-80 inset-x-12 overflow-hidden   sm:-mt-34 sm:-mb-12 rounded-xl w-full  "
          data-url="https://calendly.com/amanshaw12002/new-meeting"
          style={{
            minWidth: "420px",
            height: "900px",
          }}
        ></div>
      </div>
    </SectionLayout>
  );
}
