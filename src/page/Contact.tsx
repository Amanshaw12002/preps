import { useState } from "react";


interface FormData {
  name: string;
  email: string;
  date: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
     name: "",
     email: "",
     date: "",
     message: "",
   });
  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

  };

  return (
    <>
    <section className="flex-center px-2 bg-gray-200   ">
      <div className="grid sm:grid-cols-2  max-w-4xl  bg-white rounded-2xl shadow-lg mt-24 mb-10 p-4 md:p-8">
        {/* Heading */}

        <div className=" ">
             <h2 className="text-5xl mb-4 font-inter font-normal   ">Get in touch</h2>

        <p className="text-gray-600 text-sm  mb-6">
          Have a question?  
          Fill out the form  and we will get back to you as soon as possible.
        </p>
        <p className="text-gray-600 text-sm mb-6">
          Or just manually  reach out to us through <span className="text-red-700 underline font-inter">blackboxpreps@gmail.com</span>
        </p>
        
        </div>


           <form
          onSubmit={sendEmail}
          className="flex flex-col bg-white border-2  border-gray-400 shadow-lg rounded-2xl p-6 gap-6"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="peer border w-full text-sm font-light text-black rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder=" " // keep empty space for floating effect
              required
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black bg-white px-1"
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="peer border w-full text-sm font-light text-black rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black bg-white px-1"
            >
              Email Address
            </label>
          </div>

          {/* Date */}
          <div className="relative">
            <input
              type="date"
              id="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="peer border w-full text-sm font-light text-black rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="date"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black bg-white px-1"
            >
              Preferred Date
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="peer border w-full text-sm text-gray-800 rounded-lg p-3 h-32 resize-none focus:ring-1 focus:outline-none focus:ring-black"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-black bg-white px-1"
            >
              Your Message
            </label>
          </div>

          <p className="text-xs text-gray-500">
            By continuing you are agreeing to our terms and conditions.
          </p>

          <button
            type="submit"
            className="hover:bg-gradient-to-r self-end bg-black from-black to-red-500 text-white w-fit font-mon hover:scale-95 transition duration-300 py-3 px-6 rounded-lg cursor-pointer  shadow-md"
          >
            Send Message
          </button>
        </form>
            </div>
      
    </section>
    </>
  );
}
