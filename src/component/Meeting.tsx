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
      <div className="bg-white rounded-2xl w-full max-w-5xl mx-auto pt-8 sm:pt-0 sm:p-8">
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl font-inter text-gray-900 text-center mb-2">
          Schedule an Onboarding Meeting
        </h2>
        <p className="text-center text-xs sm:text-base text-gray-800 ">
          Pick a time that works best for you. Our{" "}
          <span className="font-bold">one-to-one call</span> or{" "}
          <span className="font-bold">video conference</span> will help you get started smoothly.
        </p>

        {/* Calendly widget */}
        <div
          className="calendly-inline-widget mt-4 sm:mt-8 rounded-xl w-full "
          data-url="https://calendly.com/amanshaw12002/new-meeting"
          style={{
            minWidth: "320px",
            height: "680px",
          }}
        ></div>
      </div>
    </SectionLayout>
  );
}
