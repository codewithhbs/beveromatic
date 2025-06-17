'use client'
import React, { useState } from 'react';
import './whatsapp.css';
import { Headset } from 'lucide-react';

function Whatsapp() {
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = "9899686468";

    return (
        <div className="whatsapp-container">
            <a
                href={`tel:${phoneNumber}`}
                className="whatsapp-wrapper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a Free Quote"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="whatsapp-button">
                    <div className="button-content">
                        <Headset />
                        <div className="ripple"></div>
                    </div>
                </div>
                <span className={`whatsapp-tooltip ${isHovered ? 'show' : ''}`}>
                    Get a Free Quote
                </span>
            </a>
        </div>
    );
}

export default Whatsapp;