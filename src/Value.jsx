function Value() {
  return (
    <div className="value-proposition text-center mt-16 px-4 mb-8">
      <h2 className="text-4xl font-extrabold mb-4 text-emerald-950">
        Transform Your Online Presence with TechShabaka
      </h2>
      <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
        At <span className="text-emerald-950 font-semibold">TechShabaka</span>,
        we specialize in creating modern, user-friendly, and high-performing
        websites that leave a lasting impression. Whether you need a brand-new
        website or want to revamp your existing one, our team is here to help
        you achieve your goals.
      </p>

      <div className="contact-info space-y-4">
        <p className="text-gray-800 text-lg">
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:info@techshabaka.com"
            className="text-emerald-950 hover:underline"
          >
            techshabaka57@gmail.com
          </a>
        </p>
        <p className="text-gray-800 text-lg">
          <span className="font-semibold">Phone:</span>{" "}
          <a
            href="tel:+8801834403302"
            className="text-emerald-950 hover:underline"
          >
            +8801834403302
          </a>
        </p>

        <div className="social-media flex justify-center gap-6 mt-4 mb-6">
          <a
            href="https://twitter.com/techshabaka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-950 text-xl hover:text-emerald-700 transition"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://instagram.com/techshabaka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-950 text-xl hover:text-emerald-700 transition"
          >
            <i className="fab fa-square-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Value;
