export default function GetQuoteForm() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Panel - Enhanced Content */}
            <div className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 p-10 lg:p-16 text-white overflow-hidden">
              {/* Animated Smoke Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-xl animate-gentle-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-2xl animate-float-1"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-red-400 rounded-full blur-xl animate-float-2"></div>
              </div>
              
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
              
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
                
                {/* Enhanced Features List */}
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
                      <span className="text-slate-200 font-light text-lg group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Indicator */}
                <div className="mt-16 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-300 font-light text-sm mb-2">
                        Trusted by 500+ businesses worldwide
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Enhanced Form */}
            <div className="p-10 lg:p-16 bg-gradient-to-br from-white to-slate-50/50">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                        className="w-full pl-10 py-3 pr-4  text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="block text-xs font-medium text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="companyName"
                        placeholder="Your company name"
                        className="w-full pl-10 py-3 pr-4 border text-sm border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        placeholder="your.email@company.com"
                        className="w-full pl-10 py-3 pr-4 border text-sm border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Phone No. */}
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-xs font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phoneNumber"
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 py-3 pr-4 border text-sm border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-xs font-medium text-slate-700 mb-2">
                      Service Type *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        className="w-full px-4 py-3 border text-sm border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 appearance-none"
                      >
                        <option value="">Choose a service</option>
                        <option value="fba">FBA Prep</option>
                        <option value="fbm">FBM Fulfillment</option>
                        <option value="storage">Storage</option>
                        <option value="returns">Returns Handling</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Units per Month */}
                  <div className="space-y-2">
                    <label htmlFor="unitsPerMonth" className="block text-xs font-medium text-slate-700 mb-2">
                      Monthly Volume *
                    </label>
                    <input
                      type="number"
                      id="unitsPerMonth"
                      placeholder="Estimated units per month"
                      className="w-full px-4 py-3 border text-sm border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Source Method */}
                <div className="space-y-2">
                  <label htmlFor="sourceMethod" className="block text-xs font-medium text-slate-700 mb-2">
                    Sourcing Method *
                  </label>
                  <div className="relative">
                    <select
                      id="sourceMethod"
                      className="w-full px-4 py-3 border text-xs border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 appearance-none"
                    >
                      <option value="">Select sourcing method</option>
                      <option value="online-arbitrage">Online Arbitrage</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="private-label">Private Label</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* About Business */}
                <div className="space-y-2">
                  <label htmlFor="aboutBusiness" className="block text-xs  font-medium text-slate-700 mb-2">
                    Business Overview *
                  </label>
                  <textarea
                    id="aboutBusiness"
                    rows={4}
                    placeholder="Tell us about your business, products, specific requirements, and any challenges you're facing..."
                    className="w-full px-4 py-3 border text-xs border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300 bg-white/70 backdrop-blur-sm text-slate-700 placeholder-slate-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-slate-900 to-red-700 hover:from-red-900 hover:to-red-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
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