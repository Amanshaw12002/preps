import { useEffect } from "react";

export default function CustomCalendar() {
  useEffect(() => {
    // Load Calendly script only once
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center  bg-gray-50 px-4 py-8">
      <div className="bg-white shadow-2xl rounded-3xl max-w-5xl w-full p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-inter text-gray-900 text-center mb-4">
          Schedule a Onboarding Meeting
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Pick a time that works best for you.Our <span className="font-bold"> one to one call </span> or <span className="font-bold"> video conference</span>  will help you get started smoothly.
        </p>

        {/* Calendly widget */}
        <div 
          className="calendly-inline-widget rounded-xl overflow-hidden " 
          data-url="https://calendly.com/amanshaw12002/new-meeting" 
          style={{ width: "100%", height: "660px" }}
        ></div>
      </div>
    </div>
  );
}