
import { teavendingmachine } from '@/lib/metafile';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: teavendingmachine.title,
    description: teavendingmachine.description,
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
                    <p className='mb-2 text-justify text-[#000]'>{`This Smart Tea Vending Machine, Beveromatic, is redefining the tea experience. The vending machines have been designed for ultimate convenience, offering fresh tea at a button's click, thus proving themselves to be well-suited for heavy traffic areas such as offices, hospitals, schools, and public spaces. Masala chai, green tea, or herbal tea, there is a cup for each taste by Beveromatic, a tea coffee vending machine. `} </p>
                    <p className='mb-2 text-justify text-[#000]'>Our vending machines offer premium drinks at any time, day or night, while ensuring hygiene and speed of service since clients need not endure long waiting times or the passing of service. Combining innovative technology with quality tea, Beveromatic creates a wonderful tea experience that satisfies rapid refreshment requirements in busy environments while promoting good health and productivity throughout the day.</p>
                </div>
            </section>

            {/* Vending Solutions Section */}
            <section className="relative overflow-hidden px-5 bg-[url('/bg/bg-1.webp')] bg-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-6 py-16 border border-gray-300 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Convenient, Hygienic, And Efficient Vending Machines for Tea</h2>
                    <div className='w-full grid grid-cols-1 gap-4'>
                        <div className='grid grid-cols-1 gap-2'>
                            <p className='mb-2 text-justify px-8'>The <Link href='/beveromatic-3-lane-vending-machine-bv03dx' className='pointer text-[#f26522]'> automatic machines</Link> for fresh tea preparation and dispensing on button touch are known as tea vending machines. Tea vending machines relieve the preparation of masala chai to herbal blends; offices, hospitals, and schools are potentially utilized areas for these quick, convenient, and hygienic vending machines. The machines bring the benefit of round-the-clock service to users without making them wait or dependent on the staff to enjoy quality tea without waiting for the time it takes for personnel.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Locations Best Fit of Tea Vending Machines</h2>
                            <p className='mb-2 text-justify px-8'>Offices, hospitals, schools, public venues, and factories are places where tea <Link href='/beveromatic-2-lane-vending-machine-bv02p' className='pointer text-[#f26522]'> coffee vending machines</Link> can fit perfectly into their profile. All these locations, combined, make it possible for employees and students to have tea quickly and easily available. This internal productivity boost is complemented by convenience and guaranteed hygiene. Busy public places such as busy airports or malls would serve tea drinkers on the go, while factories would ensure each worker enjoys a refreshing break. Bringing the tea experience close to many people leaves no one behind in taking a hot beverage, and time-saving in leaving their workspace or waiting in an endless queue.</p>
                            
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">Key Advantages of Tea Vending Machines</h2>

                            <p className='mb-2 text-justify px-8'><strong>1. Time-efficient:</strong> Tea vending machines brew tea in lesser seconds just with a press of a button, thus helping in the lesser time required for tea preparation compared to the usual mode. Therefore, such machines can be effectively used at busy spots where quick refreshments are required and enhance overall efficiency by enabling users to gain time.</p>

                            <p className='mb-2 text-justify px-8'><strong>2. Hygiene: </strong> With full automation of tea preparation, vending machines have introduced a lowered risk with regard to contamination. Uninterrupted by human hands, the very machines ensure that, at all times, tea is prepared in a clean environment. The vending allows for no manual handling in the making of tea, thus ensuring maximum hygiene and safety.  </p>

                            <p className='mb-2 text-justify px-8'><strong>3. Cost-Effectiveness:  </strong> These machines help businesses cut operating costs by trimming the requirement of responsible tea-service staff. There will be negligible labor costs since no employees are required for the preparation and serving of tea. Cuts on the whole range of other traditional tea services, such as cleaning utensils or replenishing ingredients, will therefore be magnified as serious long-term savings.</p>

                            <p className='mb-2 text-justify px-8'><strong>4. Customizable Features:</strong> Most vending machines allow users to personalize the tea experience. Tea strength can be configured, added milk or sugar to adjust the flavor; specific types, such as masala chai or pure herbal tea, can also be selected. With the personalization being done, one can ensure everyone gets precisely the right cup of their choice, which goes a long way in improving the experience as compared to using common tea services.</p>

                            <p className='mb-2 text-justify px-8'><strong>5. All-time Presence: </strong>{`Being open 24 hours is one of the essential features of a tea coffee vending machine. In it, you have a supply of hot and fresh tea to drink, for tea drinkers when it's most required at any hour of day or night. This is more valuable in workplaces, hospitals, and anywhere else with irregular hours where tea is needed 24/7 without staff dependency or scheduled breaks.`}  </p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">About Our Tea Vending Machines: </h2>
                            <p className='mb-2 text-center px-8'><strong>Beveromatic Is in the Business of Selling Such Advanced Machines.</strong></p>
                            <p className='mb-2 text-justify px-8'><Link href='/beveromatic-2-lane-vending-machine-bv0dx' className='pointer text-[#f26522]'>Tea Vending Machines</Link> to dispense high-quality, freshly made teas at the push of a button. Such machines proved to be very helpful in places of heavy traffic like offices, hospitals, schools, factories, and public venues.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-[#3d1808]">What We Offer </h2>

                            <p className='mb-2 text-justify px-8'><strong>Variety of Tea Options:</strong> Our machines offer everything from a traditional masala chai, herbal teas for the most soothing experience, to green teas. Therefore, there is something for everyone.</p>

                            <p className='mb-2 text-justify px-8'><strong>Customizable Preferences: </strong> Users can adjust the strength, add milk or sugar, or select their preference for flavors to personalize their tea, getting the perfect cup every time.</p>

                            <p className='mb-2 text-justify px-8'><strong>24/7 Availability: </strong> Our tea coffee vending machines are all-weather machines designed for non-stop operation, day or night, so you can always obtain a hot and refreshing cup of tea right when you want one, which is perfect for an office and fast-paced environments.</p>

                            <p className='mb-2 text-justify px-8'><strong>Hygiene and Cleanliness: </strong> In automated processes, contamination of beverages is minimized when they are prepared with no manual intervention. Our machines are suitable for hygiene and cleanliness and ensure the safety of every cup.</p>

                            <p className='mb-2 text-justify px-8'><strong>Cost-Effective </strong> With no need for employees to prepare the tea, our vending machines become an economically viable proposition for businesses and institutions. Forget labor costs or maintenance associated with a conventional tea service.</p>

                            <p className='mb-2 text-justify px-8'><strong>User-Friendly </strong> Simple user interface and touch controls make it easy to use our tea vending machines so that the users can get their tea without much hassle of standing in long queues and wasting their precious time.</p>

                            <p className='mb-2 text-justify px-8'>At Beveromatic, we make tea drinking quicker and a more enjoyable experience for all, thanks to efficient, hygienic, and customizable tea-vending machines.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Why Choose Beveromatic Tea Coffee Vending Machines?</h2>

                            <p className='mb-2 text-justify px-8'>What distinguishes Beveromatic from the multitude is the incredible experience offered by its vending machines, combining convenience, hygiene, and customization. With diverse tea options from the masala chai to green and herbal tea, machines satisfy various preferences. Users can customize their tea by altering strength, milk, and sugar levels for a particular taste every time. Open 24/7, our machines guarantee that tea consumption may be enjoyed fresh regardless of the hour, thus, perfectly suited for busy workplaces, hospitals, or public spaces.  </p>
                            <p className='mb-2 text-justify px-8'>The entire brewing process-from date stamping to dispensing automated with strict adherence to hygiene. Furthermore, our tea vending machines save money, eliminating costs associated with personnel and other operational costs. Anyone could serve themselves a cup of tea hot with the easy working of the controls in no time, without having to wait for staff or bother them in any way. Beveromatic is your source for reliable, high-quality, low-cost tea solutions.</p>

                            <h2 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-5 text-[#3d1808]">Contact Us for the Best Tea Vending Machine Solutions</h2>
                            <p className='mb-2 text-justify px-8'>Let us know if you need more information or would like to inquire about our tea vending machines. You can contact us via phone at +91-9873903766, email at Sales@beveromatic.com, or visit our website at beveromatic.com. Alternatively, you can come to our office located in New Delhi, India. Our team will assist you in gaining the best solutions for tea coffee vending machines.</p>
                         
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