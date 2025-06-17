'use client';
import React, { useState, useEffect } from 'react';

function VisitorCounter() {
    const [visits, setVisits] = useState(null);


    const fetchData = async () => {
        try {
            
            const response = await fetch('https://visits.hovermedia.in/api/visit/beveromatic');
            //const response = await fetch('https://visits.hovermedia.in/api/visit-count/beveromatic');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setVisits(data.visit.visits);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <div className='relative'>
            <div id="visit-count" className='w-[150px] absolute bottom-2 left-10 bg-[#2c140a] text-[#fff] text-sm p-3 rounded-lg'>{visits !== null ? `Visitors: ${visits}` : 'Loading...'}</div>
        </div>
        </>
    );
}

export default VisitorCounter;