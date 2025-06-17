'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown,  Facebook, Twitter, Instagram} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        name: '2 Lane Vending Machine',
        linkURL: '',
        subItems: [
            { name: 'BV02P', linkURL: 'beveromatic-2-lane-vending-machine-bv02p' },
            { name: 'BV02DX', linkURL: 'beveromatic-2-lane-vending-machine-bv0dx' },
        ],
    },
    {
        name: '3 Lane Vending Machine',
        linkURL: '',
        subItems: [
            { name: 'BV03P', linkURL: 'beveromatic-3-lane-vending-machine-bv03p' },
            { name: 'BV03DX', linkURL: 'beveromatic-3-lane-vending-machine-bv03dx' }
        ],
    },
    {
        name: '4 Lane Vending Machine',
        linkURL: '',
        subItems: [
            { name: 'BV04P', linkURL: 'beveromatic-4-lane-vending-machine-bv04p' },
            { name: 'BV04DX', linkURL: 'beveromatic-4-lane-vending-machine-bv04dx' }
        ],
    },
];

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSubMenu = (index) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 20);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[white] backdrop-blur-md' : 'bg-[white]'
            }`}>
            {/* Top Bar */}
            <div className="bg-gradient-to-r from-[#3a1b0e] to-[#4b2514] text-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 py-2 flex gap-20 justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
                        <marquee><p className='text-lg'>Our Tea and Coffee <span className='text-[#f26522] font-bold'>Vending Machines</span> are <span className='text-[#f26522] font-bold'>100% </span>Designed, developed, and <span className='text-[#f26522] font-bold'> Manufactured In India </span> – Supporting local industries and meeting global standards.</p></marquee>
                        {/* <span className="flex items-center">
                            <Phone size={16} className="mr-2 text-[#f26522]" />
                            +91 98996 86468
                        </span>
                        <span>|</span>
                        <span className="flex items-center">
                            <MailSearch size={16} className="mr-2 text-[#f26522]" />
                            contact@example.com
                        </span>
                        <span>|</span>
                        <span className='flex items-center'>
                            <Clock5 size={16} className="mr-2 text-[#f26522]" /> Mon - Sat: 9:00 AM - 6:00 PM
                        </span> */}
                    </div>
                    <div className='flex max-[567px]:hidden'>
                        <div className="flex items-center space-x-4">
                            <Link target='_blank' href="https://www.facebook.com/share/15sNsPYZ7T/?mibextid=wwXIfr" className="text-[#f26522] hover:text-white transition-colors">
                                <Facebook size={18} />
                            </Link>
                            <span>|</span>
                            <Link target='_blank' href="https://x.com/beveromatic" className="text-[#f26522] hover:text-white transition-colors">
                                <Twitter size={18} />
                            </Link>
                            <span>|</span>
                            <Link target='_blank' href="https://www.instagram.com/beveromatic/" className="text-[#f26522] hover:text-white transition-colors">
                                <Instagram size={18} />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className={`shadow-lg transition-all duration-300 ${isScrolled ? 'py-3' : 'py-3'
                }`}>
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href={'/'} className="flex-shrink-0">
                            {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                BEVEROMATIC
              </h1> */}
                            <Image src="/logo.webp" alt="Beveromatic Logo" width={190} height={180} />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link href="/" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                Home
                            </Link>
                            <Link href="/about" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                About Us
                            </Link>

                            {/* Products Dropdown */}
                            <div className="relative group">
                                <button className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity flex items-center">
                                    Products
                                    <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                                </button>

                                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full -left-4 pt-4 transition-all duration-300">
                                    <div className="bg-white border-black rounded-xl shadow-xl w-72">
                                        <div className="p-2">
                                            {products.map((product, index) => (
                                                <div key={index} className="relative group/submenu">
                                                    <Link
                                                        href={`/${product.linkURL}`}
                                                        className="block px-4 py-3 rounded-lg text-black font-semibold hover:text-white opacity-80 hover:opacity-100 hover:bg-[#190E0A] transition-all duration-200"
                                                    >
                                                        {product.name}
                                                    </Link>

                                                    {/* Sub Dropdown */}
                                                    {product.subItems && product.subItems.length > 0 && (
                                                        <div className="absolute left-full top-0 ml-1 invisible group-hover/submenu:visible opacity-0 group-hover/submenu:opacity-100 bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 w-60">
                                                            {product.subItems.map((sub, subIndex) => (
                                                                <Link
                                                                    key={subIndex}
                                                                    href={`/${sub.linkURL}`}
                                                                    className="block px-4 py-2 text-black font-medium hover:text-white hover:bg-[#190E0A] transition-all duration-200"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <Link href="/services" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                Services
                            </Link>
                            <Link href="/blogs" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                Blogs
                            </Link>
                            <Link href="/contact" className="text-black font-semibold opacity-80 hover:text-[#f26522] transition-opacity">
                                Contact
                            </Link>
                        </nav>

                        {/* Action Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* <button className="p-2 text-white opacity-80 hover:opacity-100 transition-opacity">
                <Search size={20} />
              </button> */}
                            <Link
                                href="/pdf/beveromatic-leaflet-india.pdf"
                                target="_blank"
                                className="bg-[#f26522] hover:bg-[#3D1808] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                            >
                                Download Brochure
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-[#3D1808] hover:text-purple-400 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed h-[90vh] inset-0 bg-[#3d1808] backdrop-blur-md transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="h-full flex flex-col">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-white hover:text-[#190F0B] transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex-1 px-4 py-6 space-y-4">
                        <Link href="/" className="block text-2xl text-white hover:text-[#f26522] focus:text-[#f26522] transition-opacity">
                            Home
                        </Link>
                        <Link href="/about" className="block text-2xl text-white hover:text-[#f26522] focus:text-[#f26522] transition-opacity">
                            About Us
                        </Link>

                        {/* Mobile Products Dropdown */}
                        <div>
                            <button
                                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                                className="flex items-center justify-between w-full text-2xl text-white hover:text-[#f26522] focus:text-[#f26522] transition-opacity"
                            >
                                Products
                                <ChevronDown size={20} className={`transition-transform text-[#f26522] duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`mt-2 space-y-2 transition-all duration-300 ${isMobileProductsOpen ? 'block' : 'hidden'}`}>
                                {products.map((product, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between pl-4 py-2 text-lg text-white hover:text-[#f26522] cursor-pointer" onClick={() => toggleSubMenu(index)}>
                                            <span>{product.name}</span>
                                            {product.subItems && product.subItems.length > 0 && (
                                                <ChevronDown size={16} className={`transition-transform duration-300 ${openSubMenuIndex === index ? 'rotate-180' : ''}`} />
                                            )}
                                        </div>

                                        {/* Submenu */}
                                        {product.subItems && product.subItems.length > 0 && openSubMenuIndex === index && (
                                            <div className="ml-6 mt-1 space-y-1">
                                                {product.subItems.map((sub, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={`${sub.linkURL}`}
                                                        className="block pl-2 py-1 text-white text-lg hover:text-[#f26522] transition-all">
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>


                        <Link href="/services" className="block text-2xl text-white  hover:text-[#f26522] focus:text-[#f26522] transition-opacity">
                            Services
                        </Link>
                        <Link href="/contact" className="block text-2xl text-white  hover:text-[#f26522] focus:text-[#f26522] transition-opacity">
                            Contact
                        </Link>
                    </nav>

                    <div className="p-4">
                        <Link
                            href="/pdf/broucher.pdf"
                            target="_blank"
                            className="block w-full bg-[#f26522] hover:bg-[#3D1808] text-white text-center px-6 py-3 rounded-sm font-medium transition-all duration-300"
                        >
                            Download Brochure
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default App;