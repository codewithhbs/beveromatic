
import { automaticvendingmachinesecond } from '@/lib/metafile';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: automaticvendingmachinesecond.title,
    description: automaticvendingmachinesecond.description,
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
                    <p className='text-justify text-[#000]'>Automatic vending tea and coffee solutions are well provided by Beveromatic to its clients in India. The company has a very strong presence in Delhi and the NCR region. Beveromatic, an Automatic Coffee Machine Dealer in Delhi, has built its name on innovation and quality through its customized beverage vending solutions to corporate offices, hotels, retail shops, and commercial establishments. With those who expect reliability, efficiency, and convenience in using the machine, Beveromatic becomes a reliable partner for the company in pursuit of modern, hassle-free beverage solutions. </p>
                    <p className='text-justify text-[#000]'>It does not matter whose office is being converted into a café corner or who wants a vending solution for the commercial grade; we assure none but the smooth implementation of features, followed by a prompt technical response. We are trusted being the best automatic coffee machine supplier in India and promise to serve quality with every purchase.</p>
                </div>
            </section>

            {/* Vending Solutions Section */}
            <section className="relative overflow-hidden px-5">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 py-16 border border-gray-300 rounded-xl">
                    <div className='w-full grid grid-cols-1 gap-4'>
                        <div className='grid grid-cols-1 gap-2'>
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Our Product Range</h2>
                            <p className='mb-2 text-justify px-8'><strong>2-Lane Vending Machine:</strong> With our 2-Lane Vending Machine for small offices and areas with light foot traffic, it typically dispenses coffee and tea. It occupies considerably less floor space. Energy-saving features and easy maintenance provide a straightforward answer to every demand for everyday refreshment. </p>
                            <p className='mb-2 text-justify px-8'><strong>3-Lane Vending Machine:</strong> Perfect for medium-sized businesses and cafeterias, it caters to three different beverages to cater to different tastes. The user-friendly character of the product allows for its easy operation, while deliveries of the same taste and quality are guaranteed every time. The model is well-balanced between function and efficiency and will complement any mid-scale workspace or service area. </p>
                            <p className='mb-2 text-justify px-8'><strong>4-Lane Vending Machine:</strong> The design of the 4-Lane Vending Machine meets the needs of high-traffic areas like large offices, commercial environments, and public spaces. It pours four types of beverages at the same time and is, therefore, an asset in a busy work environment. Engineered for speed and capacity, it provides unwavering performance with every dispense.</p>
                            <p className='mb-2 text-justify px-8'><strong>Customizable Beverage Options:</strong> we allowed customisation options in a Beverages-Plus machine range from espresso to cappuccino, café latte, masala tea, cardamom tea, iced tea, and iced frappe. With powder-based and premix-compatible setups, these machines may yet be customized to satisfy taste and operational needs in any environment.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">We Are Committed to Quality. </h2>

                            <p className='mb-2 text-justify px-8'>At Beveromatic, quality is of utmost priority. We believe that if machines are great, good beverages will manufacture themselves; hence, we take great care in selecting the very best components and technology for our vending solutions. Each product focuses on giving consistently high-quality drinks that taste and feel just perfect. We consider long-lasting operation, reliability, and user-friendliness so that our machines can sustain the rigorous commercial environment. Beveromatic is a trusted Automatic Coffee Machine Dealer in Delhi for quality beverage solutions, with this quality assurance in mind for anything, from coffee to tea to beverages being brewed just right.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Nationwide Supply Across India </h2>
                            <p className='mb-2 text-justify px-8'>We are very proud to present our product in the whole of India. From hectic metros to quiet townships, being a trusted Automatic Coffee Machine Supplier in India, we provide high-quality vending machines for tea and coffee to clients at every corner. We promise on-time delivery and installation, thus granting clients across the country seamless service. With a commitment to quality and customer satisfaction, we are extending the reach beyond just major urban centers, thus allowing any business to benefit from world-class beverage solutions, regardless of their location. With a solid network and a drive for reliability, Beveromatic, an Automatic Coffee Machine Dealer in Delhi, takes superior beverage technology to companies throughout India.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Get Comprehensive Support: From Choosing the Right Vending Machine to Post-Installation. </h2>
                            <p className='mb-2 text-justify px-8'>Your needs are covered with the most ideal product selection based on your specific needs so that your business gets the perfect fit. In addition to this, we offer seamless setup and training, once installed, so that you get the most out of your machine. The support continues with maintenance, troubleshooting, and spare parts a resulting outturn of up-to-date performance in your machine. Therefore, consulting us as the best Automatic Coffee Machine Dealer in Delhi guarantees that everything runs smoothly and you will enjoy an effective and reliable beverage solution during its lifetime.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Quality but Low Prices</h2>
                            <p className='mb-2 text-justify px-8'>Quality does not have to come with a hefty price tag, according to Beveromatic, an Automatic Coffee Machine Dealer in Delhi. From various automatic vending machines for tea and coffee, customers are assured of getting a machine that performs well and tastes great, all these done within their budget. This has been achieved in that the machines are designed to produce premium beverages in terms of quality, efficiency, and durability standards. Whether a small office or a big business, there is no better way to make the most out of your investment, and we help you to get the value for your money into the best possible quality and at less than budget-friendly rates.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Trusted by Hundreds of Clients</h2>
                            <p className='mb-2 text-justify px-8'>We take pride in being trusted by hundreds of clients all over India. Our commitment to vending solutions of the highest quality has earned us the confidence and loyalty of businesses belonging to diverse sectors. From small offices to large enterprises, we are the best Automatic Coffee Machine Dealer in Delhi continue to provide unmatched performance, quality, and reliability. Our clients depend on us for not only products but also support, as we provide them with beverages in the best possible way. Grounded in customer satisfaction, we nurture strong, enduring relationships through which Beveromatic remains the aesthetically preferred in automatic vending solutions. </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Contact Us</h2>
                            <p className='mb-2 text-justify px-8'>At Beveromatic, we are always willing to assist you with all kinds of automatic tea and coffee vending requirements. If you want to know anything about our tea and coffee vending products, want assistance in selecting a suitable tea or coffee machine, or require help after installation, get in touch with us, your trusted Automatic Coffee Machine Supplier in India. </p>
                            <p className='mb-2 text-justify px-8'>Call, e-mail, or write to us through our website, and we will get back to you promptly. We also work in providing different types of installation, maintenance, and troubleshooting assistance. Having a nationwide presence, we are well placed Automatic Coffee Machine Supplier in India to assure the best vending solutions to businesses across India. Write to us today so we can be of help in getting you a good cup, every time.</p>

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