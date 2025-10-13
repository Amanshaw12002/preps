export default function GetQuoteForm() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Panel - Content */}
            <div className="relative bg-gradient-to-br from-black via-black via-30%  to-red-800 p-10 lg:p-16 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #dc2626 2px, transparent 2px)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-1 bg-red-800 mr-4"></div>
                    <span className="text-red-800 font-light tracking-wider text-2xl">GET STARTED</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                    Request Your <span className="text-royal-red font-normal">Custom</span> Quote
                  </h1>
                </div>
                <p className="text-slate-300 text-xl font-light mt-6 leading-relaxed">
                  Share your requirements and our experts will prepare a tailored solution 
                  designed to optimize your business operations.
                </p>
                
                {/* Features List */}
                <div className="mt-12 space-y-6">
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-red-800/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-royal-red/20 transition duration-300">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <span className="text-slate-200 font-light text-lg">Personalized pricing strategy</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-red-800/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-royal-red/20 transition duration-300">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <span className="text-slate-200 font-light text-lg">Dedicated account management</span>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-10 h-10 bg-red-800/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-royal-red/20 transition duration-300">
                      <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                    </div>
                    <span className="text-slate-200 font-light text-lg">24-hour response guarantee</span>
                  </div>
                </div>

                {/* Trust Indicator */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                  <p className="text-slate-200 font-light text-sm">
                    Trusted by 500+ businesses worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-10 lg:p-16 bg-gradient-to-br from-white to-slate-50">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-normal text-slate-700 mb-2 tracking-wide"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter your full name"
                      className="w-full border border-slate-300 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-royal-red focus:border-royal-red transition duration-300 bg-white shadow-sm hover:shadow-md"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-3">
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-normal text-slate-700 mb-2 tracking-wide"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      placeholder="Your company name"
                      className="w-full border border-slate-300 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-royal-red focus:border-royal-red transition duration-300 bg-white shadow-sm hover:shadow-md"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal text-slate-700 mb-2 tracking-wide"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@company.com"
                      className="w-full border border-slate-300 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-royal-red focus:border-royal-red transition duration-300 bg-white shadow-sm hover:shadow-md"
                    />
                  </div>

                  {/* Phone No. */}
                  <div className="space-y-3">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-normal text-slate-700 mb-2 tracking-wide"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-slate-300 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-royal-red focus:border-royal-red transition duration-300 bg-white shadow-sm hover:shadow-md"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-3">
                    <label
                      htmlFor="service"
                      className="block text-sm font-normal text-slate-700 mb-2 tracking-wide"
                    >
                      Service Type *
                    </label>
                    <select
                      id="service"
                      className="w-full border border-slate-300 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-royal-red focus:border-royal-red transition duration-300 bg-white shadow-sm hover:shadow-md appearance-none"
                    >
                      <option value="">Choose a service</option>
                      <option value="fba">FBA Prep</option>
                      <option value="fbm">FBM Fulfillment</option>
                      <option value="storage">Storage</option>
                      <option value="returns">Returns Handling</option>
                    </select>
                  </div>

                  {/* Units per Month */}
                  <div className="space-y-3">
                    <label
                      htmlFor="unitsPerMonth"
                      className="block text-sm font-normal text-slate-700 mb-2 tracking-wide"
                    >
                      Monthly Volume *
                    </label>
                    <input
                      type="number"
                      id="unitsPerMonth"
                      placeholder="Estimated units per month"
                      className="w-full border border-slate-300 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-royal-red focus:border-royal-red transition duration-300 bg-white shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Source Method */}
                <div className="space-y-3">
                  <label
                    htmlFor="sourceMethod"
                    className="block text-sm font-normal text-slate-700 mb-2 tracking-wide"
                  >
                    Sourcing Method *
                  </label>
                  <select
                    id="sourceMethod"
                    className="w-full border border-slate-300 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-royal-red focus:border-royal-red transition duration-300 bg-white shadow-sm hover:shadow-md appearance-none"
                  >
                    <option value="">Select sourcing method</option>
                    <option value="online-arbitrage">Online Arbitrage</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="private-label">Private Label</option>
                  </select>
                </div>

                {/* About Business */}
                <div className="space-y-3">
                  <label
                    htmlFor="aboutBusiness"
                    className="block text-sm font-normal text-slate-700 mb-2 tracking-wide"
                  >
                    Business Overview *
                  </label>
                  <textarea
                    id="aboutBusiness"
                    rows={5}
                    placeholder="Tell us about your business, products, specific requirements, and any challenges you're facing..."
                    className="w-full border border-slate-300 rounded-xl px-5 py-4 text-sm focus:ring-2 focus:ring-royal-red focus:border-royal-red transition duration-300 bg-white shadow-sm hover:shadow-md resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-800/90 border-gray-100 border text-white font-normal py-5 px-8 rounded-xl transition duration-300 text-xl tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Get My Custom Quote
                    <span className="ml-2">→</span>
                  </button>
                  <p className="text-center text-slate-700 text-sm font-light mt-4">
                    We'll get back to you within 24 hours
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