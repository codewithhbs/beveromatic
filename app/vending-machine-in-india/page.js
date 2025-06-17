
import { vendingmachineinindia } from '@/lib/metafile';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: vendingmachineinindia.title,
    description: vendingmachineinindia.description,
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
                    <p className='mb-2 text-justify text-[#000]'>{`Introducing Beveromatic, your trusted Vending Machine Manufacturers in India for innovative vending solutions. We have specially designed high-class snack vending machines to provide convenience, reliability, and efficiency. Our vending solutions have brought vending into the modern spaces of offices, hospitals, schools, and public places, providing people 24/7 access to hundreds of different snacks-from indulgent treats to wholesome alternatives. At Beveromatic, we create experiences for our customers with user-friendly and easy cashless payments, real-time inventory monitoring, and energy-efficient designs. Our customizable machines can be tailored to the unique requirements of any location, ensuring full customer satisfaction with every snack. `} </p>
                    <p className='mb-2 text-justify text-[#000]'>Years in the business of becoming an expert in the vending industry, we promise to deliver high-quality Vending Machine in India that will further enhance convenience in vending and make it possible to achieve unmatched service. A hassle-free vending experience or an advanced, highly dependable vending system is all found within the offerings of Beveromatic..
                    </p>
                </div>
            </section>

            {/* Vending Solutions Section */}
            <section className="relative overflow-hidden px-5 bg-[url('/bg/bg-1.webp')] bg-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 py-16 border border-gray-300 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">We’ve Got You Covered with All Types of Vending Machines in India
                    </h2>
                    <div className='w-full grid grid-cols-1 gap-4'> 
                        <div className='grid grid-cols-1 gap-2'>
                            <p className='mb-2 text-justify px-8'>We manufacture vending machines of every kind to meet any customer requirement, be it a snack vending machine or customized products for your business. Our vending machines are high-quality, reliable commodities, serving clients across a wide spectrum in India-from offices, schools, and hospitals to public places and much more. Our vending machines promise easy-to-use features, providing round-the-clock access, cashless payment options, energy efficiency, and real-time inventory tracking. It is our assurance that all your vending needs are met with us as a trusted partner for vending solutions in India</p>

                            <p className='mb-2 text-justify px-8'>Sustaining Integrated Support</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Sustaining Integrated Support</h2>

                            <p className='mb-2 text-justify px-8'><strong>Installation Assistance: </strong> Our experts take over the whole process of installation, carried out smoothly and promptly with minimal disruption to your business or environment. Fast vending machines mean fewer disruptions. </p>

                            <p className='mb-2 text-justify px-8'><strong>Ongoing Maintenance:  </strong> Regular maintenance and servicing are central to our customer care, assuring the optimum working condition of the machines. Repair and servicing are done by our support team, which is always on call for restocking or machine checks, thereby reducing downtime.
                            </p>
                            <p className='mb-2 text-justify px-8'><strong>24/7 Customer Service:  </strong> No matter the hour, our customer service representatives are ready to provide solutions for every operational issue with the vending machines, so that they can offer prompt solutions, thereby keeping machines working at all times.
                            </p>
                            <p className='mb-2 text-justify px-8'><strong>Real-Time Monitoring:  </strong> We also ensure real-time monitoring in terms of the performance of vending machines and inventory levels so that restocking is done on time and issues are flagged before they affect your customers.
                            </p>
                            <p className='mb-2 text-justify px-8'><strong>Tailored Solutions:  </strong> We work with you to customize vending solutions that ensure stocking relevant products for your customers. With Beveromatic, you are not just buying a vending machine. You are getting a partner, one that you can trust and rely upon for consistent service and value from your vending machines.
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Behind Beveromatic: A Team of Professionals </h2>
                            <p className='mb-2 text-justify px-8'>At Beveromatic, the best Vending Machine Manufacturers in India, our team consists of experts from the industry and has years of experience, coupled with their greatness. From skilled engineers who design and develop our state-of-the-art vending machines to customer service professionals dedicated to ensuring seamless operations, every member of our team plays a crucial role in delivering high-quality vending solutions. They help the company stay abreast with the latest technology, offer customized solutions, and give remarkable support for their clients. Thus, with their knowledge and passion, we continue to set new standards in the vending industry, in which our clients receive the best products and service possible.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Why Beveromatic is the Best Choice for Vending Machine in India </h2>

                            <p className='mb-2 text-justify px-8'>Beveromatic is recognized as the best Vending Machine Manufacturers in India due to our commitment to quality, innovation, and customer satisfaction. This is how we are the best. </p>

                             <p className='mb-2 text-justify px-8'><strong>Eco-friendly Features: </strong> At the heart of everything we design, sustainability is core. Therefore, our Vending Machine in India are built up with energy-efficient components that minimize power consumption and conserve energy, which leads to a reduced impact on the environment. We also use recycled materials for packaging and practice sustainable product sourcing per the global sustainability agenda. </p>

                            <p className='mb-2 text-justify px-8'><strong>	Analytics of Real-Time Performance:  </strong> The intelligent data tracking of the all-new line of Bep-56 vending machines enables customers to get real-time data about the vending machine performance. In this way, companies can check their sales, see how many items are availed in their storage tanks, and accordingly modify the product offerings based on consumption patterns. This will also help with predictive maintenance because the machines are serviced before issues occur.
                            </p>
                            <p className='mb-2 text-justify px-8'><strong>Flexible Scheduling for Restocking:  </strong> Keeping the machines filled and stocked is understood, and our flexible restocking schedule ensures that the vending machine is always filled up with whichever products sell the most. Thus, there is reduced downtime between the product sales process and a steady flow of goods in the snack and beverage category. The real-time monitoring system can alert our team whenever a restock is required, ensuring prompt action.
                            </p>
                            <p className='mb-2 text-justify px-8'><strong>Scalability for Growing Businesses:  </strong> As your business continues to grow, Beveromatic vending solutions will easily scale along with you. New locations can be added or an even broader range of products can be introduced, and our machines and services will evolve to meet such changing needs. Scalability thus guarantees a solid partner in Beveromatic through every step of your business journey.
                            </p>
                            <p className='mb-2 text-justify px-8'>With Beveromatic, you get more than just a Vending Machine in India; you get that partner whose intention of better convenience, enhanced user experience, and enhanced needs of modern spaces across India, not just tomorrow, but today.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Hire us today </h2>

                            <p className='mb-2 text-justify px-8'>Do you wish to transform your space and have effective and reliable vending solutions? Contact Beveromatic now, and let our team help you with the solution to find the right Vending Machine in India for your institution or business. We are at your service, either for more information, specifications, or even when you want to get things started.</p>
                            <p className='mb-2 text-justify px-8'>Don&apos;t wait, contact us now and experience the convenience and reliability of Beveromatic, for tea Vending Machine, Fully Automatic Coffee Machine Manufacturers in India.</p>

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