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
    <div className="flex justify-center border-y border-red-900 items-center relative bg-gray-100 p-12 ">
      
  <div className="absolute -top-1 left-6.5 w-3 h-3 bg-red-900"></div>
  <div className="absolute -top-1 right-6.5 w-3 h-3 bg-red-900"></div>
  <div className="absolute -bottom-1 right-6.5 w-3 h-3 bg-red-900"></div>
  <div className="absolute -bottom-1 left-6.5 w-3 h-3 bg-red-900"></div>
  <div className="absolute top-0 left-8 w-px h-full bg-red-900"></div>
  <div className="absolute top-0 right-8 w-px h-full bg-red-900"></div>
 

      <div className="bg-white shadow-2xl rounded-3xl max-w-5xl w-full p-8 ">
        <h2 className="text-3xl font-inter text-gray-900 text-center mb-2">
          Schedule a Onboarding Meeting
        </h2>
        <p className="text-center text-sm text-gray-800 ">
          Pick a time that works best for you.Our <span className="font-bold"> one to one call </span> or <span className="font-bold"> video conference</span>  will help you get started smoothly.
        </p>

        {/* Calendly widget */}
        <div 
          className="calendly-inline-widget rounded-xl overflow-hidden " 
          data-url="https://calendly.com/amanshaw12002/new-meeting" 
          style={{ width: "1020px", height: "660px" }}
        ></div>
      </div>
    </div>
  );
}