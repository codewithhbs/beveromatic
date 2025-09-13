'use client'
import React, { useState } from 'react';
import { Box, Building2, Coffee, Container, Droplet, Gauge, Monitor, Power, Scale, Settings, Star, Thermometer, Timer, Zap } from 'lucide-react';
import Image from 'next/image';


const BeveromaticMilkFrotherEggBeaterBVMFW = () => {
    const [productThum, setProductThum] = useState(0);

    const TableRow = ({ icon: Icon, label, value, highlight = false }) => (
        <tr className={`border flex items-start border-gray-300 w-full ${highlight ? 'bg-[#3D1808]/5' : ''}`}>
            <td className="py-4 pl-6 pr-4 flex items-center gap-3 w-[40%]">
                <Icon size={20} className="text-[#3D1808]" />
                <span className="font-medium text-black">{label}</span>
            </td>
            <td className="py-4 px-4 text-gray-600 w-[60%]">{value}</td>
        </tr>
    );
    const handleWhatsAppInquiry = (productName) => {
        if (typeof window !== "undefined") {
            const message = `Hi, I'm interested in the Beveromatic 3 Lane Hot Beverage Vending Machine. Can you provide more information?`;
            const whatsappUrl = `https://wa.me/+919873903766?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    };

    const imageUrl = ['/productImage/bvmfw-1.jpg', '/productImage/bvmfw-2.jpg', '/productImage/bvmfw-3.jpg', '/productImage/bvmfw-4.jpg', '/productImage/bvmfw-5.jpg']

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 mt-24 md:mt-36">
                <div className='max-[769px]:mt-36'>
                    <img className="w-full h-full rounded-2xl" src={'/sliderImage/beveromatic-milk-frother.png'} alt="Manual Coffee Grinder" />
                </div>
            </div>
            {/* end of hero */}
            <div className="bg-[url('/bg/bg-1.webp')] bg-cover bg-center mt-10 py-10">
                <div className="max-w-7xl mx-auto px-6 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-8 items-center border border-[#3D1808]/10 rounded-xl px-7 py-7">
                        <div className="md:w-1/2">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-[#f26522] text-white rounded-full text-sm">Beveromatic</span>
                                    <span className="text-[#f26522]">•</span>
                                    <span className="text-dark">BVMFW</span>
                                </div>
                                <h2 className="text-4xl font-bold"> Beveromatic Milk Frother</h2>
                                <p className="text-black leading-relaxed">The Beveromatic Milk Frother is a compact and elegant kitchen appliance designed to effortlessly transform milk into a rich, creamy foam. Utilizing advanced whisking technology, it quickly heats and aerates milk to the perfect temperature and consistency for lattes, cappuccinos, hot chocolates, and other specialty beverages. Its user-friendly design features simple one-touch controls and a non-stick interior for easy cleaning, making it the ideal tool for home baristas seeking to add a professional touch to their drinks. </p>
                                <button
                                    onClick={() => handleWhatsAppInquiry()}
                                    className="mt-6 bg-[#f26522] text-[#fff] px-8 py-3 rounded-lg font-semibold hover:bg-[#3D1808] transition-colors inline-flex items-center gap-2"
                                >
                                    Buy Now 
                                    <Star size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-[#fff2eb] p-5">
                                <img 
                                    src={imageUrl[productThum]}
                                    alt='Beveromatic 3 Lane Vending Machine'
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="gallery-row">
                                <div className="product-gallery flex flex-row justify-center mt-2 gap-3">
                                    {
                                        imageUrl.map((image, index) => (

                                            <Image
                                                onClick={() => setProductThum(index)}
                                                key={index}
                                                src={image}
                                                width={80}
                                                height={80}
                                                alt="3lan-1"
                                                className='border border-gray-200 rounded-lg p-1' />


                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" bg-[url('/bg/product-page-bg.webp')] bg-cover bg-center">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    {/* key features */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#3d1808] mb-6 text-center">Key Features</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

    <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
        <Image width={70} height={70} src="/icons/ss-body.png" alt='solid-ss-body' className="mx-auto mb-3 w-[70px] h-[70px]" />
        <span className="text-[#3d1808] font-bold">ABS & Stainless Steel Body</span>
        <p>High grade ABS Body with Stainless steel attachment</p>
    </div>
    <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
        <Image width={70} height={70} src="/icons/ceramic-bur.webp" alt='ceramic-burr' className="mx-auto mb-3 w-[70px] h-[70px]" />
        <span className="text-[#3d1808] font-bold">Egg Beater Attachment</span>
        <p>Egg Beater Attachment Can also be used as an Egg beater with its extra attachment</p>
    </div>
    <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
        <Image width={70} height={70} src="/icons/glass-jar.png" alt='glass-jar' className="mx-auto mb-3 w-[70px] h-[70px]" />
        <span className="text-[#3d1808] font-bold">Multiple Speed Settings</span>
        <p>Multiple speed settings 3 Different modes for setting different speed levels</p>
    </div>
    <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
        <Image width={70} height={70} src="/icons/beachwood-knob.webp" alt='beechwood-knob' className="mx-auto mb-3 w-[70px] h-[70px]" />
        <span className="text-[#3d1808] font-bold">Rechargeable Battery</span>
        <p>Rechargeable Battery Powered by 1200 MAH rechargeable battery, runs for a long period of time on a single charge</p>
    </div>
    <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
        <Image width={70} height={70} src="/icons/capicity.png" alt='capacity' className="mx-auto mb-3 w-[70px] h-[70px]" />
        <span className="text-[#3d1808] font-bold">Multiple Usages</span>
        <p>Multiple product usages Can be used as Milk frother, for cappuccinos, latte, hot chocolates and even beating eggs.</p>
    </div>
</div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="bg-white border border-gray-300 mb-10 rounded-xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 bg-[#3D1808]/5">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Settings className="text-[#3D1808]" />
                                Key Features
                            </h2>
                        </div>
                        <table className="w-full">
                            <tbody className='border border-gray-300'>
                                <TableRow icon={Coffee} label="Product" value='Beveromatic Milk Frother and Egg Beater' highlight />
                                <TableRow icon={Droplet} label="Product Type" value={'Milk Frother'} />
                                <TableRow icon={Container} label="Model Number" value={'BVMFW'} highlight />
                                <TableRow icon={Power} label="Suitable For" value={'Milk, Cappuccino, Latte, Hot Chocolate, Smoothies, Egg Beater'} />
                                <TableRow icon={Timer} label="Speed Levels" value={'3'} highlight />

                                <TableRow
                                    icon={Settings}
                                    label="Body Type"
                                    value={`High Grade ABS, SS Whisk`}
                                />
                                <TableRow
                                    icon={Settings}
                                    label="Battery"
                                    value={`1200 MAH rechargeable`}
                                />
                                <TableRow icon={Monitor} label="Usage" value={'Use the BVMFW milk frother to create smoothies, lattes, cappuccinos and even to beat eggs. Just press the power button and you are good to go. Set it to the most apt speed you require. '} />
                                <TableRow icon={Settings} label="Other Features" value={'Light weight, Portable as easy to Carry/ Travel Friendly, Easy to clean'} highlight />
                                <TableRow icon={Coffee} label="Color" value={'Black/White'} />
                                {/* <TableRow icon={Droplet} label="Rinse" value={'Hourly Rinse Available'} /> */}
                            </tbody>
                        </table>
                    </div>

                    {/* Electrical Specifications */}
                    {/* <div className="bg-white mb-10 rounded-xl border border-gray-300 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 bg-[#3D1808]/5">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Zap className="text-[#3D1808]" />
                                Electrical Specifications
                            </h2>
                        </div>
                        <table className="w-full">
                            <tbody>
                                <TableRow icon={Power} label="Power Supply" value={'230V AC / 50 Hz / 1750 W'} />
                            </tbody>
                        </table>
                    </div> */}

                    {/* Unit Specifications */}
                    <div className="bg-white rounded-xl border border-gray-300 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 bg-[#3D1808]/5">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Box className="text-[#3D1808]" />
                                Unit Specifications
                            </h2>
                        </div>
                        <table className="w-full">
                            <tbody>
                                <TableRow
                                    icon={Box}
                                    label="Unpacked Dimensions"
                                    value={`250 mm x 480 mm x 590 mm`}
                                    highlight
                                />
                                <TableRow
                                    icon={Box}
                                    label="Packed Dimensions"
                                    value={`100 mm x 95 mm x 690 mm`}
                                />
                                <TableRow icon={Scale} label="Net Weight" value={'18.00 Kgs.'} highlight />
                                <TableRow icon={Scale} label="Gross Weight" value={'20 Kgs.'} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeveromaticMilkFrotherEggBeaterBVMFW;
