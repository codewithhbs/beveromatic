'use client';

import Image from 'next/image';
import { useEffect } from 'react';

// export const metadata = {
//   title: "Beveromatic Maintenance for Vending Machines",
//   description: "Ensure peak performance of your vending machines with Beveromatic’s tailored maintenance and service solutions.",
// };

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <main className="min-h-screen bg-[#fff] mt-22 md:mt-24">
      {/* Hero Section */}

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 mt-15 md:mt-36">
        <div className='max-[769px]:mt-36'>
          <Image className="w-full h-full rounded-2xl" width={2100} height={700} src={'/bgImage/about-us-hero.webp'} alt="about us hero" />
        </div>
      </div>

      <section className="py-16 md:py-14 bg-[url('/bg/bg-1.webp')] bg-cover bg-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center px-6 sm:px-6 lg:px-10">
          <div className='flex flex-col md:max-w-2xl gap-4 text-black'>
            <h2 className='text-[#000] text-center md:text-start font-bold text-4xl md:text-6xl'>About <span className="text-[#AC4C2D]">Us</span></h2>
            <span className='text-[#f26522] font-bold italic text-center md:text-start'>Premium Vending Machines | High-Quality Beverages | 25+ Years of Expertise</span>
            <p className='text-center md:text-start mb-1'>We at Beveromatic, specialize in providing top-of-the-line vending machines that serve premium tea and coffee blends, ensuring every cup is just the way you like it. Whether you’re looking for an office solution, a café upgrade, or a convenient refreshment option for your business, we’ve got you covered.</p>
            <p className='text-center md:text-start  mb-1'>Our mission right from inception has been to introduce our customers to some of the finest quality products at the best possible prices. At Beveromatic, we follow certain principles that allow us to push ourselves forward and excel in the field of manufacturing.</p>
            <p className='text-center md:text-start  mb-1'>With over 25 Years of experience in the Tea and Coffee Vending industry, we ensure that all our products are made using the best components that are sourced using environment friendly measures. Our Goals have been clear where we intend to focus on improving our existing line of products along with innovation in new product development.</p>
            <p className='text-center md:text-start  mb-1'>Our team brings a rich and extensive experience in delivering large and complex projects in manufacturing. We offer next generation technology and services with high quality standards to optimize investments and resources.</p>
            <p className='text-[17px] text-center md:text-start  mb-1'>As a proudly Make in India brand, we specialize in manufacturing world-class tea and coffee vending machines tailored for Indian tastes and global standards.</p>
            <p className='text-[17px] text-center md:text-start  mb-1'>Our machines are designed, developed, and manufactured entirely in India — supporting local industry, generating employment, and ensuring every unit meets the highest standards of quality and efficiency.</p>
            <p className='text-[17px] text-center md:text-start  mb-1'>Join us in making your tea and coffee breaks better, more efficient, and more enjoyable—one cup at a time.</p>
          </div>
          <div className="">
            <div className="about-img p-4">
              <Image className="w-full h-full rounded-2xl" width={2100} height={700} src={'/bgImage/about-us-coffee.webp'} alt="about us hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-[url('/bg/about-why-bg.webp')] bg-cover bg-center relative">
        <div className="absolute" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-black">
              Why Choose <span className="text-[#AC4C2D]">Beveromatic?</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              India’s Leading Tea & Coffee Vending Machine Brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '/icons/happy-users.png', title: 'Quality & Taste', desc: 'Use the best coffee beans and premixes and our machine will deliver an exceptional beverage every time.' },
              { icon: '/icons/delivery.png', title: 'Reliability', desc: 'Our vending machines are built for long-lasting performance and minimal downtime.' },
              { icon: '/icons/coffee-machine.png', title: 'Convenience', desc: '24/7 access to hot and cold beverages ensures that your team stays energized throughout the day.' },
              { icon: '/icons/beverages.png', title: 'Eco-Friendly', desc: 'We offer energy-efficient machines to reduce power consumption and support sustainability.' },
            ].map((stat, index) => (
              <div key={index} className="group bg-white shadow-lg hover:shadow-xl shadow-[#230801]/30 rounded-2xl p-8 transition-all duration-300 text-center">
                <div className="border border-[#3D1808] border-dashed p-6 rounded-xl inline-block mb-6">
                  <Image src={stat.icon} height={50} width={50} className='ronded-sm' alt='icon' />
                </div>
                <h3 className="text-2xl font-bold text-[#3D1808] mb-2">{stat.title}</h3>
                <p className="text-black">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}