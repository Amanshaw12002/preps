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
      <div className="bg-white rounded-2xl w-full max-w-5xl mx-auto pt-8 sm:-mb-24 sm:pt-0 sm:p-8">
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl font-inter text-gray-900 text-center mb-2">
          Schedule an Onboarding Meeting
        </h2>
        <p className="text-center text-xs sm:text-sm text-gray-800 ">
          Pick a time that works best for you. Our{" "}
          <span className="font-bold block">one-to-one call</span> or{" "}
          <span className="font-bold">video conference</span> will help you get started smoothly.
        </p>

        {/* Calendly widget */}
        <div
          className="calendly-inline-widget overflow-hidden scale-70 mt-12 sm:-mt-16 rounded-xl w-full  "
          data-url="https://calendly.com/amanshaw12002/new-meeting"
          style={{
            minWidth: "520px",
            height: "680px",
          }}
        ></div>
      </div>
    </SectionLayout>
  );
}
