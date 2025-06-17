'use client'
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ThumbsUp, Quote, Coffee, Timer, Award, Sparkles, MessageCircle, ArrowRight, Clock, Tag, Volume2, VolumeX, Play, Send, MessageSquare, Mail, User, MapPin, Phone } from 'lucide-react'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from 'axios'
import Services from "@/components/services/Services";
const Slider = dynamic(() => import("react-slick"), { ssr: false });


export default function Home() {
  // const [muted, setMuted] = useState(true)
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    arrows: true, // This will remove the next and previous buttons
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000
  };

  var settingsIcon = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const products = [
    {
      id: 1,
      name: "Beveromatic 2 Lane Hot Beverage Vending Machine",
      image: "bv02p-3.webp",
      description: "Space-saving, quick two-lane dispenser.",
      link: 'beveromatic-2-lane-vending-machine-bv02p'
    },
    {
      id: 2,
      name: "Beveromatic 2 Lane Hot Beverage Vending Machine",
      image: "Bv02dx-3.webp",
      description: "Space-saving, quick two-lane dispenser.",
      link: 'beveromatic-2-lane-vending-machine-bv0dx'
    },
    {
      id: 3,
      name: "Beveromatic 3 Lane Hot Beverage Vending Machine",
      image: "bv03p-3.webp",
      description: "Compact, efficient, three-lane beverage dispenser.",
      link: 'beveromatic-3-lane-vending-machine-bv03p'
    },
    {
      id: 4,
      name: "Beveromatic 3 Lane Hot Beverage Vending Machine",
      image: "Bv03dx-3.webp",
      description: "Compact, efficient, three-lane beverage dispenser",
      link: 'beveromatic-3-lane-vending-machine-bv03dx'
    },
    {
      id: 5,
      name: "Beveromatic 4 Lane Hot Beverage Vending Machine",
      image: "bv04p-3.webp",
      description: "High-capacity, four-lane vending solution.",
      link: 'beveromatic-4-lane-vending-machine-bv04p'
    },
    {
      id: 6,
      name: "Beveromatic 4 Lane Hot Beverage Vending Machine",
      image: "bv04dx-2.webp",
      description: "High-capacity, four-lane vending solution.",
      link: 'beveromatic-4-lane-vending-machine-bv04dx'
    }


  ];

  const handleWhatsAppInquiry = (productName) => {
    if (typeof window !== "undefined") {
      const message = `Hi, I'm interested in the ${productName}. Can you provide more information?`;
      const whatsappUrl = `https://wa.me/+919873903766?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const videos = [
    {
      url: "/video/v1.mp4",
      title: "City Traffic"
    },
    {
      url: "/video/v2.mp4",
      title: "Ocean Waves"
    },
    {
      url: "/video/v3.mp4",
      title: "Forest Stream"
    },
    {
      url: "/video/v4.mp4",
      title: "Space Stars"
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    try {
      const response = await axios.post('/api/homecontact', formData);
      console.log(response);

      setSubmitMessage('Successfully form submitted!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.log(error);
      setSubmitMessage('Something went wrong. Please try again later.');
    }
  }

  return (
    <>

      <main className="mt-22 sm:mt-26 md:mt-28 lg:mt-36 xl:mt-36">
        <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 max-[769px]:mt-36">
          <div style={{ width: "100%", margin: "0 auto" }}>
            <Slider {...settings}>
              <div className="w-full h-[170px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px] mb-[-8px] rounded-2xl overflow-hidden">
                <Image className="w-full h-full" width={2100} height={700} src={'/sliderImage/beveromatic-slider.webp'} alt="Slide 1" />
              </div>
              <div className="w-full h-[170px] sm:h-[280px] md:h-[360px] lg:h-[420px] xl:h-[480px] mb-[-8px] rounded-2xl overflow-hidden">
                <Image className="w-full h-full" width={2100} height={700} src={'/sliderImage/slider-2.webp'} alt="Slide 2" />
              </div>
            </Slider>
          </div>
        </section>

        <section className="w-full py-10 md:py-20 bg-[url('/bg/bg-1.webp')] bg-cover bg-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
            {/* end of Hero Section */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
                About <span className="text-[#AC4C2D]">Beveromatic</span>
              </h1>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="text-black flex items-center gap-2 bg-slate-200 rounded-full px-4 py-1">
                  <Coffee className="text-[#f26522]" size={20} />
                  Premium Vending Machines
                </span>
                <span className="text-black flex items-center gap-2 bg-slate-200 rounded-full px-4 py-1">
                  <Sparkles className="text-[#f26522]" size={20} />
                  High-Quality Beverages
                </span>
                <span className="text-black flex items-center gap-2 bg-slate-200 rounded-full px-4 py-1">
                  <Timer className="text-[#f26522]" size={20} />
                  25+ Years of Expertise
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative">
              <div className="bg-[#fff] backdrop-blur-lg rounded-2xl p-2 md:p-5 border border-white/10">
                {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <Award className="text-[#AC4C2D] w-12 h-12" />
                </div> */}
                <p className="text-black leading-relaxed max-w-5xl mx-auto text-center">
                  We at Beveromatic, specialize in providing top-of-the-line vending machines that serve
                  premium tea and coffee blends, ensuring every cup is just the way you like it. Whether
                  you&apos;re looking for an office solution, a café upgrade, or a convenient refreshment
                  option for your business, we&apos;ve got you covered.
                </p>
              </div>

            </div>
          </div>
        </section>
        <div className="min-h-screen bg-[#fff2eb] bg-[url('/bg/bg1.jpg')] bg-blend-multiply bg-right bg-no-repeat">
          <section className="w-full py-24">
            <div className="max-w-7xl px-6 sm:px-6 lg:px-10 mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Featured <span className="text-[#AC4C2D]">Products</span></h2>
                <p className="text-black max-w-2xl mx-auto">
                  Discover our carefully curated collection of Premium Tea and Coffee Vending Machines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-white shadow-xl backdrop-blur-sm rounded-3xl overflow-hidden hover:border-[#703728] transition-all duration-500"
                  >
                    <div className="flex flex-col lg:flex-row h-full">
                      <div className="relative w-full bg-[#edcdbb] lg:w-2/5 md:h-64 min-[569px]:h-80 lg:h-auto overflow-hidden">
                        <Image
                          src={`/productImage/${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          width={600} height={450}
                        />
                        {/* <div className="absolute top-4 left-4 bg-[#f26522] text-white text-sm px-3 py-1 rounded-full">
                          Machine
                        </div> */}
                      </div>

                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-bold text-[#170A04] transition-colors">
                              {product.name}
                            </h3>

                          </div>

                          <p className="text-black mb-6">{product.description}</p>

                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => handleWhatsAppInquiry(product.name)}
                            className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#170A04] to-[#251108] text-white py-3 px-2 rounded-xl hover:from-[#170A04] hover:to-[#251108] transition-all duration-300 shadow-lg shadow-[#ac4d2d41]"
                          >
                            <MessageCircle size={20} className="mr-1" />
                            <span className=" text-sm whitespace-nowrap">Inquire Now</span>
                          </button>
                          <Link href={`/${product.link}`} className="flex-1 flex items-center justify-center bg-[#f26522] text-white py-3 px-6 rounded-xl hover:bg-[#251108] transition-all duration-300">
                            <span className=" text-sm whitespace-nowrap">View Details</span>
                            <ArrowRight size={18} className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* why choose us section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-5 flex flex-col items-center">
            <h2 className=" text-center text-3xl md:text-5xl font-bold text-black mb-4">Why Choose <span className="text-[#AC4C2D]">Beveromatic?</span></h2>
            <div className="flex flex-wrap justify-center w-full">

              <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white border border-gray-300 min-h-[310px] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-101 hover:shadow-2xl p-6">
                  <Image
                    src="/icons/quality.png"
                    alt="happyCustomers"
                    width={80}
                    height={80}
                    priority
                  />
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-[#f26522] mb-2">Quality & Taste</h3>
                    <p className="text-black mb-4 text-center">Use the best coffee beans and premixes and our machine will deliver an exceptional beverage every time.</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white border border-gray-300 min-h-[310px] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                  <Image
                    src="/icons/reliability.png"
                    alt="happyCustomers"
                    width={80}
                    height={80}
                    priority
                  />
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-[#f26522] mb-2">Reliability</h3>
                    <p className="text-black mb-4 text-center">Our vending machines are built for long-lasting performance and minimal downtime.</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white border border-gray-300 min-h-[310px] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                  <Image
                    src="/icons/convenient.png"
                    alt="happyCustomers"
                    width={80}
                    height={80}
                    priority
                  />
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-[#f26522] mb-2">Convenience</h3>
                    <p className="text-black mb-4 text-center">24/7 access to hot and cold beverages ensures that your team stays energized throughout the day.</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <div className="bg-white border border-gray-300 min-h-[310px] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                  <Image
                    src="/icons/eco-friendly.png"
                    alt="happyCustomers"
                    width={80}
                    height={80}
                    priority
                  />
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-[#f26522] mb-2">Eco-Friendly</h3>
                    <p className="text-black mb-4 text-center">We offer energy-efficient machines to reduce power consumption and support sustainability.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* end of why choose section */}

        {/* services section */}
        {/* <Services /> */}
        {/* end of services section */}

        <section className="w-full py-20 bg-[#fff2eb] bg-[url('/bg/coffee-background-top-1.jpg')] bg-blend-multiply bg-center bg-cover">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">What Our <span className="text-[#AC4C2D]">Customers Say</span></h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start mb-6">
                  <Quote className="w-12 h-12 text-[#251913] opacity-20" />
                </div>
                <p className="text-black mb-6">
                  &quot;Beveromatic&apos;s coffee vending machines have transformed our office culture. The quality of coffee is exceptional, and the machine&apos;s reliability is outstanding. Our employees love coffee. &quot;
                </p>
                <div className="flex items-center text-center lg:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#3D1808]">Sunil Sahni</h4>
                    <p className="text-sm text-black">Office Manager</p>
                  </div>
                  <Coffee className="w-12 h-12 text-[#f26522] opacity-50" />
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start mb-6">
                  <Quote className="w-12 h-12 text-gray-900 opacity-20" />
                </div>
                <p className="text-black mb-6">
                  &quot;Installing Beveromatic machines in our hotel lobby was one of the best decisions we made. The modern design fits perfectly with our aesthetic, and guests frequently compliment the coffee quality.&quot;
                </p>

                <div className="flex items-center text-center lg:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#3D1808]">Rajat Singh</h4>
                    <p className="text-sm text-black">Hotel Operations Director</p>
                  </div>
                  <ThumbsUp className="w-12 h-12 text-[#f26522] opacity-50" />
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start mb-6">
                  <Quote className="w-12 h-12 text-slate-900 opacity-20" />
                </div>
                <p className="text-black mb-6">
                  &quot;The maintenance support from Beveromatic is exceptional. Their machines are not only stylish but also incredibly reliable. We&apos;ve seen a 40% increase in beverage sales since switching to Beveromatic.&quot;
                </p>
                <div className="flex items-center text-center lg:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#3D1808]">Arun Kohli</h4>
                    <p className="text-sm text-black">Retail Store Manager</p>
                  </div>
                  <Coffee className="w-12 h-12 text-[#f26522] opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Get in <span className="text-[#AC4C2D]">Touch</span></h2>
                  <p className="text-[#150702] text-lg">Have a question or want to work together? Drop us a message!</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4 ">
                    <div className="bg-[#f26522] p-4 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#150702] font-semibold">Email</h3>
                      <p className="text-[#000]">sales@beveromatic.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#f26522] p-4 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#150702] font-semibold">Phone</h3>
                      <p className="text-[#000]">+91-9873903766 </p>
                      <p className="text-[#000]">+91-9899686468</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-[#f26522] p-4 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-[#150702] font-semibold">Location</h3>
                      <p className="text-[#000]">New Delhi, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[#3b1b10] p-10 rounded-lg ">
                {submitMessage && (
                  <div className="mb-4 text-sm font-lg text-green-600">
                    {submitMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-[#f26522]" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-3 bg-white text-[#150702] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#150702] transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-[#f26522]" />
                    </div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full pl-12 pr-4 py-3 bg-white text-[#150702] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#150702] transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                      <MessageSquare className="w-5 h-5 text-[#f26522]" />
                    </div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full pl-12 pr-4 py-3 bg-white text-[#150702] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#150702] transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f26522] text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 cursor-pointer hover:from-[#f26522 hover:to-[#f26522] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:ring-offset-2 focus:ring-offset-[#f26522]"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
