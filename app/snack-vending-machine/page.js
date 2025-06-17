
import { snackvendingmachine } from '@/lib/metafile';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: snackvendingmachine.title,
    description: snackvendingmachine.description,
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
                    <p className='text-justify text-[#000]'>Beveromatic, a leading name in vending solutions, introduces its most innovative and reliable snack vending machines. Bringing the modern convenience into the traditional vending, the Beveromatic snack vending machine is now a perfect blend of sleek design and cutting-edge productivity to provide the ultimate snacking experience. Intuitive digital interface with cashless payment options and low-maintenance, durable build. Temperature-controlled storage compartments ensure snacks are kept fresh and simplify restocking with easy management, and put in place an intelligent inventory system. In addition to quality, customer satisfaction, and efficiency in operations, Beveromatic is now pioneering in automated snack dispensing. </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 mt-5 text-[#3d1808]">Snack Vending Machine: Smart, Simple, and Efficient</h2>
                    <p className='text-justify text-[#000]'>A snack vending machine is a self-operating unit that dispenses packaged snacks after selection and payment by customers. It has no human intervention and gives a variety of things quick and easy access to the customers. </p>
                </div>
            </section>
            {/* Comprehensive Approach Section */}
            <section className="py-16 md:py-10 pt-0 bg-[url('/bg/bg-1.webp')] bg-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
                    <div className="mb-16 mt-10 md:mt-1 ">
                       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#3d1808]">Where can it be used? </h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>1</h3>
                                {/* <Image width={70} height={70} src="/icons/Product-Design-Blueprint.png" alt='tow-beverage' className="mx-auto mb-3 w-[70px] h-[70px]" /> */}
                                <span className="text-[#3d1808] font-bold">Offices and corporate buildings </span>
                            </div>

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>2</h3>
                                <span className="text-[#3d1808] font-bold">Hospitals and healthcare facilities </span>
                            </div>

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>3</h3>
                                <span className="text-[#3d1808] font-bold">Schools, colleges, and universities </span>
                            </div>

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>4</h3>
                                <span className="text-[#3d1808] font-bold">Airports, metro stations, and railway stations </span>
                            </div>

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>5</h3>
                                <span className="text-[#3d1808] font-bold">Shopping malls and retail outlets </span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Vending Solutions Section */}
            <section className="relative overflow-hidden px-5">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 py-16 border border-gray-300 rounded-xl">
                    <div className='w-full grid grid-cols-1 gap-4'>
                        <div className='grid grid-cols-1 gap-2'>
                   
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Why are Snack Vending Machines Fitting Current Needs?</h2>
 
                            <p className='mb-2 text-justify px-8'><strong>Accessible anytime and very easy:</strong> Instant access to snacks at any time of the day or night is highly convenient for people. These work exclusively at all times without waiting for the turn in queues or a canteen or cafeteria, be it in a busy office, hospital, or public areas. </p>
                            <p className='mb-2 text-justify px-8'><strong>Contactless and Modern Payment Facilities :</strong> {`Equipped with digital payment systems, these machines accept UPI, cards, and mobile wallets, which makes the buying process faster and conducts the transactions in a very hygienic, touch-free experience - perfect for today's fast-moving, health-conscious world.`}</p>
                            <p className='mb-2 text-justify px-8'><strong>Compact and Space-saving Design</strong> Snack <Link href='/' className='pointer text-[#f26522]'> vending machines</Link> are designed to slot into your narrow, yet sea-ridden spaces like office corridors, waiting areas, malls, and schools. It can, at the same time, pack in an incredibly diverse range of goodies considering how small the machines are.</p>
                            <p className='mb-2 text-justify px-8'><strong>Low Cost and Low Maintenance</strong> Once put in place, the machine operates independently, saving the need for staffing or a full kitchen/facility. In addition, it consumes very little energy and is made to withstand, reducing overall maintenance and operation costs for the long term.</p>
                            <p className='mb-2 text-justify px-8'><strong>Smart and Customizable Stocking:</strong>{`Advanced machines have real-time tracking of stock for easier and more efficient restocking. You can even stock the heavy-little snacks according to the customer's preference for the kind of place, such as a hospital worker requiring healthier options or a school for kid-friendly treats.`} </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">The Snack Vending Machine Company</h2>
                            <p className='mb-2 text-justify px-8'>The snack vending machines at Beveromatic are designed to serve an entire range of shoppers in many settings, whether in offices, schools, hospitals, or public spaces. These machines are built for high-traffic areas, offering consistent, reliable service, 24/7 availability. </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Essential Features</h2>
                            <p className='mb-2 text-justify px-8'><strong>Wide Selection of Snacks</strong> Our vending machines have a wide variety of snacks available in both indulgent and healthier choices. Whether you are in the mood for something sweet or light, vending machines have something for everyone, no matter their tastes.</p>
                            <p className='mb-2 text-justify px-8'><strong>Simple User Interface</strong> Keeping simplicity in mind, a user-friendly interface is designed for the vending machines to let the user navigate easily in choosing the desired snack. The design is straightforward for those who want to have a fast, hassle-free experience participating in it.</p>
                            <p className='mb-2 text-justify px-8'><strong>Contactless cashless payment</strong>Certain cashless payments include UPI and debit/credit cards, or mobile wallets. All these enable a quick transaction without cash in hand and become a lot more hygienic every time.</p>
                            <p className='mb-2 text-justify px-8'><strong>Open 24/7</strong>These Automatic Coffee Machine and snack vending machines are open for business all hours of the day. They dispense anytime one needs to acquire snacks. From dawn to dusk, these can boast as one of the best environments you can get because they can serve busy workplaces, hospitals, schools, or even in public venues.</p>

                            <p className='mb-2 text-justify px-8'><strong>Open 24/7</strong>These Automatic Coffee Machine and snack vending machines are open for business all hours of the day. They dispense anytime one needs to acquire snacks. From dawn to dusk, these can boast as one of the best environments you can get because they can serve busy workplaces, hospitals, schools, or even in public venues.</p>

                            <p className='mb-2 text-justify px-8'><strong>Extremely Compact Occupies Little Space</strong> Although compact and fitted to tight or busy areas, our snack vending machines deliver maximum function at minimum floor space consumption. Flexibly positioned, they are well able to service any smaller available spaces that require efficient snack dispensing. </p>

                            <p className='mb-2 text-justify px-8'>We at Beveromatic understand and trust that a one-stop solution to very modern snack vending machines fits into the common needs of all end customers in the busy world, where maximum convenience as well as efficiency go every time with every snack purchase. </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Why Choose Beveromatic?</h2>

                            <p className='mb-2 text-justify px-8'>Beveromatic is a big name known for offering quality, innovative vending solutions within the industry. Having carved a niche within the market for many years, we have gained hundreds of loyal customers because of efficient, reliable vending machines that are tailored to various applications. We believe in convenience and accessibility and, hence, strive to ensure that our machines fit within the slightest demand from both users in offices, homes, schools, hospitals, and public spaces.</p>

                            <p className='mb-2 text-justify px-8'> {`We strive to provide vending and product vending solutions that are cost-effective and customer-friendly, with an unwavering commitment to innovation in technology. Based on their ability to offer tailored solutions specific to each location, we have become heavily customer-centric. Choosing Beveromatic means you're not only getting a vending machine; you're securing a sincere partnership with a brand that excels with reliability, efficiency, and innovation. `}</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Serving over the years</h2>
                            <p className='mb-2 text-justify px-8'>{`Beveromatic has dominated the vending solutions market for many years, providing reliable and innovative snack vending machines. Today, our brand can build and maintain solid ties with businesses, institutions, and public spaces as a result of excellent service and tailor-made solutions. By sticking to continuous growth and adapting to meet our clients' needs, Beveromatic has created a name for itself: trust, quality, and customer satisfaction. Today, we are still taking the avenue of producing new-era items and solutions that can keep up with the dynamic demands.`} </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Contact Us</h2>
                            <p className='mb-2 text-justify px-8'>We at Beveromatic are your go-to people for vending machine solutions. If you require more information regarding our products, if you require assistance, or if you want to talk about bespoke vending solutions for your area, we would be delighted to assist you! </p>

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