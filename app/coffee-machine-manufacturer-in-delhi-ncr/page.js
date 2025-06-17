
import { coffeemachinemanufacturerindelhincr } from '@/lib/metafile';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: coffeemachinemanufacturerindelhincr.title,
    description: coffeemachinemanufacturerindelhincr.description,
}
function Page() {
    return (
        <main className="min-h-screen mt-15 md:mt-26 ">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 mt-24 md:mt-36">
                <div className='max-[769px]:mt-36'>
                    <Image height={700} width={1400} className="w-full h-full rounded-2xl" src={'/sliderImage/services-hero.webp'} alt="services hero" />
                </div>
            </div>

            <section className=" py-6! md:py-6! pb-0! bg-white mt-10">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
                    <p className='mb-2 text-justify text-[#000]'>{`Beveromatic is one of the most popular Coffee Machine Manufacturer in Delhi NCR, providing automatic tea and coffee vending systems of high quality to every business unit across India. We are known for newness and reliability, and have a range of vending machines that can give drinks of the highest quality, keeping their consistency intact. Our Vending Machines are great for offices, cafeterias, hotels, and big commercial spaces, ranging from espresso to masala tea. `} </p>
                    <p className='mb-2 text-justify text-[#000]'>Quality, productivity, and customer satisfaction are what prove to be the best at Beveromatic, so it sets limits on the best parameters for each product. This also applies to customer support, which offers everything from product selection to installation and maintenance for a seamless process. We proudly boast of being preferred by hundreds of our clients as a Coffee Machine Manufacturer in Delhi NCR for businesses looking for tough, energy-efficient, and economical coffee solutions in Delhi NCR and beyond.
                    </p>
                </div>
            </section>

            {/* Vending Solutions Section */}
            <section className="relative overflow-hidden px-5 bg-[url('/bg/bg-1.webp')] bg-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 py-16 border border-gray-300 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Wide Range of Products on Offer by Beveromatic
                    </h2>
                    <div className='w-full grid grid-cols-1 gap-4'>
                        <div className='grid grid-cols-1 gap-2'>
                            <p className='mb-2 text-justify px-8'>At Beveromatic, a Coffee Machine Manufacturer in Delhi NCR, we go beyond dispensing machine products. Our wide-ranging and versatile vending machine line addresses the specific needs of businesses for providing in-house refreshments. It doesn&apos;t matter whether you are running a small office or a large corporation, or even if you are in the hospitality business: Our products take care of every ambience. So, here is a better look at what we have in our range of products:</p>

                            <p className='mb-2 text-justify px-8'>Here we have listed several important customization options:
                            </p>

                            <p className='mb-2 text-justify px-8'><strong>Beverage Variety: </strong> This allows customization of the drink menu to include anything from conventional coffee and tea to chilled drinks or even specialty beverages like lattes and frappes- something for everyone. </p>

                            <p className='mb-2 text-justify px-8'><strong>Branding & Design:  </strong> Furnish the machine with logos, colors, and branding of the company to enhance a seamless brand experience within the office premises or commercial space.
                            </p>
                            <p className='mb-2 text-justify px-8'><strong>Strength & Flavor of Drinks:  </strong> Alteration in strength so that every drink not only satisfies the taste preferences of your employees or customers but can also be brewed according to the exact flavor desired.
                            </p>
                            <p className='mb-2 text-justify px-8'><strong>Configurations of Machine:  </strong> Select sizes and configurations for the machine, either small and compact or high capacity, so that the choice suits both space and heavy beverage demand accordingly.
                            </p>
                            <p className='mb-2 text-justify px-8'><strong>Payment & User Interface:  </strong> Include cashless payments and customize the user interface for ease of use to enable quick, convenient transactions and a seamless experience for all users.
                            </p>

                            <p className='mb-2 text-justify px-8'>We are the Coffee Machine Manufacturer in Delhi NCR specially tailor option for your requirements by providing plenty customization options in a manner that brings to your employees-customers or guests-best beverage experience. From aesthetics to functions and beverage preferences, we closely work with you to reach the best vending solution whether it is in operation or aesthetics.</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Get the Best in Your Pocket </h2>
                            <p className='mb-2 text-justify px-8'>At Beveromatic, a Coffee Machine Manufacturer in Delhi NCR, we believe in high quality with the mindset that it is not expensive. Our high-end and mind-boggling automatic tea and coffee vending machines work well for all kinds of businesses, from small to large-scale ones. If you want a small but really good vending machine for your office or a high-capacity machine for a huge commercial space, we will surely have something that meets your needs and budget. Enjoy effective energy energy-efficient, reliable machines with high, consistent quality within your budget limits with Beveromatic.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Complete Needs Covered </h2>

                            <p className='mb-2 text-justify px-8'>Beveromatic offers full beverage solutions. Choosing the right vending machine, continuous service, and maintenance. We are the best Coffee Machine Manufacturer in Delhi NCR, providing pretty much everything around your needs; products to satisfy different tastes, whether it is types of beverages, machines, capacity, or customization features. We ensure that your machine is easy to use, energy-efficient, and built to last. With our full bouquet of services from installation, training, and troubleshooting, we will give you the ideal all-around experience as a partner for all your tea and coffee vending needs. </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Contact Us Today for the best Coffee Machine Manufacturer in Delhi NCR</h2>

                            <p className='mb-2 text-justify px-8'>At Beveromatic, we are ready to help you with all your automatic coffee vending needs. Learn about our product range, get help picking the right machine, or access post-installation support today through email, phone, or website interaction for prompt attention. Timely delivery and installations across India are guaranteed. The best beverage solutions tailored to your needs are waiting for you at the best Coffee Machine Manufacturer in Delhi NCR. Don&apos;t wait a moment—call for that mouthwatering cup every time!
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* why choose us */}
            {/* Experience Section */}
            <section className="py-16 mt-16 md:py-24 bg-[url('/bg/about-why-bg.webp')] bg-cover bg-center relative">
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
    )
}

export default Page