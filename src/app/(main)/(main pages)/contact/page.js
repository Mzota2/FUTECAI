import React from 'react'
import { PrismaClient } from '@/generated/prisma';
import Button from '@/components/Button/Button';
import Link from 'next/link';
const prisma = new PrismaClient();

export const metadata = {
  title: "Contact Us",
  description: 'Get in touch with our team for any questions, support, or partnership inquiries. We\'re here to help you!',
};
function Contact() {
  const handleSubmitMessage = async(formData)=>{
    'use server';
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    try {
      const newMessage = await prisma.message.create({
        data: {
          name,
          email,
          message
        }
      });
      console.log(newMessage);
      
    } catch (error) {
      console.log(error);
    }
  }
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
              <p className="text-white/80">Chichiri,<br />Blantyre, Malawi</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p className="text-white/80">+265 990 86 21 44</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-white/80">info@futecai.com</p>
            </div>
          </div>
          {/* Map */}
          <div className="flex-1 w-full">
            <h2 className="text-xl font-semibold mb-2">Find Us</h2>
            <div className="w-full h-64 rounded overflow-hidden">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.687039037344!2d35.014887643434044!3d-15.79489480989891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d8459a8a02d1e3%3A0xfba7e71cc0820904!2sChichiri%2C%20Blantyre!5e0!3m2!1sen!2smw!4v1750312914985!5m2!1sen!2smw" 
              width="100%"
              height="100%"
              style={{ border: 0, minWidth: "100%", minHeight: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
   
      <div className="max-w-[1200px] w-full mx-auto px-2 sm:px-4 py-8 flex flex-col md:flex-row gap-8 animate-fade-in delay-200">
        {/* Contact Form section */}
        <div className="w-full order-2 md:order-1 md:w-1/2 bg-white p-4 sm:p-8 rounded-md shadow-sm drop-shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          
          <form action={handleSubmitMessage} className="space-y-4 max-w-full">
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
            <Button title={'Send Message'}/>
          </form>
        </div>

        {/* Q and A section */}
        <div className="w-full order-1 md:order-2 md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-full">
            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-semibold">How can I contact support?</h3>
              <p>You can contact us via the form below or email us at info@futecai.com.</p>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-semibold">Where are you located?</h3>
              <p>We are located at Chichiri, Blantyre, Malawi.</p>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <h3 className="font-semibold">What are your business hours?</h3>
              <p>Our business hours are Monday to Friday, 9am - 5pm.</p>
            </div>
          </div>
          <Link href={'/faq'} className='px-6 py-2 rounded-md hover:text-primary text-secondary cursor-pointer mt-10'>Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default Contact;