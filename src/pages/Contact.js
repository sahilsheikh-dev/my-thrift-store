export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have questions or want to collaborate with us? We'd love to hear from
        you!
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border rounded-lg p-3"
          rows="5"
        ></textarea>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}
