"use client";

import { useEffect, useState } from 'react';

const useReveal = (threshold = 0.1) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref);
                }
            },
            { threshold }
        );

        observer.observe(ref);
        return () => observer.disconnect();
    }, [ref, threshold]);

    return { setRef, isVisible };
};

export default useReveal;
