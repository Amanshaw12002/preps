import { useState } from "react";

export default function GetQuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzzjozle", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-16 text-center">
            <h2 className="text-4xl font-semibold text-green-600 mb-4">Thank you!</h2>
            <p className="text-slate-700 text-lg">
              Your custom quote request has been received. We’ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Panel */}
            <div className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 p-10 lg:p-16 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-xl animate-gentle-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-2xl animate-float-1"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-red-400 rounded-full blur-xl animate-float-2"></div>
              </div>
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
              <div className="relative h-full flex flex-col justify-center">
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-1 bg-red-600 mr-3"></div>
                    <span className="text-red-400 font-semibold tracking-widest text-sm uppercase">Get Started</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
                    Request Your <span className="text-red-400 font-semibold">Custom</span> Quote
                  </h1>
                  <p className="text-slate-300 text-lg font-light leading-relaxed">
                    Share your requirements and our experts will prepare a tailored solution designed to optimize your business operations.
                  </p>
                </div>
                <div className="mt-12 space-y-6">
                  {[
                    "Personalized pricing strategy",
                    "Dedicated account management",
                    "24-hour response guarantee",
                    "Industry-specific solutions"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center group cursor-pointer">
                      <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500/30 transition-all duration-300 group-hover:scale-110">
                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-200 font-light text-lg group-hover:text-white transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-slate-300 font-light text-sm">Trusted by 500+ businesses worldwide</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-10 lg:p-16 bg-gradient-to-br from-white to-slate-50/50">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name"
                      className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"/>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="block text-xs font-medium text-slate-700 mb-2">Company Name *</label>
                    <input type="text" id="companyName" name="companyName" required placeholder="Your company name"
                      className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"/>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required placeholder="your.email@company.com"
                      className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"/>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-xs font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"/>
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-xs font-medium text-slate-700 mb-2">Service Type *</label>
                    <select id="service" name="service" required
                      className="w-full px-4 py-3 border text-sm border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 appearance-none">
                      <option value="">Choose a service</option>
                      <option value="fba">FBA Prep</option>
                      <option value="fbm">FBM Fulfillment</option>
                      <option value="storage">Storage</option>
                      <option value="returns">Returns Handling</option>
                    </select>
                  </div>

                  {/* Monthly Volume */}
                  <div className="space-y-2">
                    <label htmlFor="unitsPerMonth" className="block text-xs font-medium text-slate-700 mb-2">Monthly Volume *</label>
                    <input type="number" id="unitsPerMonth" name="unitsPerMonth" required placeholder="Estimated units per month"
                      className="w-full px-4 py-3 border text-sm border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"/>
                  </div>
                </div>

                {/* Sourcing Method */}
                <div className="space-y-2">
                  <label htmlFor="sourceMethod" className="block text-xs font-medium text-slate-700 mb-2">Sourcing Method *</label>
                  <select id="sourceMethod" name="sourceMethod" required
                    className="w-full px-4 py-3 border text-xs border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 appearance-none">
                    <option value="">Select sourcing method</option>
                    <option value="online-arbitrage">Online Arbitrage</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="private-label">Private Label</option>
                  </select>
                </div>

                {/* About Business */}
                <div className="space-y-2">
                  <label htmlFor="aboutBusiness" className="block text-xs font-medium text-slate-700 mb-2">Business Overview *</label>
                  <textarea id="aboutBusiness" name="aboutBusiness" rows={4} required placeholder="Tell us about your business, products, specific requirements, and challenges..."
                    className="w-full px-4 py-3 border text-xs border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400 resize-none"/>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button type="submit" className="w-full bg-gradient-to-r from-slate-900 to-red-700 hover:from-red-900 hover:to-red-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    <span className="flex items-center justify-center">
                      Get My Custom Quote
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                  <p className="text-center text-slate-500 text-sm font-light mt-4">
                    We'll get back to you within 24 hours • No commitment required
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
