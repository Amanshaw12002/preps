import { useGlobalContext } from "@/GlobalContext";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {demoRef} = useGlobalContext();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <section ref={demoRef} className="flex justify-center h-[160vh] md:h-[140vh]  items-center pt-18 px-4 bg-white">
      <div className="grid sm:grid-cols-2 gap-2 h-10/12  sm:w-full  bg-gradient-to-br from-white to-gray-400 rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div>

        <h2 className="text-3xl font-mon text-black ">
          Still in doubt,worry not  
        </h2>
        <h2 className="text-3xl font-mon text-black mb-2">
          <span className="text-rose-700 underline ">get in touch</span> with our free demo session
        </h2>
        <p className="text-gray-600  mb-6">
          Have a question?  
          Fill out the form  and we will get back to you as soon as possible.
        </p>
        <p className="text-gray-600 mb-6">
          Or just manually  reach out to us through <span className="text-red-700 underline font-inter">blackboxpreps@gmail.com</span>
        </p>
        
        </div>

        {/* Form */}
        <form onSubmit={sendEmail} className="flex flex-col bg-white shadow-black shadow-2xl rounded-2xl p-6 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border text-sm font-light  text-black rounded-lg p-3  focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border text-sm  font-light border-black text-black rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
          <input
            type="date"
            placeholder=""
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border font-light text-sm border-black text-black rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border text-sm border-black text-gray-800 rounded-lg p-3 h-32 resize-none focus:ring-1 focus:outline-none  focus:ring-black"
            required
          />
          <p className="text-xs">By continuing you are agreeing to our terms and conditions.</p>
          <button
            type="submit"
            className="bg-white font-mon hover:scale-95 transitionn duration-300 border-2 hover:border-black/10 border-black text-black py-3 px-6 rounded-lg cursor-pointer hover:bg-black/10 hover:text-gray-700 transition-all shadow-md"
          >
            Book the demo now
          </button>
        </form>
      </div>
    </section>
  );
}
