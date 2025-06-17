
import { automaticvendingmachine } from '@/lib/metafile';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: automaticvendingmachine.title,
    description: automaticvendingmachine.description,
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
                    <p className='text-justify text-[#000]'>Beveromatic is changing the game for on-the-go refreshment with its Smart Vending Solutions: automated kiosks that grant 24×7 access to beverages and snacks. These kiosks are the new-age micro-retail hubs that cater to busy workplaces, hospitals, schools, and public places, evolving from traditional vending machines. Beveromatic automatic vending machines carry an enormous variety, including:</p>
                </div>
            </section>
            {/* Comprehensive Approach Section */}
            <section className="py-16 md:py-10 pt-0 bg-[url('/bg/bg-1.webp')] bg-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
                    <div className="mb-16 mt-10 md:mt-1">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>1</h3>
                                {/* <Image width={70} height={70} src="/icons/Product-Design-Blueprint.png" alt='tow-beverage' className="mx-auto mb-3 w-[70px] h-[70px]" /> */}
                                <span className="text-[#3d1808] font-bold">Freshly brewed coffee and tea</span>
                            </div>

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>2</h3>
                                <span className="text-[#3d1808] font-bold">Flavored and milk-based drinks</span>
                            </div>

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>3</h3>
                                <span className="text-[#3d1808] font-bold">Healthy juices and smoothies</span>
                            </div>

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>4</h3>
                                <span className="text-[#3d1808] font-bold">Ready-to-eat meals</span>
                            </div>

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <h3 className='w-[50px] h-[50px] bg-[#f26522] text-gray-100 rounded-full text-2xl mb-3 pt-2 font-bold mx-auto'>5</h3>
                                <span className="text-[#3d1808] font-bold">Nutritious snacks and baked goods</span>
                            </div>

                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6">
                        <p className='text-justify text-[#000]'>Focusing on hygiene, efficiency, and customer satisfaction, the smart vending machines from Beveromatic bypass the hassle of long lines, waiting for deliveries, or paying lip service to cafeteria services. </p>
                    </div>

                </div>
            </section>

            {/* Vending Solutions Section */}
            <section className="relative overflow-hidden px-5">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 py-16 border border-gray-300 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">The Importance of Vending Machines in Today’s Rapidly Moving World</h2>
                    <div className='w-full grid grid-cols-1 gap-4'>
                        <div className='grid grid-cols-1 gap-2'>
                            <p className='mb-2 text-justify px-8'>Vending machines are automatic retail devices that dispense products like snacks, drinks, and other consumables without the intervention of a human operator. They operate around the clock and offer unmatched convenience for various environments - from the office to the hospital, school to the airport, and from the mega mall to the high-traffic busy area. Over the years, automatic vending machines have developed into intelligent systems that allow touchless operations, multiple digital payments, and real-time inventory tracking. Such automated convenience makes them an essential consideration for the busy lives many lead today by reducing wait time, limiting human contact, as well as upholding very high hygiene standards.</p>
                            <p className='mb-2 text-justify  px-8'>In an increasingly digitized world, smart vending has now become a necessity rather than a luxury, in which Beveromatic is one of the pioneers of automatic coffee machines.</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">The Advanced Beveromatic Vending Machines</h2>
                            <p className='mb-2 text-justify px-8'>{`At Beveromatic, innovation, quality, and customer convenience are put into every Automatic Vending Machine we install. Our Smart Vending Machines: very much like a modern micro-retail kiosk, also go beyond the most primary functions and into a highly superior seamless experience, which is desirable in today's fast-moving environments. Here's what makes us different:`}</p>

                            <p className='mb-2 text-justify px-8'><strong>Fully Automated and Contactless Mode:</strong> Designed for a touchless experience in line with modern hygiene expectations, our machines are fully automated in every interaction that minimizes physical touch and health risk during handling, making them ideally suited for hospitals, offices, and other public places.</p>
                            <p className='mb-2 text-justify px-8'><strong>Available 24x7:</strong>{`This user-friendly concept assures that, whether it's day or night, patrons can indulge in their favorite beverages and snacks. Maybe an early-morning coffee pick-me-up? Perhaps a midnight snack attack? Whatever the case, our automatic vending machines keep them hot and deliver offerings. `} </p>
                            <p className='mb-2 text-justify px-8'><strong>User-Friendly, Time-Saving, and Highly Convenient:</strong> Our <Link href='/beveromatic-2-lane-vending-machine-bv02p' className='pointer text-[#f26522]'>automatic coffee machines</Link> come with user-friendly interfaces with easy instructions, fast dispensing, and multiple payment options-closing the transaction through UPI, cards, or mobile wallets-completing the entire process from selection to delivery in mere seconds and saving an extensive amount of time and effort. </p>
                            <p className='mb-2 text-justify px-8'><strong>Hassle-Free Operation and Maintenance:</strong> Our machines are made for reliability and ease of use. With just routine maintenance, a little refilling at the right time, and responsive service support, clients manage to work smoothly without disruptions or downtimes on their end. We look after the backend, so you can go on with your business.</p>
                            <p className='mb-2 text-justify px-8'><strong>Affordable and Relevant:</strong> Beveromatic offers automatic vending machines that are affordable and provide real value. Our models are targeted at different footfalls and budgets, aiding organizations in providing quality refreshment, minus the overhead of staffing and complicated infrastructure.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Suitable Hot Beverage Solutions for Every Surrounding</h2>
                            <p className='mb-2 text-justify px-8'>At Beveromatic, we deliver refreshments suited to unique client needs. Every environment is different, and so is our short list of hot beverage vending machines—built for utter reliability, consistency, and outstanding user experience. From startup office settings where space is a premium to large corporate campuses, our machines will be there, ready to serve. </p>
                            <p className='mb-2 text-justify px-8'><strong>2 Lane Hot Beverage Vending Machine:</strong> This compact automatic coffee machine is most suitable for small offices, clinics, or waiting lounges. Some of the beverages offered include tea, coffee, and soup. The elegant design occupies less space yet does not compromise functionality. Easy to maintain and energy efficient, it is a cost-effective solution to provide warm refreshments to guests and staff whenever they want.</p>
                            <p className='mb-2 text-justify px-8'><strong>3-Lane Hot Beverage Vending Machine:</strong> Developed for medium-sized offices, coworking spaces, and educational institutions, this machine boasts an extended menu consisting of three hot beverages. It boasts an appreciable variety for space efficiency as it allows different options for such beverages as coffee, tea, and hot chocolate. Intuitive controls and rapid dispensing technology keep queuing short and productivity high.</p>
                            <p className='mb-2 text-justify px-8'><strong>4 Lane Hot Beverage Vending Machine:</strong> This is the perfect machine to use in high-traffic situations such as hospitals, large corporate settings, industries, and others. The machine will serve up to 4 beverage options for the customers, ranging from cappuccino to latte, masala tea, or even lemon a flavor and temperature consistency guaranteed. Built from strong, high-capacity material, this is a machine that can operate indefinitely with uninterrupted work hours.</p>

                            <p className='mb-2 text-justify px-8'>Modern touch-button interfaces, temperature control, and auto-cleaning functions personalize the settings of beverages in every Beveromatic vending machine, giving users a hygienic, user-friendly, satisfying service experience. These machines are built on reduced downtimes for convenience, maxing out the innovation for a functionality experience.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Why Choose Beveromatic for Automatic Vending Machines?</h2>

                            <p className='mb-2 text-justify px-8'>When you choose Beveromatic, you choose a partner who understands the future-altering needs of contemporary businesses and institutions. We don’t just sell vending machines; we provide intelligent self-service retail experiences that blend quality, convenience, and innovation. Our automatic <Link href='/about' className='pointer text-[#f26522]'>coffee machines</Link> are designed to give safe and hygienic service and are efficient enough to run on their own 24 hours a day in today’s fast-paced work environment within hospitals, educational campuses, and public spaces.  </p>
                            <p className='mb-2 text-justify px-8'>Our very positive approach to satisfying customers includes a full range of machine configurations and beverage offerings maintained by planned servicing, preventive maintenance, and dedicated support. We ensure that your vending solution is operational and optimized, reducing downtime when the machine cannot service customers and enhancing the optimal experience for the actual end-users. The partnership we have with those well-known brands guarantees that every snack or beverage dispensed is top-notch when it comes to its quality and taste. We look after your refreshment requirements while you concentrate on the important bit- your people and productivity.  </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Flexible and Convenient Payment Options</h2>
                            <p className='mb-2 text-justify px-8'>Beveromatic truly offers flexible payment solutions to ensure ultimate convenience. Our vending machines accept contactless payments over UPI, QR code payments, NFC-enabled devices, digital wallets, such as Paytm and Google Pay, and debit or credit cards. The mentioned payment options allow for fast and secure transactions, giving utmost priority to hygiene and user convenience-whether you are at the office, hospital, or a public venue.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Contact Us</h2>
                            <p className='mb-2 text-justify px-8'>At Beveromatic, we strive to offer an excellent service to our clients. If you have any questions, need assistance, or want to check out our range of Automatic Vending Machines or automatic coffee machines, feel free to contact us. You can reach us via email at contact@beveromatic.com or call us at +91-9873903766, or you can visit us at our office located in New Delhi, India. For more information, you can please visit our website www.beveromatic.com. Our dedicated team will effectively help you find the vending solution that fits your business needs.</p>

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