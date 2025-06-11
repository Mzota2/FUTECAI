import React from 'react'
import Image from 'next/image';
function Contact() {
  return (
    <div>
      {/* Header */}
      {/* Title and Description */}
      <div className="my-8 text-center animate-fade-in delay-0 px-2">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Contact Us</h2>
        <p className="text-gray-600 text-base md:text-lg">
          {`Get in touch with our team for any questions, support, or partnership inquiries. We're here to help you!`}
        </p>
      </div>

      {/* Address, Phone Number and Map Section */}
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 py-8 animate-fade-in delay-100">
        <div className="flex flex-col md:flex-row gap-4 mt-0 md:mt-8 px-0 sm:px-4">
          {/* Address & Phone */}
          <div className="flex-1 space-y-4 w-full max-w-full md:max-w-[400px] rounded-md p-4 sm:p-8 text-white bg-primary">
            <div>
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <p className="text-white/80">123 Main Street,<br />City, Country</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p className="text-white/80">+1 (234) 567-8901</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-white/80">info@example.com</p>
            </div>
          </div>
          {/* Map */}
          <div className="flex-1 w-full">
            <h2 className="text-xl font-semibold mb-2">Find Us</h2>
            <div className="w-full h-64 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minWidth: "100%", minHeight: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
   
      <div className="max-w-[1200px] w-full mx-auto px-2 sm:px-4 py-8 flex flex-col md:flex-row gap-8 animate-fade-in delay-200">
        {/* Contact Form section */}
        <div className="w-full order-2 md:order-1 md:w-1/2 bg-white p-4 sm:p-8 rounded-md shadow-sm drop-shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4 max-w-full">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded cursor-pointer hover:bg-primary/80 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Q and A section */}
        <div className="w-full order-1 md:order-2 md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-full">
            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-semibold">How can I contact support?</h3>
              <p>You can contact us via the form below or email us at info@example.com.</p>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-semibold">Where are you located?</h3>
              <p>We are located at 123 Main Street, City, Country.</p>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-semibold">What are your business hours?</h3>
              <p>Our business hours are Monday to Friday, 9am - 5pm.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;