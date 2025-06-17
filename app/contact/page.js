'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Building2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import axios from 'axios'

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(formData.phone)) {
      setSubmitMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const response = await axios.post('/api/contact', formData);
      console.log(response);

      setSubmitMessage('Successfully form submitted!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.log(error);
      setSubmitMessage('Something went wrong. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 mt-24 md:mt-36">
        <div className='max-[769px]:mt-36'>
          <Image height={700} width={1400} className="w-full h-full rounded-2xl" src={'/sliderImage/contact-us-hero.webp'} alt="about us hero" />
        </div>
      </div>


      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 mt-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#fff2eb] rounded-xl hover:shadow-xl transition-shadow p-6">
            <Phone className="text-[#3D1808] w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-black">+91-9873903766</p>
            <p className="text-black">+91-9899686468</p>
          </div>

          <div className="bg-[#fff2eb] rounded-xl hover:shadow-xl transition-shadow p-6">
            <Mail className="text-[#3D1808] w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-black">Sales@beveromatic.com</p>
            {/* <p className="text-black">support@company.com</p> */}
          </div>

          <div className="bg-[#fff2eb] rounded-xl hover:shadow-xl transition-shadow p-6">
            <MapPin className="text-[#3D1808] w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            {/* <p className="text-black">3rd Floor, T-1-2-3, Sarda Chamber I Lsc-9, D Block, Prashant Vihar, New Delhi-110085, Delhi, India</p> */}
            <p className="text-black">New Delhi, India </p>
          </div>

          <div className="bg-[#fff2eb] rounded-xl hover:shadow-xl transition-shadow p-6">
            <Clock className="text-[#3D1808] w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Hours</h3>
            <p className="text-black">Mon - Sat: 9AM - 6PM</p>
            <p className="text-black">Sun: Closed</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 py-10 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Let&apos;s Discuss Your Project</h2>
              <p className="text-black">
                Share your vision with us, and we&apos;ll help bring it to life. Our team is ready to collaborate and create something extraordinary together.
              </p>
            </div>

            <div className="bg-[#fff2eb] text-black rounded-xl p-6">
              <Building2 className="w-8 h-8 mb-4 text-[#f26522]" />
              <h3 className="font-bold text-xl mb-3 text-[#3D1808]">Be Our Guest !</h3>
              <p className="mb-4 text-[#000]">
                Come by for a coffee and let&apos;s discuss your project in person. We&apos;d love to show you around our creative space.
              </p>
              {/* <button className="inline-flex items-center gap-2 bg-[#3D1808] text-[#fff] px-4 py-2 rounded-lg hover:bg-[#f26522] transition-colors">
                Get directions <ArrowRight className="w-4 h-4" />
              </button> */}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
          {submitMessage && (
              <div className="mb-4 text-sm font-lg text-green-600">
                {submitMessage}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f26522] focus:border-[#f26522] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f26522] focus:border-[#f26522] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f26522] focus:border-[#f26522] outline-none transition-colors"
                  />
                  {/* <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    pattern="[0-9]{10}"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f26522] focus:border-[#f26522] outline-none transition-colors"
                  /> */}
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f26522] focus:border-[#f26522] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f26522] focus:border-[#f26522] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3D1808] text-white font-semibold py-3 rounded-lg hover:bg-[#f26522] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page