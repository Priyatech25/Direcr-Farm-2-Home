function Contact() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-4">
          We'd love to hear from you.
        </p>

        <form className="bg-white shadow-xl rounded-3xl p-10 mt-12">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-xl mb-5"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-4 rounded-xl mb-5"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-4 rounded-xl mb-5"
          ></textarea>

          <button
            className="w-full bg-green-700 text-white py-4 rounded-xl hover:bg-green-800"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;