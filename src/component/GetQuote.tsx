export default function GetQuoteForm() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-100">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Heading */}
          <div className="text-center md:text-start md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl font-bold font-sans text-gray-900 leading-tight">
              Get Your <span className="text-red-700">Instant</span> Quote
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Fill in the details below and our team will craft a custom quote
              tailored specifically for your business's unique needs.
            </p>
            {/* Optional: Add a small brand image/icon here */}
            {/* <div className="mt-6 hidden md:block">
              <img src="/blackboxprep-logo.svg" alt="Blackboxprep Logo" className="h-12 mx-auto md:mx-0" />
            </div> */}
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 md:w-1/2">
            {/* Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="Enter company name"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              />
            </div>

            {/* Phone No. */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="+1 (555) 000-0000"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              />
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Service
              </label>
              <select
                id="service"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 bg-white"
              >
                <option value="">Select service</option>
                <option value="fba">FBA Prep</option>
                <option value="fbm">FBM Fulfillment</option>
                <option value="storage">Storage</option>
                <option value="returns">Returns Handling</option>
              </select>
            </div>

            {/* Units per Month */}
            <div>
              <label
                htmlFor="unitsPerMonth"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Units / Month
              </label>
              <input
                type="number"
                id="unitsPerMonth"
                placeholder="e.g. 500"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
              />
            </div>

            {/* Source Method */}
            <div className="md:col-span-2">
              <label
                htmlFor="sourceMethod"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Source Method
              </label>
              <select
                id="sourceMethod"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 bg-white"
              >
                <option value="">Select source</option>
                <option value="online-arbitrage">Online Arbitrage</option>
                <option value="wholesale">Wholesale</option>
                <option value="private-label">Private Label</option>
              </select>
            </div>

            {/* About Business */}
            <div className="md:col-span-2">
              <label
                htmlFor="aboutBusiness"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                About Your Business
              </label>
              <textarea
                id="aboutBusiness"
                rows={4}
                placeholder="Tell us a little about your business, products, or specific needs..."
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200 resize-y"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-end mt-4">
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 text-base tracking-wide"
              >
                Get My Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}