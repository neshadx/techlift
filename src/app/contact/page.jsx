export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
      <p className="text-gray-700 text-lg mb-6">
        Have a question, suggestion, or partnership idea? We’d love to hear from you!
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
