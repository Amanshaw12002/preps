export default function GetQuoteForm() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl flex justify-between mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10">
        {/* Heading */}
        <div className="text-start w-1/2 mr-8 mb-10">
          <h1 className="text-2xl sm:text-3xl font-sans text-gray-900">
            Get an Instant Quote
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-sm max-w-2xl mx-auto">
            Fill in the details below and we’ll get back to you with a custom
            quote for your business needs.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm  focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Phone No. */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm  focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Service
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 text-sm  focus:ring-2 focus:ring-gray-500 focus:outline-none">
              <option value="">Select service</option>
              <option value="fba">FBA Prep</option>
              <option value="fbm">FBM Fulfillment</option>
              <option value="storage">Storage</option>
              <option value="returns">Returns Handling</option>
            </select>
          </div>

          {/* Units per Month */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Units / Month
            </label>
            <input
              type="number"
              placeholder="e.g. 500"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm  focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
          </div>

          {/* Source Method */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-700 mb-2">
              Source Method
            </label>
            <select className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-gray-500 focus:outline-none">
              <option value="">Select source</option>
              <option value="online-arbitrage">Online Arbitrage</option>
              <option value="wholesale">Wholesale</option>
              <option value="private-label">Private Label</option>
            </select>
          </div>

          {/* About Business */}
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-700 mb-2">
              About Your Business
            </label>
            <textarea
              rows={4}
              placeholder="Tell us a little about your business..."
              className="w-full border border-gray-300 rounded-lg p-2 text-sm  focus:ring-2 focus:ring-gray-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-end mt-6">
            <button
              type="submit"
              className="bg-white border-2 hover:text-white hover:bg-stone-800 cursor-pointer text-stone-800 font-mon py-2 px-4 rounded-lg shadow-md transition duration-300 text-base "
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
