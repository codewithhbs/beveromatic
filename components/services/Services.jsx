'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function services() {
  return (
    <>
      <section className="w-full py-20 bg-[#fff2eb]">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-5 flex flex-col items-center">
          <h2 className=" text-center text-3xl md:text-5xl font-bold text-black mb-4">Vending Machine <span className="text-[#AC4C2D]">Services</span></h2>
          <div className="flex flex-wrap justify-center w-full">

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white border border-gray-300 min-h-[310px] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-101 hover:shadow-2xl p-6">
                <Image
                  src="/icons/autometic-vending-machin.png"
                  alt="autometic"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-[#f26522] mb-2 text-center">Automatic Vending Machine</h3>
                  <p className="text-black mb-4 text-center">Beveromatic is changing the game for on-the-go refreshment with its Smart...</p>
                  <Link href="/automatic-vending-machine" className="text-[#f26522] text-sm font-semibold hover:underline">Read More</Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white border border-gray-300 min-h-[310px] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                <Image
                  src="/icons/coffee-machin.png"
                  alt="coffee"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-[#f26522] mb-2 text-center">Coffee Vending Machine</h3>
                  <p className="text-black mb-4 text-center">Our vending machines are built for long-lasting performance and minimal downtime.</p>
                  <Link href="/coffee-vending-machine" className="text-[#f26522] text-sm font-semibold hover:underline">Read More</Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white border border-gray-300 min-h-[310px] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                <Image
                  src="/icons/tea-machine.png"
                  alt="tea"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-[#f26522] mb-2 text-center">Tea Vending Machine</h3>
                  <p className="text-black mb-4 text-center">24/7 access to hot and cold beverages ensures that your team stays energized throughout the day.</p>
                  <Link href="/tea-vending-machine" className="text-[#f26522] text-sm font-semibold hover:underline">Read More</Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white border border-gray-300 min-h-[310px] rounded-2xl gap-3 flex flex-col items-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6">
                <Image
                  src="/icons/snack-vending-machin.png"
                  alt="snack"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-[#f26522] mb-2 text-center">Snack Vending Machine</h3>
                  <p className="text-black mb-4 text-center">We offer energy-efficient machines to reduce power consumption and support sustainability.</p>
                  <Link href="/snack-vending-machine" className="text-[#f26522] text-sm font-semibold hover:underline">Read More</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default services