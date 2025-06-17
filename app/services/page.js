'use client';

import { Coffee, Settings, PenTool as Tool, Shield, Cloud, Clock, Cpu, Leaf, Building2, UtensilsCrossed, Hotel, Factory, Coffee as CoffeeShop, Users, ChefHat, Wrench, CheckCircle2, Zap, HeartHandshake, Cog, Hammer, ShieldCheck, CircuitBoard, TestTube, Award, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [])
  return (
    <main className="min-h-screen mt-15 md:mt-26 ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 mt-24 md:mt-36">
        <div className='max-[769px]:mt-36'>
          <Image height={700} width={1400} className="w-full h-full rounded-2xl" src={'/sliderImage/services-hero.webp'} alt="services hero" />
        </div>
      </div>

      <section className=" py-6! md:py-10! pb-0! bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
          <h2 className='text-[20px] text-center text-[#000]'>At Beveromatic, we provide high-quality, hassle-free tea and coffee vending machine solutions designed to keep your office, workplace, or commercial space fueled throughout the day. Whether you need a single machine or a comprehensive vending service for your entire organization, we’ve got you covered with reliable, easy-to-use, and customizable vending options.</h2>
        </div>
      </section>

      {/* Comprehensive Approach Section */}
      <section className="py-16 md:py-10 pt-0 bg-[url('/bg/bg-1.webp')] bg-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">

          <div className="mb-16 mt-10 md:mt-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3d1808] mb-10 text-center"> From Concept to Completion</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/Product-Design-Blueprint.png" alt='tow-beverage' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Product Design Blueprint</span>
                <p> A detailed blueprint outlining the vending machine’s specifications and features.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/Mock-Up-rendering.png" alt='lightweight' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Mock-Up rendering</span>
                <p>A realistic rendering of the final product for visualization and client approval.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/quality-control.png" alt='maintenance' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Quality Control</span>
                <p>Conducting thorough failure mode and effects analysis to identify and mitigate potential risks.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/sheet-metal-fabrication.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Sheet Metal Fabrication</span>
                <p>Precision engineering for efficient sheet metal fabrication.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/Mold-Design .png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Mold Design and Development</span>
                <p>Molding Expertise and creating custom molds for producing high-quality vending machine components.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/Product-Electrical-Safety.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Product Electrical Safety</span>
                <p> Ensuring the vending machine meets all safety and food-grade standards.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/electronics-and-hardware.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Electronics and Hardware Development</span>
                <p>Integrating advanced electronics and hardware for optimal performance.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/Software-and-IoT-Solutions.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Software and IoT Solutions</span>
                <p>Connecting the vending machine to a cloud-based system for remote monitoring and management.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/Lifecycle-Tests-Durability.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Lifecycle Tests Durability and Reliability</span>
                <p>Rigorous testing to ensure the vending machine’s longevity and performance.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/Reliability-Tests.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Reliability Tests</span>
                <p>Conducting stability and performance tests to guarantee optimal functionality.</p>
              </div>
              <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                <Image width={70} height={70} src="/icons/rapid-prototyping.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                <span className="text-[#3d1808] font-bold">Rapid Prototyping</span>
                <p>Development</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vending Solutions Section */}
      <section className="relative overflow-hidden px-5">
        <div className="absolute inset-0"/>
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 py-16 border border-gray-300 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Vending Solutions for our Clients</h2>
          <div className='w-full grid grid-cols-1 gap-4'>
            <div className='grid grid-cols-1 gap-2'>
              <h2 className="text-xl text-center font-bold mb-2 text-[#f26522]">Tea & Coffee Vending Machine Solution</h2>
              <p className='mb-8 text-center px-12'>We offer a variety of vending machines that serve premium coffee and tea options, ensuring your employees, clients, and guests enjoy the perfect cup every time. Choose from a range of models that fit your space and needs.</p>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="space-y-6">
                    {[
                      { icon: Coffee, text: 'Perfect cup every time' },
                      { icon: Users, text: 'User-friendly interface' },
                      { icon: CheckCircle2, text: 'Customizable options' },
                      { icon: Leaf, text: 'Energy-efficient' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 bg-[#fff2eb] p-4 rounded-xl">
                        <div className="bg-[#3D1808] p-3 rounded-lg">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-black">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl -rotate-6 opacity-20" />
                  <Image
                    src="/productImage/bv04dx-2.webp"
                    alt="Modern coffee machine"
                    className="relative rounded-3xl bg-[#fff2eb]"
                    width={500} height={100}
                  />
                </div>
              </div>

              <div className='grid lg:grid-cols-3 gap-8 mt-10'>
                <div className='bg-[#fff2eb] rounded-xl p-6'>
                  <h2 className="text-xl font-bold mb-2 text-[#3D1808]">Installation & Setup</h2>
                  <p className='mb-8'>Our team ensures that your vending machine is installed and ready to use with minimal disruption to your workspace. We’ll handle all aspects of the setup, from machine placement to testing, ensuring it’s fully functional from day one.</p>
                </div>
                <div className='bg-[#fff2eb] rounded-xl p-6'>
                  <h2 className="text-xl font-bold mb-2 text-[#3D1808]">What we offer</h2>
                  <ul className='pl-8'>
                    <li className='mb-1 list-disc'>Expert installation by trained professionals</li>
                    <li className='mb-1 list-disc'>Custom placement recommendations based on your space</li>
                    <li className='mb-1 list-disc'>On-site support and consultation</li>
                  </ul>
                </div>
                <div className='bg-[#fff2eb] rounded-xl p-6'>
                  <h2 className="text-xl font-bold mb-1 text-[#3D1808]">Maintenance & Support</h2>
                  <p className='mb-2'>We provide ongoing maintenance services to ensure your vending machines are always running smoothly. Our team is available for regular check-ups and troubleshooting.</p>
                  <ul className='pl-8'>
                    <li className='mb-1 list-disc'>Rapid response for any technical issues</li>
                    <li className='mb-1 list-disc'>Spare parts and replacement services</li>
                  </ul>
                </div>
              </div>
              <div className='grid grid-cols-1 gap-2 mt-8 bg-[#fff2eb] p-6 rounded-xl'>
                <h2 className="text-xl font-bold mb-2 text-[#3D1808]">Customizable Vending Options</h2>
                <p className='mb-8'>Our machines can be customized to serve a range of beverages, including hot coffee, cappuccinos, lattes, espresso, chai, green tea, and more. You can even add flavors, such as vanilla, caramel, or chocolate, for a personalized touch.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 sm:px-4 lg:px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-12 text-[#3D1808]">
                Installation & Support
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Users, title: 'Expert Installation', desc: 'Professional setup with minimal disruption' },
                  { icon: Wrench, title: 'Regular Maintenance', desc: 'Scheduled check-ups and preventive care' },
                  { icon: Zap, title: 'Rapid Response', desc: '24/7 technical support and quick fixes' },
                ].map((item, index) => (
                  <div key={index} className="group flex items-start gap-6 p-6 bg-[#fff2eb] rounded-xl transition-all duration-300">
                    <div className="bg-[#3D1808] p-4 rounded-xl">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#3D1808]">{item.title}</h3>
                      <p className="text-black">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl rotate-6" />
              <div className="relative bg-[#fff] border border-gray-300 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-[#3D1808]">Business Solutions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Building2, title: 'Office' },
                    { icon: CoffeeShop, title: 'Café' },
                    { icon: Hotel, title: 'Hotels' },
                    { icon: Factory, title: 'Industry' },
                    { icon: CoffeeShop, title: 'Coffee & Bakery' },
                    { icon: Hotel, title: 'Restaurant' },
                  ].map((item, index) => (
                    <div key={index} className="group p-4 bg-[#7A4433] rounded-xl transition-all duration-300 text-center ">
                      <item.icon className="w-8 h-8 text-[#f26522] mb-3 transition-colors mx-auto" />
                      <p className="text-white">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose us */}
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