'use client'
import React, { useState } from 'react';
import { Box, Building2, Coffee, Container, Droplet, Gauge, Monitor, Power, Scale, Settings, Star, Thermometer, Timer, Zap } from 'lucide-react';
import Image from 'next/image';


const Beveromatic3LaneVending = () => {
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

    const imageUrl = ['/productImage/bv03p-3.webp', '/productImage/bv03p-2.webp', '/productImage/bv03p-1.webp']

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 mt-24 md:mt-36">
                <div className='max-[769px]:mt-36'>
                    <img className="w-full h-full rounded-2xl" src={'/sliderImage/bv03p-hero.webp'} alt="about us hero" />
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
                                    <span className="text-dark">BV03P</span>
                                </div>
                                <h2 className="text-4xl font-bold">Multi Beverage Vending System-3 Lane </h2>
                                <p className="text-black leading-relaxed">Beveromatic BV03P is a compact and a high performance vending machine that caters to small workplaces and kiosks. It offers upto 4 different beverages, allowing users to serve various drinks effortlessly. </p>
                                <button
                                    onClick={() => handleWhatsAppInquiry()}
                                    className="mt-6 bg-[#f26522] text-[#fff] px-8 py-3 rounded-lg font-semibold hover:bg-[#3D1808] transition-colors inline-flex items-center gap-2"
                                >
                                    Get Quote
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/tow-beverage.png" alt='tow-beverage' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">Three Beverage Selections</span>
                                <p> Serve different flavors instantly</p>
                            </div>
                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/space-saving.png" alt='lightweight' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">Space-Saving Design</span>
                                <p>Ideal for small spaces</p>
                            </div>
                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/user-freindly.png" alt='maintenance' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">User-Friendly Interface</span>
                                <p>Quick and easy operation</p>
                            </div>
                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/maintenance.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">Low Maintenance</span>
                                <p>Hassle-free servicing</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="bg-white border border-gray-300 mb-10 rounded-xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 bg-[#3D1808]/5">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Settings className="text-[#3D1808]" />
                                Technical Specifications
                            </h2>
                        </div>
                        <table className="w-full">
                            <tbody className='border border-gray-300'>
                                <TableRow icon={Coffee} label="Options" value='5 Programmable Buttons ' highlight />
                                <TableRow icon={Droplet} label="Hot Water" value={'Optional'} />
                                <TableRow icon={Container} label="Boiler Capacity" value={'2.3 Liter'} highlight />
                                <TableRow icon={Power} label="Boiler Heater" value={'1750 W'} />
                                <TableRow icon={Timer} label="Start Up Time" value={'Up to 10 Minutes'} highlight />
                                <TableRow icon={Droplet} label="Water Input" value={'With Pump/Online'} />
                                <TableRow
                                    icon={Container}
                                    label="Powder Canisters"
                                    value={`3 canisters, 1 Kg each`}
                                    highlight
                                />
                                <TableRow
                                    icon={Settings}
                                    label="Gear Motor"
                                    value={`3 motors`}
                                />
                                <TableRow
                                    icon={Gauge}
                                    label="Mixing Motor"
                                    value={`3 motors`}
                                    highlight
                                />
                                <TableRow icon={Scale} label="Dispensing Height" value={'110 mm'} />
                                <TableRow icon={Coffee} label="Dispensing Rate" value={'Upto 6 Cups per Minute'} highlight />
                                <TableRow icon={Monitor} label="Display" value={'LCD display module with yellow backlight'} />
                                <TableRow icon={Settings} label="Interface" value={'Push Button Interface'} highlight />
                                <TableRow icon={Coffee} label="Cup Count" value={'Available'} />
                                {/* <TableRow icon={Thermometer} label="Temperature Setting" value={'Available'} highlight /> */}
                                <TableRow icon={Droplet} label="Rinse" value={'Hourly Rinse Available'} />
                            </tbody>
                        </table>
                    </div>

                    {/* Electrical Specifications */}
                    <div className="bg-white mb-10 rounded-xl border border-gray-300 overflow-hidden">
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
                    </div>

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
                                    value={`340 mm x 520 mm x 670 mm`}
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

export default Beveromatic3LaneVending
