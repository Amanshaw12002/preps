import SectionLayout from "@/layout/sectionLayout";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="bg-white rounded-2xl flex  w-full  mx-auto  pt-8 sm: sm:pt-0 ">
        {/* Heading */}
        <div className="pl-8 pt-8 ml-8">

        <h2 className="text-xl sm:text-4xl border-l-2 pl-2 mt-12  font-inter text-gray-900 text-left mb-5">
          Schedule an Onboarding Meeting
        </h2>
        <p className="text-left text-xs sm:text-sm text-gray-800 ">
          Pick a time that works best for you.
          <span className="font-bold block">Our one-to-one call or video conference</span>  will help you get started smoothly.
        </p>
        <p className="py-8 text-md font-medium">You can also contact us manually through our email.</p>

        <Link 
                  to="mailto:blackboxprepcenter.com" 
                  className="text-slate-800 hover:text-black border-2 overflow-hidden rounded-sm py-3 pl-3  text-sm font-semibold  transition duration-300"
                >
                  blackboxprepcenter.com <span className="bg-black ml-3    font-semibold px-5 py-3 text-white ">Send</span>

                </Link>
        </div>

        {/* Calendly widget */}
        <div
          className="calendly-inline-widget scale-80 inset-x-12 overflow-hidden   sm:-mt-14 sm:-mb-12 rounded-xl w-full  "
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
