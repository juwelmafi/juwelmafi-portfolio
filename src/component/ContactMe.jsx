import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Swal from "sweetalert2";
const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thanks for reaching out. I’ll get back to you soon.",
            icon: "success",
            confirmButtonColor: "#facc15",
            confirmButtonText: "OK",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#f87171',
          confirmButtonText: 'Try Again'
        });
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-12 px-6 bg-[#323647] text-white font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Info Section */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400">
            Let's Connect
          </h2>
          <p className="mb-6 text-gray-300 text-sm md:text-base">
            I’d love to hear from you! Whether you have a question or just want
            to say hi, feel free to drop a message.
          </p>

          <div className="space-y-4 text-sm md:text-base text-gray-300">
            <p className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Madaripur, Bangladesh</span>
            </p>
            <p className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.15a1 1 0 01.99.83l.74 4.43a1 1 0 01-.54 1.06L4.79 9.1a11.03 11.03 0 006.1 6.1l.77-1.55a1 1 0 011.06-.54l4.43.74a1 1 0 01.83.99V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+880 01859797307 (WhatsApp only)</span>
            </p>
            <p className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>juwelhossain16457@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block mb-1 text-sm">Full Name</label>
            <input
            required
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
            required
              name="email"
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Message</label>
            <textarea
            required
              name="message"
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:border-yellow-400 transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 text-[#0f172a] font-semibold px-3 md:px-6 py-1.5 text-sm md:text-base md:py-3 rounded-md w-fit shadow-md hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
