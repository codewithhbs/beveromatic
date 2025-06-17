'use client'

import React, { useEffect, useState } from 'react'
import { ArrowLeft, PenTool as Tool } from 'lucide-react'
import Link from 'next/link'
import ProductDetail from '@/components/ProductDetail/ProductDetail'
const Page = ({ params }) => {
    // const router = useRouter();
    // const resolvedParams = React.use(params);
    // const { slug } = params;
    const { slug } = params;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        const fetchData = async () => {
            const data = [
                {
                    "product": {
                        "name": "Beveromatic 2 Lane Vending Machine",
                        "perfect_for": [
                            "Hospitals",
                            "Small Cafeterias",
                            "Health Clinics",
                            "Small Offices"
                        ],
                        "img": "4.jpg",
                        "description": "Beveromatic 2 is a reliable, two-option vending machine designed for institutions that need hygienic and convenient beverage dispensing. It is widely used in hospitals, clinics, small offices, and eateries for providing instant tea and coffee.",
                        "key_features": {
                            "beverage_selections": "Two Beverage Selections – Ideal for essential drink options",
                            "compact_lightweight": "Compact & Lightweight – Easy installation in limited spaces",
                            "minimal_maintenance": "Minimal Maintenance Required – Ensures continuous operation",
                            "hygienic_dispensing": "Hygienic Dispensing System - Suitable for healthcare environments"
                        },
                        "contact": "Connect with us on WhatsApp",
                        "sku": "BV02P",
                        "category": "Vending Machines",
                        "brand": "Beveromatic",
                        "model": "BV02",
                        "description_short": "Double Option",
                        "technical_specifications": {
                            "drink_option": "2 Options",
                            "dedicated_hot_water": "Optional",
                            "boiler_capacity": {
                                "bubble_top": "1.7 Ltr.",
                                "bubble_floor": "2.3 Ltr."
                            },
                            "boiler_heater": "1750 W",
                            "start_up_time": "Up to 10 Minutes",
                            "water_input": "With Pump/Bubble Top",
                            "powder_canisters": {
                                "number": 2,
                                "capacity": "1 Kg each"
                            },
                            "gear_motor": {
                                "number": 2,
                                "rpm": "100 RPM ± 5%"
                            },
                            "mixing_motor": {
                                "number": 2,
                                "rpm": "15000 RPM ± 10%"
                            },
                            "dispensing_area_height": "110 mm",
                            "dispensing_rate": "5 Cups/min",
                            "display": "LCD display module with yellow backlight (2 x 16 line Display)",
                            "interface": "Keypad or button panel",
                            "cup_count_feature": "Available",
                            "beverage_temperature_setting": "Available",
                            "rinse": "Hourly Rinse Available"
                        },
                        "electrical_specifications": {
                            "power_supply": "230V AC / 50 Hz / 1750 W"
                        },
                        "unit_specifications": {
                            "unpacked_dimensions": {
                                "width": "255 mm",
                                "depth": "470 mm",
                                "height": "595 mm"
                            },
                            "packed_dimensions": {
                                "width": "340 mm",
                                "depth": "530 mm",
                                "height": "660 mm"
                            },
                            "net_weight": "14.5 Kg",
                            "gross_weight": "16.5 Kg"
                        },
                        "reviews": []
                    }
                },
                {
                    "product": {
                        "name": "Beveromatic 3 Lane Vending Machine",
                        "perfect_for": [
                            "Small Offices",
                            "Kiosks",
                            "Startups"
                        ],
                        "img": "1.jpg",
                        "description": "Beveromatic 3L is a compact and high-performance vending machine that caters to small workplaces and kiosks. It offers three beverage options, allowing businesses to serve tea, coffee, and hot chocolate effortlessly.",
                        "key_features": {
                            "beverage_selections": "Three Beverage Selections – Serve different flavors instantly",
                            "space_saving_design": "Space-Saving Design – Ideal for small spaces",
                            "user_friendly_interface": "User-Friendly Interface – Quick and easy operation",
                            "low_maintenance": "Low Maintenance – Hassle-free servicing"
                        },
                        "contact": "Connect with us on WhatsApp",
                        "sku": "BV03P",
                        "category": "Vending Machines",
                        "brand": "Beveromatic",
                        "model": "BV03",
                        "description_short": "Triple Option",
                        "technical_specifications": {
                            "drink_option": "3 Options",
                            "dedicated_hot_water": "Available",
                            "boiler_capacity": "2.3 Liter",
                            "boiler_heater": "1750 W",
                            "start_up_time": "Up to 10 Minutes",
                            "water_input": "With Pump",
                            "powder_canisters": {
                                "number": 3,
                                "capacity": "1 Kg each"
                            },
                            "gear_motor": {
                                "number": 3,
                                "rpm": "100 RPM ± 5%"
                            },
                            "mixing_motor": {
                                "number": 3,
                                "rpm": "15000 RPM ± 10%"
                            },
                            "dispensing_area_height": "110 mm",
                            "dispensing_rate": "5 Cups/min",
                            "display": "LCD display module with yellow backlight (2 x 16 line Display)",
                            "interface": "Keypad or button panel",
                            "cup_count_feature": "Available",
                            "beverage_temperature_setting": "Available",
                            "rinse": "Hourly Rinse Available"
                        },
                        "electrical_specifications": {
                            "power_supply": "230V AC / 50 Hz / 1750 W"
                        },
                        "unit_specifications": {
                            "unpacked_dimensions": {
                                "width": "255 mm",
                                "depth": "470 mm",
                                "height": "595 mm"
                            },
                            "packed_dimensions": {
                                "width": "340 mm",
                                "depth": "530 mm",
                                "height": "660 mm"
                            },
                            "net_weight": "15 Kg",
                            "gross_weight": "17 Kg"
                        },
                        "reviews": []
                    }
                },
                {
                    "product": {
                        "name": "Beveromatic 3DX 3 Lane Vending Machine",
                        "perfect_for": [
                            "Malls",
                            "Restaurants",
                            "High-Demand Zones",
                            "Exports"
                        ],
                        "img": "3.jpg",
                        "description": "Beveromatic 3DX is designed for fast-paced environments that require quick service and high efficiency. With its triple dispensing system, this model is ideal for food courts, cafeterias, and large commercial setups.",
                        "key_features": {
                            "front_door_led": "Front Door LED – Illuminating front door LED design",
                            "three_simultaneous_dispensing": "Three Simultaneous Dispensing Options – Reduces queues",
                            "energy_efficient_system": "Energy-Efficient System – Saves power while maintaining performance",
                            "smart_control_panel": "Smart Control Panel – Easy customization for beverage strength and quantity",
                            "durable_hygienic_design": "Durable & Hygienic Design – Ensures long-term use"
                        },
                        "contact": "Connect with us on WhatsApp",
                        "sku": "BV03DX",
                        "category": "Vending Machines",
                        "brand": "Beveromatic",
                        "model": "BV03DX",
                        "description_short": "Triple Option",
                        "technical_specifications": {
                            "drink_option": "3 Options",
                            "dedicated_hot_water": "Available",
                            "boiler_capacity": "2.3 Liter",
                            "boiler_heater": "1750 W",
                            "start_up_time": "Up to 10 Minutes",
                            "water_input": "With Pump",
                            "powder_canisters": {
                                "number": 3,
                                "capacity": "1 Kg each"
                            },
                            "gear_motor": {
                                "number": 3,
                                "rpm": "100 RPM ± 5%"
                            },
                            "mixing_motor": {
                                "number": 3,
                                "rpm": "15000 RPM ± 10%"
                            },
                            "dispensing_area_height": "110 mm",
                            "dispensing_rate": "5 Cups/min",
                            "display": "LCD display module with yellow backlight (2 x 16 line Display)",
                            "interface": "Keypad or button panel",
                            "cup_count_feature": "Available",
                            "beverage_temperature_setting": "Available",
                            "rinse": "Hourly Rinse Available"
                        },
                        "electrical_specifications": {
                            "power_supply": "230V AC / 50 Hz / 1750 W"
                        },
                        "unit_specifications": {
                            "unpacked_dimensions": {
                                "width": "255 mm",
                                "depth": "470 mm",
                                "height": "595 mm"
                            },
                            "packed_dimensions": {
                                "width": "340 mm",
                                "depth": "530 mm",
                                "height": "660 mm"
                            },
                            "net_weight": "19 Kg",
                            "gross_weight": "21 Kg"
                        },
                        "reviews": []
                    }
                },
                {
                    "product": {
                        "name": "Beveromatic 4 Lane Vending Machine",
                        "perfect_for": [
                            "Corporates",
                            "Retail Stores",
                            "Co-Working Spaces"
                        ],
                        "img": "2.jpg",
                        "description": "Beveromatic 4 is a multi-beverage vending machine that delivers a smooth and consistent taste experience. Designed for high footfall areas, it serves four different hot beverage options at the touch of a button.",
                        "key_features": {
                            "four_beverage_selections": "Four Beverage Selections – Perfect for diverse preferences",
                            "efficient_heating_system": "Efficient Heating System – Maintains optimal temperature",
                            "stylish_sturdy_build": "Stylish & Sturdy Build – Enhances workplace aesthetics",
                            "fast_dispensing_technology": "Fast Dispensing Technology – Reduces waiting time"
                        },
                        "contact": "Connect with us on WhatsApp",
                        "sku": "BV04P",
                        "category": "Vending Machines",
                        "brand": "Beveromatic",
                        "model": "BV04",
                        "description_short": "Four Option",
                        "technical_specifications": {
                            "drink_option": "4 Options",
                            "dedicated_hot_water": "Available",
                            "boiler_capacity": "3.5 Liter",
                            "boiler_heater": "1750 W",
                            "start_up_time": "Up to 10 Minutes",
                            "water_input": "With Pump",
                            "powder_canisters": {
                                "number": 4,
                                "capacity": "1 Kg each"
                            },
                            "gear_motor": {
                                "number": 4,
                                "rpm": "100 RPM ± 5%"
                            },
                            "mixing_motor": {
                                "number": 4,
                                "rpm": "15000 RPM ± 10%"
                            },
                            "dispensing_area_height": "110 mm",
                            "dispensing_rate": "5 Cups/min",
                            "display": "LCD display module with yellow backlight (2 x 16 line Display)",
                            "interface": "Keypad or button panel",
                            "cup_count_feature": "Available",
                            "beverage_temperature_setting": "Available",
                            "rinse": "Hourly Rinse Available"
                        },
                        "electrical_specifications": {
                            "power_supply": "230V AC / 50 Hz / 1750 W"
                        },
                        "unit_specifications": {
                            "unpacked_dimensions": {
                                "width": "330 mm",
                                "depth": "510 mm",
                                "height": "630 mm"
                            },
                            "packed_dimensions": {
                                "width": "440 mm",
                                "depth": "610 mm",
                                "height": "740 mm"
                            },
                            "net_weight": "24.5 Kg",
                            "gross_weight": "26.5 Kg"
                        },
                        "reviews": []
                    }
                }
            ]
            const foundProduct = data.find(
                item => item.product.name.toLowerCase().replace(/\s+/g, '-') === slug
            )?.product;
            setProduct(foundProduct);
        }
        fetchData();
    }, [slug])
    // console.log("params", params.slug)

    const handleWhatsAppInquiry = (productName) => {
        if (typeof window !== "undefined") {
          const message = `Hi, I'm interested in the ${productName}. Can you provide more information?`;
          const whatsappUrl = `https://wa.me/+919873903766?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, "_blank");
        }
      };

    if (!product) {
        return (
            <div className="min-h-screen bg-[#190F0D] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Product not found</h1>
                    <Link href="/" className="text-[#AD4E26] inline-flex items-center gap-2">
                        <ArrowLeft size={20} />
                        Back to Products
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className=' mt-16 md:mt-24'>
            <ProductDetail product={product} handleWhatsAppInquiry={handleWhatsAppInquiry} />
        </div>
    )
}

export default Page