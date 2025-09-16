export default function GetQuoteForm() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-sans text-gray-900">
            Get an Instant Quote
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Fill in the details below and we’ll get back to you with a custom
            quote for your business needs.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Phone No. */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-gray-500 focus:outline-none">
              <option value="">Select service</option>
              <option value="fba">FBA Prep</option>
              <option value="fbm">FBM Fulfillment</option>
              <option value="storage">Storage</option>
              <option value="returns">Returns Handling</option>
            </select>
          </div>

          {/* Units per Month */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Units / Month
            </label>
            <input
              type="number"
              placeholder="e.g. 500"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Source Method */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Source Method
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-gray-500 focus:outline-none">
              <option value="">Select source</option>
              <option value="online-arbitrage">Online Arbitrage</option>
              <option value="wholesale">Wholesale</option>
              <option value="private-label">Private Label</option>
            </select>
          </div>

          {/* About Business */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Your Business
            </label>
            <textarea
              rows={4}
              placeholder="Tell us a little about your business..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:ring-2 focus:ring-gray-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center mt-6">
            <button
              type="submit"
              className="bg-rose-600 hover:bg-rose-700 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 text-base sm:text-lg"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
