'use client'
import { Box, Building2, Coffee, Container, Droplet, Gauge, Monitor, Power, Scale, Settings, Star, Thermometer, Timer, Zap } from 'lucide-react';
import React, { useState } from 'react'
import Image from 'next/image';

const Beveromatic3dx3Lane = () => {

    const [productThumb, setProductThumb] = useState(0);

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
            window.open(whatsappUrl, "_blank");
        }
    };

    const imageURL = ['/productImage/Bv03dx-3.webp', '/productImage/Bv03dx-2.webp', '/productImage/Bv03dx-1.webp']

    return (
        <div className="min-h-screen">
            {/* Hero Section */}

            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 mt-24 md:mt-36">
                <div className='max-[769px]:mt-36'>
                    <img className="w-full h-full rounded-2xl" src={'/sliderImage/3dx-3lan-hero.webp'} alt="3DX 3Lan Hero" />
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
                                    <span className="text-dark">BV03DX</span>
                                </div>
                                <h1 className="text-4xl font-bold">Multi Beverage Vending System-3 Lane </h1>
                                <p className="text-black leading-relaxed">Beveromatic BV03DX is designed with a special Illuminated LED door design. Curated for fast paced environments. With its triple dispensing system, this model is ideal for food courts, cafeterias, and large commercial setups.</p>
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
                                    src={imageURL[productThumb]}
                                    alt='Beveromatic 3DX 3 Lane Vending Machine'
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="product-row">
                                <div className="product-gallery flex flex-row gap-3 mt-2 justify-center">
                                    {
                                        imageURL.map((product, index) => (
                                            <Image
                                                onClick={() => setProductThumb(index)}
                                                key={index}
                                                src={product}
                                                width={80}
                                                height={80}
                                                alt='Thumbnail 1'
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
                <div className="max-w-7xl mx-auto px-4 py-10">
                    {/* Key Features */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#3d1808] mb-6 text-center">Key Features</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/Front-Door-LED.png" alt='tow-beverage' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">Front Door LED</span>
                                <p> Illuminating front door LED design</p>
                            </div>
                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/Three-Simultaneous-Dispensing.png" alt='lightweight' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">Three Simultaneous Dispensing Options</span>
                                <p>Reduces queues</p>
                            </div>
                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/Energy-Efficient.png" alt='maintenance' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">Energy-Efficient System</span>
                                <p>Saves power while maintaining performance</p>
                            </div>
                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/Smart-Control-Panel.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">Smart Control Panel</span>
                                <p>Easy customization for beverage strength and quantity</p>
                            </div>
                            <div className="bg-[#fff2eb] shadow-amber-900/30 hover:shadow-xl transition-shadow p-6 rounded-xl text-center">
                                <Image width={70} height={70} src="/icons/hygienic-dispensing.png" alt='hygienic-dispensing' className="mx-auto mb-3 w-[70px] h-[70px]" />
                                <span className="text-[#3d1808] font-bold">Durable & Hygienic Design</span>
                                <p>Ensures long-term use</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="bg-white mb-10 rounded-xl shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border border-gray-300 bg-[#3D1808]/5">
                            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Settings className="text-[#3D1808]" />
                                Technical Specifications
                            </h2>
                        </div>
                        <table className="w-full">
                            <tbody>
                                <TableRow icon={Coffee} label="Options" value='5 Programmable Buttons' highlight />
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
                                <TableRow icon={Settings} label="Interface" value={'Touch Button Interface'} highlight />
                                <TableRow icon={Coffee} label="Cup Count" value={'Available'} />
                                {/* <TableRow icon={Thermometer} label="Temperature Setting" value={'Available'} highlight /> */}
                                <TableRow icon={Droplet} label="Rinse" value={'Hourly Rinse Available'} />
                            </tbody>
                        </table>
                    </div>

                    {/* Electrical Specifications */}
                    <div className="bg-white mb-10 rounded-xl shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border border-gray-300 bg-[#3D1808]/5">
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
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border border-gray-300 bg-[#3D1808]/5">
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
                                    value={`400 mm x 580 mm x 690 mm`}
                                />
                                <TableRow icon={Scale} label="Net Weight" value={'21.00 Kgs.'} highlight />
                                <TableRow icon={Scale} label="Gross Weight" value={'23.00 Kgs.'} />
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beveromatic3dx3Lane
