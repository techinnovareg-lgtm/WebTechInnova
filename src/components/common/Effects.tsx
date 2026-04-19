"use client";

import { useEffect, useState } from 'react';

export default function Effects() {
    const [loading, setLoading] = useState(true);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        // Loader timeout
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Scroll Progress Bar
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            
            const percent = (scrollY / (documentHeight - windowHeight)) * 100;
            setScrollPercent(percent || 0);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Loading Screen */}
            <div className={`loader ${loading ? '' : 'hidden'}`} id="loader">
                <div className="loader-circle"></div>
            </div>

            {/* Scroll Progress Bar */}
            <div className="scroll-progress" id="scrollProgress" style={{ width: `${scrollPercent}%` }}></div>

            {/* Animated Background */}
            <div className="bg-animation">
                <div className="floating-orb orb1"></div>
                <div className="floating-orb orb2"></div>
                <div className="floating-orb orb3"></div>
            </div>
        </>
    );
}
